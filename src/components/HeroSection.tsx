import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-background mesh-gradient animate-mesh-move" style={{ backgroundSize: "200% 200%" }} />

      {/* Floating nodes decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: i % 2 === 0 ? "#00E5FF" : "#6B4FBB",
              opacity: 0.3,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="15%" y1="30%" x2="45%" y2="55%" stroke="#00E5FF" strokeWidth="1" />
          <line x1="45%" y1="55%" x2="75%" y2="35%" stroke="#6B4FBB" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="60%" y2="45%" stroke="#4A90D9" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Tecnologia que{" "}
          <span className="gradient-text">transforma</span> o seu negócio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Da automação à inteligência artificial — a ITManage entrega soluções
          completas de TI para empresas que querem crescer com eficiência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#servicos" className="btn-outline-glow px-8 py-3 rounded-lg text-base">
            Conheça nossos serviços
          </a>
          <a href="#contato" className="btn-primary-gradient px-8 py-3 rounded-lg text-base">
            Solicitar consultoria
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
