import { CheckCircle2, Award, ShieldCheck, Droplet, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Differentiators = () => {
    return (
        <section className="bg-[#050B14] text-white py-32 overflow-hidden relative" id="clinica">
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-teal-400 font-bold uppercase tracking-[0.2em] text-sm">Por que nos escolher?</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight tracking-tight">
                        Padrão Ouro em <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Performance Odontológica</span>
                    </h2>
                    <p className="text-white/60 mb-10 text-lg md:text-xl font-medium leading-relaxed">
                        Unimos a precisão da engenharia moderna com a arte da estética dental. Protocolos exclusivos desenhados para quem não aceita nada menos que a perfeição absoluta.
                    </p>

                    <ul className="space-y-6 mb-12">
                        {[
                            "Scanner Intraoral 3D: Diga adeus às moldagens desconfortáveis.",
                            "Protocolo de Sedação Consciente para uma experiência sem ansiedade.",
                            "Planejamento Digital do Sorriso (DSD) antes de começar.",
                            "Laboratório próprio para entregas com agilidade impressionante.",
                        ].map((item, idx) => (
                            <motion.li 
                                key={idx} 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1 bg-teal-500/20 p-1 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                </div>
                                <span className="text-lg text-white/90 font-medium">{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Integrated Trust Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                        {[
                            { icon: <Award />, label: "Mestres e Doutores" },
                            { icon: <ShieldCheck />, label: "Tecnologia Suíça" },
                            { icon: <Droplet />, label: "Biossegurança Hospitalar" },
                            { icon: <Star />, label: "Atendimento 5 Estrelas" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-3 group">
                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-14 h-14 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    {stat.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-white/50 group-hover:text-white/80 transition-colors">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-[2.5rem] transform rotate-3 scale-105 opacity-30 blur-lg"></div>
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-f4471b57713d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Tecnologia Odontológica Avançada"
                        className="rounded-[2.5rem] shadow-2xl relative z-10 w-full object-cover h-[600px] border border-white/10"
                    />
                    
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute -bottom-8 -left-8 z-20 bg-[#0A1128]/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        <p className="font-black text-5xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">100%</p>
                        <p className="text-sm font-bold text-white/70 uppercase tracking-widest max-w-[150px]">Satisfação em estética dental</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Differentiators;
