import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-start overflow-hidden bg-[#02050A] pt-28 pb-16 md:py-32" id="inicio">
            {/* Imagem de Fundo de Alta Resolução - Ocupa 100% do Banner em todas as telas */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/banner01 (4).png"
                    alt="Clínica DUNO Odontologia"
                    className="w-full h-full object-cover opacity-100 object-[78%_center] md:object-center transition-all duration-700"
                />
                
                {/* Overlays de gradiente para garantir contraste e leitura perfeita do texto branco */}
                {/* No mobile (tela vertical), escurece um pouco mais a área geral para dar leitura sobre a foto */}
                <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-transparent z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/90 via-transparent to-black/30 z-0"></div>
            </div>

            {/* Conteúdo Centralizado e Alinhado de Forma Consistente */}
            <div className="container mx-auto px-6 sm:px-12 relative z-10 max-w-7xl w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start text-left space-y-6 md:space-y-8 max-w-3xl"
                >
                    {/* Badge de Destaque com Linha Teal do Site */}
                    <div className="flex items-center gap-3">
                        <span className="w-8 md:w-12 h-[2px] bg-[#14b8a6]"></span>
                        <span className="text-[10px] md:text-xs font-bold text-[#14b8a6] uppercase tracking-widest">
                            Tecnologia e Acolhimento
                        </span>
                    </div>

                    {/* Título Serifado de Luxo com Itálico Teal (Altamente responsivo) */}
                    <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.1] tracking-tight">
                        Transforme seu <span className="text-[#14b8a6] italic font-serif font-normal">sorriso</span>.<br />
                        Transforme sua vida.
                    </h1>

                    {/* Descrição Limpa com Excelente Contraste */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl font-medium leading-relaxed font-sans">
                        Lentes de contato e implantes digitais são apenas o começo. Aqui, seu sorriso é planejado, personalizado e transformado — até você se redescobrir ao sorrir.
                    </p>

                    {/* Botões do Banner */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
                        {/* Botão Principal Teal Cápsula */}
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#14b8a6] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#0f766e] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-xs md:text-sm shadow-[0_10px_25px_rgba(20,184,166,0.3)]"
                        >
                            Quero Transformar Meu Sorriso
                            <ArrowRight size={16} />
                        </a>

                        {/* Botão Secundário Transparente */}
                        <a 
                            href="#tratamentos" 
                            className="border border-white/40 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-xs md:text-sm"
                        >
                            Como Funciona
                        </a>
                    </div>
                </motion.div>
            </div>
            
            {/* Indicador de Rolagem Minimalista no Canto Inferior (Oculto em telas muito pequenas) */}
            <div className="absolute bottom-8 left-6 sm:left-12 hidden md:flex items-center gap-3 opacity-50">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest">Role para explorar</span>
                <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden rounded-full">
                    <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-1/2 bg-[#14b8a6] absolute left-0 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
