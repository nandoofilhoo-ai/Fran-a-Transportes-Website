
import React from 'react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-secondary-blue text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Entre em Contato</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Sede Administrativa</h4>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Rua Juracy Magalhães, 853, Ponto Central<br />
                    Feira de Santana - BA, 44075-115
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-whatsapp-green/20 p-4 rounded-2xl">
                  <WhatsAppIcon className="w-8 h-8 text-whatsapp-green" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Comercial & Cotações</h4>
                  <p className="text-white/80 text-lg mb-4">Atendimento imediato via WhatsApp</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-whatsapp-green hover:bg-green-600 text-white py-3 px-8 rounded-full font-bold transition-all whatsapp-pulse"
                  >
                    <span>Cotar via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] border-4 border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.2046965158586!2d-38.95470072382601!3d-12.247952945769742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439994c979d35%3A0x7d6f5f9e9e9e9e9e!2sR.%20Juracy%20Magalh%C3%A3es%2C%20853%20-%20Ponto%20Central%2C%20Feira%20de%20Santana%20-%20BA%2C%2044075-115!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
