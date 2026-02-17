
const Location = () => {
    return (
        <section id="localizacao" className="relative h-[500px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587029672!2d-46.656515485022066!3d-23.561349584682957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa365%3A0x4c266503139b02a2!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1625688647987!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Localização da Clínica"
                className="grayscale hover:grayscale-0 transition duration-500"
            ></iframe>

            <div className="absolute top-8 left-8 bg-white p-8 rounded-xl shadow-xl max-w-sm z-10 hidden md:block border-l-4 border-medical-secondary">
                <h3 className="font-bold text-xl text-medical-primary mb-4">Visite Nossa Clínica</h3>
                <p className="text-gray-600 mb-2 font-medium">Av. Paulista, 1000 - Cj. 202</p>
                <p className="text-gray-600 mb-6">Bela Vista, São Paulo - SP</p>

                <h4 className="font-bold text-medical-primary mb-2">Horário de Atendimento</h4>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 08h às 19h</p>
                <p className="text-gray-600 text-sm">Sábado: 08h às 13h</p>

                <a
                    href="https://goo.gl/maps/XYZ"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block text-center bg-medical-light text-medical-primary font-bold py-3 rounded-lg hover:bg-medical-secondary hover:text-white transition"
                >
                    Traçar Rota
                </a>
            </div>
        </section>
    );
};

export default Location;
