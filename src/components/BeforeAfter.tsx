import { useState } from 'react';
import { ZoomIn, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        title: 'Lentes de Contato Dental',
        desc: 'Sorriso alinhado, harmônico e natural com facetas de porcelana pura.',
        img: '/exemplo01.png',
    },
    {
        id: 2,
        title: 'Implante Total Cerâmico',
        desc: 'Reabilitação total fixa para devolver mastigação e suporte labial.',
        img: '/exemplo 03.png',
    },
    {
        id: 3,
        title: 'Clareamento Avançado',
        desc: 'Remoção de manchas profundas e resgate do branco natural dos dentes.',
        img: '/exemplo 02.png',
    },
];

const BeforeAfter = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden" id="resultados">
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
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            <div className="hidden md:contents">
                                {cases.map((item, i) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        key={item.id}
                                    >
                                        <CaseCard item={item} onClick={() => setSelectedId(item.id)} />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="md:hidden">
                                <CaseCard item={cases[currentIndex]} onClick={() => setSelectedId(cases[currentIndex].id)} />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Setas de Controle no Mobile */}
                    <div className="flex justify-center gap-4 mt-12 md:hidden">
                        <button onClick={prev} className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Modal de Zoom do Estudo de Caso */}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02050A]/95 p-4 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-[#02050A] rounded-3xl overflow-hidden max-w-4xl w-full relative flex flex-col md:flex-row shadow-2xl border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button 
                                    className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 rounded-full text-white transition-colors border border-white/10" 
                                    onClick={() => setSelectedId(null)}
                                >
                                    <X size={20} />
                                </button>
                                {cases.filter(c => c.id === selectedId).map(c => (
                                    <div key={c.id} className="flex flex-col md:flex-row w-full text-white">
                                        <div className="md:w-1/2 h-72 md:h-[500px]">
                                            <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center bg-[#050B14]">
                                            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs mb-4 block">Estudo de Caso</span>
                                            <h3 className="text-3xl font-black text-white mb-4 leading-tight">{c.title}</h3>
                                            <p className="text-white/60 mb-10 text-base sm:text-lg leading-relaxed">{c.desc}</p>
                                            <a 
                                                href={`https://wa.me/5511992876219?text=Olá! Gostaria de ter um resultado incrível como o do caso de ${encodeURIComponent(c.title)}.`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-[#02050A] font-bold py-5 px-8 rounded-2xl hover:bg-teal-50 transition-all duration-300 flex items-center justify-center gap-3 group/btn uppercase tracking-widest text-sm shadow-xl"
                                            >
                                                Quero esse resultado
                                                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const CaseCard = ({ item, onClick }: { item: any, onClick: () => void }) => (
    <div
        onClick={onClick}
        className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-teal-200 transition-all duration-500 group bg-white flex flex-col"
    >
        {/* Imagem em proporção perfeita (rosto completo, sem cortes) */}
        <div className="w-full aspect-[3/2] overflow-hidden relative bg-gray-50">
            <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
            />
            {/* Lente de zoom sutil no hover */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/95 text-[#0A1128] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                    <ZoomIn className="w-5 h-5 text-teal-600" />
                </div>
            </div>
        </div>

        {/* Informações detalhadas e alinhadas abaixo da imagem (não obstrui o rosto) */}
        <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white">
            <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A1128] mb-2 leading-tight group-hover:text-teal-600 transition-colors">
                    {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed mb-4 line-clamp-2">
                    {item.desc}
                </p>
            </div>
            <div className="flex items-center text-teal-600 text-xs sm:text-sm font-black uppercase tracking-widest gap-2">
                <span>Ampliar Resultado</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </div>
);

export default BeforeAfter;
