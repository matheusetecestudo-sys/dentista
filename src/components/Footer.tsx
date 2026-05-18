import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#03060C] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#" className="text-3xl font-black tracking-tighter text-white flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl leading-none">D</span>
                            </div>
                            DUNO<span className="text-teal-400">Odontologia</span>
                        </a>
                        <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium pr-4">
                            Odontologia moderna e de alta precisão para pacientes que exigem o que há de melhor em estética e saúde bucal.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all text-white/70">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all text-white/70">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navegação</h4>
                        <ul className="space-y-4">
                            {['Início', 'Tratamentos', 'Resultados', 'Clínica', 'Depoimentos'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-teal-400 transition-colors text-sm font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tratamentos */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Especialidades</h4>
                        <ul className="space-y-4">
                            {['Lentes de Contato', 'Implantes', 'Clareamento', 'Invisalign'].map((item) => (
                                <li key={item}>
                                    <a href="#tratamentos" className="text-white/50 hover:text-teal-400 transition-colors text-sm font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-teal-400 w-5 h-5 flex-shrink-0" />
                                <span className="text-white/50 text-sm leading-relaxed">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-teal-400 w-5 h-5 flex-shrink-0" />
                                <span className="text-white/50 text-sm">(11) 99287-6219</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-teal-400 w-5 h-5 flex-shrink-0" />
                                <span className="text-white/50 text-sm">contato@dunoodonto.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs font-medium">
                        &copy; {new Date().getFullYear()} DUNO Odontologia. Todos os direitos reservados.
                    </p>
                    <p className="text-white/30 text-xs font-medium">
                        CRO/SP: 123456 | Resp. Técnico: Dr. Nome Sobrenome
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
