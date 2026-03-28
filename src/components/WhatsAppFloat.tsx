import { MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/558521806494?text=Olá! Gostaria de saber mais sobre os serviços da ITManage.";

const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
