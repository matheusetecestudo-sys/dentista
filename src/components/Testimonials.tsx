import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
    {
        name: 'Ana Paula S.',
        city: 'Empresária',
        text: 'Nível de excelência absurdo. Fiz as lentes de contato e o resultado ficou tão natural que ninguém percebe que é cerâmica. Atendimento digno de hotel 5 estrelas.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
        name: 'Carlos Mendes',
        city: 'Advogado',
        text: 'O protocolo de implante total mudou minha vida. A precisão tecnológica e a ausência de dor durante todo o processo me deixaram impressionado. Vale cada centavo.',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
        name: 'Mariana Costa',
        city: 'Arquiteta',
        text: 'Atenção aos detalhes impecável. O planejamento digital do meu sorriso me permitiu ver o resultado antes mesmo de começar. A clínica é lindíssima.',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };
    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="bg-[#050B14] py-16 sm:py-24 overflow-hidden relative text-white" id="depoimentos">
            {/* Decorações Premium de Fundo - Glows suaves para dar profundidade */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06),transparent_70%)] blur-[80px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_70%)] blur-[100px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Cabeçalho de Luxo Centralizado */}
                <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#14b8a6] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block font-sans"
                    >
                        O que dizem de nós
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 tracking-tight leading-tight"
                    >
                        A prova de nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">excelência</span>
                    </motion.h2>
                    <div className="w-16 h-[2px] bg-[#14b8a6] mx-auto mt-6"></div>
                </div>

                <div className="relative max-w-7xl mx-auto z-10">
                    {/* Grid Desktop (Escondido no mobile, exibido em md+) */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <TestimonialCard key={index} review={review} delay={index * 0.1} />
                        ))}
                    </div>

                    {/* Carrossel Mobile (Escondido no desktop, exibido sob md) */}
                    <div className="md:hidden">
                        <div className="overflow-hidden relative min-h-[380px] flex items-center justify-center">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div 
                                    key={currentIndex}
                                    custom={direction}
                                    variants={{
                                        enter: (dir: number) => ({
                                            x: dir > 0 ? '100%' : '-100%',
                                            opacity: 0
                                        }),
                                        center: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        exit: (dir: number) => ({
                                            x: dir < 0 ? '100%' : '-100%',
                                            opacity: 0
                                        })
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragEnd={(_, info) => {
                                        const swipeThreshold = 50;
                                        if (info.offset.x < -swipeThreshold) {
                                            next();
                                        } else if (info.offset.x > swipeThreshold) {
                                            prev();
                                        }
                                    }}
                                    className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
                                >
                                    <TestimonialCard review={reviews[currentIndex]} delay={0} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Paginação por Dots */}
                        <div className="flex justify-center gap-2.5 mt-8">
                            {reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#14b8a6]' : 'w-2.5 bg-white/20'}`}
                                    aria-label={`Ir para slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Setas de Controle */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button onClick={prev} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#14b8a6] hover:border-[#14b8a6] transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#14b8a6] hover:border-[#14b8a6] transition-all shadow-sm">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const TestimonialCard = ({ review, delay }: { review: any, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white/[0.02] backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] relative border border-white/5 hover:border-[#14b8a6]/30 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col shadow-[0_15px_45px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] group overflow-hidden"
    >
        {/* Glow de fundo interno do card no hover */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500 pointer-events-none"></div>

        {/* Ícone de Aspas Duplas */}
        <div className="absolute top-8 right-8 sm:top-10 sm:right-10 text-white/5 group-hover:text-[#14b8a6]/10 transition-colors duration-500 pointer-events-none">
            <Quote size={48} className="transform rotate-180" />
        </div>

        {/* Estrelas com tom dourado */}
        <div className="flex gap-1.5 mb-6 sm:mb-8 relative z-10">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#FBBF24] fill-current shadow-sm" />
            ))}
        </div>

        {/* Depoimento em Fonte Serifada e Elegante */}
        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed flex-grow mb-8 sm:mb-12 font-medium italic relative z-10 font-serif">
            "{review.text}"
        </p>

        {/* Autor com Avatar e Glow */}
        <div className="flex items-center gap-4 pt-6 sm:pt-8 border-t border-white/5 relative z-10">
            <div className="relative">
                <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg border border-white/10" 
                />
                <div className="absolute inset-0 rounded-full border border-[#14b8a6]/20 group-hover:border-[#14b8a6]/50 transition-colors duration-300 pointer-events-none"></div>
            </div>
            <div>
                <h4 className="font-bold text-white text-sm sm:text-base tracking-wide font-sans">{review.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#14b8a6] mt-1 font-sans">{review.city}</p>
            </div>
        </div>
    </motion.div>
);

export default Testimonials;
