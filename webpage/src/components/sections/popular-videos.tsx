import { VideoCard } from "@/components/ui/video-card"

const videos = [
  {
    title: "Node.js",
    description: "Güçlü backend servisleri oluşturun",
    imageUrl: "/images/courses/nodejs.svg",
    href: "#"
  },
  {
    title: "React.js",
    description: "Modern web uygulamaları geliştirin",
    imageUrl: "/images/courses/react.svg",
    href: "#"
  },
  {
    title: "Next.js",
    description: "Full-stack React framework'ü ile geliştirme",
    imageUrl: "/images/courses/nextjs.svg",
    href: "#"
  },
  {
    title: "TypeScript",
    description: "Tip güvenli JavaScript geliştirme",
    imageUrl: "/images/courses/typescript.svg",
    href: "#"
  }
]

export function PopularVideos() {
  return (
    <section id="popular-videos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popüler Videolar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              {...video}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 