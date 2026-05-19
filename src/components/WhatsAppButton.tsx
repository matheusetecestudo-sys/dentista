import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511992876219?text=Olá! Gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center border-2 border-white group animate-bounce-slow"
            aria-label="Fale Conosco no WhatsApp"
        >
            <FaWhatsapp size={32} className="group-hover:rotate-6 transition-transform duration-300" />
        </a>
    );
};
