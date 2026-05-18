import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A1128]">
            {/* Background com Imagem Deslumbrante Full Screen */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=100"
                    alt="Clínica Premium"
                    className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                />
                {/* Gradiente escurecendo a base e topo para leitura perfeita do texto e menu */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-[#0A1128]/40 to-[#0A1128]"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center pt-24">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white space-y-8 flex flex-col items-center max-w-4xl"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                            ))}
                        </div>
                        <span className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">O Padrão Ouro em Odontologia</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
                        A Arte do <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-teal-300 drop-shadow-sm">Sorriso Perfeito</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                        Experimente a odontologia de altíssimo padrão. Tecnologia suíça, conforto absoluto e resultados que transformam a sua assinatura pessoal.
                    </p>

                    <div className="pt-8">
                        <a 
                            href="https://wa.me/5511992876219" 
                            className="group relative overflow-hidden bg-white text-[#0A1128] px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-4 text-sm sm:text-base"
                        >
                            <span className="relative z-10">Agendar Avaliação VIP</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-teal-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </a>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Descubra</span>
                <div className="w-[2px] h-16 bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-1/2 bg-teal-400 absolute top-0 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
