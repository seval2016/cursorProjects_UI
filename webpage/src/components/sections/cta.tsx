"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function CallToActionSection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlescta"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#10B981"
          speed={0.3}
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Öğrenmeye Hazır mısınız?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Binlerce geliştirici gibi siz de yeteneklerinizi geliştirin ve kariyerinizi ileriye taşıyın.
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
          Hemen Başlayın
        </button>
      </div>
    </section>
  );
} 