import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

// Import furniture images
import Mueble1 from '../../../assets/furniture/muebles/muebles1.jpeg';
import Mueble2 from '../../../assets/furniture/muebles/muebles2.png';
import Mueble3 from '../../../assets/furniture/muebles/muebles3.jpeg';
import Mueble4 from '../../../assets/furniture/muebles/muebles4.jpeg';
import Mueble5 from '../../../assets/furniture/muebles/muebles5.jpeg';
import Mueble6 from '../../../assets/furniture/muebles/muebles6.png';

// Map id to image
const imageMap: Record<string, string> = {
  muebles1: Mueble1,
  muebles2: Mueble2,
  muebles3: Mueble3,
  muebles4: Mueble4,
  muebles5: Mueble5,
  muebles6: Mueble6,
};

// Furniture items data with specific bullet features
const furnitureData = [
  {
    id: 'muebles1',
    name: 'Bases para Camas',
    features: [
      { title: 'Estructura robusta', desc: 'Fabricada con madera procesada en nuestro propio aserradero' },
      { title: 'Acabado homogéneo', desc: 'Resistente a la humedad gracias a nuestras pinturas a base de agua' },
      { title: 'Diseño preciso', desc: 'Fabricación con precisión CNC garantizando uniformidad en cada producto' },
      { title: 'Incluye documentación', desc: 'Instructivo de armado y garantía incluidos' }
    ]
  },
  {
    id: 'muebles6',
    name: 'Respaldos',
    features: [
      { title: 'Diseño ergonómico', desc: 'Adaptado para mayor comodidad' },
      { title: 'Acabado suave', desc: 'Al tacto con secado por luz ultravioleta' },
      { title: 'Maderas estables', desc: 'Fabricados con maderas de tensiones reducidas para evitar deformaciones' },
      { title: 'Estructura duradera', desc: 'Estructura interna que mantiene la forma a lo largo del tiempo' }
    ]
  },
  {
    id: 'muebles3',
    name: 'Veladores',
    features: [
      { title: 'Pinturas eco-amigables', desc: 'De origen italiano a base de agua' },
      { title: 'Ensamblaje perfecto', desc: 'Gracias a nuestro proceso de maquinado con tecnología CNC' },
      { title: 'Acabado superior', desc: 'Superficies con acabado suave y color profundo y definido' },
      { title: 'Sin imperfecciones', desc: 'Estructura interna libre de imperfecciones gracias a nuestro escáner digital' }
    ]
  },
  {
    id: 'muebles4',
    name: 'Cómodas',
    features: [
      { title: 'Almacenamiento espacioso', desc: 'Fabricado con madera de alta calidad' },
      { title: 'Tratamiento especializado', desc: 'Maderas con humedad óptima para evitar deformaciones' },
      { title: 'Resistente a la luz', desc: 'Acabado resistente a la exposición moderada de luz solar' },
      { title: 'Uniones perfectas', desc: 'Mediante técnica finger joint para crear paneles de mayor tamaño' }
    ]
  },
  {
    id: 'muebles5',
    name: 'Muebles para terraza',
    features: [
      { title: 'Resistente a la intemperie', desc: 'Tratamiento especial para resistir condiciones climáticas adversas' },
      { title: 'Protección UV', desc: 'Acabado con protección ultravioleta para evitar decoloración' },
      { title: 'Impermeabilización', desc: 'Sellado especializado que protege contra humedad y lluvia' },
      { title: 'Madera tratada', desc: 'Maderas seleccionadas y tratadas específicamente para uso exterior' }
    ]
  }
];

const FurnitureSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = furnitureData.find(item => item.id === selectedId);

  return (
    <section id="furniture-section" className="py-12 w-full px-4 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase text-neutral-900">Muebles</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-12 gap-4">
        {furnitureData.map(item => (
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

      {/* Modal detalle con tarjetas de atributos */}
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
              className="bg-white rounded-lg w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {selected.features.map((f, i) => (
                    <div key={i} className="border border-red-600 rounded-lg p-3 sm:p-4 flex flex-col">
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">{f.title}</h4>
                      <p className="text-xs sm:text-sm flex-grow text-gray-600">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FurnitureSection;
