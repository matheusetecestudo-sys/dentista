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
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Pioneiro em tratamentos de canal em sessão única sem dor, utilizando microscopia operatória de última geração.'
    }
];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % team.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

    return (
        <section className="bg-white py-32 overflow-hidden relative" id="equipe">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-30 mix-blend-multiply"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Nossa Autoridade
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Mentes brilhantes por trás de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">sorrisos perfeitos</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg font-medium"
                    >
                        Nossos especialistas possuem formações nas melhores instituições do mundo, garantindo um padrão de excelência clínica inigualável.
                    </motion.p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        >
                            <div className="hidden md:contents">
                                {team.map((member, index) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        key={index}
                                    >
                                        <TeamCard member={member} />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="md:hidden">
                                <TeamCard member={team[currentIndex]} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 mt-12 md:hidden">
                    <button onClick={prev} className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 text-[#0A1128] flex items-center justify-center hover:bg-teal-50 hover:text-teal-600 transition-all shadow-sm">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group border border-gray-100 h-full flex flex-col">
        <div className="relative overflow-hidden h-[400px]">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent p-8 pt-24 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                    <Award size={18} className="text-teal-400" />
                    {member.cro}
                </p>
            </div>
        </div>
        <div className="p-10 flex-grow flex flex-col bg-gray-50/50">
            <h3 className="text-2xl font-black text-[#0A1128] mb-2">{member.name}</h3>
            <p className="text-teal-600 font-bold text-xs mb-6 uppercase tracking-widest">{member.role}</p>
            <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow font-medium">
                {member.bio}
            </p>
            <div className="flex gap-4 pt-6 border-t border-gray-200">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0A1128] hover:text-white hover:border-[#0A1128] transition-all shadow-sm">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0A1128] hover:text-white hover:border-[#0A1128] transition-all shadow-sm">
                    <Instagram size={18} />
                </a>
            </div>
        </div>
    </div>
);

export default Team;
