import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#02050A] pt-28 pb-12" id="inicio">
            {/* Imagem de Fundo Atmosférica - Visível e Nítida */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/banner01 (4).png"
                    alt="Clínica DUNO Odontologia"
                    className="w-full h-full object-cover opacity-85 object-center"
                />
                {/* Degradês de integração suaves nas bordas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-transparent to-[#02050A]/45"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#02050A]/20 via-transparent to-[#02050A]/20"></div>
            </div>

            {/* Container do Card de Vidro Flutuante */}
            <div className="container mx-auto px-6 relative z-10 max-w-3xl flex justify-center items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full bg-[#0A1128]/80 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] hover:border-teal-500/20 transition-all duration-500 flex flex-col items-center text-center space-y-6 sm:space-y-8"
                >
                    {/* Badge de Destaque Minimalista com Avaliações */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-white/95 uppercase tracking-widest leading-none border-l border-white/10 pl-2">
                            Referência em Odontologia Estética
                        </span>
                    </div>

                    {/* Título de Luxo e Alta Legibilidade */}
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
                        A Arte de Transformar <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-extrabold">Sorrisos</span>
                    </h1>

                    {/* Descrição limpa e contrastante */}
                    <p className="text-xs sm:text-base md:text-lg text-white/80 max-w-xl font-medium leading-relaxed">
                        Tecnologia digital de ponta e reabilitação estética personalizada. Desenhamos a harmonia perfeita para o seu rosto com máximo conforto e exclusividade.
                    </p>

                    {/* Botão de Agendamento Premium e Destacado */}
                    <div className="pt-2">
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-white text-[#02050A] px-8 py-4 sm:px-10 sm:py-4.5 rounded-full font-black uppercase tracking-widest shadow-[0_12px_35px_rgba(20,184,166,0.15)] hover:shadow-[0_15px_40px_rgba(20,184,166,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 text-xs sm:text-sm border border-white/15"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>
                </motion.div>
            </div>
            
            {/* Indicador de Rolagem Minimalista - Posicionado de Forma Segura */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-45">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest">Role para explorar</span>
                <div className="w-[1px] h-6 bg-white/20 relative overflow-hidden rounded-full">
                    <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-1/2 bg-teal-400 absolute top-0 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
