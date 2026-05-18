import { Droplet, Star, Cpu, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Differentiators = () => {
    return (
        <section className="bg-[#02050A] text-white py-32 overflow-hidden relative" id="clinica">
            {/* Background ambient light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_70%)] blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center max-w-4xl mx-auto mb-20">
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
                        className="text-white/60 text-lg md:text-xl font-medium leading-relaxed"
                    >
                        Esqueça o padrão. Nossa clínica foi milimetricamente desenhada para o paciente que valoriza precisão absoluta, tecnologia de ponta e resultados que transcendem a estética comum.
                    </motion.p>
                </div>

                {/* Bento Box Grid - No Images, purely UI/Typography/Icons */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Highlight Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 md:p-12 rounded-[2rem] hover:border-teal-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                            <Cpu size={120} />
                        </div>
                        <div className="bg-teal-500/20 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-400 mb-8 border border-teal-500/20">
                            <Cpu size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black mb-4">Precisão Cirúrgica 3D</h3>
                        <p className="text-white/60 font-medium leading-relaxed max-w-lg text-lg">
                            Diga adeus às moldagens desconfortáveis. Utilizamos scanners intraorais de última geração para um planejamento digital milimétrico, garantindo que você veja o resultado final antes mesmo do tratamento começar.
                        </p>
                    </motion.div>

                    {/* Standard Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:border-teal-500/30 transition-colors group"
                    >
                        <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                            <Droplet size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Biossegurança Nível Hospitalar</h3>
                        <p className="text-white/50 font-medium leading-relaxed text-sm">
                            Seguimos protocolos internacionais rigorosos de esterilização. Sua saúde e integridade são o nosso foco absoluto em cada etapa.
                        </p>
                    </motion.div>

                    {/* Standard Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:border-teal-500/30 transition-colors group"
                    >
                        <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                            <Clock size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Laboratório Digital Próprio</h3>
                        <p className="text-white/50 font-medium leading-relaxed text-sm">
                            Próteses e alinhadores esculpidos por impressoras 3D internas. Agilidade extrema sem jamais comprometer a perfeição do detalhe.
                        </p>
                    </motion.div>

                    {/* Standard Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:border-teal-500/30 transition-colors group"
                    >
                        <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                            <Star size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Sedação Consciente</h3>
                        <p className="text-white/50 font-medium leading-relaxed text-sm">
                            Uma jornada rumo ao sorriso perfeito sem dor, medo ou ansiedade. Durma e acorde com a transformação finalizada.
                        </p>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-teal-900/40 to-blue-900/40 border border-teal-500/20 p-10 rounded-[2rem] flex flex-col justify-center items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                        <p className="font-black text-6xl md:text-7xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 relative z-10">100%</p>
                        <p className="text-sm font-bold text-teal-100 uppercase tracking-[0.2em] relative z-10">Compromisso com o seu resultado</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
