import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import NewCollection from '../../components/business/furniture/NewCollection';
import FurnitureSection from '../../components/business/furniture/FurnitureSection';
import StylesShowcase from '../../components/business/furniture/FurnitureStylesShowcase';
import BannerMuebles from '../../assets/home_banner/Banner_Muebles.jpeg';
import logo from '../../assets/general/logo-blanco.jpeg';
import ContactCTA from '../../components/home/ContactCTA';

const FurniturePage: React.FC = () => {
  const { t } = useTranslation('business');
  const { scrollY } = useScroll({ layoutEffect: false });
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative">
      {/* Hero Banner */}
      <div className="relative h-[75vh] overflow-hidden w-full pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={BannerMuebles}
            alt="Muebles Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Contenido del banner */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider mb-6"
            >
              {t('furniture.hero.title')}
            </motion.h1>

            {/* Línea roja */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '150px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-red-600 mx-auto mb-8"
            />

            {/* Eslogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-white font-light italic mb-20"
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('furniture.hero.tagline')}
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
                className="w-48 md:w-60 lg:w-72 h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sections full-width */}
      <div className="w-full">
        <NewCollection />
        <FurnitureSection />
        <StylesShowcase />
        <ContactCTA />
      </div>
    </div>
  );
};

export default FurniturePage;