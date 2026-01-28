
import React from 'react';
import { StarIcon, WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "João Silva",
      role: "Diretor Industrial",
      content: "Excelente frota Scania! Pontualidade britânica em todas as nossas rotas interestaduais.",
      location: "Feira de Santana/BA"
    },
    {
      name: "Maria Oliveira",
      role: "Logística Corp",
      content: "Equipe extremamente profissional. O atendimento via WhatsApp facilita muito o dia a dia.",
      location: "São Paulo/SP"
    },
    {
      name: "Carlos Rocha",
      role: "Distribuidora Agro",
      content: "Capacidade de carga impressionante com os rodotrens. Resolvemos nossos gargalos logísticos.",
      location: "Goiânia/GO"
    },
    {
      name: "Ana Santos",
      role: "Gerente de Operações",
      content: "Mais de 2 anos de parceria e nunca tivemos um atraso sequer. Recomendamos fortemente.",
      location: "Curitiba/PR"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-t from-primary-blue/5 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full shadow-md mb-6 border border-primary-blue/20">
            <span className="text-xl font-bold">4,9/5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className={`w-4 h-4 ${i === 5 ? 'text-gray-300' : 'text-yellow-400'}`} />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-500">Satisfação do Cliente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-blue mb-4">O que dizem nossos parceiros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-blue text-white p-2 rounded-full shadow-lg">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H10.017V21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H2.017C1.46472 8 1.017 8.44772 1.017 9V12C1.017 12.5523 0.569282 13 0.017 13H0.017V21H1.017Z"/></svg>
              </div>
              <p className="italic text-gray-600 mb-8 leading-relaxed">"{rev.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.role}</p>
                <p className="text-xs text-primary-blue mt-1 font-semibold uppercase">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-bold underline hover:text-primary-blue transition-colors flex items-center justify-center space-x-2"
          >
            <WhatsAppIcon className="w-5 h-5 text-whatsapp-green" />
            <span>Compartilhe sua experiência</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
