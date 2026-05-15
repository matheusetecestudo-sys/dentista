
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
        <section className="bg-medical-light py-20" id="tratamentos">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Nossos Serviços</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Tratamentos de Alta Performance</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Excelência técnica e tecnologia de ponta para transformar sua saúde bucal e elevar sua autoestima.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {treatments.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col group"
                        >
                            {/* 50% Image Section */}
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* 50% Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-medical-primary mb-2 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-xs leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                <a 
                                    href="https://wa.me/5511992876219" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between bg-medical-secondary/10 text-medical-secondary px-4 py-2.5 rounded-xl font-bold hover:bg-medical-secondary hover:text-white transition-all duration-300 group/btn text-sm"
                                >
                                    Agendar Agora
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
