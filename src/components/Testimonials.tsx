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

    const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="bg-gray-50 py-32 overflow-hidden" id="depoimentos">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-3"
                        >
                            <div className="w-10 h-[2px] bg-blue-600"></div>
                            O que dizem de nós
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1128] mt-6 tracking-tight leading-tight"
                        >
                            A prova incontestável da nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">excelência.</span>
                        </motion.h2>
                    </div>
                    
                    <div className="hidden md:flex gap-4 pb-4">
                        <button onClick={prev} className="w-14 h-14 rounded-full bg-white border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-md">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="w-14 h-14 rounded-full bg-white border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-md">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            <div className="hidden md:contents">
                                {reviews.map((review, index) => (
                                    <TestimonialCard key={index} review={review} delay={index * 0.1} />
                                ))}
                            </div>
                            <div className="md:hidden flex justify-center">
                                <TestimonialCard review={reviews[currentIndex]} delay={0} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Arrows Mobile */}
                <div className="flex justify-center gap-6 mt-12 md:hidden">
                    <button onClick={prev} className="w-16 h-16 rounded-full bg-white border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-md">
                        <ChevronLeft size={28} />
                    </button>
                    <button onClick={next} className="w-16 h-16 rounded-full bg-white border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-md">
                        <ChevronRight size={28} />
                    </button>
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
        className="bg-white p-12 rounded-[2.5rem] relative border border-blue-500/20 hover:border-blue-500/80 transition-all duration-500 h-full flex flex-col shadow-[0_10px_35px_rgba(59,130,246,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] group"
    >
        <div className="absolute top-10 right-10 text-blue-50 group-hover:text-blue-100/50 transition-colors duration-500">
            <Quote size={64} className="transform rotate-180" />
        </div>

        <div className="flex gap-2 mb-8 relative z-10">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-current" />
            ))}
        </div>

        <p className="text-[#0A1128]/80 text-lg leading-relaxed flex-grow mb-12 font-medium relative z-10">
            "{review.text}"
        </p>

        <div className="flex items-center gap-5 pt-8 border-t border-gray-100 relative z-10">
            <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white" />
            <div>
                <h4 className="font-black text-[#0A1128] text-lg">{review.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mt-1">{review.city}</p>
            </div>
        </div>
    </motion.div>
);

export default Testimonials;
