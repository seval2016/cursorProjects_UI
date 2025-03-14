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
      <div className="flex items-center gap-4 py-1.5 px-2 rounded-full shadow-lg bg-background/80 border border-border/50 backdrop-blur-xl fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <a
          href="#hero"
          className="relative cursor-pointer text-sm font-semibold rounded-full transition-colors px-7 py-2.5 text-foreground/80 hover:text-primary"
        >
          <span className="hidden md:inline">Ana Sayfa</span>
          <span className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </span>
        </a>
        <a
          href="#popular-videos"
          className="relative cursor-pointer text-sm font-semibold rounded-full transition-colors px-7 py-2.5 text-foreground/80 hover:text-primary"
        >
          <span className="hidden md:inline">Popüler Videolar</span>
          <span className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-video"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
              <rect x="2" y="6" width="14" height="12" rx="2"></rect>
            </svg>
          </span>
        </a>
        <a
          href="#pricing"
          className="relative cursor-pointer text-sm font-semibold rounded-full transition-colors px-7 py-2.5 hover:text-primary bg-muted text-primary"
        >
          <span className="hidden md:inline">Fiyatlandırma</span>
          <span className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          </span>
          <div
            className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-t-full">
              <div className="absolute w-10 h-4 bg-primary/20 rounded-full blur-sm -top-1 -left-1"></div>
              <div className="absolute w-6 h-4 bg-primary/20 rounded-full blur-sm -top-1"></div>
              <div className="absolute w-3 h-3 bg-primary/20 rounded-full blur-xs top-0 left-2"></div>
            </div>
          </div>
        </a>
        <a
          href="#contact"
          className="relative cursor-pointer text-sm font-semibold rounded-full transition-colors px-7 py-2.5 text-foreground/80 hover:text-primary"
        >
          <span className="hidden md:inline">İletişim</span>
          <span className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </span>
        </a>
      </div>
    </header>
  )
} 