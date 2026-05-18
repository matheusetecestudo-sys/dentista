import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-[#02050A] relative overflow-hidden py-32 text-white" id="agendar">
            {/* Background luxury gradient glows */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_70%)] blur-[100px] -z-10"></div>
            <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-16 lg:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden grid lg:grid-cols-12 gap-12 items-center"
                >
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                    
                    {/* Copy Column */}
                    <div className="lg:col-span-7 space-y-8 text-left">
                        <span className="bg-teal-500/20 text-teal-300 font-bold py-2 px-6 rounded-full text-xs uppercase tracking-[0.2em] inline-block border border-teal-500/30">
                            Atendimento Personalizado e Acolhedor
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                            Seu novo sorriso está a <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">um clique de distância.</span>
                        </h2>
                        
                        <p className="text-lg text-white/70 leading-relaxed font-medium">
                            Fale diretamente com nossa equipe de atendimento via WhatsApp. Esclareça suas dúvidas de forma rápida, humanizada e sem burocracia.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            {[
                                "Retorno rápido no WhatsApp",
                                "Planejamento 100% digital",
                                "Sem formulários exaustivos",
                                "Equipe pronta para acolher"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                                    <CheckCircle2 size={18} className="text-teal-400 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a
                                href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#0A1128] font-black py-5 px-10 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_15px_45px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center justify-center gap-4 w-full sm:w-auto group uppercase tracking-widest text-sm"
                            >
                                Chamar no WhatsApp
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Visual Photo Card Column */}
                    <div className="lg:col-span-5 flex justify-center relative">
                        {/* Circle glowing backlight */}
                        <div className="absolute w-[280px] h-[280px] bg-teal-400/20 blur-3xl rounded-full -z-10"></div>
                        
                        <div className="relative p-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl w-full max-w-[340px] flex flex-col items-center text-center">
                            <div className="relative w-full h-[260px] rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Atendimento DUNO" 
                                    className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                
                                {/* Status online badge */}
                                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </div>
                                    <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest">Online</span>
                                </div>
                            </div>
                            
                            <div className="mt-5 pb-2">
                                <h4 className="font-black text-white text-lg">DUNO Odontologia</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mt-1">Resposta em menos de 5 minutos</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
