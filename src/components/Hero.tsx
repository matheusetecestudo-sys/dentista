import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-start overflow-hidden bg-[#02050A]" id="inicio">
            {/* Imagem de Fundo de Alta Resolução - Ocupa toda a tela de forma nítida */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/banner01 (4).png"
                    alt="Clínica DUNO Odontologia"
                    className="w-full h-full object-cover opacity-100 object-center"
                />
                
                {/* Overlay de gradiente sofisticado e sutil para garantir legibilidade perfeita da fonte branca */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/70 via-transparent to-black/35"></div>
            </div>

            {/* Conteúdo Alinhado à Esquerda Estilo Duno Nutrição */}
            <div className="container mx-auto px-6 sm:px-12 relative z-10 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start text-left space-y-6 sm:space-y-8 max-w-4xl"
                >
                    {/* Badge de Destaque com Linha Verde Horizontal */}
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-[2px] bg-[#10b981]"></span>
                        <span className="text-[11px] sm:text-xs font-bold text-[#10b981] uppercase tracking-widest">
                            Tecnologia e Acolhimento
                        </span>
                    </div>

                    {/* Título Serifado de Luxo com Itálico Verde */}
                    <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.08] tracking-tight">
                        Transforme seu <span className="text-[#10b981] italic font-serif font-normal">sorriso</span>.<br />
                        Transforme sua vida.
                    </h1>

                    {/* Descrição Limpa, Alinhada e Focada no Propósito */}
                    <p className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed font-sans">
                        Lentes de contato e implantes digitais são apenas o começo. Aqui, seu sorriso é planejado, personalizado e transformado — até você se redescobrir ao sorrir.
                    </p>

                    {/* Botões Alinhados à Esquerda */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
                        {/* Botão Principal Verde Cápsula */}
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#10b981] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#0d9488] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-xs sm:text-sm shadow-[0_10px_25px_rgba(16,185,129,0.3)]"
                        >
                            Quero Transformar Meu Sorriso
                            <ArrowRight size={16} />
                        </a>

                        {/* Botão Secundário Transparente */}
                        <a 
                            href="#tratamentos" 
                            className="border border-white/40 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-xs sm:text-sm"
                        >
                            Como Funciona
                        </a>
                    </div>
                </motion.div>
            </div>
            
            {/* Indicador de Rolagem Minimalista no Canto Inferior */}
            <div className="absolute bottom-8 left-12 hidden md:flex items-center gap-3 opacity-50">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest">Role para explorar</span>
                <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden rounded-full">
                    <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-1/2 bg-[#10b981] absolute left-0 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
