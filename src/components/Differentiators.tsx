import { Droplet, Star, Cpu, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Differentiators = () => {
    return (
        <section className="bg-[#02050A] text-white py-32 overflow-hidden relative" id="clinica">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_70%)] blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left Column: Text & Image */}
                    <div className="lg:w-1/2 w-full">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                        >
                            A Assinatura da Excelência
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
                        >
                            Não fazemos odontologia. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Criamos obras de arte.</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-12"
                        >
                            Esqueça o padrão. Nossa clínica foi milimetricamente desenhada para o paciente que valoriza precisão absoluta, tecnologia de ponta e resultados que transcendem a estética comum.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-64 sm:h-80 w-full group border border-white/10"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1588776814546-f4471b57713d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Tecnologia Avançada" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent opacity-90" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">100%</p>
                                <p className="text-xs font-bold text-teal-100 uppercase tracking-widest mt-1">Satisfação & Precisão Digital</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-teal-500/30 hover:bg-white/10 transition-all group"
                        >
                            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 transition-colors">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white/90">Precisão Cirúrgica 3D</h3>
                            <p className="text-white/50 font-medium leading-relaxed text-sm">
                                Scanners intraorais para um planejamento digital milimétrico e resultados previsíveis.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-teal-500/30 hover:bg-white/10 transition-all group"
                        >
                            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 transition-colors">
                                <Droplet size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white/90">Biossegurança Nível Hospitalar</h3>
                            <p className="text-white/50 font-medium leading-relaxed text-sm">
                                Protocolos internacionais de esterilização. Sua saúde é o nosso foco absoluto.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-teal-500/30 hover:bg-white/10 transition-all group"
                        >
                            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 transition-colors">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white/90">Laboratório Próprio</h3>
                            <p className="text-white/50 font-medium leading-relaxed text-sm">
                                Próteses e alinhadores com agilidade extrema sem comprometer o detalhe.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-teal-500/30 hover:bg-white/10 transition-all group"
                        >
                            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 transition-colors">
                                <Star size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white/90">Sedação Consciente</h3>
                            <p className="text-white/50 font-medium leading-relaxed text-sm">
                                Uma jornada rumo ao sorriso perfeito sem dor, medo ou ansiedade. Durma e acorde renovado.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
