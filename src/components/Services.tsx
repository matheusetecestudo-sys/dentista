import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const treatments = [
    {
        title: 'Implantes Dentários',
        description: 'Sorriso completo e seguro com tecnologia avançada de reposição.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Lentes de Contato',
        description: 'Estética de alto padrão para um sorriso perfeito e natural.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Invisalign',
        description: 'Alinhadores invisíveis e removíveis para máxima discrição.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Clareamento Dental',
        description: 'Dentes brancos e radiantes com protocolos exclusivos e seguros.',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1931&auto=format&fit=crop',
    },
    {
        title: 'Prótese Dentária',
        description: 'Recupere a função mastigatória e a beleza do seu sorriso.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Harmonização Facial',
        description: 'Realce sua beleza natural com procedimentos sutis e modernos.',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Endodontia (Canal)',
        description: 'Tratamento de precisão indolor para salvar seus dentes.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Check-up & Limpeza',
        description: 'Prevenção essencial para manter sua saúde bucal sempre em dia.',
        image: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop',
    },
];

const Services = () => {
    return (
        <section className="bg-gray-50 py-24" id="tratamentos">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Nossos Serviços
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Tratamentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Alta Performance</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
                    >
                        Excelência técnica e tecnologia de ponta para transformar sua saúde bucal e elevar sua autoestima com resultados inigualáveis.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {treatments.map((service, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-teal-100 hover:shadow-[0_20px_40px_rgba(13,148,136,0.1)] transition-all duration-500 flex flex-col group cursor-pointer"
                        >
                            {/* Imagem */}
                            <div className="h-48 md:h-64 overflow-hidden relative">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-5 md:p-8 flex flex-col flex-grow relative bg-white z-10 -mt-4 rounded-t-3xl transition-transform duration-500">
                                <h3 className="text-lg md:text-xl font-black text-[#0A1128] mb-2 leading-tight group-hover:text-teal-600 transition-colors">
                                    {service.title}
                               </h3>
                                <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-grow font-medium">
                                    {service.description}
                                </p>
                                <a 
                                    href="https://wa.me/5511992876219" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between bg-gray-50 text-[#0A1128] px-5 py-3 rounded-2xl font-bold group-hover:bg-teal-50 group-hover:text-teal-700 transition-all duration-300 w-full text-sm"
                                >
                                    <span>Saber Mais</span>
                                    <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
