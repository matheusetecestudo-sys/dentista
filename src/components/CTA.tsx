import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-[#050B14] relative overflow-hidden py-32 text-white" id="agendar">
            {/* Efeitos luxuosos */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.1),transparent_70%)] blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                    
                    <span className="bg-teal-500/20 text-teal-300 font-bold py-2 px-6 rounded-full text-xs uppercase tracking-[0.2em] mb-8 inline-block border border-teal-500/30">
                        Atendimento Exclusivo VIP
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
                        Seu novo sorriso está a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">um clique de distância.</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
                        Fale diretamente com nossa equipe de concierge via WhatsApp. Sem formulários cansativos, sem espera. Atendimento imediato.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <a
                            href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20VIP."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#0A1128] font-black py-5 px-10 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-4 w-full sm:w-auto group uppercase tracking-widest text-sm"
                        >
                            Chamar no WhatsApp
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </a>

                        <div className="flex items-center justify-center gap-3 text-sm text-white/50 font-medium mt-4">
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                            </div>
                            Equipe disponível agora
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
