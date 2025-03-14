import Image from "next/image";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export function VideoCard({
  title,
  description,
  imageUrl,
  href,
}: VideoCardProps) {
  return (
    <a
      href={href}
      className="relative group block h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
    >
      <Image
        alt={title}
        src={imageUrl}
        width={600}
        height={500}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
          {/* Inner button */}
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
        <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
        <p className="text-white/80 text-base">{description}</p>
      </div>
    </a>
  );
}
