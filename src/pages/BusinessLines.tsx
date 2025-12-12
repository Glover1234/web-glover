import React from 'react';
import { Link } from 'react-router-dom';

const businessLines = [
  { id: 'doors', title: 'Puertas', path: '/business-lines/doors', image: '/src/assets/home_lines/doors.jpeg' },
  { id: 'furniture', title: 'Muebles', path: '/business-lines/furniture', image: '/src/assets/home_lines/furniture.jpeg' },
  { id: 'wood', title: 'Maderas de exportación', path: '/business-lines/wood', image: '/src/assets/home_lines/wood.jpeg' },
  { id: 'structures', title: 'Estructuras', path: '/business-lines/structures', image: '/src/assets/home_lines/structures.jpeg' },
  { id: 'complements', title: 'Complementos', path: '/business-lines/complements', image: '/src/assets/home_lines/complements.jpeg' },
];

const BusinessLinesPage: React.FC = () => {
  return (
    <div className="container pt-24 md:pt-28 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">Líneas de negocio</h1>
        <p className="text-sm text-neutral-500">Selecciona una línea para ver sus productos</p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {businessLines.map((line) => (
          <Link
            to={line.path}
            key={line.id}
            className="group flex items-center bg-white rounded-lg shadow hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="relative w-48 h-32 flex-shrink-0 bg-neutral-100">
              <img
                src={line.image}
                alt={line.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-red-600 transition-colors">{line.title}</h3>
              <p className="text-sm text-neutral-500">Ver productos y detalles de la línea</p>
            </div>
            <div className="pr-6">
              <svg className="w-6 h-6 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessLinesPage;