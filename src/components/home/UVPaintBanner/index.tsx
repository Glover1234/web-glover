import React from 'react';

const features = [
  {
    id: 1,
    title: 'Acabado homogéneo',
    description: 'Todas las superficies presentan una terminación uniforme, sin irregularidades ni diferencias de tono.',
  },
  {
    id: 2,
    title: 'Resistencia a la humedad',
    description: 'El mueble ofrece protección adicional frente a ambientes húmedos, prolongando su vida útil.',
  },
  {
    id: 3,
    title: 'Tolerancia a la luz solar',
    description: 'Soporta una exposición moderada al sol sin deteriorarse fácilmente.',
  },
  {
    id: 4,
    title: 'Color profundo y definido',
    description: 'El acabado logra tonalidades consistentes y bien saturadas que realzan el diseño del mueble.',
  },
];

const UVPaintBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase mb-2 text-neutral-900">
            Pintura UV
          </h2>
          <span className="block text-xl font-normal mb-2 text-neutral-900">En base al agua</span>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  {feature.id}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{feature.title}</h3>
              </div>
              <div className="w-12 h-0.5 bg-red-600 mb-4"></div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UVPaintBanner;