import React from 'react';
import { Truck, PenTool as Tool, CreditCard, Phone } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Express delivery',
    description: 'Entrega tu pedido antes de las 18:00 h y recíbelo al día siguiente.',
  },
  {
    icon: Tool,
    title: 'Servicio de armado',
    description: 'Incluido en el despacho.',
  },
  {
    icon: CreditCard,
    title: 'Medios de pago',
    description: 'Paga con hasta 12 cuotas sin interés.',
  },
  {
    icon: Phone,
    title: 'Venta telefónica',
    description: 'Llama al +562 26205300 de 8:30 a 20:00 h.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 border-t border-neutral-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon className="w-8 h-8 text-neutral-900 mx-auto mb-4" />
              <h3 className="text-sm font-medium text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;