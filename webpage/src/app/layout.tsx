import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebPage - Modern Web Development Academy',
  description: 'Learn web development with our comprehensive tutorials and community resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <nav className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <a className="mr-6 flex items-center space-x-2 text-foreground" href="/">
              <span className="font-bold">WebPage</span>
            </a>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#tutorials">Tutorials</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
                <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#community">Community</a>
              </nav>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer className="border-t border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container py-10">
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
                  <a href="#" className="text-muted-foreground hover:text-foreground"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground"><i className="bi bi-github"></i></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground"><i className="bi bi-discord"></i></a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-border/40 pt-8 text-center">
              <p className="text-sm text-muted-foreground">© 2024 WebPage Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" />
      </body>
    </html>
  )
} 