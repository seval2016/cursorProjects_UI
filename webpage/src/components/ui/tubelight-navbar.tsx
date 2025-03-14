"use client"

import React, { useEffect, useState } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"
import { NavItem } from "./nav-item"

interface NavItem {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 96
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)

    const sectionId = item.url.replace("#", "")
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    setTimeout(() => {
      scrollToSection(sectionId)
    }, 100)
  }

  return (
    <div
      className={cn(
        "fixed sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className={cn("flex items-center gap-4 py-1.5 px-2 rounded-full shadow-lg", styles.glassEffect)}>
        {items.map((item) => (
          <NavItem
            key={item.name}
            {...item}
            isActive={activeTab === item.name}
            onClick={(e) => handleClick(e, item)}
          />
        ))}
      </div>
    </div>
  )
} 