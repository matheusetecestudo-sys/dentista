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

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A1128]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg leading-none">D</span>
                    </div>
                    DUNO<span className="text-teal-400">Odontologia</span>
                </a>

                <div className="hidden xl:flex items-center space-x-6">
                    <nav className="flex space-x-6">
                        {['Tratamentos', 'Resultados', 'Clínica', 'Depoimentos'].map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`} 
                                className="text-sm font-bold text-white/80 hover:text-white uppercase tracking-widest relative group transition-colors"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-5 border-l border-white/10 pl-6">
                        <a href="tel:11992876219" className="flex items-center gap-2 font-bold text-white/80 hover:text-white transition-colors">
                            <Phone size={16} className="text-teal-400" />
                            <span className="text-xs sm:text-sm tracking-wider">(11) 99287-6219</span>
                        </a>
                        <a
                            href="https://wa.me/5511992876219"
                            className="bg-white text-[#0A1128] px-5 py-2.5 rounded-full font-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 text-xs flex items-center gap-2 group uppercase tracking-wider"
                        >
                            Agendar Consulta
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <button className="xl:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="xl:hidden absolute top-full left-0 w-full bg-[#0A1128]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-8 flex flex-col items-center gap-8"
                    >
                        {['Tratamentos', 'Resultados', 'Clínica', 'Depoimentos'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white/80 hover:text-white hover:scale-110 font-bold text-lg uppercase tracking-widest transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a 
                            href="https://wa.me/5511992876219" 
                            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full font-black shadow-lg w-[80%] text-center flex items-center justify-center gap-2 uppercase tracking-widest mt-4"
                        >
                            Agendar Consulta
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
