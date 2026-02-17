
import { MessageCircle, Info, Calculator, CalendarCheck, HelpCircle, ArrowRight } from 'lucide-react';

const options = [
    {
        icon: <Calculator size={24} className="text-teal-500" />,
        title: "Orçamentos e Valores",
        description: "Saiba mais sobre custos e pagamentos.",
        message: "Olá! Gostaria de informações sobre valores de tratamentos."
    },
    {
        icon: <CalendarCheck size={24} className="text-blue-500" />,
        title: "Agendar Avaliação",
        description: "Escolha o melhor horário para você.",
        message: "Olá! Gostaria de agendar uma avaliação."
    },
    {
        icon: <Info size={24} className="text-purple-500" />,
        title: "Dúvidas Gerais",
        description: "Pergunte sobre procedimentos ou a clínica.",
        message: "Olá! Tenho algumas dúvidas sobre os tratamentos."
    },
    {
        icon: <HelpCircle size={24} className="text-orange-500" />,
        title: "Urgência / Dor",
        description: "Atendimento prioritário para dores.",
        message: "Olá! Estou com dor e preciso de atendimento urgente."
    }
];

const WhatsAppGuide = () => {
    const handleWhatsAppClick = (message: string) => {
        const url = `https://wa.me/5511992876219?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Como podemos te ajudar?</h3>
            <p className="text-gray-500 mb-6 text-sm">Selecione uma opção para iniciar a conversa no WhatsApp:</p>

            <div className="space-y-3">
                {options.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleWhatsAppClick(opt.message)}
                        className="w-full text-left bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-200 p-4 rounded-xl transition-all duration-300 group flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                                {opt.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm group-hover:text-green-700">{opt.title}</h4>
                                <p className="text-xs text-gray-500 group-hover:text-green-600">{opt.description}</p>
                            </div>
                        </div>
                        <ArrowRight size={18} className="text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                    </button>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <MessageCircle size={16} className="text-green-500" />
                    Resposta média: <span className="font-bold text-green-600">5 minutos</span>
                </p>
            </div>
        </div>
    );
};

export default WhatsAppGuide;
