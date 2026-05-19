import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        title: 'Lentes de Contato Dental',
        category: 'Odontologia Estética',
        desc: 'Sorriso alinhado, harmônico e natural com facetas de porcelana pura de espessura ultrafina.',
        img: '/exemplo01.png',
    },
    {
        id: 2,
        title: 'Implante Total Cerâmico',
        category: 'Reabilitação Oral',
        desc: 'Reabilitação total fixa sobre implantes para devolver mastigação, fonética e suporte labial.',
        img: '/exemplo 03.png',
    },
    {
        id: 3,
        title: 'Clareamento Avançado',
        category: 'Estética Dental',
        desc: 'Remoção de manchas profundas e resgate do branco natural dos dentes de forma segura.',
        img: '/exemplo 02.png',
    },
];

const BeforeAfter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % cases.length);
    };
    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    };

    return (
        <section className="bg-white py-16 sm:py-20 overflow-hidden relative" id="resultados">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-30 mix-blend-multiply"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Cabeçalho da Seção - Idêntico ao da Equipe */}
                <div className="text-center mb-16 sm:mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        Galeria de Excelência
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Transformações <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Reais</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium"
                    >
                        Resultados reais de pacientes que recuperaram a autoestima e a segurança ao sorrir. Cada transformação é planejada digitalmente e executada com precisão absoluta.
                    </motion.p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Grid Desktop (Escondido no mobile, exibido em md+ - Mesma Configuração dos Profissionais) */}
                    <div className="hidden md:grid grid-cols-3 gap-10">
                        {cases.map((item, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={item.id}
                                className="h-full"
                            >
                                <CaseCard item={item} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Carrossel Mobile (Escondido no desktop, exibido sob md - Mesma Configuração dos Profissionais) */}
                    <div className="md:hidden">
                        <div className="overflow-hidden relative min-h-[500px] flex items-center justify-center">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div 
                                    key={currentIndex}
                                    custom={direction}
                                    variants={{
                                        enter: (dir: number) => ({
                                            x: dir > 0 ? '100%' : '-100%',
                                            opacity: 0
                                        }),
                                        center: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        exit: (dir: number) => ({
                                            x: dir < 0 ? '100%' : '-100%',
                                            opacity: 0
                                        })
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragEnd={(_, info) => {
                                        const swipeThreshold = 50;
                                        if (info.offset.x < -swipeThreshold) {
                                            next();
                                        } else if (info.offset.x > swipeThreshold) {
                                            prev();
                                        }
                                    }}
                                    className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
                                >
                                    <CaseCard item={cases[currentIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Paginação por Dots - Mesma Configuração dos Profissionais */}
                        <div className="flex justify-center gap-2.5 mt-8">
                            {cases.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-teal-500' : 'w-2.5 bg-gray-200'}`}
                                    aria-label={`Ir para slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Setas de Controle - Mesma Configuração dos Profissionais */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button onClick={prev} className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CaseCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-gray-100 h-full flex flex-col">
        {/* Imagem em Proporção e Altura Idêntica à dos Profissionais */}
        <div className="relative overflow-hidden h-[300px] sm:h-[400px] bg-gray-50 border-b border-gray-100">
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            {/* Badges Antes e Depois */}
            <div className="absolute top-4 left-4 bg-[#02050A]/75 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 shadow-sm z-10">
                Antes
            </div>
            <div className="absolute top-4 right-4 bg-teal-500/85 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-teal-400/20 shadow-sm z-10">
                Depois
            </div>
            
            {/* Divisória Vertical sutil no meio */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/30 pointer-events-none shadow-sm z-10"></div>
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent p-6 sm:p-8 pt-16 sm:pt-24 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs sm:text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                    <Award size={16} className="text-teal-400" />
                    Caso Clínico {item.id}
                </p>
            </div>
        </div>
        
        {/* Conteúdo Detalhado - Mesma Configuração de Espaçamento e Fundo Cinza Separado dos Profissionais */}
        <div className="p-6 sm:p-10 flex-grow flex flex-col bg-gray-50/50">
            <h3 className="text-xl sm:text-2xl font-black text-[#0A1128] mb-1 sm:mb-2 leading-tight group-hover:text-teal-600 transition-colors">
                {item.title}
            </h3>
            <p className="text-teal-600 font-bold text-xs mb-4 sm:mb-6 uppercase tracking-widest">
                {item.category}
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 flex-grow font-semibold">
                {item.desc}
            </p>
            
            {/* Linha Divisória e Botão de Ação Idêntico ao Estilo dos Profissionais */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <a 
                    href={`https://wa.me/5511992876219?text=Olá! Gostaria de ter um resultado incrível como o do caso de ${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0A1128] hover:bg-[#0A1128] hover:text-white hover:border-[#0A1128] py-3.5 px-6 rounded-2xl font-bold transition-all duration-300 w-full uppercase tracking-wider text-xs sm:text-sm shadow-sm gap-2"
                >
                    <span>Quero este Sorriso</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    </div>
);

export default BeforeAfter;
