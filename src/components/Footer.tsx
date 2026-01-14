import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/general/logo.jpeg';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Glover Logo" className="w-32 h-auto" />
            </div>
            <p className="text-neutral-600 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3">
              <a href="https://cl.linkedin.com/company/industrial-glover-spa" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          {/* Page Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-2">{t('footer.companyTitle')}</h4>
            <div className="w-12 h-0.5 bg-red-600 mb-4"></div>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-neutral-600 hover:text-neutral-900">{t('nav.home')}</a>
              </li>
              <li>
                <a href="/business-lines" className="text-neutral-600 hover:text-neutral-900">{t('nav.businessLines')}</a>
              </li>
              <li>
                <a href="/certifications-sustainability" className="text-neutral-600 hover:text-neutral-900">{t('nav.sustainability')}</a>
              </li>
              <li>
                <a href="/technological-processes" className="text-neutral-600 hover:text-neutral-900">{t('nav.processes')}</a>
              </li>
              <li>
                <a href="/sales-room" className="text-neutral-600 hover:text-neutral-900">{t('nav.salesroom')}</a>
              </li>
              <li>
                <a href="/about-us" className="text-neutral-600 hover:text-neutral-900">{t('nav.aboutUs')}</a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-600 hover:text-neutral-900">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-2">{t('footer.contactTitle')}</h4>
            <div className="w-12 h-0.5 bg-red-600 mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-neutral-900 mr-2 mt-0.5" />
                <span className="text-neutral-600">
                {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-neutral-900 mr-2" />
                <span className="text-neutral-600">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-neutral-900 mr-2" />
                <span className="text-neutral-600">{t('footer.email')}</span>
              </li>
            </ul>

            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-2">{t('footer.usefulLinks')}</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://es.surveymonkey.com/r/canal_de_denuncias_del_modelo_de_prevencion_de_delitos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-red-600 flex items-center"
                  >
                    <MapPin className="w-4 h-4 mr-2" /> {t('footer.complaintChannel')}
                  </a>
                </li>
                <li>
                  <a
                    href="http://mailingrosen.com/mailing/pdf/codigo-etica-rosen.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-red-600 flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" /> {t('footer.ethicsCode')}
                  </a>
                </li>
                <li>
                  <a
                    href="http://mailingrosen.com/mailing/pdf/manual-de-prevencion-de-delitos-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-red-600 flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" /> Manual Prevención de Delitos (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom curved border */}
        <div className="relative mt-12">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white transform rotate-180">
            <path d="M0,120 C480,60 960,60 1440,120 L1440,0 L0,0 Z" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-neutral-600">
              {t('footer.rights', { year: currentYear })} - Desarrollado por{' '}
              <a 
                href="https://zaas.cl/servicios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                Zaas
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;