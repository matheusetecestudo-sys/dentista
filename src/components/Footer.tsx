
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-medical-primary text-white py-12 pt-16">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4 font-serif">Clínica Odonto<span className="text-medical-secondary">Premium</span></h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Sua saúde bucal em primeiro lugar. Oferecemos o que há de mais moderno em odontologia, com profissionais especializados e ambiente acolhedor.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-medical-secondary transition"><Instagram size={20} /></a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-medical-secondary transition"><Facebook size={20} /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 text-medical-secondary">Links Rápidos</h3>
                    <ul className="space-y-3">
                        <li><a href="#home" className="text-gray-300 hover:text-white transition">Início</a></li>
                        <li><a href="#tratamentos" className="text-gray-300 hover:text-white transition">Tratamentos</a></li>
                        <li><a href="#sobre" className="text-gray-300 hover:text-white transition">Sobre Nós</a></li>
                        <li><a href="#depoimentos" className="text-gray-300 hover:text-white transition">Depoimentos</a></li>
                        <li><a href="#contato" className="text-gray-300 hover:text-white transition">Contato</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 text-medical-secondary">Tratamentos</h3>
                    <ul className="space-y-3">
                        <li className="text-gray-300 hover:text-white transition cursor-pointer">Implantes</li>
                        <li className="text-gray-300 hover:text-white transition cursor-pointer">Ortodontia</li>
                        <li className="text-gray-300 hover:text-white transition cursor-pointer">Lentes de Contato</li>
                        <li className="text-gray-300 hover:text-white transition cursor-pointer">Clareamento</li>
                        <li className="text-gray-300 hover:text-white transition cursor-pointer">Harmonização Facial</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 text-medical-secondary">Fale Conosco</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-gray-300">
                            <Phone size={20} className="text-medical-secondary flex-shrink-0" />
                            (11) 9999-9999
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <Mail size={20} className="text-medical-secondary flex-shrink-0" />
                            contato@odontopremium.com.br
                        </li>
                        <li className="text-gray-400 text-sm mt-4">
                            Av. Paulista, 1000 - Cj. 202<br />
                            Bela Vista, São Paulo - SP
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Clínica OdontoPremium. Todos os direitos reservados.</p>
                <p>Responsável Técnico: Dr. Nome Sobrenome - CRO/SP 00000</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition">Política de Privacidade</a>
                    <a href="#" className="hover:text-white transition">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
