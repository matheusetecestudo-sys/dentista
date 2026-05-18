import { Coffee, ShieldCheck, Clock, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
    {
        icon: <Sofa className="w-6 h-6" />,
        title: "Ambiente Boutique",
        description: "Design de interiores de luxo projetado para total relaxamento."
    },
    {
        icon: <Coffee className="w-6 h-6" />,
        title: "Espaço Concierge",
        description: "Menu de cafés premium, chás e atendimento exclusivo."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Pontualidade Absoluta",
        description: "Agendas otimizadas com precisão britânica. Zero espera."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Privacidade e Discrição",
        description: "Salas VIP e isolamento acústico garantindo sua intimidade."
    }
];

const Experience = () => {
    return (
        <section className="py-32 bg-[#0A1128] text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.05),transparent_70%)] blur-[80px] -z-10"></div>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-teal-400 font-bold uppercase tracking-[0.2em] text-sm">Experiência High-End</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-8 leading-tight tracking-tight">
                            Um refúgio de bem-estar disfarçado de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Clínica.</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-12 leading-relaxed font-medium">
                            Nós abolimos o medo e a ansiedade de ir ao dentista. Criamos um ecossistema 5 estrelas onde o mais alto rigor clínico encontra a sofisticação da hotelaria de luxo.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {items.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="mb-5 bg-white/5 border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white/90">{item.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-medium">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-2 gap-4 lg:gap-6 relative"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent z-10 lg:hidden"></div>
                        <div className="space-y-4 lg:space-y-6 transform translate-y-10">
                            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Lobby" className="rounded-3xl w-full h-72 object-cover shadow-2xl hover:scale-105 transition-transform duration-700 border border-white/5" />
                            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Consultório" className="rounded-3xl w-full h-56 object-cover shadow-2xl hover:scale-105 transition-transform duration-700 border border-white/5" />
                        </div>
                        <div className="space-y-4 lg:space-y-6">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Detalhe" className="rounded-3xl w-full h-56 object-cover shadow-2xl hover:scale-105 transition-transform duration-700 border border-white/5" />
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tecnologia" className="rounded-3xl w-full h-72 object-cover shadow-2xl hover:scale-105 transition-transform duration-700 border border-white/5" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
