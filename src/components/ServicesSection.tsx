import { motion } from "framer-motion";
import { Smartphone, Brain, Cog, Headset, Rocket, Server, Cloud } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description:
      "Criamos aplicativos mobile e web sob medida, com foco em performance, usabilidade e escalabilidade para o seu negócio.",
  },
  {
    icon: Brain,
    title: "Agentes de Inteligência Artificial",
    description:
      "Desenvolvemos agentes de IA personalizados que automatizam atendimentos, tomam decisões e aprendem com seus dados.",
  },
  {
    icon: Cog,
    title: "Automação de Processos Empresariais",
    description:
      "Eliminamos tarefas repetitivas e otimizamos fluxos de trabalho com automações inteligentes que aumentam a produtividade.",
  },
  {
    icon: Headset,
    title: "Suporte de TI",
    description:
      "Suporte técnico especializado e proativo para manter sua infraestrutura de TI funcionando com segurança e estabilidade.",
  },
  {
    icon: Rocket,
    title: "Inovação Tecnológica",
    description:
      "Consultoria e implementação de tecnologias emergentes para posicionar sua empresa na vanguarda do mercado.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow rounded-xl p-6 md:p-8 border bg-card border-muted"
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-muted">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-lg font-display font-semibold mb-3 text-foreground">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas de tecnologia para impulsionar o crescimento do
            seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
