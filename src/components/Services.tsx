
import { Sparkles, Smile, ShieldCheck, Activity, Layers, ArrowRight } from 'lucide-react';

const treatments = [
    {
        title: 'Implantes Dentários',
        description: 'Recupere a função e estética do seu sorriso com implantes de alta durabilidade e aparência natural.',
        icon: <ShieldCheck className="w-12 h-12 text-medical-primary" />,
    },
    {
        title: 'Clareamento Dental',
        description: 'Sorriso mais branco e radiante com técnicas seguras e resultados visíveis na primeira sessão.',
        icon: <Sparkles className="w-12 h-12 text-medical-secondary" />,
    },
    {
        title: 'Lentes de Contato',
        description: 'Transformação completa do sorriso, corrigindo cor, formato e tamanho dos dentes com perfeição.',
        icon: <Smile className="w-12 h-12 text-medical-primary" />,
    },
    {
        title: 'Ortodontia',
        description: 'Alinhamento dental com aparelhos modernos, discretos e eficientes para todas as idades.',
        icon: <Activity className="w-12 h-12 text-medical-secondary" />,
    },
    {
        title: 'Tratamento de Canal',
        description: 'Procedimentos endodônticos avançados para salvar seu dente sem dor e com total segurança.',
        icon: <Activity className="w-12 h-12 text-medical-primary" />, // Using Activity again for now
    },
    {
        title: 'Prótese Dentária',
        description: 'Reabilitação oral completa com próteses fixas ou removíveis de alta qualidade e conforto.',
        icon: <Layers className="w-12 h-12 text-medical-secondary" />,
    },
];

const Services = () => {
    return (
        <section className="bg-medical-light py-20" id="tratamentos">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Nossos Tratamentos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Cuidamos do seu sorriso por completo</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Oferecemos uma ampla gama de tratamentos odontológicos utilizando as mais modernas tecnologias para garantir o melhor resultado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-100">
                            <div className="bg-medical-light rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-medical-primary/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-medical-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <a href="https://wa.me/5511999999999" className="inline-flex items-center text-medical-secondary font-semibold hover:text-medical-primary transition-colors gap-2">
                                Quero saber mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
