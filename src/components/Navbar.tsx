
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
                        {['Tratamentos', 'Sobre', 'Depoimentos', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`font-medium hover:text-medical-secondary transition ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="https://wa.me/5511999999999"
                        className="bg-medical-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg flex items-center gap-2"
                    >
                        Agendar Agora
                    </a>
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
                    <a href="https://wa.me/5511999999999" className="bg-medical-secondary text-white px-8 py-3 rounded-full font-bold shadow-md w-3/4 text-center">
                        Agendar Consulta
                    </a>
                    <a href="tel:+5511999999999" className="flex items-center gap-2 text-medical-primary font-bold">
                        <Phone size={18} /> (11) 9999-9999
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
