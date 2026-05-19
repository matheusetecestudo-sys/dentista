import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-[#02050A] relative overflow-hidden py-16 sm:py-20 text-white" id="agendar">
            {/* Efeitos de luz no fundo para sofisticação */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06),transparent_70%)] blur-[80px] sm:blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                
                {/* Bloco Único Centralizado de Alta Conversão */}
                <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        Atendimento Imediato
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 tracking-tight leading-tight"
                    >
                        Seu novo sorriso está <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300">a um clique de distância.</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl"
                    >
                        Fale diretamente com nossa recepção pelo WhatsApp. Nossa equipe está online para tirar todas as suas dúvidas e agendar sua avaliação personalizada em poucos instantes.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10 sm:mt-12"
                    >
                        <a 
                            href="https://wa.me/5511992876219?text=Olá! Gostaria de agendar uma avaliação na Duno."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-white text-[#02050A] px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-[0_10px_35px_rgba(255,255,255,0.05)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.35)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-xs sm:text-sm border border-white/10 hover:border-green-400/35"
                        >
                            <FaWhatsapp className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                            <span className="relative z-10">Agendar Minha Consulta</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </motion.div>

                    {/* Linha Sutil de Confiança e Agilidade */}
                    <div className="text-center mt-12 sm:mt-16">
                        <span className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                            Seguro • Sem burocracia • Resposta em menos de 5 minutos
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTA;
