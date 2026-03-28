import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Settings, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Equipe especializada",
    description: "Profissionais certificados e com ampla experiência no mercado.",
  },
  {
    icon: Settings,
    title: "Soluções personalizadas",
    description: "Cada projeto é único e desenvolvido de acordo com as suas necessidades.",
  },
  {
    icon: Zap,
    title: "Tecnologia de ponta",
    description: "Usamos as ferramentas e metodologias mais modernas do mercado.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte contínuo",
    description: "Acompanhamos nossos clientes antes, durante e depois de cada entrega.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="porquenos" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Por que escolher a{" "}
            <span className="gradient-text">ITManage</span>?
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-muted">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-base font-display font-semibold mb-2 text-foreground">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
