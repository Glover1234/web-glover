import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoItem from './InfoItem';
import { MapPin, Phone, Mail, Clock, Store } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation('contact');
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          {t('info.title')}
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-md mx-auto">
          {t('info.description')}
        </p>
      </div>
      
      {/* Grid layout para mejor organización */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <InfoItem
          icon={MapPin}
          title={t('info.address')}
          content={t('info.addressValue')}
          link="https://maps.google.com"
        />
        
        <InfoItem
          icon={Phone}
          title={t('info.phone')}
          content={t('info.phoneValue')}
          link="tel:+56452967500"
        />
        
        <InfoItem
          icon={Mail}
          title={t('info.email')}
          content={t('info.emailValue')}
          link="mailto:contacto@glover.cl"
        />
        
        <InfoItem
          icon={Clock}
          title={t('info.hours')}
          content={t('info.hoursValue')}
        />
      </div>
      
      {/* Sección destacada para sala de ventas */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-red-50 rounded-xl p-6">
          <InfoItem
            icon={Store}
            title={t('info.salesroom')}
            content={t('info.salesroomValue')}
            link="/sales-room"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;