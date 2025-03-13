"use client";

import { PopularVideos } from "@/components/ui/popular-videos";
import { SparklesCore } from "@/components/ui/sparkles";

export function FeaturedVideosSection() {
  return (
    <section id="popular-videos" className="relative py-16">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfeatured"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#10B981"
          speed={0.3}
        />
      </div>
      <div className="relative z-10">
        <PopularVideos />
      </div>
    </section>
  );
} 