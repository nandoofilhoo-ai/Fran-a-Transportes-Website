
import React from 'react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-primary-blue/5 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics hub" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-blue rounded-full -z-0 opacity-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-blue mb-8 leading-tight">
              Sobre a<br />França Transportes
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                Há mais de 10 anos, conectamos o Brasil com logística interestadual confiável. 
                Sede em Feira de Santana/BA, o maior entroncamento rodoviário do Norte/Nordeste, 
                atendemos todo território nacional com excelência.
              </p>
              <p>
                Nossa filosofia é baseada na precisão e na tecnologia. Operamos exclusivamente 
                com frota própria e moderna, garantindo que sua carga chegue ao destino com 
                segurança máxima e pontualidade rigorosa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-blue transform hover:-translate-y-1 transition-transform">
                <div className="bg-primary-blue/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">10+ Anos</h3>
                <p className="text-gray-600 text-sm">Experiência consolidada no mercado rodoviário.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-whatsapp-green transform hover:-translate-y-1 transition-transform">
                <div className="bg-whatsapp-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-whatsapp-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compromisso</h3>
                <p className="text-gray-600 text-sm">Segurança total para sua carga em qualquer rota.</p>
              </div>
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto space-x-3 bg-whatsapp-green hover:bg-green-600 text-white py-4 px-10 rounded-full shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span className="font-bold">Saiba mais via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
