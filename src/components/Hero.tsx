import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#02050A]" id="inicio">
            {/* Imagem de Fundo Atmosférica de um Espaço Clínico Premium */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=95"
                    alt="Clínica DUNO Odontologia"
                    className="w-full h-full object-cover opacity-20 object-center filter grayscale contrast-125"
                />
                
                {/* Degradê de alto contraste e sofisticação para isolar o texto */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#02050A]/95 via-[#02050A]/80 to-[#02050A]"></div>
                
                {/* Luzes difusas elegantes de fundo (sem poluição visual) */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 0.95, 1],
                        opacity: [0.3, 0.4, 0.35, 0.3]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_70%)] blur-[120px] pointer-events-none"
                ></motion.div>
            </div>

            {/* Conteúdo Principal Centrado e Espaçoso */}
            <div className="container mx-auto px-6 flex flex-col justify-center items-center h-full max-w-4xl relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center space-y-6 sm:space-y-8"
                >
                    {/* Badge de Destaque Minimalista com Avaliações */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-lg"
                    >
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-white/95 uppercase tracking-widest leading-none border-l border-white/10 pl-2.5">
                            Referência em Odontologia Estética
                        </span>
                    </motion.div>

                    {/* Título de Luxo e Alta Legibilidade */}
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight max-w-3xl text-white">
                        A Arte de Transformar <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-extrabold">Sorrisos</span>
                    </h1>

                    {/* Descrição limpa, espaçada e contrastante */}
                    <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed px-4">
                        Tecnologia digital de ponta e reabilitação estética personalizada. Desenhamos a harmonia perfeita para o seu rosto com máximo conforto e exclusividade.
                    </p>

                    {/* Botão de Agendamento Premium e Destacado */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="pt-4"
                    >
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-white text-[#02050A] px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-[0_15px_40px_rgba(20,184,166,0.15)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.35)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-xs sm:text-sm border border-white/15"
                        >
                            <span className="relative z-10">Agendar Minha Consulta</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Indicador de Rolagem Minimalista */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest">Role para explorar</span>
                <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden rounded-full">
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
