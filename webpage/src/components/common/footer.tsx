"use client"

import { Twitter, Github, MessageCircle } from 'lucide-react'
import { SparklesCore } from '@/components/ui/sparkles'

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfooter"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#10B981"
          speed={0.3}
        />
      </div>
      <div className="container py-10 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h5 className="mb-4 font-semibold text-foreground">About WebPage</h5>
            <p className="text-sm text-muted-foreground">Learn to master modern web development with our comprehensive tutorials and community resources.</p>
          </div>
          <div>
            <h5 className="mb-4 font-semibold text-foreground">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a className="text-muted-foreground hover:text-foreground" href="#">Home</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="#tutorials">Tutorials</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="#pricing">Pricing</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="#community">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-semibold text-foreground">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 WebPage Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 