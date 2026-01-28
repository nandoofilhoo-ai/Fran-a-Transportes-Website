
import React from 'react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const Fleet: React.FC = () => {
  const specs = [
    { label: 'Frota', value: '100%', sub: 'Scania Rodotrens' },
    { label: 'Motorização', value: 'V8', sub: 'Alta Performance' },
    { label: 'Capacidade', value: '91 ton', sub: 'PBT Máximo' },
    { label: 'Tecnologia', value: 'Tração', sub: 'Inteligente' },
  ];

  return (
    <div className="relative py-24 bg-gray-900 text-white overflow-hidden">
      {/* Background with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?auto=format&fit=crop&q=80&w=2000" 
          alt="Truck on road" 
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frota 100% Rodotrens Scania</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Veículos de alta capacidade, com motor V8 potente e tração inteligente para cargas pesadas em todo Brasil.
          </p>
        </div>

        {/* Fleet Carousel Simulated via Grid for Simplicity & Layout Focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group relative rounded-3xl overflow-hidden h-[400px] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" alt="External view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h4 className="text-2xl font-bold">Rodotrem 11 Eixos</h4>
                <p className="text-primary-blue font-semibold">Capacidade até 91 ton</p>
              </div>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden h-[400px] shadow-2xl">
            <img src="https://planetacaminhao.com.br/uploads/blog/513f8-000053_2022-caminhoes_longas_distancias_spread-9.jpeg" alt="Interior view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h4 className="text-2xl font-bold">Cabine Premium</h4>
                <p className="text-primary-blue font-semibold">Conforto e Tecnologia</p>
              </div>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden h-[400px] shadow-2xl">
            <img src="https://d2e5b8shawuel2.cloudfront.net/vehicle/324278/hlv/600.jpg" alt="Night view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h4 className="text-2xl font-bold">Segurança Noturna</h4>
                <p className="text-primary-blue font-semibold">Monitoramento 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specs.map((spec) => (
            <div key={spec.label} className="text-center p-8 glass rounded-3xl">
              <span className="block text-4xl font-bold text-primary-blue mb-1">{spec.value}</span>
              <span className="block text-lg font-semibold">{spec.label}</span>
              <span className="block text-sm text-gray-400">{spec.sub}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-whatsapp-green hover:bg-green-600 text-white py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Pergunte sobre nossa frota</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
