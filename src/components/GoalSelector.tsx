
import { Sparkles, Activity, ShieldPlus, ArrowRight } from 'lucide-react';

const goals = [
    {
        title: 'Transformação Estética',
        description: 'Lentes de porcelana e clareamento para um sorriso de celebridade.',
        icon: <Sparkles className="w-8 h-8 text-medical-secondary" />,
        color: 'from-medical-secondary/20 to-medical-secondary/5',
        whatsapp: 'https://wa.me/5511992876219?text=Quero%20transformar%20a%20est%C3%A9tica%20do%20meu%20sorriso.'
    },
    {
        title: 'Correção Invisível',
        description: 'Alinhadores Invisalign para dentes perfeitos sem aparelhos fixos.',
        icon: <ShieldPlus className="w-8 h-8 text-blue-500" />,
        color: 'from-blue-500/20 to-blue-500/5',
        whatsapp: 'https://wa.me/5511992876219?text=Quero%20saber%20mais%20sobre%20os%20alinhadores%20invis%C3%ADveis.'
    },
    {
        title: 'Reabilitação Oral',
        description: 'Implantes e próteses de alta precisão para recuperar sua função.',
        icon: <Activity className="w-8 h-8 text-medical-primary" />,
        color: 'from-medical-primary/20 to-medical-primary/5',
        whatsapp: 'https://wa.me/5511992876219?text=Preciso%20de%20uma%20avalia%C3%A7%C3%A3o%20para%20reabilita%C3%A7%C3%A3o%20oral.'
    }
];

const GoalSelector = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary">Qual é o seu objetivo hoje?</h2>
                    <p className="text-gray-600 mt-4 text-lg">Selecione o caminho que você deseja seguir e fale direto com um especialista.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {goals.map((goal, index) => (
                        <a 
                            key={index}
                            href={goal.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group p-10 rounded-3xl bg-gradient-to-br ${goal.color} border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
                        >
                            <div className="relative z-10">
                                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    {goal.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-medical-primary mb-4">{goal.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {goal.description}
                                </p>
                                <div className="flex items-center text-medical-primary font-bold gap-2">
                                    Iniciar Jornada <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                            
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:bg-white/40 transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoalSelector;
