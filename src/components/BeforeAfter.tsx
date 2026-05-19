import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        title: 'Lentes de Contato Dental',
        desc: 'Sorriso alinhado, harmônico e natural com facetas de porcelana pura de espessura ultrafina.',
        img: '/exemplo01.png',
    },
    {
        id: 2,
        title: 'Implante Total Cerâmico',
        desc: 'Reabilitação total fixa sobre implantes para devolver mastigação, fonética e suporte labial.',
        img: '/exemplo 03.png',
    },
    {
        id: 3,
        title: 'Clareamento Avançado',
        desc: 'Remoção de manchas profundas e resgate do branco natural dos dentes de forma segura.',
        img: '/exemplo 02.png',
    },
];

const BeforeAfter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % cases.length);
    };
    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    };

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden relative" id="resultados">
            {/* Decorações premium de fundo */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.03),transparent_70%)] blur-[80px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] blur-[80px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6">
                
                {/* Cabeçalho Centralizado Padronizado */}
                <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        Galeria de Excelência
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Transformações <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Reais</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed"
                    >
                        Resultados reais de pacientes que recuperaram a autoestima e a segurança ao sorrir. Cada transformação é planejada digitalmente e executada com precisão absoluta.
                    </motion.p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Grid Desktop (Escondido no mobile, exibido em md+) */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {cases.map((item, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                key={item.id}
                                className="h-full"
                            >
                                <CaseCard item={item} />
                            </motion.div>
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
                                    <CaseCard item={cases[currentIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Paginação por Dots */}
                        <div className="flex justify-center gap-2.5 mt-8">
                            {cases.map((_, idx) => (
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
                            <button onClick={prev} className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CaseCard = ({ item }: { item: any }) => (
    <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 bg-white flex flex-col h-full">
        {/* Imagem em proporção perfeita (rosto completo, sem cortes) */}
        <div className="w-full aspect-[3/2] overflow-hidden relative bg-gray-50">
            <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103" 
            />
        </div>

        {/* Informações detalhadas e alinhadas abaixo da imagem (não obstrui o rosto) */}
        <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white">
            <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A1128] mb-3 leading-tight">
                    {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed mb-6">
                    {item.desc}
                </p>
            </div>
            
            <a 
                href={`https://wa.me/5511992876219?text=Olá! Gostaria de ter um resultado incrível como o do caso de ${encodeURIComponent(item.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-50 hover:bg-teal-100 text-teal-700 py-3.5 px-6 rounded-2xl font-bold transition-colors duration-300 w-full uppercase tracking-wider text-xs sm:text-sm"
            >
                Quero este Sorriso
            </a>
        </div>
    </div>
);

export default BeforeAfter;
