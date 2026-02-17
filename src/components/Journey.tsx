
import { ClipboardList, ScanLine, UserCheck, SmilePlus } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Avaliação Inicial',
        description: 'Conversa detalhada para entender suas queixas e desejos, além de exame clínico completo.',
        icon: <ClipboardList className="w-8 h-8 text-white" />
    },
    {
        id: '02',
        title: 'Diagnóstico Digital',
        description: 'Uso de scanners 3D e radiografias digitais para um planejamento preciso e previsível.',
        icon: <ScanLine className="w-8 h-8 text-white" />
    },
    {
        id: '03',
        title: 'Plano de Tratamento',
        description: 'Apresentação visual das etapas, custos e cronograma, personalizado para sua realidade.',
        icon: <UserCheck className="w-8 h-8 text-white" />
    },
    {
        id: '04',
        title: 'Execução & Sorriso',
        description: 'Tratamento realizado com conforto e tecnologia, seguido de manutenção preventiva.',
        icon: <SmilePlus className="w-8 h-8 text-white" />
    }
];

const Journey = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Sua Jornada</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2 mb-6">Como funciona seu tratamento?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Entendemos que ir ao dentista pode gerar ansiedade. Por isso, criamos um processo transparente, onde você está no controle de cada etapa, sem surpresas.
                        </p>
                        <div className="relative pl-8 border-l-2 border-medical-light space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[41px] bg-medical-secondary w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                                        <span className="text-white font-bold text-sm">{step.id}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-medical-primary mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="bg-medical-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 bg-medical-secondary w-64 h-64 rounded-full opacity-20 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 bg-blue-400 w-64 h-64 rounded-full opacity-20 blur-3xl"></div>

                            <h3 className="text-2xl font-bold mb-6">Dúvidas Comuns</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <p className="font-semibold mb-1">Aceitam convênios?</p>
                                    <p className="text-sm text-gray-200">Trabalhamos com sistema de reembolso e alguns planos selecionados. Consulte nossa equipe.</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <p className="font-semibold mb-1">Dói fazer implante?</p>
                                    <p className="text-sm text-gray-200">Absolutamente não. A cirurgia é feita com anestesia local potente e, se necessário, sedação.</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <p className="font-semibold mb-1">Quanto tempo dura a avaliação?</p>
                                    <p className="text-sm text-gray-200">Cerca de 45 a 60 minutos para um diagnóstico completo e detalhado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
