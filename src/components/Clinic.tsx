import { Cpu, Clock, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Clinic = () => {
    return (
        <section className="bg-[#02050A] text-white py-32 overflow-hidden relative" id="clinica">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_70%)] blur-[100px] -z-10"></div>
            
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Imagem / Galeria Simplificada */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full relative"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative h-[450px] sm:h-[600px]">
                            <img 
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Nossa Clínica" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/20 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">DUNO</p>
                                <p className="text-sm font-bold text-teal-100 uppercase tracking-widest mt-2">Ambiente & Tecnologia</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Conteúdo Enxuto */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">A Clínica</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                            Tecnologia de ponta. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Conforto absoluto.</span>
                        </h2>
                        <p className="text-white/60 text-lg font-medium leading-relaxed mb-10">
                            Unimos a precisão da engenharia suíça com a excelência de um atendimento totalmente humanizado. Uma experiência desenhada para quem não aceita nada menos que a perfeição.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <Cpu className="w-6 h-6" />,
                                    title: "Precisão Cirúrgica 3D",
                                    desc: "Scanners intraorais para resultados 100% previsíveis."
                                },
                                {
                                    icon: <Star className="w-6 h-6" />,
                                    title: "Atendimento Acolhedor",
                                    desc: "Recepção atenciosa com atenção aos mínimos detalhes para o seu conforto."
                                },
                                {
                                    icon: <ShieldCheck className="w-6 h-6" />,
                                    title: "Biossegurança Hospitalar",
                                    desc: "Rigorosos protocolos de esterilização internacional."
                                },
                                {
                                    icon: <Clock className="w-6 h-6" />,
                                    title: "Zero Espera",
                                    desc: "Seu tempo é valioso. Agendas exclusivas e pontuais."
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="text-teal-400 mt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white/90">{item.title}</h3>
                                        <p className="text-white/50 text-sm font-medium mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Clinic;
