
import React from 'react';
import { NAV_LINKS, WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-tighter text-primary-blue mb-6">
              <span className="italic">F</span>rança Transportes
            </div>
            <p className="text-gray-400 font-light mb-6">
              Excelência em logística interestadual com frota 100% Scania. 
              Segurança, tecnologia e compromisso em cada quilômetro.
            </p>
            <div className="flex space-x-4">
              <a href={WHATSAPP_LINK} className="bg-white/5 hover:bg-whatsapp-green p-3 rounded-full transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              {/* Other icons could go here */}
            </div>
          </div>

          {/* Links */}
          <div className="md:ml-auto">
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:ml-auto">
            <h4 className="text-lg font-bold mb-6">Localização</h4>
            <p className="text-gray-400 mb-2">Feira de Santana - BA</p>
            <p className="text-gray-400 text-sm">Rua Juracy Magalhães, 853, Ponto Central</p>
            <p className="text-gray-400 text-sm mt-4">Atendimento 24h para cotações via WhatsApp</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} França Transportes. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência logística</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
