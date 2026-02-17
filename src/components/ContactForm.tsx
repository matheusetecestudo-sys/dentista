
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
        // Reset after a few seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormState({ name: '', phone: '', message: '' });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-medical-primary mb-2">Agende sua Avaliação</h3>
            <p className="text-gray-500 mb-6">Preencha o formulário e entraremos em contato rapidamente.</p>

            {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                    <CheckCircle size={48} className="text-green-500" />
                    <h4 className="text-xl font-bold">Mensagem Enviada!</h4>
                    <p>Agradecemos o contato. Nossa equipe retornará em breve.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-secondary focus:border-transparent outline-none transition"
                            placeholder="Seu nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-secondary focus:border-transparent outline-none transition"
                            placeholder="(11) 99999-9999"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-secondary focus:border-transparent outline-none transition"
                            placeholder="Olá, gostaria de saber mais sobre..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-medical-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                    >
                        <Send size={20} />
                        Enviar Solicitação
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
