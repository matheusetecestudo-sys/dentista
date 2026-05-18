import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#02050A] pt-24 lg:pt-0">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_70%)] blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] blur-[120px] -z-10"></div>
            
            {/* Grid Pattern overlay for depth */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center max-w-7xl py-12">
                
                {/* Content Left */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white space-y-8 lg:col-span-7 text-left"
                >
                    {/* Social proof badge with real patient photos */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex flex-wrap items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="flex -space-x-3">
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover shadow-lg" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover shadow-lg" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover shadow-lg" 
                            />
                            <img 
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&q=80" 
                                alt="Paciente" 
                                className="w-9 h-9 rounded-full border-2 border-[#02050A] object-cover shadow-lg" 
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="flex gap-0.5 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]" />
                                ))}
                            </div>
                            <p className="text-[10px] sm:text-xs font-bold text-teal-300 uppercase tracking-widest mt-0.5 font-sans">
                                +1.200 Sorrisos Transformados
                            </p>
                        </div>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                        A Arte do <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300 drop-shadow-sm">Sorriso Perfeito</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
                        Referência em odontologia digital e reabilitação estética. Tecnologia de precisão e atendimento centrado no seu bem-estar para resultados extraordinários.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                        <a 
                            href="https://wa.me/5511992876219" 
                            className="group relative overflow-hidden bg-gradient-to-r from-teal-400 to-blue-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-wider hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-6 border-t border-white/10 max-w-lg">
                        {[
                            { value: "15+", label: "Anos de Atuação" },
                            { value: "5k+", label: "Sorrisos Modelados" },
                            { icon: <ShieldCheck className="w-8 h-8 text-teal-400" />, label: "Tecnologia Digital" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                            >
                                {stat.value ? (
                                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">{stat.value}</p>
                                ) : stat.icon}
                                <p className="text-xs text-white/40 uppercase tracking-wider font-bold mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Portrait Column */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative w-full flex justify-center"
                >
                    {/* Glowing backlight */}
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[2.5rem] blur-2xl opacity-20 -z-10"></div>
                    
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full max-w-[400px] h-[550px] group bg-white/5 backdrop-blur-3xl">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Sorriso DUNO"
                            className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                        />
                        {/* Overlay with subtle luxury tint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-transparent to-transparent opacity-90"></div>
                        
                        {/* Interactive Float Tag inside image */}
                        <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-4">
                            <div className="flex gap-0.5 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                ))}
                            </div>
                            <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest border-l border-white/10 pl-4">Sorriso Natural</span>
                        </div>
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
