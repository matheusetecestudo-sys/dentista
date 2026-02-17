
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="bg-white py-20" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Nossa Estrutura</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Tecnologia e Conforto</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Um ambiente pensado nos mínimos detalhes para que sua experiência seja tranquila e segura.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden group rounded-xl h-64 shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicGallery;
