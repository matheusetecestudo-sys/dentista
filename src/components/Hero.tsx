
import { Phone, Calendar, Star, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-medical-light min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Clínica Odontológica Moderna"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-medical-primary/95 to-medical-primary/70 md:to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20 pb-12">
                {/* Text Content */}
                <div className="text-white space-y-8 animate-fade-in-up">
                    <div className="flex items-center gap-2 bg-medical-secondary/20 w-fit px-4 py-1 rounded-full border border-medical-secondary/30 backdrop-blur-sm">
                        <Star className="w-4 h-4 text-medical-secondary fill-current" />
                        <span className="text-sm font-medium text-medical-secondary uppercase tracking-wider">Excelência em Odontologia</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Sorriso saudável e estético com <span className="text-medical-secondary">tecnologia de ponta</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                        Transforme sua autoestima com tratamentos odontológicos avançados e personalizados em um ambiente acolhedor e seguro.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-medical-secondary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#25a094] transition transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Agendar Avaliação
                        </a>

                        <a
                            href="tel:+5511992876219"
                            className="bg-transparent border-2 border-white text-white font-medium py-4 px-8 rounded-full hover:bg-white hover:text-medical-primary transition text-center flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Ligar Agora
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-bold text-white">15+</p>
                            <p className="text-sm text-gray-300">Anos de Experiência</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">5k+</p>
                            <p className="text-sm text-gray-300">Pacientes Sorrindo</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-medical-secondary" />
                            </div>
                            <p className="text-sm text-gray-300">Tecnologia<br />Certificada</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image (Desktop only mostly visible) */}
                <div className="hidden md:block relative animate-fade-in-left">
                    {/* Placeholder for a secondary image or graphic if needed, but the background covers it mostly. 
               However, to make it look premium, maybe a floating card or dentist portrait. 
           */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Dentista Sorrindo"
                            className="rounded-2xl shadow-2xl border-4 border-white/20 w-3/4 ml-auto"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Star className="w-6 h-6 text-green-600 fill-current" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">4.9/5.0</p>
                                    <p className="text-sm text-gray-500">Avaliações de Pacientes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
