import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
import salesroomImage from '../assets/salesroom/salesroom3.jpeg';
import factoryImage from '../assets/us/nosotros_banner.jpeg';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');
  
  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título principal mejorado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Información de contacto mejorada */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Imagen de la fábrica a la izquierda */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={factoryImage}
                alt="Industrial Glover Factory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            
            {/* Información de contacto a la derecha */}
            <div className="p-6 md:p-10">
              <ContactInfo />
            </div>
          </div>
        </div>
        
        {/* Sección de mapa y sala de ventas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">{t('map.title')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('map.subtitle')}</p>
            </div>
            <div className="h-[400px] lg:h-[450px]">
              <Map />
            </div>
          </div>
          
          {/* Sala de ventas */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">{t('salesroomSection.title')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('salesroomSection.subtitle')}</p>
            </div>
            <div className="relative h-[300px] lg:h-[350px] overflow-hidden">
              <img 
                src={salesroomImage} 
                alt={t('salesroomSection.imageAlt')}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link 
                  to="/sales-room"
                  className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-lg"
                >
                  {t('salesroomSection.overlayButton')}
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('salesroomSection.cardTitle')}</h4>
                  <p className="text-gray-600 mb-4">{t('salesroomSection.cardDescription')}</p>
                </div>
              </div>
              <Link 
                to="/sales-room"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                {t('salesroomSection.cardLink')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;