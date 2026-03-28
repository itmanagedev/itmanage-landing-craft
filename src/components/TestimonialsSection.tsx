import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechSol Brasil",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
  },
  {
    name: "Ana Paula Costa",
    role: "Diretora de Operações, LogiMax",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
  },
  {
    name: "Roberto Silva",
    role: "CTO, FinanceApp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
  },
  {
    name: "Fernanda Lima",
    role: "Gerente de TI, Grupo Vértice",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
  },
  {
    name: "Lucas Oliveira",
    role: "Fundador, StartupFlow",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    name: "Mariana Santos",
    role: "COO, RetailPro",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop",
  },
];

const VideoCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative rounded-xl overflow-hidden border border-border bg-card card-glow">
        <div className="relative aspect-video cursor-pointer" onClick={handlePlay}>
          <video
            ref={videoRef}
            src={testimonial.videoUrl}
            poster={testimonial.thumbnail}
            className="w-full h-full object-cover"
            controls={false}
            playsInline
            onPlay={(e) => {
              const el = e.currentTarget;
              el.controls = true;
            }}
            onPause={(e) => {
              const el = e.currentTarget;
              el.controls = false;
            }}
          />
          <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-100 group-hover:bg-background/20 transition-all duration-300 pointer-events-none group-[:has(video[controls])]:opacity-0">
            <div className="w-14 h-14 rounded-full btn-primary-gradient flex items-center justify-center shadow-lg">
              <Play size={24} className="text-background ml-1" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja os depoimentos de quem já transformou seus negócios com a ITManage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <VideoCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
