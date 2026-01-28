
import React from 'react';
import { StarIcon, WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/XL2WAIST2ZPSHCQLG7HOALTLAE.jpg" 
          alt="Frota de caminhões Scania França Transportes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full pt-32 lg:pt-0">
        
        {/* Left Side: Main Text & CTA */}
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-4 drop-shadow-xl tracking-tighter">
            França<br />
            Transportes
          </h1>
          <p className="text-2xl md:text-5xl text-white font-semibold mb-12 tracking-tight drop-shadow-lg">
            Logística Interestadual<br />
            Premium
          </p>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-white hover:bg-gray-100 text-gray-900 py-3 pl-3 pr-10 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="bg-whatsapp-green p-3 rounded-full text-white shadow-lg">
              <WhatsAppIcon className="w-8 h-8" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-black tracking-tight">
              Entrar em Contato
            </span>
          </a>
        </div>

        {/* Right Side: Rating Bubble */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col items-center justify-center p-8 text-center text-white transform hover:scale-105 transition-transform duration-500">
            <h3 className="text-2xl font-semibold mb-6 leading-tight">
              Satisfação<br />do Cliente
            </h3>
            
            <div className="flex -space-x-3 mb-4">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" className="w-14 h-14 rounded-full border-2 border-white object-cover" alt="Gestor Corporativo" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" className="w-14 h-14 rounded-full border-2 border-white object-cover" alt="Executiva Corporativa" />
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150" className="w-14 h-14 rounded-full border-2 border-white object-cover" alt="Diretor" />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">4,9/5</span>
              <StarIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
