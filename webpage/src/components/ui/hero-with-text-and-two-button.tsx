"use client";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero1() {
  return (
    <div className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#10B981"
          speed={0.3}
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Yazılım Eğitiminde<br />Yeni Nesil Platform
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto mb-8">
          Modern web teknolojileri ile profesyonel yazılım geliştirme becerilerinizi geliştirin.
          Gerçek projeler üzerinde çalışarak öğrenin.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
            Hemen Başla
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Daha Fazla Bilgi
          </Button>
        </div>
      </div>
    </div>
  );
} 