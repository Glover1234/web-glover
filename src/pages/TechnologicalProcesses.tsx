import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Cog, 
  Settings, 
  Zap, 
  Shield, 
  Leaf, 
  CheckCircle,
  ChevronDown,
  Monitor,
  Layers,
  Cpu,
  Award
} from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';

// Import banner and process photos
import ProcessBanner from '../assets/processes/banner/banner1.JPG';
import Scanner2 from '../assets/processes/photos/scanner2.JPG';
import Scanner3 from '../assets/processes/photos/scanner3.JPG';
import CNC1 from '../assets/processes/photos/cnc1.JPG';
import CNC2 from '../assets/processes/photos/cnc2.JPG';
import Encuadradora1 from '../assets/processes/photos/encuadradora1.JPG';
import Encuadradora2 from '../assets/processes/photos/encuadradora2.JPG';
import Pintura1 from '../assets/processes/photos/pintura.JPG';
import Pintura2 from '../assets/processes/photos/pintura2.JPG';
import Process3 from '../assets/processes/photos/process3.jpeg';

const TechnologicalProcesses: React.FC = () => {
  const { t } = useTranslation('processes');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Process photos array for the gallery - images are static, only text is translated
  const processPhotosImages = [Scanner2, Scanner3, CNC1, CNC2, Encuadradora1, Encuadradora2, Pintura1, Pintura2, Process3];
  const processPhotos = (t('gallery.photos', { returnObjects: true }) as Array<{title: string; description: string}>).map((photo, index) => ({
    url: processPhotosImages[index],
    alt: photo.title,
    title: photo.title,
    description: photo.description
  }));

  const machineryProcesses = t('machinery.items', { returnObjects: true }) as Array<{title: string; description: string}>;
  const technologyDetails = t('technologyDetails.items', { returnObjects: true }) as Array<{title: string; content: string}>;
  const paintBenefits = t('paintTechnology.benefits', { returnObjects: true }) as Array<{title: string; description: string}>;
  const qualityFeatures = t('quality.features', { returnObjects: true }) as string[];

  const machineryIcons = [Monitor, Settings, Layers, Cpu];
  const paintIcons = [Shield, Leaf, Zap, CheckCircle, Settings, Cog];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[75vh] overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={ProcessBanner}
            alt="Procesos Tecnológicos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-wider mb-4 sm:mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-6"
            >
              {t('hero.subtitle')}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '150px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-red-600 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-white font-light italic mb-20 max-w-4xl mx-auto leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Maquinarias y Procesos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-neutral-900">
              {t('machinery.title')}
            </h2>
            <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineryProcesses.map((process, index) => {
              const IconComponent = machineryIcons[index];
              return (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-3 bg-red-100 rounded-xl w-fit mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">
                    {process.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-neutral-900">
              {t('technologyDetails.title')}
            </h2>
            <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {technologyDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-neutral-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleSection(detail.title)}
                  className="w-full flex items-center justify-between text-left py-6 group"
                >
                  <span className="text-lg font-semibold text-neutral-900 group-hover:text-red-600 transition-colors pr-4">
                    {detail.title}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${
                      expandedSection === detail.title 
                        ? 'rotate-180 text-red-600' 
                        : 'group-hover:text-red-600'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedSection === detail.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="text-neutral-600 leading-relaxed">
                          {detail.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Technology Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-neutral-900">
              {t('paintTechnology.title')}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-neutral-800">
              {t('paintTechnology.subtitle')}
            </h3>
            <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintBenefits.map((benefit, index) => {
              const IconComponent = paintIcons[index];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-3 bg-red-100 rounded-xl w-fit mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-neutral-900">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 text-neutral-900">
              {t('quality.title')}
            </h2>
            <div className="w-24 h-0.5 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {t('quality.description')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="p-2 bg-red-100 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-neutral-900">
              {t('gallery.title')}
            </h2>
            <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          </motion.div>

          {/* Process Photos Grid - 2 columns with names and descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {processPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default TechnologicalProcesses;