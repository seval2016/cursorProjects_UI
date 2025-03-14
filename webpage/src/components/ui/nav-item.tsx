"use client"

import { cn } from "@/lib/utils"
import { styles, variants } from "@/lib/styles"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface NavItemProps {
  name: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function NavItem({ 
  name, 
  url, 
  icon: Icon,
  isActive,
  onClick 
}: NavItemProps) {
  return (
    <a
      href={url}
      onClick={onClick}
      className={cn(
        styles.navItem,
        "px-7 py-2.5",
        variants.navItem.default,
        isActive && variants.navItem.active
      )}
    >
      <span className="hidden md:inline">{name}</span>
      <span className="md:hidden">
        <Icon size={18} strokeWidth={2.5} />
      </span>
      {isActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-t-full">
            <div className="absolute w-10 h-4 bg-primary/20 rounded-full blur-sm -top-1 -left-1" />
            <div className="absolute w-6 h-4 bg-primary/20 rounded-full blur-sm -top-1" />
            <div className="absolute w-3 h-3 bg-primary/20 rounded-full blur-xs top-0 left-2" />
          </div>
        </motion.div>
      )}
    </a>
  )
} 