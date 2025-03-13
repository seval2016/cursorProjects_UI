"use client";

import { PricingCard } from "@/components/ui/pricing-card";
import { SparklesCore } from "@/components/ui/sparkles";

export function PricingSection() {
  const plans = [
    {
      heading: "Basic",
      description: "Temel eğitim videoları ve forum desteği ile başlangıç paketi",
      price: 199,
      buttonText: "Şimdi Başla",
      list: [
        "Temel eğitim videoları",
        "Forum desteği",
        "Aylık 2 saat canlı destek",
        "Sertifika"
      ],
    },
    {
      heading: "Pro",
      description: "İleri seviye eğitimler ve sınırsız destek ile profesyonel paket",
      price: 399,
      buttonText: "Pro'ya Geç",
      discount: 20,
      list: [
        "Tüm temel özellikler",
        "İleri seviye eğitimler",
        "Sınırsız canlı destek",
        "Proje değerlendirme",
        "Özel Discord kanalı"
      ],
      listHeading: "Pro özellikleri:",
    },
    {
      heading: "Enterprise",
      description: "Kurumsal çözümler ve özel eğitmen desteği ile kurumsal paket",
      price: 999,
      buttonText: "İletişime Geç",
      list: [
        "Tüm Pro özellikleri",
        "Özel eğitmen desteği",
        "Kurumsal çözümler",
        "Özel içerik geliştirme",
        "Öncelikli destek hattı"
      ],
      listHeading: "Enterprise özellikleri:",
    }
  ];

  return (
    <section className="relative py-12">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlespricing"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={90}
          className="w-full h-full"
          particleColor="#10B981"
          speed={0.3}
        />
      </div>
      <div className="container mx-auto px-2 max-w-7xl relative z-10">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Eğitim Paketleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 justify-items-center">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              variant={index === 1 ? "outline" : "default"}
              hover={index === 1 ? "default" : "none"}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 