"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)
    
    const sectionId = item.url.replace('#', '')
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Update active section based on scroll position with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        const sections = items.map(item => document.getElementById(item.url.replace('#', '')))
        // Viewport'un ortasını referans al
        const viewportMiddle = window.scrollY + (window.innerHeight / 2)

        sections.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect()
            const sectionMiddle = section.offsetTop + (rect.height / 2)

            if (Math.abs(viewportMiddle - sectionMiddle) < window.innerHeight / 2) {
              setActiveTab(items[index].name)
            }
          }
        })
      }, 250) // Debounce süresini 250ms'ye çıkardık
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 w-full sm:max-w-3xl",
        "sm:mb-6 sm:pt-6 sm:px-4",
        className,
      )}
    >
      <nav className={cn(
        "relative flex items-center justify-between py-3 px-4 sm:px-2 shadow-xl",
        "sm:bg-background/10 sm:backdrop-blur-xl",
        "backdrop-blur-xl",
        "sm:rounded-full sm:border sm:border-border/50",
        "w-full"
      )}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative px-4 sm:px-6 py-2 rounded-full transition-all duration-700 ease-out-expo",
                "text-sm font-medium flex items-center gap-2 group min-w-[80px] justify-center",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="relative z-10 transition-all duration-700 md:hidden">
                <Icon size={18} strokeWidth={2.5} className={cn(
                  "transition-transform duration-700",
                  isActive ? "scale-110" : "group-hover:scale-105"
                )} />
              </span>
              <span className="relative z-10 transition-all duration-700 hidden md:inline flex-nowrap whitespace-nowrap">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-muted/50 rounded-full border border-border/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    mass: 1,
                    duration: 0.7
                  }}
                />
              )}
            </Link>
          )
        })}
        <motion.div
          className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
          layoutId="active-bar"
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 0.7
          }}
        />
      </nav>
    </div>
  )
} 