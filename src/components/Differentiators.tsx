
import { CheckCircle2 } from 'lucide-react';

const Differentiators = () => {
    return (
        <section className="bg-medical-primary text-white py-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.3C59.4,45.5,47.9,54.2,35.6,63.2C23.3,72.2,10.2,81.5,-2.3,85.5C-14.8,89.5,-26.7,88.2,-37.2,81.1C-47.7,74,-56.8,61.1,-64.3,47.6C-71.8,34.1,-77.7,20,-79.1,5.3C-80.5,-9.4,-77.4,-24.8,-68.8,-37.5C-60.2,-50.2,-46.1,-60.2,-32.2,-67.5C-18.3,-74.8,-4.6,-79.4,10.1,-80.9 L10.1,0 L44.7,0 Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Por que nos escolher?</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Diferenciais que transformam sua experiência</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Não somos apenas uma clínica, somos parceiros na construção do seu melhor sorriso. Cada detalhe foi pensado para seu conforto e segurança.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Tecnologia 3D de última geração para diagnósticos precisos.",
                            "Atendimento 100% personalizado focado nas suas necessidades.",
                            "Ambiente climatizado, moderno e acolhedor (SPA odontológico).",
                            "Especialistas renomados com atualização constante.",
                            "Resultados estéticos naturais e harmoniosos.",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-medical-secondary flex-shrink-0 mt-1" />
                                <span className="text-lg text-gray-100">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <a href="#contato" className="bg-white text-medical-primary font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 inline-flex items-center gap-2 group">
                            Agendar Avaliação
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-medical-secondary rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-f4471b57713d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Tecnologia Odontológica Avançada"
                        className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                    />
                    {/* Badge floating */}
                    <div className="absolute -bottom-10 -right-10 z-20 hidden md:block">
                        <div className="bg-white text-medical-primary p-6 rounded-xl shadow-xl max-w-[200px]">
                            <p className="font-bold text-4xl mb-1">100%</p>
                            <p className="text-sm font-medium text-gray-600">Satisfação garantida nos tratamentos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
