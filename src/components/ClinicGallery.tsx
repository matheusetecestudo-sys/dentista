
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Recepção Moderna"
    },
    {
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Sala de Atendimento"
    },
    {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Equipamentos de Ponta"
    },
    {
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Área de Esterilização"
    }
];

const ClinicGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Nossa Estrutura</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Tecnologia e Conforto</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl">
                            Um ambiente pensado nos mínimos detalhes para que sua experiência seja tranquila e segura.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={prev}
                            className="w-12 h-12 rounded-full border-2 border-medical-primary text-medical-primary flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={next}
                            className="w-12 h-12 rounded-full border-2 border-medical-primary text-medical-primary flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-4 gap-4"
                        >
                            <div className="hidden md:contents">
                                {images.map((img, index) => (
                                    <GalleryImage key={index} img={img} />
                                ))}
                            </div>
                            <div className="md:hidden">
                                <GalleryImage img={images[currentIndex]} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots for mobile */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-medical-secondary' : 'w-2 bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GalleryImage = ({ img }: { img: any }) => (
    <div className="relative overflow-hidden group rounded-2xl h-80 shadow-lg cursor-pointer border-2 border-medical-primary/5">
        <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</p>
        </div>
    </div>
);

export default ClinicGallery;
