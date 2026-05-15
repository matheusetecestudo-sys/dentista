
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
    {
        name: 'Ana Paula Silva',
        city: 'São Paulo, SP',
        text: 'Profissionais incríveis! Fiquei muito satisfeita com meu clareamento, resultado super natural. O atendimento é nota 10.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
        name: 'Carlos Oliveira',
        city: 'Campinas, SP',
        text: 'Faço tratamento de implante e estou impressionado com a tecnologia e cuidado da equipe. Recomendo de olhos fechados!',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
        name: 'Mariana Costa',
        city: 'São Paulo, SP',
        text: 'Amei o resultado das minhas lentes de contato. Mudou minha autoestima! Ambiente super moderno e acolhedor.',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="bg-white py-20 overflow-hidden" id="depoimentos">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-medical-secondary"></div>
                            Voz dos Pacientes
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-medical-primary mt-4">Depoimentos que inspiram confiança</h2>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            <div className="hidden md:contents">
                                {reviews.map((review, index) => (
                                    <TestimonialCard key={index} review={review} />
                                ))}
                            </div>
                            <div className="md:hidden flex justify-center">
                                <TestimonialCard review={reviews[currentIndex]} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Arrows BELOW the cards */}
                <div className="flex justify-center gap-6 mt-12 md:hidden">
                    <button 
                        onClick={prev}
                        className="w-16 h-16 rounded-full border-2 border-medical-primary text-medical-primary flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all duration-300 shadow-xl active:scale-90"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button 
                        onClick={next}
                        className="w-16 h-16 rounded-full border-2 border-medical-primary text-medical-primary flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all duration-300 shadow-xl active:scale-90"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Progress Bar instead of dots for elite look */}
                <div className="mt-12 w-full max-w-xs mx-auto bg-gray-100 h-1.5 rounded-full overflow-hidden hidden md:block">
                    <motion.div 
                        className="h-full bg-medical-secondary"
                        animate={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ review }: { review: any }) => (
    <div className="bg-white p-10 rounded-[2.5rem] relative border-2 border-medical-secondary/40 hover:border-medical-secondary transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl">
        <div className="absolute top-8 right-8 text-medical-secondary/20 group-hover:text-medical-secondary/40 transition-colors">
            <Quote size={48} />
        </div>

        <div className="flex items-center gap-5 mb-8">
            <div className="relative">
                <img src={review.avatar} alt={review.name} className="w-18 h-18 rounded-2xl object-cover shadow-xl" />
                <div className="absolute -bottom-2 -right-2 bg-medical-secondary text-white p-1.5 rounded-lg shadow-lg">
                    <Star size={14} fill="currentColor" />
                </div>
            </div>
            <div>
                <h4 className="font-extrabold text-medical-primary text-lg">{review.name}</h4>
                <p className="text-sm font-medium text-medical-secondary">{review.city}</p>
            </div>
        </div>

        <p className="text-gray-600 italic text-lg leading-relaxed flex-grow">
            "{review.text}"
        </p>

        <div className="mt-8 flex gap-1.5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
            ))}
        </div>
    </div>
);

export default Testimonials;
