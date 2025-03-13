"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";
import { Play } from "lucide-react";
import Link from "next/link";
import videoData from "@/data/videos.json";

export function PopularVideos() {
  const data = videoData.categories.map(category => ({
    title: category.title,
    description: category.description,
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.videos.map((video) => (
            <Link
              key={video.id}
              href={video.url}
              className="relative group block h-48 rounded-lg overflow-hidden bg-black/40"
            >
              <Image
                src={video.image}
                alt={video.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40">
                <h4 className="text-white text-sm font-semibold">{video.title}</h4>
                <p className="text-white/80 text-xs mt-1">{video.description}</p>
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