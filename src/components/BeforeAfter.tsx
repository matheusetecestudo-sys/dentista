import { useState } from 'react';
import { ZoomIn, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        title: 'Lentes de Contato',
        desc: 'Transformação estética superior em 3 sessões. Naturalidade e resistência.',
        img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Implante Total Cerâmico',
        desc: 'Reabilitação oral de alta complexidade com protocolo suíço.',
        img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Clareamento Avançado',
        desc: 'Resultado brilhante e sem sensibilidade com tecnologia a laser.',
        img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Galeria de Excelência
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Transformações <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Reais</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg font-medium"
                    >
                        Não vendemos apenas tratamentos. Entregamos autoconfiança inabalável. Veja alguns de nossos casos de sucesso mais impactantes.
                    </motion.p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
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

                    {/* Arrows Mobile */}
                    <div className="flex justify-center gap-4 mt-12 md:hidden">
                        <button onClick={prev} className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1128]/90 p-4 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative flex flex-col md:flex-row shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md hover:bg-white p-3 rounded-full text-[#0A1128] transition-colors" onClick={() => setSelectedId(null)}>
                                    <X size={20} />
                                </button>
                                {cases.filter(c => c.id === selectedId).map(c => (
                                    <div key={c.id} className="flex flex-col md:flex-row w-full">
                                        <div className="md:w-1/2 h-64 md:h-auto">
                                            <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center bg-gray-50">
                                            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">Estudo de Caso</span>
                                            <h3 className="text-3xl font-black text-[#0A1128] mb-4 leading-tight">{c.title}</h3>
                                            <p className="text-gray-500 mb-10 text-lg leading-relaxed">{c.desc}</p>
                                            <a 
                                                href="https://wa.me/5511992876219" 
                                                className="bg-[#0A1128] text-white font-bold py-5 px-8 rounded-2xl hover:bg-teal-600 transition-all duration-300 flex items-center justify-center gap-3 group/btn uppercase tracking-widest text-sm shadow-xl"
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
        className="relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl group h-[500px] bg-gray-100"
    >
        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 p-10 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl font-black mb-3">{item.title}</h3>
            <p className="text-sm text-white/70 line-clamp-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">{item.desc}</p>
            <div className="flex items-center text-teal-400 text-sm font-black uppercase tracking-widest">
                <ZoomIn className="w-5 h-5 mr-3" /> Ampliar Resultado
            </div>
        </div>
    </div>
);

export default BeforeAfter;
