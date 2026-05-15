
import { Coffee, ShieldCheck, Clock, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
    {
        icon: <Sofa className="w-8 h-8 text-medical-secondary" />,
        title: "Ambiente Boutique",
        description: "Fuja do clima hospitalar. Nossa clínica foi projetada com design de interiores de luxo para seu total conforto."
    },
    {
        icon: <Coffee className="w-8 h-8 text-medical-secondary" />,
        title: "Espaço Concierge",
        description: "Menu de cafés gourmet, chás e um atendimento personalizado desde o primeiro minuto."
    },
    {
        icon: <Clock className="w-8 h-8 text-medical-secondary" />,
        title: "Pontualidade Rigorosa",
        description: "Seu tempo é valioso. Trabalhamos com agendas otimizadas para que você nunca precise esperar."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-medical-secondary" />,
        title: "Privacidade Total",
        description: "Salas de espera privativas e atendimento individualizado para garantir sua discrição."
    }
];

const Experience = () => {
    return (
        <section className="py-20 bg-medical-primary text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-medical-secondary font-bold uppercase tracking-widest text-sm">Experiência & Estrutura</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
                            Muito além de uma consulta, um momento de <span className="text-medical-secondary">bem-estar.</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Redefinimos o conceito de ir ao dentista. Criamos um ecossistema de cuidado onde a tecnologia de ponta se encontra com a hospitalidade de alto padrão.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {items.map((item, index) => (
                                <div key={index} className="group">
                                    <div className="mb-4 bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-medical-secondary transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Galeria" className="rounded-3xl w-full h-64 object-cover shadow-2xl" />
                            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Galeria" className="rounded-3xl w-full h-48 object-cover shadow-2xl" />
                        </div>
                        <div className="space-y-4 pt-8">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Galeria" className="rounded-3xl w-full h-48 object-cover shadow-2xl" />
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Galeria" className="rounded-3xl w-full h-64 object-cover shadow-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
