"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";
import { Play, Clock, Users } from "lucide-react";
import Link from "next/link";
import videoData from "@/data/videos.json";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function PopularVideos() {
  const data = videoData.categories.map(category => ({
    title: category.title,
    description: category.description,
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.videos.map((video) => (
            <Link
              key={video.id}
              href={video.url}
              className="group relative block overflow-hidden rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden rounded-t-xl">
                <Image
                  src={video.image}
                  alt={video.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={300}
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 to-black/20"
                >
                  <div className="rounded-full bg-primary/90 p-4 backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {video.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>20 dk</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>1.2k izlenme</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
} 