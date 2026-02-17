
import { Star } from 'lucide-react';

const reviews = [
    {
        name: 'Ana Paulo Silva',
        city: 'São Paulo, SP',
        text: 'Profissionais incríveis! Fiquei muito satisfeita com meu clareamento, resultado super natural. O atendimento é nota 10.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
        name: 'Carlos Oliveira',
        city: 'Campinas, SP',
        text: 'Faço tratamento de implante e estou impressionado com a tecnologia e cuidado da equipe. Recomendo de olhos fechados!',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
        name: 'Mariana Costa',
        city: 'São Paulo, SP',
        text: 'Amei o resultado das minhas lentes de contato. Mudou minha autoestima! Ambiente super moderno e acolhedor.',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
];

const Testimonials = () => {
    return (
        <section className="bg-white py-20" id="depoimentos">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-medical-secondary font-semibold uppercase tracking-wider text-sm">Depoimentos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-medical-primary mt-2">O que nossos pacientes dizem</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-medical-light p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-medical-primary">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46462 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z" />
                                </svg>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                                <div>
                                    <h4 className="font-bold text-medical-primary">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.city}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 italic mb-6">"{review.text}"</p>

                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
