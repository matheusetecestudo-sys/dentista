import { Coffee, ShieldCheck, Clock, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="py-32 bg-[#050B14] text-white overflow-hidden relative border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.03),transparent_70%)] blur-[80px] -z-10"></div>
            
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs">O Padrão Ouro</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-8 leading-tight tracking-tight">
                            Uma imersão sensorial de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">luxo e bem-estar.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium mb-12">
                            Redefinimos completamente o que significa ir ao dentista. Transformamos a tensão clínica em uma experiência altamente exclusiva, comparável aos melhores hotéis 5 estrelas do mundo.
                        </p>

                        <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-500/30">
                                <span className="text-teal-400 font-black text-2xl">V</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Atendimento VIP Garantido</h4>
                                <p className="text-white/50 text-sm font-medium mt-1">Sua jornada conosco é única e intransferível.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="space-y-6">
                            {[
                                {
                                    number: "01",
                                    icon: <Coffee className="w-6 h-6" />,
                                    title: "Concierge Exclusivo",
                                    description: "Recepção personalizada com menu de cafés premium, chás importados e águas saborizadas."
                                },
                                {
                                    number: "02",
                                    icon: <Sofa className="w-6 h-6" />,
                                    title: "Ambiente Boutique",
                                    description: "Arquitetura sensorial refinada, aromaterapia suave e playlist curada para total relaxamento."
                                },
                                {
                                    number: "03",
                                    icon: <Clock className="w-6 h-6" />,
                                    title: "Pontualidade Britânica",
                                    description: "Seu tempo é o seu ativo mais valioso. Trabalhamos com agendas rigorosas. Zero espera na recepção."
                                },
                                {
                                    number: "04",
                                    icon: <ShieldCheck className="w-6 h-6" />,
                                    title: "Privacidade Absoluta",
                                    description: "Salas de atendimento VIP projetadas com isolamento acústico para o seu total conforto e discrição."
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="group flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <span className="text-teal-400/40 font-black text-sm">{item.number}</span>
                                        <div className="w-px h-full bg-white/10 group-hover:bg-teal-400/30 transition-colors"></div>
                                    </div>
                                    <div className="flex-grow pb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="text-teal-400">{item.icon}</div>
                                            <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-white/50 text-sm font-medium leading-relaxed pl-9">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
