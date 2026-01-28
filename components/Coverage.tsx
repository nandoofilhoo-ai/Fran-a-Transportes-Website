
import React from 'react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const Coverage: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-blue mb-6">Cobertura Nacional</h2>
            <p className="text-xl text-gray-700 font-light mb-10">
              De <span className="text-primary-blue font-bold">Feira de Santana/BA</span> para todo o Brasil: 
              rotas interestaduais otimizadas para garantir a entrega mais rápida.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                { label: 'Sul & Sudeste', icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
                { label: 'Nordeste (Sede)', icon: 'M5 10l7-7m0 0l7 7m-7-7v18' },
                { label: 'Centro-Oeste', icon: 'M10 19l-7-7m0 0l7-7m-7 7h18' },
                { label: 'Norte', icon: 'M14 5l7 7m0 0l-7 7m7-7H3' },
              ].map((region, i) => (
                <li key={i} className="flex items-center space-x-4 group">
                  <div className="bg-primary-blue text-white p-2 rounded-lg group-hover:bg-whatsapp-green transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={region.icon} />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{region.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-whatsapp-green hover:bg-green-600 text-white py-5 px-10 rounded-full shadow-xl transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span className="text-xl font-bold uppercase tracking-widest">Contratar agora</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Mapa do Brasil conforme imagem de referência - Limpo e com destaque visual */}
            <div className="relative w-full max-w-[600px] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-primary-blue/10 blur-[100px] rounded-full"></div>
              <img 
                src="https://imagepng.org/mapa-do-brasil-em-branco/mapa-brasil-em-branco/" 
                alt="Mapa do Brasil com Estados" 
                className="w-full h-auto opacity-80 contrast-125 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
