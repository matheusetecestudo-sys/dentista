
const About = () => {
    return (
        <section className="bg-white py-20" id="sobre">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <img
                        src="https://images.unsplash.com/photo-1629814986427-4a0b5f5c3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Nossa Clínica"
                        className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-medical-secondary max-w-sm hidden md:block">
                        <p className="text-gray-600 italic">"Nossa missão é transformar vidas através do sorriso, unindo técnica de excelência e atendimento humano."</p>
                        <p className="font-bold text-medical-primary mt-2">- Dr. Responsável</p>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Sobre Nós</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2 mb-6">Tradição e Inovação em Odontologia</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Com mais de 15 anos de experiência, nossa clínica se destaca pelo compromisso com a qualidade e o bem-estar dos pacientes. Possuímos uma estrutura moderna, equipada com o que há de mais avançado na odontologia digital.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Acreditamos que cada sorriso é único. Por isso, oferecemos um atendimento personalizado, planejado detalhadamente para atender suas expectativas e necessidades de saúde bucal.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-medical-primary text-xl mb-2">Missão</h4>
                            <p className="text-sm text-gray-500">Proporcionar saúde e autoestima com tratamentos de excelência.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-medical-primary text-xl mb-2">Valores</h4>
                            <p className="text-sm text-gray-500">Ética, Transparência, Inovação e Humanização.</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <a href="#contato" className="text-medical-secondary font-bold hover:text-medical-primary transition-colors flex items-center gap-2">
                            Conheça nossa estrutura e equipe &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
