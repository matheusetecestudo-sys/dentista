import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#02050A]" id="inicio">
            {/* LAYOUT MOBILE (Exibido apenas em telas menores que lg - Imagem visível por completo) */}
            <div className="lg:hidden flex flex-col w-full pt-[76px]">
                {/* Imagem Inteira sem cortes em Proporção de Tela Larga */}
                <div className="w-full aspect-[16/10] relative bg-[#02050A]">
                    <img
                        src="/banner01 (4).png"
                        alt="Clínica DUNO Odontologia"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradiente suave inferior para mesclar a imagem com o fundo preto do texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-transparent to-black/20"></div>
                </div>

                {/* Conteúdo de Texto abaixo da Imagem - Sem sobreposição */}
                <div className="px-6 py-10 flex flex-col items-start text-left space-y-5 bg-[#02050A]">
                    {/* Badge */}
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#14b8a6]"></span>
                        <span className="text-[10px] font-bold text-[#14b8a6] uppercase tracking-widest">
                            Tecnologia e Acolhimento
                        </span>
                    </div>

                    {/* Título */}
                    <h1 className="font-serif text-3xl xs:text-4xl text-white font-bold leading-[1.12] tracking-tight">
                        Transforme seu <span className="text-[#14b8a6] italic font-serif font-normal">sorriso</span>.<br />
                        Transforme sua vida.
                    </h1>

                    {/* Descrição */}
                    <p className="text-sm text-white/85 font-medium leading-relaxed font-sans">
                        Lentes de contato e implantes digitais são apenas o começo. Aqui, seu sorriso é planejado, personalizado e transformado — até você se redescobrir ao sorrir.
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col items-stretch gap-4 pt-2 w-full">
                        <a 
                            href="https://wa.me/5511992876219" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#14b8a6] text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#0f766e] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-xs shadow-[0_10px_25px_rgba(20,184,166,0.3)]"
                        >
                            Quero Transformar Meu Sorriso
                            <ArrowRight size={14} />
                        </a>

                        <a 
                            href="#tratamentos" 
                            className="border border-white/40 text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center text-xs"
                        >
                            Como Funciona
                        </a>
                    </div>
                </div>
            </div>

            {/* LAYOUT DESKTOP (Exibido apenas em lg e telas maiores - Fullscreen com texto sobreposto) */}
            <div className="hidden lg:flex relative min-h-[100dvh] w-full items-center justify-start pt-32 pb-24">
                {/* Imagem de Fundo de Alta Resolução */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <img
                        src="/banner01 (4).png"
                        alt="Clínica DUNO Odontologia"
                        className="w-full h-full object-cover opacity-100 object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/85 via-transparent to-black/40"></div>
                </div>

                {/* Conteúdo Alinhado à Esquerda */}
                <div className="container mx-auto px-12 relative z-10 max-w-7xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start text-left space-y-6 max-w-4xl"
                    >
                        {/* Badge de Destaque com Linha Teal do Site */}
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-[#14b8a6]"></span>
                            <span className="text-xs font-bold text-[#14b8a6] uppercase tracking-widest">
                                Tecnologia e Acolhimento
                            </span>
                        </div>

                        {/* Título Serifado de Luxo com Itálico Teal */}
                        <h1 className="font-serif lg:text-7xl text-white font-bold leading-[1.1] tracking-tight">
                            Transforme seu <span className="text-[#14b8a6] italic font-serif font-normal">sorriso</span>.<br />
                            Transforme sua vida.
                        </h1>

                        {/* Descrição Limpa */}
                        <p className="lg:text-lg text-white/90 max-w-2xl font-medium leading-relaxed font-sans">
                            Lentes de contato e implantes digitais são apenas o começo. Aqui, seu sorriso é planejado, personalizado e transformado — até você se redescobrir ao sorrir.
                        </p>

                        {/* Botões Teal */}
                        <div className="flex items-center gap-4 pt-2">
                            <a 
                                href="https://wa.me/5511992876219" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#14b8a6] text-white px-10 py-4.5 rounded-full font-bold uppercase tracking-widest hover:bg-[#0f766e] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-sm shadow-[0_10px_25px_rgba(20,184,166,0.3)]"
                            >
                                Quero Transformar Meu Sorriso
                                <ArrowRight size={16} />
                            </a>

                            <a 
                                href="#tratamentos" 
                                className="border border-white/40 text-white px-10 py-4.5 rounded-full font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-sm"
                            >
                                Como Funciona
                            </a>
                        </div>
                    </motion.div>
                </div>
                
                {/* Indicador de Rolagem Minimalista no Canto Inferior */}
                <div className="absolute bottom-8 left-12 flex items-center gap-3 opacity-50">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">Role para explorar</span>
                    <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden rounded-full">
                        <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="h-full w-1/2 bg-[#14b8a6] absolute left-0 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
