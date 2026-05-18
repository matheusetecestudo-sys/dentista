import { useState } from 'react';
import { ZoomIn, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        title: 'Lentes de Contato Dental',
        desc: 'Reabilitação estética superior com lentes de porcelana ultra-finas. Correção milimétrica de formato, alinhamento e cor para máxima naturalidade.',
        img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
        id: 2,
        title: 'Implante Total Cerâmico',
        desc: 'Protocolo de reabilitação oral completa utilizando implantes de zircônia importados. Devolução perfeita da mastigação e do sorriso estético.',
        img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
    {
        id: 3,
        title: 'Clareamento Avançado',
        desc: 'Resultado brilhante de clareamento a laser combinado com moldeira personalizada. Dentes visivelmente mais brancos sem gerar sensibilidade.',
        img: 'https://images.unsplash.com/photo-1595475243560-f9e558603463?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
    },
];

const BeforeAfter = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

    return (
        <section className="bg-white py-32 overflow-hidden" id="resultados">
            <div className="container mx-auto px-6">
                
                {/* Cabeçalho Centralizado Padronizado */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
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
                        className="text-gray-500 mt-6 text-base sm:text-lg font-medium leading-relaxed"
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
        className="relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-teal-200 transition-all duration-500 group h-[480px] bg-gray-50 flex flex-col justify-end"
    >
        {/* Imagem de Fundo de Alta Qualidade */}
        <img 
            src={item.img} 
            alt={item.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
        />
        
        {/* Overlay escuro de alta legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/35 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Conteúdo do Card */}
        <div className="relative z-10 p-8 sm:p-10 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-tight tracking-tight">{item.title}</h3>
            <p className="text-xs sm:text-sm text-white/70 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 font-medium leading-relaxed">
                {item.desc}
            </p>
            <div className="flex items-center text-teal-400 text-xs sm:text-sm font-black uppercase tracking-widest gap-2">
                <ZoomIn className="w-5 h-5" /> 
                <span>Ampliar Resultado</span>
            </div>
        </div>
    </div>
);

export default BeforeAfter;
