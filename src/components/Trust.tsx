
import { CheckCircle, Award, Stethoscope, Droplet } from 'lucide-react';

const Trust = () => {
    return (
        <section className="bg-white py-12 border-b border-gray-100">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-600">
                <div className="flex flex-col items-center gap-3 group">
                    <div className="bg-medical-light p-4 rounded-full group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                        <Award size={32} />
                    </div>
                    <p className="font-semibold text-sm md:text-base">Profissionais Certificados</p>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                    <div className="bg-medical-light p-4 rounded-full group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                        <Stethoscope size={32} />
                    </div>
                    <p className="font-semibold text-sm md:text-base">Equipamentos Modernos</p>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                    <div className="bg-medical-light p-4 rounded-full group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                        <Droplet size={32} />
                    </div>
                    <p className="font-semibold text-sm md:text-base">Biossegurança Rigorosa</p>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                    <div className="bg-medical-light p-4 rounded-full group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                        <CheckCircle size={32} />
                    </div>
                    <p className="font-semibold text-sm md:text-base">Atendimento Humanizado</p>
                </div>
            </div>
        </section>
    );
};

export default Trust;
