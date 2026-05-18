import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-[#02050A] relative overflow-hidden py-32 text-white text-center" id="agendar">
            {/* Efeitos de luz no fundo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.06),transparent_70%)] blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl flex flex-col items-center">
                
                {/* Foto Humana Acolhedora - Redonda, com Borda Iluminada */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative mb-10 group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                            alt="Atendimento DUNO" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    {/* Indicador Online */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#02050A] flex items-center justify-center">
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    </div>
                </motion.div>

                {/* Textos Centrados Limpos */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 max-w-3xl"
                >
                    <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs">
                        Atendimento Acolhedor
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                        Seu novo sorriso está a <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300">um clique de distância.</span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium max-w-2xl mx-auto">
                        Fale diretamente com nossa equipe via WhatsApp. Esclareça suas dúvidas de forma rápida, humanizada e totalmente sem burocracia.
                    </p>
                </motion.div>

                {/* Botão WhatsApp */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="pt-10 w-full flex justify-center"
                >
                    <a
                        href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#02050A] font-black py-5 px-12 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:scale-105 hover:shadow-[0_15px_45px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center gap-4 w-full sm:w-auto group uppercase tracking-widest text-sm"
                    >
                        Chamar no WhatsApp
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>

                {/* Resposta Rápida Label */}
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest mt-6 block">
                    Resposta em menos de 5 minutos
                </span>

            </div>
        </section>
    );
};

export default CTA;
