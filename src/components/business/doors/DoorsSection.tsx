import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

// Import single image for each model
import BariImg from '../../../assets/doors/puertas/BARI.jpeg';
import LlaimaImg from '../../../assets/doors/puertas/LLAIMA.jpg';
import MuranoImg from '../../../assets/doors/puertas/MURANO.jpg';
import LascarImg from '../../../assets/doors/puertas/LASCAR.jpeg';
import TurinImg from '../../../assets/doors/puertas/TURIN.jpg';

// Map model to its image
const imageMap: Record<string, string> = {
  bari: BariImg,
  llaima: LlaimaImg,
  murano: MuranoImg,
  lascar: LascarImg,
  turin: TurinImg,
};

// Door models data with specific features
const doorsData = [
  {
    id: 'bari',
    name: 'Modelo Bari',
    features: [
      { title: 'Madera 100% sólida', desc: 'Pino Radiata con proceso finger joint para máxima resistencia.' },
      { title: 'Alta protección UV', desc: 'Acabado UV que protege contra humedad y rayos solares.' },
      { title: 'Aislamiento térmico y acústico', desc: 'Espesor de 4 cm para confort interior.' },
      { title: 'Certificación FSC', desc: 'Manejo forestal sostenible garantizado.' },
      { title: 'Resistencia al impacto', desc: 'Construcción robusta sin deformación.' },
      { title: 'Instalación rápida', desc: 'Herrajes incluidos para montaje fácil.' }
    ]
  },
  {
    id: 'llaima',
    name: 'Modelo Llaima',
    features: [
      { title: 'Madera 100% sólida', desc: 'Pino Radiata secado lento en cámara para máxima estabilidad.' },
      { title: 'Alta protección UV', desc: 'Acabado resistente a humedad y exposición moderada a luz solar.' },
      { title: 'Aislamiento térmico y acústico', desc: 'Espesor de 4,5 cm para confort al interior del hogar.' },
      { title: 'Certificación FSC', desc: 'Manejo forestal sostenible garantizado.' },
      { title: 'Resistencia al impacto', desc: 'Sin deformación permanente.' },
      { title: 'Instalación fácil y segura', desc: 'Lista para instalar fácilmente.' }
    ]
  },
  {
    id: 'murano',
    name: 'Modelo Murano',
    features: [
      { title: 'Madera 100% sólida', desc: 'Pino Radiata secado en cámara con estructura finger joint.' },
      { title: 'Alta protección UV', desc: 'Alta resistencia a humedad y exposición solar.' },
      { title: 'Vidrio Laminado de Seguridad', desc: 'Cristal de 6 mm prácticamente inseparable en caso de rotura.' },
      { title: 'Certificación FSC', desc: 'Manejo forestal sostenible garantizado.' },
      { title: 'Aislamiento superior', desc: 'Espesor de 4,5 cm. Excelente aislamiento térmico y acústico.' },
      { title: 'Instalación fácil y segura', desc: 'Lista para uso inmediato.' }
    ]
  },
  {
    id: 'lascar',
    name: 'Modelo Lascar',
    features: [
      { title: 'Madera 100% sólida', desc: 'Pino Radiata secado lento en cámara para máxima estabilidad.' },
      { title: 'Alta protección UV', desc: 'Acabado resistente a humedad y exposición moderada a luz solar.' },
      { title: 'Aislamiento térmico y acústico', desc: 'Espesor de 4 cm para confort al interior del hogar.' },
      { title: 'Certificación FSC', desc: 'Manejo forestal sostenible garantizado.' },
      { title: 'Resistencia al impacto', desc: 'Sin deformación permanente.' },
      { title: 'Instalación fácil', desc: 'Lista para uso inmediato.' }
    ]
  },
  {
    id: 'turin',
    name: 'Modelo Turín',
    features: [
      { title: 'Madera 100% sólida', desc: 'Pino Radiata estructurado con finger joint revestido en enchapado.' },
      { title: 'Protección UV Premium', desc: 'Acabado teñido, sellado y al agua con secado UV, resistente a humedad y rayos solares.' },
      { title: 'Aislamiento térmico y acústico', desc: 'Reduce hasta 21 dB del ruido exterior (ISO 717-1).' },
      { title: 'Certificación FSC', desc: 'Manejo forestal sostenible garantizado.' },
      { title: 'Transmitancia térmica', desc: 'Aislación eficiente con 1,63 W/m²K.' },
      { title: 'Hermeticidad garantizada', desc: 'Alta resistencia al impacto sin deformación.' }
    ]
  }
];

const DoorsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = doorsData.find(d => d.id === selectedId) || null;

  return (
    <section id="doors-section" className="py-12 w-full px-4 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">Puertas</h2>

      {/* Grid de modelos */}
      <div className="grid grid-cols-12 gap-4">
        {doorsData.map(prod => {
          const colSpan = prod.features.length > 4
            ? 'col-span-12 lg:col-span-6'
            : 'col-span-6 lg:col-span-4';
          const aspectRatio = 'aspect-[4/3]';
          const imgSrc = imageMap[prod.id];

          return (
            <motion.div
              key={prod.id}
              className={`${colSpan} cursor-pointer relative group overflow-hidden`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedId(prod.id)}
            >
              <div className={`${aspectRatio} overflow-hidden`}>
                <img
                  src={imgSrc}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{prod.name}</h3>
                </div>
              </div>
            </motion.div>
          );
        })}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

export default DoorsSection;
