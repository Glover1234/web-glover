import React from 'react';
import InfoItem from './InfoItem';
import { MapPin, Phone, Mail, Clock, Store } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Información de Contacto
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-md mx-auto">
          Ponte en contacto con nosotros a través de cualquiera de estos medios
        </p>
      </div>
      
      {/* Grid layout para mejor organización */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <InfoItem
          icon={MapPin}
          title="DIRECCIÓN"
          content="Ruta 5 Sur Km 655 Pillanlelbun, Lautaro, Región de la Araucanía, Chile"
          link="https://maps.google.com"
        />
        
        <InfoItem
          icon={Phone}
          title="TELÉFONO"
          content="+56 45 2 967500"
          link="tel:+56452967500"
        />
        
        <InfoItem
          icon={Mail}
          title="EMAIL"
          content="contacto@glover.cl"
          link="mailto:contacto@glover.cl"
        />
        
        <InfoItem
          icon={Clock}
          title="HORARIO DE ATENCIÓN"
          content="Lunes a Viernes: 9:00 - 16:30"
        />
      </div>
      
      {/* Sección destacada para sala de ventas */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-red-50 rounded-xl p-6">
          <InfoItem
            icon={Store}
            title="SALA DE VENTAS"
            content="Visita nuestra sala de ventas y descubre nuestros productos"
            link="/sales-room"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;