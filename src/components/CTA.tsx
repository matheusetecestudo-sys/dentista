import { Calendar, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    const contactOptions = [
        {
            title: "Agendar Avaliação",
            desc: "Fale com nossa equipe e escolha a melhor data de forma simples.",
            icon: <Calendar className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />,
            message: "Olá! Gostaria de agendar uma avaliação estética na Duno.",
            badge: "Mais procurado",
            styles: "bg-teal-500/5 border-teal-500/20 hover:border-teal-400 hover:bg-teal-500/10 shadow-[0_15px_30px_rgba(20,184,166,0.02)]"
        },
        {
            title: "Estética do Sorriso",
            desc: "Esclareça suas dúvidas sobre Lentes 3D, Alinhadores e Clareamento.",
            icon: <Sparkles className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />,
            message: "Olá! Gostaria de saber mais sobre as Lentes de Contato e tratamentos estéticos.",
            styles: "bg-blue-500/5 border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/10 shadow-[0_15px_30px_rgba(59,130,246,0.02)]"
        },
        {
            title: "Falar com Atendente",
            desc: "Dúvidas gerais ou outros assuntos? Fale diretamente com nossa recepção.",
            icon: <MessageSquare className="w-6 h-6 text-white/50 group-hover:scale-110 transition-transform" />,
            message: "Olá! Gostaria de falar com o atendimento clínico da Duno.",
            styles: "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
        }
    ];

    return (
        <section className="bg-[#02050A] relative overflow-hidden py-24 sm:py-32 text-white" id="agendar">
            {/* Efeitos de luz no fundo para sofisticação */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06),transparent_70%)] blur-[80px] sm:blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                
                {/* Cabeçalho Padronizado, Compacto e Alinhado */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        Atendimento Imediato
                    </motion.span>
                    
                    {/* Título sem quebras forçadas de BR, evitando letras órfãs como o "a" em telas mobile */}
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 tracking-tight leading-tight"
                    >
                        Seu novo sorriso está <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300">a um clique de distância.</span>
                    </motion.h2>
                    
                    <p className="text-white/60 mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                        Escolha abaixo o canal ideal para o seu atendimento. Nossa equipe está online para acolher você de forma totalmente personalizada.
                    </p>
                </div>

                {/* Grade de Botões Utilitários Dinâmicos (Preenchem mensagens no WhatsApp) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactOptions.map((option, index) => (
                        <motion.a
                            key={index}
                            href={`https://wa.me/5511992876219?text=${encodeURIComponent(option.message)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${option.styles}`}
                        >
                            {/* Badge especial se houver */}
                            {"badge" in option && (
                                <span className="absolute top-4 right-4 bg-teal-400 text-[#02050A] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                                    {option.badge}
                                </span>
                            )}

                            <div>
                                <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    {option.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                                    {option.title}
                                </h3>
                                <p className="text-white/50 text-xs sm:text-sm font-medium leading-relaxed mb-8">
                                    {option.desc}
                                </p>
                            </div>

                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 group-hover:text-white transition-colors">
                                <span>Iniciar Atendimento</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Linha Sutil de Confiança e Agilidade */}
                <div className="text-center mt-12">
                    <span className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                        Seguro • Sem burocracia • Resposta em menos de 5 minutos
                    </span>
                </div>

            </div>
        </section>
    );
};

export default CTA;
