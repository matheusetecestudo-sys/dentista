import { motion } from 'framer-motion';
import { ArrowRight, Star, Cpu, ShieldAlert, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#02050A]">
            {/* Imagem de Fundo Atmosférica de Consultório de Altíssimo Padrão */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100"
                    alt="Consultório Clínico DUNO"
                    className="w-full h-full object-cover opacity-[0.28] object-center scale-102"
                />
                {/* Overlay de gradiente profissional de alta opacidade na base e topo para contraste absoluto */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#02050A]/90 via-[#02050A]/60 to-[#02050A]"></div>
                
                {/* Brilho radial sofisticado animado (Efeito de nebulosa/glow vivo) */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.15, 0.9, 1],
                        x: [0, 20, -20, 0],
                        y: [0, -20, 20, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_70%)] blur-[100px] pointer-events-none"
                ></motion.div>
                
                <motion.div 
                    animate={{ 
                        scale: [1, 0.9, 1.1, 1],
                        x: [0, -30, 30, 0],
                        y: [0, 20, -20, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] blur-[100px] pointer-events-none"
                ></motion.div>
            </div>

            {/* Container principal com dimensionamento inteligente */}
            <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full max-w-4xl relative z-10 py-4">
                
                <motion.div 
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white flex flex-col items-center w-full text-center space-y-5 sm:space-y-6 md:space-y-7"
                >
                    {/* Elemento de Prova Social Integrado - Altamente Compacto */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-300"
                    >
                        <div className="flex -space-x-2">
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=60&h=60&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                        </div>
                        <div className="flex items-center gap-1.5 border-l border-white/10 pl-2.5">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                            </div>
                            <span className="text-[9px] sm:text-[10px] font-black text-white/90 uppercase tracking-widest leading-none">
                                +1.200 Sorrisos Perfeitos
                            </span>
                        </div>
                    </motion.div>

                    {/* Título Editorial Altamente Responsivo */}
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight max-w-3xl">
                        A Arte de Transformar <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-blue-400 drop-shadow-sm font-extrabold">Sorrisos</span>
                    </h1>

                    {/* Descrição enxuta */}
                    <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white max-w-2xl font-semibold leading-relaxed px-2 sm:px-0 opacity-90">
                        Referência em odontologia digital e reabilitação estética. Tecnologia de precisão e atendimento acolhedor focado no seu bem-estar.
                    </p>

                    {/* Botão de Agendamento Otimizado com Seta */}
                    <div className="pt-2 sm:pt-4">
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-white text-[#02050A] px-8 sm:px-10 py-4 sm:py-4.5 rounded-full font-black uppercase tracking-widest shadow-[0_12px_40px_rgba(255,255,255,0.08)] hover:shadow-[0_15px_45px_rgba(20,184,166,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-[10px] sm:text-xs md:text-sm border border-white/10 hover:border-teal-400/35"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-teal-50/95 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>

                    {/* Chips Flutuantes de Alta Tecnologia */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-10 max-w-2xl px-2"
                    >
                        {[
                            { 
                                title: "Fluxo 100% Digital", 
                                desc: "Precisão em 3D", 
                                icon: <Cpu className="w-4 h-4 text-teal-400 animate-pulse" />,
                                animDelay: 0.1 
                            },
                            { 
                                title: "Sedação Sem Dor", 
                                desc: "Conforto absoluto", 
                                icon: <ShieldAlert className="w-4 h-4 text-teal-400" />,
                                animDelay: 0.5 
                            },
                            { 
                                title: "Materiais Premium", 
                                desc: "Estética importada", 
                                icon: <Sparkles className="w-4 h-4 text-teal-400" />,
                                animDelay: 0.9 
                            }
                        ].map((chip, idx) => (
                            <motion.div 
                                key={idx} 
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4.5,
                                    ease: "easeInOut",
                                    delay: chip.animDelay
                                }}
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg min-w-[155px] text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                                    {chip.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-teal-300 uppercase tracking-widest leading-none">{chip.title}</span>
                                    <span className="text-[9px] text-white/60 font-bold mt-1 leading-none">{chip.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Indicador de Rolagem Minimalista */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1">
                <span className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Descubra</span>
                <div className="w-[1px] h-6 bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-1/2 bg-teal-400 absolute top-0 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
