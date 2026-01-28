
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Cargas Pesadas',
      desc: 'Rodotrens de alta capacidade para grandes volumes e pesos industriais.',
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Transporte Dedicado',
      desc: 'Rotas exclusivas e cronogramas customizados para sua operação contínua.',
      img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=500',
    },
    {
      title: 'Logística Completa',
      desc: 'Ciclo pleno de gestão interestadual com visibilidade e eficiência total.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500',
    }
  ];

  return (
    <div className="py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-blue mb-4 uppercase tracking-tighter">
            Logística Interestadual
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Oferecemos soluções robustas para o transporte de cargas de alto valor e peso em todo o território nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-[24px] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="h-[250px] overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-blue text-white p-3 rounded-xl shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed">
                  {service.desc}
                </p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-blue font-bold hover:translate-x-2 transition-transform"
                >
                  <span>Detalhes via WhatsApp</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
