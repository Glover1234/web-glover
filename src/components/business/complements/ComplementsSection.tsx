import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

// Import single image for each complemento model
import C1 from '../../../assets/complements/complementos/complementos1.jpeg';
import C2 from '../../../assets/complements/complementos/complementos2.jpeg';

// Map model id to its image
const imageMap: Record<string, string> = {
  complement1: C1,
  complement2: C2
};

// Complementos data with features
const complementsData = [
  {
    id: 'complement1',
    name: 'Patas para cama',
    features: [
      'Diseños exclusivos con finos acabados',
      'Fabricación a medida según especificaciones',
      'Materiales de alta calidad y durabilidad',
      'Acabados personalizables para integrarse con cualquier estilo'
    ]
  },
  {
    id: 'complement2',
    name: 'Patas para muebles',
    features: [
      'Amplia variedad de diseños y alturas',
      'Gran capacidad de carga y estabilidad',
      'Acabados premium en madera y metal',
      'Soluciones adaptables a diferentes tipos de muebles'
    ]
  }
];

const ComplementsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = complementsData.find(item => item.id === selectedId) || null;

  return (
    <section id="complements-section" className="py-12 w-full px-4 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase text-neutral-900">Complementos</h2>

      {/* Grid de complementos */}
      <div className="grid grid-cols-12 gap-4">
        {complementsData.map(item => (
          <motion.div
            key={item.id}
            className="col-span-12 lg:col-span-6 cursor-pointer relative group overflow-hidden"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedId(item.id)}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={imageMap[item.id]}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal detalle con bullets de características */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-white rounded-lg w-full max-w-md max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header fijo con botón de cerrar */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 bg-white">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {selected.name}
                </h3>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-red-600 hover:text-red-800 font-bold px-3 py-1 rounded-full hover:bg-red-50 transition-colors text-lg sm:text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Contenido scrolleable */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={imageMap[selected.id!]}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <ul className="list-disc list-inside text-neutral-700 space-y-2 sm:space-y-3">
                  {selected.features.map((feat, idx) => (
                    <li key={idx} className="text-sm sm:text-base leading-relaxed">{feat}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ComplementsSection;