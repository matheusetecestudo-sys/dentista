import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre', href: '#clinica' },
        { label: 'Serviços', href: '#tratamentos' },
        { label: 'Resultados', href: '#resultados' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#02050A]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Estilo DUNO - Cores do Site (Teal) */}
                <a href="#" className="font-serif text-3xl font-black tracking-widest text-[#14b8a6] hover:opacity-90 transition-opacity">
                    DUNO
                </a>

                {/* Menu Centralizado de Desktop */}
                <div className="hidden xl:flex items-center space-x-8">
                    <nav className="flex space-x-6">
                        {menuItems.map((item) => (
                            <a 
                                key={item.label} 
                                href={item.href} 
                                className="text-xs font-bold text-white hover:text-[#14b8a6] uppercase tracking-widest relative group transition-colors"
                            >
                                {item.label}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#14b8a6] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6 border-l border-white/10 pl-6">
                        {/* Telefone com Ícone Teal */}
                        <a href="tel:11992876219" className="flex items-center gap-2 font-bold text-white/90 hover:text-white transition-colors">
                            <Phone size={14} className="text-[#14b8a6]" />
                            <span className="text-xs tracking-widest font-bold">(11) 99287-6219</span>
                        </a>
                        
                        {/* Botão de Agendamento Teal Cápsula */}
                        <a
                            href="https://wa.me/5511992876219"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#14b8a6] text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_15px_rgba(20,184,166,0.3)] hover:bg-[#0f766e] hover:scale-105 transition-all duration-300 text-xs flex items-center gap-2 group uppercase tracking-widest"
                        >
                            Agendar
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <button className="xl:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="xl:hidden absolute top-full left-0 w-full bg-[#02050A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-8 flex flex-col items-center gap-6"
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white/80 hover:text-[#14b8a6] hover:scale-105 font-bold text-sm uppercase tracking-widest transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#14b8a6] text-white px-8 py-4 rounded-full font-bold shadow-lg w-[80%] text-center flex items-center justify-center gap-2 uppercase tracking-widest mt-4 hover:bg-[#0f766e]"
                        >
                            Agendar
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
