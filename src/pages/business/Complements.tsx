import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NewCollection from '../../components/business/complements/NewCollection';
import ComplementsSection from '../../components/business/complements/ComplementsSection';
import ComplementsStylesShowcase from '../../components/business/complements/ComplementsStylesShowcase';
import BannerComplementos from '../../assets/home_banner/Banner_Complementos.jpeg';
import logo from '../../assets/general/logo-blanco.jpeg';
import ContactCTA from '../../components/home/ContactCTA';

const ComplementsPage: React.FC = () => {
  const { t } = useTranslation('business');
  const { scrollY } = useScroll({ layoutEffect: false });
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Banner Hero */}
      <div className="relative h-[75vh] overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={BannerComplementos}
            alt="Complementos Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Contenido del banner */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-wider mb-4 sm:mb-6"
            >
              {t('complements.hero.title')}
            </motion.h1>

            {/* Línea roja */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-red-600 mx-auto mb-6 sm:mb-8"
            />

            {/* Eslogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-light italic mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto px-2 leading-relaxed"
            >
              {t('complements.hero.tagline')}
            </motion.p>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="Glover Logo" 
                className="w-32 sm:w-40 md:w-48 lg:w-60 xl:w-72 h-auto" 
              />
            </motion.div>
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

      {/* Nueva Colección */}
      <NewCollection />

      {/* Sección de productos */}
      <ComplementsSection />

      {/* Sección de estilos de complementos */}
      <ComplementsStylesShowcase />

      <ContactCTA />
    </div>
  );
};

export default ComplementsPage;