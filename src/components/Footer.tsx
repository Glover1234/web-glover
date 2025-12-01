import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logo from '../assets/general/logo.jpeg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-neutral-900">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,120 C480,60 960,60 1440,120 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container relative pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Glover Logo" className="w-32 h-auto" />
            </div>
            <p className="text-neutral-600 mb-4">
              Calidad que se siente.
            </p>
            <div className="flex space-x-3">
              <a href="https://cl.linkedin.com/company/industrial-glover-spa" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-2">CONTACTO</h4>
            <div className="w-12 h-0.5 bg-red-600 mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-neutral-900 mr-2 mt-0.5" />
                <span className="text-neutral-600">
                Ruta 5 Sur Km 655 Pillanlelbun, Lautaro, Región de la Araucanía, Chile
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-neutral-900 mr-2" />
                <span className="text-neutral-600">+56 45 2 967500</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-neutral-900 mr-2" />
                <span className="text-neutral-600">contacto@glover.cl</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom curved border */}
        <div className="relative mt-12">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white transform rotate-180">
            <path d="M0,120 C480,60 960,60 1440,120 L1440,0 L0,0 Z" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-neutral-600">
              &copy; {currentYear} Glover. Todos los derechos reservados - Desarrollado por{' '}
              <a 
                href="https://gostudio.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                gostudio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;