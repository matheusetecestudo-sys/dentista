
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqList = [
    {
        question: 'O tratamento de implante dentário dói?',
        answer: 'Não. O procedimento é realizado com anestesia local de alta eficácia, garantindo total conforto. O pós-operatório costuma ser tranquilo com medicação adequada.',
    },
    {
        question: 'Quanto tempo dura o clareamento dental?',
        answer: 'O efeito do clareamento pode durar de 1 a 3 anos, dependendo dos hábitos alimentares e cuidados do paciente. Oferecemos orientações para maximizar a duração.',
    },
    {
        question: 'Quais são as formas de pagamento?',
        answer: 'Aceitamos cartões de crédito, débito, PIX e oferecemos parcelamento facilitado em até 12x. Consulte nossas condições especiais para pagamentos à vista.',
    },
    {
        question: 'Aceitam convênios odontológicos?',
        answer: 'Trabalhamos principalmente com atendimento particular para garantir a máxima qualidade e personalização. No entanto, emitimos nota fiscal para reembolso no seu convênio.',
    },
    {
        question: 'Vocês realizam atendimento de emergência?',
        answer: 'Sim, reservamos horários na agenda para atendimentos de urgência (dor de dente, quebras). Entre em contato imediatamente pelo WhatsApp.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-medical-light py-20" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Dúvidas Frequentes</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Perguntas Comuns</h2>
                </div>

                <div className="space-y-4">
                    {faqList.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <button
                                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-lg text-medical-primary pr-4">{item.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-medical-secondary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0 group-hover:text-medical-secondary transition-colors" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
