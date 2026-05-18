import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-[#02050A] relative overflow-hidden py-24 sm:py-32 text-white text-center" id="agendar">
            {/* Efeitos de luz e profundidade no fundo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none"></div>
            
            {/* Círculos de luz luxuosos e desfocados */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_70%)] blur-[80px] sm:blur-[120px] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_70%)] blur-[80px] sm:blur-[100px] -z-10"></div>

            {/* Linhas decorativas sutis de grade (estética de luxo digital) */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl flex flex-col items-center">
                
                {/* Badge de Destaque elegante */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                >
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-teal-300 uppercase tracking-[0.2em] font-sans">
                        Atendimento Acolhedor
                    </span>
                </motion.div>

                {/* Textos Centrados Impecáveis */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 sm:space-y-8 max-w-3xl"
                >
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                        Seu novo sorriso está a <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300">um clique de distância.</span>
                    </h2>
                    
                    <p className="text-base sm:text-xl text-white/70 leading-relaxed font-medium max-w-2xl mx-auto">
                        Fale diretamente com nossa equipe de acolhimento via WhatsApp. Esclareça suas dúvidas de forma rápida, atenciosa e totalmente sem burocracia.
                    </p>
                </motion.div>

                {/* Benefícios Rápidos sem imagem (Aumenta o Social Proof de forma minimalista) */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 pb-4 max-w-2xl text-xs sm:text-sm font-bold uppercase tracking-widest text-white/50"
                >
                    {["Resposta Imediata", "Sem Burocracia", "Acolhimento Humano"].map((text, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Check size={14} className="text-teal-400" />
                            <span>{text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Botão de WhatsApp Premium com Micro-Animação */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="pt-8 w-full flex justify-center"
                >
                    <a
                        href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group overflow-hidden bg-gradient-to-r from-teal-400 to-blue-500 text-white font-black py-5 px-12 rounded-full shadow-[0_15px_30px_rgba(20,184,166,0.2)] hover:scale-105 hover:shadow-[0_20px_45px_rgba(20,184,166,0.35)] transition-all duration-300 flex items-center justify-center gap-4 w-full sm:w-auto uppercase tracking-widest text-sm"
                    >
                        Chamar no WhatsApp
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>

                {/* Indicador de Resposta Rápida */}
                <span className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-8 block">
                    Menos de 5 minutos para retorno
                </span>

            </div>
        </section>
    );
};

export default CTA;
