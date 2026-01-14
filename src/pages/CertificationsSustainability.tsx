import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Philosophy from '../components/sustainability/Philosophy';
import Projects from '../components/sustainability/Projects/Projects.tsx';
import Impact from '../components/sustainability/Impact/Impact.tsx';
import Certifications from '../components/sustainability/Certifications/Certifications.tsx';
import ContactCTA from '../components/home/ContactCTA';

// Import local image for parallax
import SostenibilidadImg from '../assets/sustainability/sostenibilidad.jpeg';

const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-8 bg-white ml-1"
        />
      )}
    </span>
  );
};

const CertificationsSustainability: React.FC = () => {
  const { t } = useTranslation('sustainability');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Parallax scroll ref and animation
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="bg-white">
      {/* Banner Hero */}
      <div className="relative h-[75vh] overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
            alt="Sustainability Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white uppercase tracking-wider"
            >
              {t('hero.title')}
            </motion.h1>
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
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 flex justify-center">
        <div className="container">
          <div className="flex justify-center">
            <button 
              className="px-6 py-4 border-b-2 border-black font-light"
            >
              {t('nav.sustainability')}
            </button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto py-20 text-center max-w-2xl">
        <p className="text-gray-700 mb-12">
          {t('intro.description')}
        </p>
        
        <hr className="my-12 border-t border-gray-300" />

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          {(t('intro.stats', { returnObjects: true }) as Array<{value: string; label: string}>).map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-light text-gray-800">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Component */}
      <Philosophy />

      {/* Banner Intermedio con Parallax */}
      <section ref={parallaxRef} className="relative h-[600px] overflow-hidden">
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src={SostenibilidadImg}
            alt="Procesos sostenibles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        {/* Typewriter Text Overlay */}
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
              <TypewriterText text={t('banner.text')} />
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Projects Component */}
      <Projects />

      {/* Certification Component */}
      <Certifications />

      {/* Impact Component */}
      <Impact />

      <ContactCTA />
    </div>
  );
};

export default CertificationsSustainability;
