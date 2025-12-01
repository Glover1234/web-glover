import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import bannerImage from '../../../assets/us/nosotros_banner.jpeg';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src={bannerImage}
          alt="Industrial Glover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
      
      <div className="relative h-full flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">INDUSTRIAL GLOVER</h1>
            <div className="w-24 h-0.5 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-white/90">
              Una empresa consolidada en la fabricación y comercialización de muebles de dormitorio 
              y productos de madera 100% natural. Desde nuestra fundación en 1992, hemos evolucionado 
              para convertirnos en un referente del sector, con operaciones estratégicas en la comuna 
              de Lautaro y un fuerte compromiso con la innovación, el desarrollo sostenible y el empleo local.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;