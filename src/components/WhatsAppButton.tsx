import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4.5 sm:p-5 rounded-full shadow-[0_10px_45px_rgba(34,197,94,0.35)] hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center group"
            aria-label="Agendar via WhatsApp"
        >
            <div className="relative">
                <FaWhatsapp size={32} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
            </div>
        </a>
    );
};
