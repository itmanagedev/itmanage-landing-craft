import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const serviceOptions = [
  "Desenvolvimento de Aplicativos",
  "Agentes de Inteligência Artificial",
  "Automação de Processos Empresariais",
  "Suporte de TI",
  "Inovação Tecnológica",
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder submit
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", servico: "", mensagem: "" });
  };

  const whatsappLink = "https://wa.me/558521806494?text=Olá! Gostaria de saber mais sobre os serviços da ITManage.";

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vamos <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Entre em contato e descubra como a ITManage pode transformar sua empresa.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary-gradient px-6 py-3 rounded-lg text-sm font-semibold"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto"
        >
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Nome"
              className="w-full bg-card border border-muted rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
              className="w-full bg-card border border-muted rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Telefone (opcional)"
              className="w-full bg-card border border-muted rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <select
              name="servico"
              value={form.servico}
              onChange={handleChange}
              required
              className="w-full bg-card border border-muted rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="" disabled>
                Serviço de interesse
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Mensagem"
              className="w-full bg-card border border-muted rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="btn-primary-gradient px-8 py-3 rounded-lg text-sm w-full sm:w-auto"
            >
              Enviar mensagem
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-foreground">E-mail</p>
                <p className="text-sm text-muted-foreground">contato@itmanage.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-foreground">Telefone</p>
                <p className="text-sm text-muted-foreground">+55 (85) 2180-6494</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-foreground">Endereço</p>
                <p className="text-sm text-muted-foreground">
                  Avenida Oliveira Paiva, 1206<br />
                  Cidade dos Funcionários<br />
                  Fortaleza - CE, CEP 60822-130
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
