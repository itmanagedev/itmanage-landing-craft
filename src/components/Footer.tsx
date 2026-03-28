import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-muted py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="text-xl font-display font-bold gradient-text">iTmanage</span>
            <p className="text-sm text-muted-foreground mt-2">Tecnologia que transforma.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground mb-1">Links rápidos</p>
            {["Início", "Serviços", "Sobre", "Por que nós", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l === "Início" ? "inicio" : l === "Serviços" ? "servicos" : l === "Sobre" ? "sobre" : l === "Por que nós" ? "porquenos" : "contato"}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Redes sociais</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 ITManage. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
