import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';
import { trackGloverBusinessLine } from '../../../utils/analytics';
import { businessLineFeatures } from '../../business/BusinessLineAttributes';

// Importando las imágenes de las líneas de negocio
import doorsImage from '../../../assets/home_lines/doors.jpeg';
import furnitureImage from '../../../assets/home_lines/furniture.jpeg';
import woodImage from '../../../assets/home_lines/wood.jpeg';
import structuresImage from '../../../assets/home_lines/structures.jpeg';
import complementsImage from '../../../assets/home_lines/complements.jpeg';

const businessLines = [
  {
    id: 'doors',
    title: 'PUERTAS',
    image: doorsImage,
    description: 'Realizamos atractivas puertas en madera 100% sólidas con uso orientado a los accesos principales.',
    features: businessLineFeatures.doors,
    path: '/business-lines/doors'
  },
  {
    id: 'furniture',
    title: 'MUEBLES',
    image: furnitureImage,
    description: 'Trabajamos mayoritariamente con la producción de muebles, abasteciendo a grandes empresas de decoración y otros clientes del mercado nacional y exportación.',
    features: businessLineFeatures.furniture,
    path: '/business-lines/furniture'
  },
  {
    id: 'wood',
    title: 'MADERAS DE EXPORTACIÓN',
    image: woodImage,
    description: 'Trabajamos con maderas semielaboradas en formatos de Blanks y Boards para clientes internacionales.',
    features: businessLineFeatures.wood,
    path: '/business-lines/wood'
  },
  {
    id: 'structures',
    title: 'ESTRUCTURAS',
    image: structuresImage,
    description: 'Para la fabricación de bases de cama, sofá y respaldos.',
    features: businessLineFeatures.structures,
    path: '/business-lines/structures'
  },
  {
    id: 'complements',
    title: 'COMPLEMENTOS',
    image: complementsImage,
    description: 'Fabricamos aplicaciones, una amplia línea de patas con finos acabados para uso en muebles y camas.',
    features: businessLineFeatures.complements,
    path: '/business-lines/complements'
  }
];

const BusinessLines: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  // Initialize analytics
  const { trackBusinessLineView } = useGoogleAnalytics();

  const handleLineClick = (id: string) => {
    setSelectedLine(id);
    setOpenSection(null);
    
    // Track business line interaction
    const businessLine = businessLines.find(line => line.id === id);
    if (businessLine) {
      trackBusinessLineView(businessLine.title);
      // Tracking específico para Looker Studio
      trackGloverBusinessLine(businessLine.id, 'view_details');
    }
  };

  const handleBack = () => {
    setSelectedLine(null);
    setOpenSection(null);
  };

  const handleVerMasClick = (businessLineId: string, businessLineTitle: string) => {
    // Track business line "Ver más" interaction
    trackGloverBusinessLine(businessLineId, 'view_more_details');
    trackBusinessLineView(`${businessLineTitle} - Ver más`);
  };

  const selectedProduct = businessLines.find(line => line.id === selectedLine);

  // Dividir las líneas de negocio en dos grupos
  const firstRow = businessLines.slice(0, 3);
  const secondRow = businessLines.slice(3);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900">
            LÍNEAS DE NEGOCIO
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Navigation */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mb-12">
            {selectedLine && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleBack}
                className="text-base md:text-lg font-bold uppercase tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors flex items-center group"
              >
                <ChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-2" />
                VOLVER
              </motion.button>
            )}
            {businessLines.map((line) => (
              <motion.button
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => handleLineClick(line.id)}
                className={`text-base md:text-lg font-bold uppercase tracking-wide transition-all hover:-translate-y-1 ${
                  selectedLine === line.id
                    ? 'text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {line.title}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {!selectedLine ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full space-y-8"
              >
                {/* Primera fila - 3 elementos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {firstRow.map((line, index) => (
                    <motion.div
                      key={line.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="relative aspect-square overflow-hidden mb-4 rounded-lg shadow-lg"
                        onClick={() => handleLineClick(line.id)}
                      >
                        <img
                          src={line.image}
                          alt={line.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
                          >
                            <Plus className="w-6 h-6 text-white" />
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg md:text-xl font-bold uppercase mb-2 text-neutral-900 group-hover:text-red-600 transition-colors">
                          {line.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-red-600 transition-all group-hover:w-24"></div>
                        <p className="text-neutral-600 text-sm">{line.description}</p>
                        <Link
                          to={line.path}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors group/btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVerMasClick(line.id, line.title);
                          }}
                        >
                          Ver más
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Segunda fila - 2 elementos centrados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {secondRow.map((line, index) => (
                    <motion.div
                      key={line.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 3) * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="relative aspect-square overflow-hidden mb-4 rounded-lg shadow-lg"
                        onClick={() => handleLineClick(line.id)}
                      >
                        <img
                          src={line.image}
                          alt={line.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
                          >
                            <Plus className="w-6 h-6 text-white" />
                          </motion.div>
                        </motion.div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg md:text-xl font-bold uppercase mb-2 text-neutral-900 group-hover:text-red-600 transition-colors">
                          {line.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-red-600 transition-all group-hover:w-24"></div>
                        <p className="text-neutral-600 text-sm">{line.description}</p>
                        <Link
                          to={line.path}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors group/btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVerMasClick(line.id, line.title);
                          }}
                        >
                          Ver más
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-4">
                    {selectedProduct?.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-t border-neutral-200 py-4"
                      >
                        <button
                          onClick={() => setOpenSection(openSection === feature.title ? null : feature.title)}
                          className="w-full flex items-center justify-between text-left group"
                        >
                          <span className="font-bold uppercase text-neutral-900 group-hover:text-red-600 transition-colors">
                            {feature.title}
                          </span>
                          <Plus
                            className={`w-5 h-5 transition-all duration-300 ${
                              openSection === feature.title ? 'rotate-45 text-red-600' : 'group-hover:text-red-600'
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openSection === feature.title && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-neutral-600 mt-2 overflow-hidden"
                            >
                              {feature.content}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                    
                    {/* Botón Ver más en la vista de detalle */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-6 border-t border-neutral-200"
                    >
                      <Link
                        to={selectedProduct?.path || '#'}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors group/btn"
                        onClick={() => {
                          if (selectedProduct) {
                            handleVerMasClick(selectedProduct.id, selectedProduct.title);
                          }
                        }}
                      >
                        Ver más detalles
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={selectedProduct?.image}
                      alt={selectedProduct?.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BusinessLines;