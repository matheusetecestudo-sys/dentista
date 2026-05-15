
import { useState } from 'react';
import { Linkedin, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
    {
        name: 'Dr. Ricardo Mendes',
        role: 'Implantodontista e Cirurgião',
        cro: 'CRO/SP 12345',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Especialista em reabilitação oral complexa com mais de 15 anos de experiência em implantes e cirurgia guiada.'
    },
    {
        name: 'Dra. Camila Torres',
        role: 'Ortodontista e Harmonização',
        cro: 'CRO/SP 67890',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Mestre em Ortodontia Digital e referência em tratamentos estéticos faciais e alinhadores invisíveis.'
    },
    {
        name: 'Dr. Lucas Ferreira',
        role: 'Endodontia e Clínica Geral',
        cro: 'CRO/SP 11223',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Focado em tratamentos sem dor, utilizando microscopia operatória para máxima precisão nos canais.'
    }
];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % team.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

    return (
        <section className="bg-medical-light py-20 overflow-hidden" id="equipe">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Corpo Clínico</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">Especialistas dedicados a você</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl">
                            Nossa equipe é formada por profissionais com títulos de mestrado e doutorado, em constante atualização técnica.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={prev}
                            className="w-12 h-12 rounded-full border-2 border-medical-primary text-medical-primary flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={next}
                            className="w-12 h-12 rounded-full border-2 border-medical-primary text-medical-primary flex items-center justify-center hover:bg-medical-primary hover:text-white transition-all duration-300 shadow-lg"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            <div className="hidden md:contents">
                                {team.map((member, index) => (
                                    <TeamCard key={index} member={member} />
                                ))}
                            </div>
                            <div className="md:hidden">
                                <TeamCard member={team[currentIndex]} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots for mobile */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    {team.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-medical-secondary' : 'w-2 bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamCard = ({ member }: { member: any }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100">
        <div className="relative overflow-hidden h-80">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-medical-primary/90 to-transparent p-6 pt-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium flex items-center gap-2">
                    <Award size={16} className="text-medical-secondary" />
                    {member.cro}
                </p>
            </div>
        </div>
        <div className="p-8">
            <h3 className="text-xl font-bold text-medical-primary mb-1">{member.name}</h3>
            <p className="text-medical-secondary font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
            </p>
            <div className="flex gap-3">
                <button className="text-gray-400 hover:text-medical-primary transition-colors">
                    <Linkedin size={20} />
                </button>
            </div>
        </div>
    </div>
);

export default Team;
