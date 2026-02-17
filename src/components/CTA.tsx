
import { MessageCircle, PhoneCall } from 'lucide-react';
import ContactForm from './ContactForm';

const CTA = () => {
    return (
        <section className="bg-gradient-to-br from-medical-primary to-medical-primary/90 relative overflow-hidden py-20 lg:py-24 text-white" id="agendar">
            <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & Buttons */}
                    <div className="text-center lg:text-left">
                        <span className="bg-white/10 text-medical-secondary font-bold py-1 px-4 rounded-full text-sm uppercase tracking-wider mb-6 inline-block backdrop-blur-sm">
                            Vagas Limitadas
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            Agende sua avaliação e transforme seu sorriso hoje.
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed">
                            Não espere mais para ter a saúde e a estética que você merece. Tecnologia de ponta e humanização esperando por você.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-green-600 transition transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto"
                            >
                                <MessageCircle size={24} />
                                Agendar no WhatsApp
                            </a>

                            <a
                                href="tel:+5511999999999"
                                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition w-full sm:w-auto flex items-center justify-center gap-3"
                            >
                                <PhoneCall size={24} />
                                Ligar (11) 9999-9999
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Estamos online agora para te atender.
                        </div>
                    </div>

                    {/* Right Column: Quick Form */}
                    <div className="lg:w-full max-w-md mx-auto lg:ml-auto">
                        <div className="bg-white rounded-2xl p-1 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition duration-500">
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
