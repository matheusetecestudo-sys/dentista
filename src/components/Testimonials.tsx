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
        <section className="bg-gray-50 py-16 sm:py-20 overflow-hidden" id="depoimentos">
            <div className="container mx-auto px-6">
                
                {/* Cabeçalho */}
                <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        O que dizem de nós
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        A prova incontestável da nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">excelência</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-7xl mx-auto">
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
                                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-teal-500' : 'w-2.5 bg-gray-200'}`}
                                    aria-label={`Ir para slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Setas de Controle */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button onClick={prev} className="w-14 h-14 rounded-full bg-white border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full bg-white border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
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
        className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] relative border border-blue-500/10 hover:border-teal-500/45 transition-all duration-500 h-full flex flex-col shadow-[0_10px_35px_rgba(59,130,246,0.02)] hover:shadow-[0_20px_50px_rgba(13,148,136,0.06)] group"
    >
        <div className="absolute top-8 right-8 sm:top-10 sm:right-10 text-blue-50 group-hover:text-teal-100/30 transition-colors duration-500">
            <Quote size={48} className="transform rotate-180" />
        </div>

        <div className="flex gap-1.5 mb-6 sm:mb-8 relative z-10">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
            ))}
        </div>

        <p className="text-[#0A1128] text-sm sm:text-base md:text-lg leading-relaxed flex-grow mb-8 sm:mb-12 font-semibold relative z-10">
            "{review.text}"
        </p>

        <div className="flex items-center gap-4 pt-6 sm:pt-8 border-t border-gray-100 relative z-10">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-sm border-2 border-white" />
            <div>
                <h4 className="font-black text-[#0A1128] text-sm sm:text-base">{review.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600 mt-1">{review.city}</p>
            </div>
        </div>
    </motion.div>
);

export default Testimonials;
