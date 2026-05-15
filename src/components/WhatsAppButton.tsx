import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all duration-300 z-50 flex items-center gap-2 group animate-pulse hover:animate-none"
            aria-label="Agendar via WhatsApp"
        >
            <div className="relative">
                <FaWhatsapp size={28} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
            </div>
            <span className="hidden md:inline font-bold pr-2">Falar Especialista</span>
        </a>
    );
};
