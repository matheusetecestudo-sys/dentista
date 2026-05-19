import { useState } from 'react';
import { Linkedin, Award, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
    {
        name: 'Dr. Ricardo Mendes',
        role: 'Implantodontista e Cirurgião',
        cro: 'CRO/SP 12345',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Mestre em reabilitação oral de alta complexidade. Mais de 15 anos transformando vidas com implantes de carga imediata e cirurgia guiada robótica.'
    },
    {
        name: 'Dra. Camila Torres',
        role: 'Ortodontia Digital e Estética',
        cro: 'CRO/SP 67890',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Referência nacional em Invisalign e arquitetura facial. Desenha sorrisos perfeitos utilizando escaneamento 3D de precisão cirúrgica.'
    },
    {
        name: 'Dr. Lucas Ferreira',
        role: 'Endodontia Microscópica',
        cro: 'CRO/SP 11223',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Pioneiro em tratamentos de canal em sessão única sem dor, utilizando microscopia operatória de última geração.'
    }
];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % team.length);
    };
    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
    };

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden relative" id="equipe">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-30 mix-blend-multiply"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Cabeçalho */}
                <div className="text-center mb-16 sm:mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block"
                    >
                        Nossa Autoridade
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Mentes brilhantes por trás de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">sorrisos perfeitos</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium"
                    >
                        Nossos especialistas possuem formações nas melhores instituições do mundo, garantindo um padrão de excelência clínica inigualável.
                    </motion.p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Grid Desktop (Escondido no mobile, exibido em md+) */}
                    <div className="hidden md:grid grid-cols-3 gap-10">
                        {team.map((member, index) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="h-full"
                            >
                                <TeamCard member={member} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Carrossel Mobile (Escondido no desktop, exibido sob md) */}
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
                                    <TeamCard member={team[currentIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Paginação por Dots */}
                        <div className="flex justify-center gap-2.5 mt-8">
                            {team.map((_, idx) => (
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

                        {/* Setas de Controle */}
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

const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-gray-100 h-full flex flex-col">
        <div className="relative overflow-hidden h-[300px] sm:h-[400px]">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent p-6 sm:p-8 pt-16 sm:pt-24 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs sm:text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                    <Award size={16} className="text-teal-400" />
                    {member.cro}
                </p>
            </div>
        </div>
        <div className="p-6 sm:p-10 flex-grow flex flex-col bg-gray-50/50">
            <h3 className="text-xl sm:text-2xl font-black text-[#0A1128] mb-1 sm:mb-2">{member.name}</h3>
            <p className="text-teal-600 font-bold text-xs mb-4 sm:mb-6 uppercase tracking-widest">{member.role}</p>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 flex-grow font-medium">
                {member.bio}
            </p>
            <div className="flex gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0A1128] hover:text-white hover:border-[#0A1128] transition-all shadow-sm">
                    <Linkedin size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0A1128] hover:text-white hover:border-[#0A1128] transition-all shadow-sm">
                    <Instagram size={16} />
                </a>
            </div>
        </div>
    </div>
);

export default Team;
