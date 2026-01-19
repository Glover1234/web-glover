import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const businessLines = [
  { id: 'doors', title: 'Puertas', path: '/business-lines/doors', image: '/src/assets/home_lines/doors.jpeg' },
  { id: 'furniture', title: 'Muebles', path: '/business-lines/furniture', image: '/src/assets/home_lines/furniture.jpeg' },
  { id: 'wood', title: 'Maderas de exportación', path: '/business-lines/wood', image: '/src/assets/home_lines/wood.jpeg' },
  { id: 'structures', title: 'Estructuras', path: '/business-lines/structures', image: '/src/assets/home_lines/structures.jpeg' },
  { id: 'complements', title: 'Complementos', path: '/business-lines/complements', image: '/src/assets/home_lines/complements.jpeg' },
];

const BusinessLinesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (e: React.MouseEvent, imageSrc: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(imageSrc);
  };

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
            <div className="relative w-48 h-32 flex-shrink-0 bg-neutral-100 cursor-pointer group/image">
              <img
                src={line.image}
                alt={line.title}
                onClick={(e) => handleImageClick(e, line.image)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-20 transition-all flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
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

      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage || ''}
        imageAlt="Vista completa"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default BusinessLinesPage;