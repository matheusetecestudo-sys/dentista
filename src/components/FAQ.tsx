import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Os tratamentos estéticos (como Lentes de Contato) causam dor?",
        answer: "De forma alguma. Utilizamos protocolos de sedação consciente e anestesia sem agulhas visíveis. Nossos pacientes relatam absoluto conforto durante e após os procedimentos."
    },
    {
        question: "Quanto tempo demora para finalizar o tratamento com Lentes?",
        answer: "Graças ao nosso laboratório digital interno e tecnologia 3D, casos completos de reabilitação estética podem ser finalizados em pouquíssimas sessões, com extrema agilidade."
    },
    {
        question: "Como funciona o Planejamento Digital do Sorriso?",
        answer: "Através de fotografias de estúdio e escaneamento intraoral, desenhamos o seu novo sorriso no computador. Você poderá visualizar e aprovar o resultado final no seu rosto antes mesmo de iniciarmos."
    },
    {
        question: "Vocês atendem planos de saúde ou convênios?",
        answer: "Para mantermos nosso padrão ouro de exclusividade, tempo de atendimento e excelência dos materiais importados, realizamos apenas atendimentos particulares. No entanto, possuímos condições facilitadas para que o seu investimento seja confortável."
    },
    {
        question: "Qual a durabilidade de um implante ou lente de contato?",
        answer: "Trabalhamos exclusivamente com cerâmicas e materiais de altíssima performance. Com as manutenções preventivas em dia, esses tratamentos oferecem altíssima resistência e duram por longos anos com o mesmo brilho inicial."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-gray-50 py-16 sm:py-20" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Dúvidas Frequentes
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Tudo o que você precisa <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">saber.</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-2xl border ${openIndex === index ? 'border-teal-400 shadow-md' : 'border-gray-200 shadow-sm'} overflow-hidden transition-all duration-300`}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                            >
                                <h3 className={`text-lg font-bold pr-4 ${openIndex === index ? 'text-teal-600' : 'text-[#0A1128]'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-400'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6 text-gray-700 leading-relaxed font-semibold">
                                            <div className="w-full h-px bg-gray-100 mb-6"></div>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
