import { Coffee, ShieldCheck, Clock, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="py-32 bg-[#050B14] text-white overflow-hidden relative border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.03),transparent_70%)] blur-[80px] -z-10"></div>
            
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                    
                    {/* Text Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs">O Padrão Ouro</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-8 leading-tight tracking-tight">
                            Uma imersão sensorial de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">luxo e bem-estar.</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed font-medium mb-12">
                            Redefinimos completamente o que significa ir ao dentista. Transformamos a tensão clínica em uma experiência altamente exclusiva, comparável aos melhores hotéis 5 estrelas do mundo.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: <Coffee className="w-5 h-5" />,
                                    title: "Concierge Exclusivo",
                                    description: "Recepção com menu de cafés premium e chás."
                                },
                                {
                                    icon: <Sofa className="w-5 h-5" />,
                                    title: "Ambiente Boutique",
                                    description: "Arquitetura refinada e aromaterapia suave."
                                },
                                {
                                    icon: <Clock className="w-5 h-5" />,
                                    title: "Pontualidade Britânica",
                                    description: "Seu tempo é valioso. Zero espera na recepção."
                                },
                                {
                                    icon: <ShieldCheck className="w-5 h-5" />,
                                    title: "Privacidade Absoluta",
                                    description: "Salas VIP com total isolamento acústico."
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="text-teal-400 mt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-base font-bold text-white/90">{item.title}</h3>
                                        <p className="text-white/50 text-sm font-medium mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Column (Masonry Gallery) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                            {/* Gradient Overlay for Mobile */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-10 lg:hidden pointer-events-none"></div>
                            
                            <div className="space-y-4 sm:space-y-6 transform translate-y-6 sm:translate-y-12">
                                <img 
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Lobby da Clínica" 
                                    className="rounded-[2rem] w-full h-48 sm:h-72 object-cover shadow-2xl border border-white/10" 
                                />
                                <img 
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Consultório" 
                                    className="rounded-[2rem] w-full h-40 sm:h-56 object-cover shadow-2xl border border-white/10" 
                                />
                            </div>
                            <div className="space-y-4 sm:space-y-6">
                                <img 
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Detalhe Equipamento" 
                                    className="rounded-[2rem] w-full h-40 sm:h-56 object-cover shadow-2xl border border-white/10" 
                                />
                                <img 
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Tecnologia Odontológica" 
                                    className="rounded-[2rem] w-full h-48 sm:h-72 object-cover shadow-2xl border border-white/10" 
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
