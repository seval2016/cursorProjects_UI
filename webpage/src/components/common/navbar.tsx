"use client"

import { SparklesCore } from "@/components/ui/sparkles"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, Video, CreditCard, Mail } from "lucide-react"

export function Navbar() {
  const navItems = [
    { name: "Ana Sayfa", url: "#hero", icon: Home },
    { name: "Popüler Videolar", url: "#popular-videos", icon: Video },
    { name: "Fiyatlandırma", url: "#pricing", icon: CreditCard },
    { name: "İletişim", url: "#contact", icon: Mail },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesnavbar"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#10B981"
          speed={0.3}
        />
      </div>
      <NavBar items={navItems} className="sm:pt-4" />
    </header>
  )
} 