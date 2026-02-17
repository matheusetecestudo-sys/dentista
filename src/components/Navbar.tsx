
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className={`text-2xl font-bold font-serif ${scrolled ? 'text-medical-primary' : 'text-medical-primary md:text-white'}`}>
                    Odonto<span className="text-medical-secondary">Premium</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-6">
                        <a href="#home" className={`font-medium hover:text-medical-secondary transition ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Início</a>
                        <a href="#tratamentos" className={`font-medium hover:text-medical-secondary transition ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Tratamentos</a>
                        <a href="#sobre" className={`font-medium hover:text-medical-secondary transition ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Sobre</a>
                        <a href="#depoimentos" className={`font-medium hover:text-medical-secondary transition ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Depoimentos</a>
                    </nav>

                    <div className="flex items-center gap-4 border-l pl-6 border-white/20">
                        <a href="tel:11992876219" className={`flex items-center gap-2 font-bold hover:text-medical-secondary transition-colors ${scrolled ? 'text-medical-primary' : 'text-white'}`}>
                            <Phone size={18} />
                            <span>(11) 99287-6219</span>
                        </a>
                        <a
                            href="https://wa.me/5511992876219"
                            className="bg-medical-secondary text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-white hover:text-medical-secondary transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                        >
                            Agendar Consulta
                        </a>
                    </div>
                </div>

                <button className="md:hidden text-medical-primary focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-medical-primary' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 animate-fade-in-down border-t border-gray-100">
                    {['Tratamentos', 'Sobre', 'Depoimentos', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-600 font-medium text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o." className="bg-medical-secondary text-white px-8 py-3 rounded-full font-bold shadow-md w-3/4 text-center">
                        Agendar Consulta
                    </a>
                    <a href="tel:11992876219" className="flex items-center gap-2 text-medical-primary font-bold">
                        <Phone size={18} /> (11) 99287-6219
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
