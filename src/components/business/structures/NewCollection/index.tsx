import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import local collection images for estructuras
import Collection1 from '../../../../assets/structures/coleccion/coleccion1.jpeg';
import Collection2 from '../../../../assets/structures/coleccion/coleccion2.jpeg';
import Collection3 from '../../../../assets/structures/coleccion/coleccion3.jpeg';

const NewCollection: React.FC = () => {
  const { t } = useTranslation('business');
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const features = t('structures.attributes', { returnObjects: true }) as Array<{ title: string; content: string }>;

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-4">
                {t('structures.sectionTitle')}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                {t('structures.description')}
              </p>
              
              {/* Desplegable de atributos */}
              <div className="mt-8 max-w-xl">
                
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-neutral-200 last:border-b-0"
                  >
                    <button
                      onClick={() => setOpenSection(openSection === feature.title ? null : feature.title)}
                      className="w-full flex items-center justify-between text-left py-4 group"
                    >
                      <span className="text-base font-light uppercase text-neutral-800 group-hover:text-red-600 transition-colors tracking-wider">
                        {feature.title}
                      </span>
                      <Plus
                        className={`w-4 h-4 transition-all duration-300 ${
                          openSection === feature.title ? 'rotate-45 text-red-600' : 'text-neutral-500 group-hover:text-red-600'
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openSection === feature.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-600 pb-4 leading-relaxed text-sm">
                            {feature.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2"
            >
              <img
                src={Collection3}
                alt="Estructura Premium"
                className="w-full h-[350px] object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={Collection1}
                alt="Detalle de base de cama"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={Collection2}
                alt="Detalle de respaldo"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
