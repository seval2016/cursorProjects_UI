"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  description?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-base md:text-2xl mb-2 text-foreground max-w-4xl font-semibold">
          Popüler Videolar
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-sm">
          En çok izlenen ve beğenilen eğitim videolarımız
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-32 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-card flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-muted border border-border p-2" />
              </div>
              <div className="hidden md:block md:pl-16">
                <h3 className="text-lg md:text-3xl font-bold text-muted-foreground">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm mt-2 max-w-sm">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <div className="md:hidden mb-6">
                <h3 className="text-xl font-bold text-muted-foreground">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm mt-2">
                    {item.description}
                  </p>
                )}
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}; 