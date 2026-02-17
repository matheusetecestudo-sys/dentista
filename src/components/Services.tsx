
import { ArrowRight } from 'lucide-react';
import { FaTooth, FaTeeth, FaTeethOpen, FaMagic, FaChild, FaNotesMedical, FaSyringe, FaRegSmileBeam, FaMedkit } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';

const treatments = [
    {
        title: 'Implantes Dentários',
        description: 'Reabilitação completa com raízes artificiais de titânio. Segurança e estabilidade para sorrir e mastigar.',
        icon: <FaTooth className="w-10 h-10 text-medical-primary" />,
    },
    {
        title: 'Lentes de Contato',
        description: 'Facetas ultrafinas de porcelana para corrigir cor, formato e tamanho dos dentes. Estética de alto padrão.',
        icon: <FaRegSmileBeam className="w-10 h-10 text-medical-secondary" />,
    },
    {
        title: 'Ortodontia Digital',
        description: 'Alinhadores invisíveis e aparelhos estéticos modernos para corrigir sua mordida com discrição.',
        icon: <FaTeeth className="w-10 h-10 text-medical-primary" />,
    },
    {
        title: 'Clareamento Dental',
        description: 'Protocolos seguros a laser ou caseiro para um sorriso branco, radiante e sem sensibilidade.',
        icon: <FaMagic className="w-10 h-10 text-medical-secondary" />,
    },
    {
        title: 'Endodontia (Canal)',
        description: 'Tecnologia rotatória para tratamentos de canal rápidos, precisos e, o mais importante, sem dor.',
        icon: <FaNotesMedical className="w-10 h-10 text-medical-primary" />,
    },
    {
        title: 'Prótese Dentária',
        description: 'Devolva a função e a estética com próteses fixas ou móveis confeccionadas com materiais nobres.',
        icon: <FaTeethOpen className="w-10 h-10 text-medical-secondary" />,
    },
    {
        title: 'Periodontia',
        description: 'Tratamento e prevenção de doenças gengivais (gengivite e periodontite), fundamentais para a saúde sistêmica.',
        icon: <GiHealthNormal className="w-10 h-10 text-medical-primary" />,
    },
    {
        title: 'Cirurgias e Extrações',
        description: 'Remoção de sisos e cirurgias orais menores realizadas com técnicas minimamente invasivas.',
        icon: <FaSyringe className="w-10 h-10 text-medical-secondary" />,
    },
    {
        title: 'Harmonização Orofacial',
        description: 'Procedimentos estéticos (Botox, Preenchimentos) que integram o sorriso com a beleza do rosto.',
        icon: <FaMedkit className="w-10 h-10 text-medical-primary" />,
    },
    {
        title: 'Odontopediatria',
        description: 'Cuidado especializado para bebês e crianças, focando em prevenção e crescimento saudável (livre de traumas).',
        icon: <FaChild className="w-10 h-10 text-medical-secondary" />,
    },
];

const Services = () => {
    return (
        <section className="bg-medical-light py-20" id="tratamentos">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Nossos Serviços</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Tratamentos completíssimos para sua saúde bucal</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Na OdontoPremium, oferecemos todas as especialidades da odontologia moderna em um só lugar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {treatments.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-100 flex flex-col">
                            <div className="bg-medical-light rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-medical-primary/10 transition-colors self-start">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-medical-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">{service.description}</p>
                            <a href="https://wa.me/5511992876219" className="inline-flex items-center text-medical-secondary font-semibold hover:text-medical-primary transition-colors gap-2 text-sm mt-auto">
                                Agendar Avaliação <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
