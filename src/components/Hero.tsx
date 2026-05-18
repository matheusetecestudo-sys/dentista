import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] min-h-[700px] flex items-center overflow-hidden bg-[#02050A]">
            {/* Background com Imagem Deslumbrante Full Screen */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100"
                    alt="Clínica Dentária Premium"
                    className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-[30s] hover:scale-100"
                />
                {/* Gradiente escurecendo a base e topo para leitura perfeita do texto e menu */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#02050A] via-[#02050A]/85 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center pt-32 pb-16 max-w-7xl">
                
                {/* Content Left */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white space-y-8 lg:col-span-8 text-left"
                >
                    {/* Testimonial / Social Proof element with real photos of people */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex flex-wrap items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="flex -space-x-3">
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente VIP" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente VIP" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente VIP" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente VIP" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover" 
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="flex gap-0.5 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]" />
                                ))}
                            </div>
                            <p className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest mt-0.5">Recomendado por +1,200 pacientes VIP</p>
                        </div>
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl font-black leading-[1.05] tracking-tight">
                        A Arte do <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300 drop-shadow-sm">Sorriso Perfeito</span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-50/80 max-w-2xl font-medium leading-relaxed">
                        Experimente a odontologia de altíssimo padrão. Tecnologia suíça, conforto absoluto e resultados estéticos extraordinários que transformam a sua assinatura pessoal.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                        <a 
                            href="https://wa.me/5511992876219" 
                            className="group relative overflow-hidden bg-white text-[#0A1128] px-10 py-5 rounded-full font-black uppercase tracking-wider hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                        >
                            <span className="relative z-10">Agendar Avaliação VIP</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-6 border-t border-white/10 max-w-lg">
                        {[
                            { value: "15+", label: "Anos de Elite" },
                            { value: "5k+", label: "Sorrisos Transformados" },
                            { icon: <ShieldCheck className="w-8 h-8 text-teal-400" />, label: "Padrão Internacional" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                            >
                                {stat.value ? (
                                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">{stat.value}</p>
                                ) : stat.icon}
                                <p className="text-xs text-white/50 uppercase tracking-wider font-bold mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
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
