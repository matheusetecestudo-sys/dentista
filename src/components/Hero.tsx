import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A1128]">
            {/* Background com efeito Parallax e Vidro */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Clínica Premium"
                    className="w-full h-full object-cover opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32 pb-16">
                
                {/* Content Left */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white space-y-8"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-white/90 uppercase tracking-widest">Padrão Ouro em Odontologia</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                        A Arte do <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 drop-shadow-sm">Sorriso Perfeito</span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-50/80 max-w-lg font-medium leading-relaxed">
                        Experimente a odontologia de alto padrão. Tecnologia de ponta, conforto absoluto e resultados que transformam vidas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-6">
                        <a 
                            href="https://wa.me/5511992876219" 
                            className="group relative overflow-hidden bg-white text-[#0A1128] px-9 py-4 rounded-full font-black uppercase tracking-wide hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <span className="relative z-10">Agendar Avaliação</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-6 border-t border-white/10">
                        {[
                            { value: "15+", label: "Anos de Elite" },
                            { value: "5k+", label: "Sorrisos Transformados" },
                            { icon: <ShieldCheck className="w-8 h-8 text-teal-400" />, label: "Tecnologia Certificada" }
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

                {/* Right Image/Graphic */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden lg:block relative"
                >
                    <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full -z-10"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Dentista de Elite"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-80"></div>
                    </div>

                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring", stiffness: 200 }}
                        className="absolute -bottom-8 -left-8 bg-[#0A1128]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex items-center gap-5"
                    >
                        <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-4 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <p className="font-black text-2xl text-white">Top 1%</p>
                            <p className="text-xs uppercase tracking-wider text-teal-300 font-bold">Clínica Referência</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
