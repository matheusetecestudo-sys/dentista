import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] min-h-[650px] flex items-center justify-center overflow-hidden bg-[#02050A]">
            {/* Imagem de Fundo Deslumbrante e Altamente Profissional */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100"
                    alt="Dentista DUNO"
                    className="w-full h-full object-cover opacity-50 scale-100 transition-transform duration-[20s] hover:scale-105"
                />
                {/* Gradiente escuro de alta costura para legibilidade perfeita */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#02050A]/70 via-[#02050A]/40 to-[#02050A]"></div>
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center pt-24 max-w-5xl">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white space-y-8 flex flex-col items-center"
                >
                    {/* Prova Social com fotos reais - Compacta e Elegante */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="flex -space-x-2.5">
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-8 h-8 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-8 h-8 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-8 h-8 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                        </div>
                        <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
                                +1.200 Sorrisos Modelados
                            </span>
                        </div>
                    </motion.div>

                    {/* Tipografia Editorial Centrada */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.08] tracking-tight max-w-4xl">
                        A Arte de Transformar <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300 drop-shadow-sm">Sorrisos</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                        Referência em odontologia digital e reabilitação estética. Tecnologia de precisão e atendimento acolhedor focado no seu bem-estar.
                    </p>

                    {/* Botão de Conversão Principal */}
                    <div className="pt-6">
                        <a 
                            href="https://wa.me/5511992876219" 
                            className="group relative overflow-hidden bg-white text-[#02050A] px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center justify-center gap-4 text-sm sm:text-base"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Descubra</span>
                <div className="w-[1.5px] h-10 bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-1/2 bg-teal-400 absolute top-0 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
