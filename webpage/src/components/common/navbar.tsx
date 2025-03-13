"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { navItems } from "@/config/nav"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NavBar items={navItems} className="sm:mb-6" />
    </header>
  )
} 