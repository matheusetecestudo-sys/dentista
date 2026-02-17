
import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        title: 'Lentes de Contato',
        desc: 'Transformação completa do sorriso em 3 sessões.',
        img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Implante Total',
        desc: 'Reabilitação oral com protocolo cerâmico.',
        img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Clareamento a Laser',
        desc: 'Resultado natural e brilhante.',
        img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

const BeforeAfter = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="bg-medical-light py-20" id="resultados">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Galeria de Sorrisos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Transformações Reais</h2>
                    <p className="text-gray-600 mt-4">Confira alguns dos sorrisos que ajudamos a construir.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <motion.div
                            layoutId={`card-${item.id}`}
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group h-80"
                        >
                            <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-300 line-clamp-2">{item.desc}</p>
                                <div className="mt-4 flex items-center text-medical-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <ZoomIn className="w-4 h-4 mr-2" /> Ver detalhes
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={`modal-${selectedId}`}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white" onClick={() => setSelectedId(null)}>
                                    <X size={24} />
                                </button>
                                {cases.filter(c => c.id === selectedId).map(c => (
                                    <div key={c.id}>
                                        <img src={c.img} alt={c.title} className="w-full h-96 object-cover" />
                                        <div className="p-8">
                                            <h3 className="text-2xl font-bold text-medical-primary mb-2">{c.title}</h3>
                                            <p className="text-gray-600 mb-4">{c.desc}</p>
                                            <div className="flex gap-4">
                                                <a href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Vi%20esse%20resultado%20no%20site%20e%20gostaria%20de%20saber%20mais." className="flex-1 bg-medical-secondary text-white font-bold py-3 text-center rounded-lg hover:bg-opacity-90 transition">
                                                    Quero esse resultado
                                                </a>
                                            </div>
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

export default BeforeAfter;
