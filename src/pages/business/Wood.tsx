import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NewCollection from '../../components/business/wood/NewCollection';
import WoodSection from '../../components/business/wood/WoodSection';
import WoodStylesShowcase from '../../components/business/wood/WoodStylesShowcase';
import VideoBanner from '../../components/business/wood/VideoBanner';
import BannerMaderas from '../../assets/home_banner/Banner_Maderas.jpeg';
import logo from '../../assets/general/logo-blanco.jpeg';
import ContactCTA from '../../components/home/ContactCTA';

const WoodPage: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Hero */}
      <div className="relative h-[75vh] overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={BannerMaderas}
            alt="Maderas Hero"
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
              MADERAS
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
            >
              Semielaboradas en formatos Blanks y Boards para
              <br />
              exportación internacional.
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

      {/* Sections full-width */}
      <div className="w-full">
        <NewCollection />
        <VideoBanner />
        <WoodSection />
        <WoodStylesShowcase />
        <ContactCTA />
      </div>
    </div>
  );
};

export default WoodPage;