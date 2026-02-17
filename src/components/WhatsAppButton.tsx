
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 flex items-center gap-2 animate-bounce-slow"
            aria-label="Agendar via WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="hidden md:inline font-bold">Agende Agora</span>
        </a>
    );
};
