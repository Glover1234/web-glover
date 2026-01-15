import React, { useState, useEffect } from 'react';
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
  Award,
  Scissors,
  Scan,
  Grid3x3,
  Droplet,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';

// Import banner and process photos
import ProcessBanner from '../assets/processes/banner/banner1.JPG';
import Scanner from '../assets/processes/photos/Scanner.jpg';
import Scanner2 from '../assets/processes/photos/scanner2.JPG';
import Scanner3 from '../assets/processes/photos/scanner3.JPG';
import CNC1 from '../assets/processes/photos/cnc1.JPG';
import CNC2 from '../assets/processes/photos/cnc2.JPG';
import Encuadradora1 from '../assets/processes/photos/encuadradora1.JPG';
import Encuadradora2 from '../assets/processes/photos/encuadradora2.JPG';
import Pintura1 from '../assets/processes/photos/pintura.JPG';
import Pintura2 from '../assets/processes/photos/pintura2.JPG';
import Process3 from '../assets/processes/photos/process3.jpeg';
import ComplementPainting from '../assets/complements/carrusel/carrusel4.jpeg';

const TechnologicalProcesses: React.FC = () => {
  const { t } = useTranslation('processes');
  const { scrollY } = useScroll({ layoutEffect: false });
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedMachineryIndex, setSelectedMachineryIndex] = useState<number>(0);
  const [paintCarouselPage, setPaintCarouselPage] = useState<number>(0);

  // Auto-rotate paint carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setPaintCarouselPage((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Process photos array for the gallery - images are static, only text is translated
  const processPhotosImages = [Scanner2, Scanner3, CNC1, CNC2, Scanner, Encuadradora1, Encuadradora2, Pintura1, Pintura2, Process3];
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

  const machineryIcons = [Cpu, Scan, Grid3x3, Droplet];
  const paintIcons = [Shield, Leaf, Zap, CheckCircle, Settings, Cog];
  
  // Machinery images
  const machineryImages = [CNC1, Scanner2, Encuadradora1, Pintura1];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-white relative">
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

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 my-0"></div>
      </div>

      {/* Maquinarias y Procesos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-neutral-900">
              {t('machinery.title')}
            </h2>
            <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
            {/* Left sidebar with machinery icons - Smaller size */}
            <div className="flex md:flex-col gap-2 md:w-24 flex-shrink-0">
              {machineryProcesses.map((process, index) => {
                const IconComponent = machineryIcons[index];
                return (
                  <motion.button
                    key={process.title}
                    onClick={() => setSelectedMachineryIndex(index)}
                    className={`relative p-3 rounded-lg transition-all duration-300 ${
                      selectedMachineryIndex === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80 shadow-md'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Active indicator */}
                    {selectedMachineryIndex === index && (
                      <motion.div
                        layoutId="activeMachineryIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-red-600"
                      />
                    )}
                    
                    {/* Icon - Smaller */}
                    <div className="flex items-center justify-center w-10 h-10">
                      <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                        selectedMachineryIndex === index ? 'text-gray-700' : 'text-gray-500'
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            {/* Right content area */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMachineryIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Gradient header */}
                  <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-400"></div>
                  
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {(() => {
                          const IconComponent = machineryIcons[selectedMachineryIndex];
                          return <IconComponent className="w-8 h-8 text-gray-600" />;
                        })()}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-neutral-900">
                          {machineryProcesses[selectedMachineryIndex].title}
                        </h3>
                        <motion.div 
                          className="h-0.5 rounded-full mt-1.5 bg-gradient-to-r from-red-600 to-red-400"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="mb-4 rounded-lg overflow-hidden shadow-md"
                    >
                      <img 
                        src={machineryImages[selectedMachineryIndex]} 
                        alt={machineryProcesses[selectedMachineryIndex].title}
                        className="w-full h-[240px] object-cover"
                      />
                    </motion.div>
                    
                    <p className="text-gray-600 leading-relaxed text-base mb-5">
                      {machineryProcesses[selectedMachineryIndex].description}
                    </p>
                    
                    {/* Technology Details Integration */}
                    {technologyDetails[selectedMachineryIndex] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="border-t border-gray-200 pt-4"
                      >
                        <h4 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-600" />
                          {technologyDetails[selectedMachineryIndex].title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {technologyDetails[selectedMachineryIndex].content}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 my-0"></div>
      </div>

      {/* Paint Technology Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-neutral-900">
              {t('paintTechnology.title')}
            </h2>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-neutral-800">
              {t('paintTechnology.subtitle')}
            </h3>
            <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            {/* Carousel Content */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={paintCarouselPage}
                  initial={{ opacity: 0, x: paintCarouselPage === 1 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: paintCarouselPage === 1 ? -100 : 100 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {paintBenefits.slice(paintCarouselPage * 3, paintCarouselPage * 3 + 3).map((benefit, index) => {
                    const actualIndex = paintCarouselPage * 3 + index;
                    const IconComponent = paintIcons[actualIndex];
                    return (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="p-2 bg-red-100 rounded-lg w-fit mb-3">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-base font-bold mb-2 text-neutral-900">{benefit.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{benefit.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 my-0"></div>
      </div>

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

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - Features */}
            <div className="flex-1">
              <div className="grid gap-6">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-md"
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
            
            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:max-w-md"
            >
              <img 
                src={ComplementPainting}
                alt="Pintado de patas de complemento"
                className="w-full h-[500px] object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 my-0"></div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
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

          {/* Process Photos Grid - Masonry Style Layout inspired by architectural portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {processPhotos.map((photo, index) => {
              // Custom layout pattern mimicking the reference design
              let spanClass = '';
              let heightClass = 'h-[300px]';
              
              // Row 1: Small (1 col) + Large (2 cols)
              if (index === 0) {
                spanClass = 'md:col-span-1';
                heightClass = 'h-[300px]';
              }
              else if (index === 1) {
                spanClass = 'md:col-span-2';
                heightClass = 'h-[300px]';
              }
              // Row 2: Full width image (3 cols)
              else if (index === 2) {
                spanClass = 'md:col-span-3';
                heightClass = 'h-[400px]';
              }
              // Row 3: Large (2 cols) + Small (1 col)
              else if (index === 3) {
                spanClass = 'md:col-span-2';
                heightClass = 'h-[350px]';
              }
              else if (index === 4) {
                spanClass = 'md:col-span-1';
                heightClass = 'h-[350px]';
              }
              // Row 4: Three equal images (1 col each)
              else if (index >= 5 && index <= 7) {
                spanClass = 'md:col-span-1';
                heightClass = 'h-[300px]';
              }
              // Row 5: Remaining images - Small + Large
              else if (index === 8) {
                spanClass = 'md:col-span-1';
                heightClass = 'h-[300px]';
              }
              else if (index === 9) {
                spanClass = 'md:col-span-2';
                heightClass = 'h-[300px]';
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${spanClass} ${heightClass}`}
                >
                  {/* Image */}
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {/* Icon Badge */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Cog className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        {photo.title}
                      </h3>
                      
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {photo.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default TechnologicalProcesses;