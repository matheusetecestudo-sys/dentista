import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const treatments = [
    {
        title: 'Clareamento Dental',
        description: 'Dentes muito mais brancos e brilhantes com a precisão do clareamento a laser.',
        image: '/clareamento_dental.png',
    },
    {
        title: 'Implantes Dentários',
        description: 'Substituição dentária segura e definitiva com implantes de alta tecnologia.',
        image: '/implantes_dentarios.png',
    },
    {
        title: 'Ortodontia & Invisalign',
        description: 'Correção estética do sorriso com alinhadores invisíveis e modernos.',
        image: '/Alinhadores Invisíveis.jpeg',
    },
    {
        title: 'Odontologia Estética',
        description: 'Transformação estética total com lentes de contato de porcelana ultra-finas.',
        image: '/odontologia_estetica.png',
    },
    {
        title: 'Endodontia (Canal)',
        description: 'Tratamento de canal moderno, seguro, rápido e totalmente livre de dor.',
        image: '/endodontia_canal.png',
    },
    {
        title: 'Cirurgia Oral e Extrações',
        description: 'Procedimentos cirúrgicos e extrações de sisos com máxima segurança.',
        image: '/cirurgia_oral_extracoes.png',
    },
    {
        title: 'Próteses Dentárias',
        description: 'Reabilitação mastigatória e estética completa com próteses sob medida.',
        image: '/proteses_dentarias.png',
    },
    {
        title: 'Prevenção & Odontopediatria',
        description: 'Check-up preventivo completo e profilaxia especializada para todas as idades.',
        image: '/odontopediatria_prevencao.png',
    },
];

const Services = () => {
    return (
        <section className="bg-gray-50 py-14 sm:py-20" id="tratamentos">
            <div className="container mx-auto px-4 sm:px-6">
                
                {/* Cabeçalho Centralizado Padronizado */}
                <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        Nossos Serviços
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Tratamentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Alta Performance</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed"
                    >
                        Excelência técnica e tecnologia de ponta para transformar sua saúde bucal e elevar sua autoestima com resultados de nível internacional.
                    </motion.p>
                </div>

                {/* Grade de Serviços Responsiva (2 colunas em mobile, 4 colunas em desktop) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8">
                    {treatments.map((service, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-teal-100 hover:shadow-[0_20px_40px_rgba(13,148,136,0.08)] transition-all duration-500 flex flex-col h-full group cursor-pointer"
                        >
                            {/* Imagem (Proporção otimizada para encaixar perfeitamente) */}
                            <div className="h-32 xs:h-40 sm:h-52 md:h-64 overflow-hidden relative">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                                    loading="lazy"
                               />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                            </div>

                            {/* Conteúdo Otimizado para Mobile e Desktop (Evita empurrar e quebrar textos) */}
                            <div className="p-3.5 xs:p-5 md:p-8 flex flex-col flex-grow relative bg-white z-10 -mt-4 rounded-t-3xl transition-transform duration-500">
                                
                                {/* Título com Altura Mínima Geometrizada */}
                                <div className="min-h-[2.25rem] xs:min-h-[2.75rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center mb-1.5 sm:mb-2">
                                    <h3 className="text-xs xs:text-sm sm:text-base md:text-xl font-black text-[#0A1128] leading-tight group-hover:text-teal-600 transition-colors line-clamp-2">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Descrição Resumida para Encaixe de Grade Impecável */}
                                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 leading-relaxed flex-grow font-medium line-clamp-3">
                                    {service.description}
                                </p>

                                {/* Botão Otimizado para Nunca Transbordar/Quebrar Layout no Celular */}
                                <a 
                                    href={`https://wa.me/5511992876219?text=Olá! Gostaria de saber mais sobre ${encodeURIComponent(service.title)}.`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between bg-gray-50 text-[#0A1128] px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-bold group-hover:bg-teal-50 group-hover:text-teal-700 transition-all duration-300 w-full text-[10px] xs:text-xs sm:text-sm"
                                >
                                    <span>Saiba Mais</span>
                                    <div className="bg-white p-1 sm:p-1.5 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                                        <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#0A1128] group-hover:text-teal-600 transition-colors" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
