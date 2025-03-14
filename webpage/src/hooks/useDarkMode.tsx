"use client";

import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface DarkModeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Sistem tercihini kontrol et
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    // Kayıtlı tercihi kontrol et
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    setTheme(savedTheme || systemPreference);
  }, []);

  useEffect(() => {
    // Dark mode class'ını yönet
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Tercihi kaydet
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
} 