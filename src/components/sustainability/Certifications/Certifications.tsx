import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, ChevronDown } from 'lucide-react';

// Import certification logos
import fscLogo from '../../../assets/sustainability/fsc.png';
import citecLogo from '../../../assets/sustainability/LOGO-CITEC-1024x409.jpg';

interface Certification {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

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
          className="inline-block w-0.5 h-5 bg-white ml-1"
        />
      )}
    </span>
  );
};

const Certifications: React.FC = () => {
  const { t } = useTranslation('sustainability');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const certifications = t('certifications.items', { returnObjects: true }) as Certification[];
  const selectedCert = certifications[selectedIndex];
  
  const logoMap: Record<string, string | null> = {
    fsc: fscLogo,
    pda: null,
    citec: citecLogo
  };

  const colorMap: Record<string, string> = {
    fsc: '#424242',
    pda: '#388E3C',
    citec: '#212121'
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 -right-64 w-96 h-96 rounded-full bg-neutral-50 opacity-70 filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neutral-50 opacity-70 filter blur-3xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900">
            {t('certifications.title')}
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar with certification icons */}
          <div className="flex md:flex-col gap-4 md:w-40 flex-shrink-0">
            {certifications.map((cert, index) => (
              <motion.button
                key={cert.id}
                onClick={() => setSelectedIndex(index)}
                className={`relative p-6 rounded-xl transition-all duration-300 ${
                  selectedIndex === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/80 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active indicator */}
                {selectedIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                    style={{ background: colorMap[cert.id] }}
                  />
                )}
                
                {/* Logo/Icon */}
                <div className="flex items-center justify-center w-20 h-20">
                  {logoMap[cert.id] ? (
                    <img 
                      src={logoMap[cert.id]!} 
                      alt={cert.title} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">PDA</span>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Right content area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Gradient header */}
                <div 
                  className="h-2 w-full" 
                  style={{ 
                    background: `linear-gradient(to right, ${colorMap[selectedCert.id]}aa, ${colorMap[selectedCert.id]}66)` 
                  }}
                ></div>
                
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-5 mb-6">
                    <motion.div 
                      className="flex-shrink-0 w-24 h-24 rounded-lg flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, #F5F5F5, #EEEEEE)`,
                        boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
                      }}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {logoMap[selectedCert.id] ? (
                        <img 
                          src={logoMap[selectedCert.id]!} 
                          alt={selectedCert.title} 
                          className="w-20 h-20 object-contain"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">PDA</span>
                        </div>
                      )}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-neutral-900">{selectedCert.title}</h3>
                      <motion.div 
                        className="h-1 rounded-full mt-2"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        style={{ 
                          background: `linear-gradient(to right, ${colorMap[selectedCert.id]}, ${colorMap[selectedCert.id]}44)` 
                        }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">{selectedCert.description}</p>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                      {t('certifications.benefits')}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedCert.benefits.map((benefit, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <div 
                            className="p-1 rounded-full" 
                            style={{ background: `${colorMap[selectedCert.id]}22` }}
                          >
                            <Check className="w-4 h-4" style={{ color: colorMap[selectedCert.id] }} />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Banner section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 px-6 py-4 shadow-xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    <TypewriterText text={t('certifications.subtitle')} />
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {t('certifications.description')}
                  </p>
                </div>
              </div>
              
              {/* Decorative element */}
              <motion.div 
                className="flex-shrink-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-2 h-2 bg-red-600 rounded-full shadow-lg shadow-red-600/50"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
