import React from 'react';
import { Link } from 'react-router-dom';

const businessLines = [
  { id: 'doors', title: 'Puertas', path: '/business-lines/doors' },
  { id: 'furniture', title: 'Muebles', path: '/business-lines/furniture' },
  { id: 'wood', title: 'Maderas de Exportación', path: '/business-lines/wood' },
  { id: 'structures', title: 'Estructuras', path: '/business-lines/structures' },
  { id: 'complements', title: 'Complementos', path: '/business-lines/complements' },
];

const BusinessLines: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-6 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900">LÍNEAS DE NEGOCIO</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-xl mx-auto">
          <ul className="bg-white rounded-lg shadow divide-y">
            {businessLines.map((line) => (
              <li key={line.id} className="p-4">
                <Link to={line.path} className="flex items-center justify-between text-neutral-900 hover:text-red-600">
                  <span className="font-semibold">{line.title}</span>
                  <span className="text-sm text-neutral-500">Ir</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Este menú ofrece acceso rápido a las líneas de negocio.
        </div>
      </div>
    </section>
  );
};

export default BusinessLines;