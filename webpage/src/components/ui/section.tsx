"use client"

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"
import { HTMLAttributes } from "react"
import { SparklesCore } from "./sparkles"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  hasSparkles?: boolean
}

export function Section({ 
  id, 
  children,
  className,
  hasSparkles = false,
  ...props 
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(styles.section, className)}
      {...props}
    >
      {hasSparkles && (
        <div className="absolute inset-0">
          <SparklesCore
            id={`tsparticles${id}`}
            background="transparent"
            minSize={0.3}
            maxSize={0.8}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#10B981"
            speed={0.3}
          />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
} 