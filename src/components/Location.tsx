import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
    return (
        <section id="localizacao" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Onde Estamos
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#0A1128] mt-4 tracking-tight"
                    >
                        Venha nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Visitar</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                    {/* Infos */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MapPin className="w-7 h-7 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A1128] mb-3">Endereço Premium</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Av. Paulista, 1000 - Bela Vista<br />
                                São Paulo - SP, 01310-100
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Clock className="w-7 h-7 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A1128] mb-3">Horário de Atendimento</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Seg a Sex: 08:00 às 20:00<br />
                                Sábado: 09:00 às 14:00
                            </p>
                        </div>
                    </motion.div>

                    {/* Mapa */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] border border-gray-100 group"
                    >
                        <div className="absolute inset-0 bg-teal-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975765581177!2d-46.65430858440536!3d-23.561338867475874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-125 saturate-50 sepia-[10%] hue-rotate-180"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
