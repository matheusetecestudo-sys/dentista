import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <AnimatePresence>
                {showTooltip && (
                    <motion.a
                        href="https://wa.me/5511992876219?text=Olá! Gostaria de agendar uma avaliação."
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-white text-[#0A1128] font-black text-[10px] sm:text-xs px-4.5 py-3 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-150 flex items-center gap-2 whitespace-nowrap hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 uppercase tracking-wider"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                        Fale Conosco Online
                    </motion.a>
                )}
            </AnimatePresence>

            <a
                href="https://wa.me/5511992876219?text=Olá! Gostaria de agendar uma avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4.5 sm:p-5 rounded-full shadow-[0_10px_45px_rgba(34,197,94,0.35)] hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
                aria-label="Agendar via WhatsApp"
            >
                <div className="relative">
                    <FaWhatsapp size={28} className="sm:w-[32px] sm:h-[32px] group-hover:rotate-6 transition-transform" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                </div>
            </a>
        </div>
    );
};
