import { Hero1 } from "@/components/ui/hero-with-text-and-two-button"
import { FeaturedVideosSection } from "@/components/sections/featured-videos"
import { PricingSection } from "@/components/sections/pricing"
import { CallToActionSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero1 />
      <FeaturedVideosSection />
      <PricingSection />
      <CallToActionSection />
    </div>
  )
} 