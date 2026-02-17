
import { MessageCircle, PhoneCall } from 'lucide-react';
import WhatsAppGuide from './WhatsAppGuide';

const CTA = () => {
    return (
        <section className="bg-gradient-to-br from-medical-primary to-medical-primary/90 relative overflow-hidden py-20 lg:py-24 text-white" id="agendar">
            <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & Buttons */}
                    <div className="text-center lg:text-left">
                        <span className="bg-white/10 text-medical-secondary font-bold py-1 px-4 rounded-full text-sm uppercase tracking-wider mb-6 inline-block backdrop-blur-sm">
                            Atendimento Exclusivo
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            Sem formulários, sem espera. Fale direto com nossa equipe.
                        </h2>
                        <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed">
                            Sabemos que seu tempo é valioso. Clique abaixo e inicie seu atendimento personalizado pelo WhatsApp agora mesmo.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
                            <a
                                href="https://wa.me/5511992876219?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-green-600 transition transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto animate-pulse"
                            >
                                <MessageCircle size={24} />
                                Chamar no WhatsApp
                            </a>

                            <a
                                href="tel:+5511992876219"
                                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition w-full sm:w-auto flex items-center justify-center gap-3"
                            >
                                <PhoneCall size={24} />
                                Ligar (11) 99287-6219
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Dr. Responsável online agora.
                        </div>
                    </div>

                    {/* Right Column: Key Guide */}
                    <div className="lg:w-full max-w-md mx-auto lg:ml-auto">
                        <div className="bg-white rounded-2xl p-1 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition duration-500">
                            <WhatsAppGuide />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
