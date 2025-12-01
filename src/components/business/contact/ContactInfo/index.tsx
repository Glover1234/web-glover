import React from 'react';
import InfoItem from './InfoItem';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase mb-2">
          INFORMACIÓN DE CONTACTO
        </h2>
        <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
      </div>
      
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
        content="Lunes a Viernes: 9:00 - 18:00"
      />
    </div>
  );
};

export default ContactInfo;