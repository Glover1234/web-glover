import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

// Import certification logos
import fscLogo from '../../../assets/sustainability/fsc.png';
import citecLogo from '../../../assets/sustainability/LOGO-CITEC-1024x409.jpg';

const Certifications: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  
  const certifications = [
    {
      id: 'fsc',
      title: 'FSC: Forest Stewardship Council®',
      description: 'El certificado FSC (Forest Stewardship Council) es un sello de garantía que asegura que los productos de origen forestal provienen de bosques gestionados de manera sostenible y responsable.',
      logo: fscLogo,
      color: '#424242',
      benefits: ['Gestión sostenible', 'Garantía ambiental', 'Reconocimiento internacional']
    },
    {
      id: 'pda',
      title: 'Productos PDA: Protección del Ambiente',
      description: 'Nuestros productos están certificados para la protección del ambiente, garantizando que cumplen con los más altos estándares de sostenibilidad y responsabilidad ambiental.',
      logo: null, // No logo available yet
      color: '#388E3C',
      benefits: ['Protección ambiental', 'Productos sostenibles', 'Responsabilidad ecológica']
    },
    {
      id: 'citec',
      title: 'CITEC UBB (Universidad del Bío Bío)',
      description: 'Este informe de ensayos acredita que nuestras puertas cuentan con aislamiento térmico, acústico y otros beneficios importantes.',
      logo: citecLogo,
      color: '#212121',
      benefits: ['Aislamiento térmico', 'Aislamiento acústico', 'Calidad certificada']
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 -right-64 w-96 h-96 rounded-full bg-neutral-50 opacity-70 filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neutral-50 opacity-70 filter blur-3xl"></div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700">Certificaciones y acreditaciones</span>
          <motion.div 
            className="absolute left-1/2 -bottom-4 h-1 bg-neutral-800 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ translateX: '-40px' }}
          ></motion.div>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border relative z-10"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
                animate={{ 
                  borderColor: selected === cert.id ? cert.color : 'transparent',
                  borderWidth: selected === cert.id ? '2px' : '0px'
                }}
                onClick={() => setSelected(selected === cert.id ? null : cert.id)}
              >
                {/* Gradient header */}
                <div 
                  className="h-2 w-full" 
                  style={{ 
                    background: `linear-gradient(to right, ${cert.color}aa, ${cert.color}66)` 
                  }}
                ></div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-5">
                      <motion.div 
                        className="flex-shrink-0 w-24 h-24 rounded-lg flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, #F5F5F5, #EEEEEE)`,
                          boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
                        }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                      >
                        {cert.logo ? (
                          <img 
                            src={cert.logo} 
                            alt={cert.title} 
                            className="w-20 h-20 object-contain"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">PDA</span>
                          </div>
                        )}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <motion.div 
                          className="h-1 rounded-full mt-2"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          style={{ 
                            background: `linear-gradient(to right, ${cert.color}, ${cert.color}44)` 
                          }}
                        ></motion.div>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: selected === cert.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: cert.color }}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {selected === cert.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                          
                          <div className="mt-8">
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">Beneficios principales</h4>
                            <div className="grid grid-cols-1 gap-3">
                              {cert.benefits.map((benefit, idx) => (
                                <motion.div 
                                  key={idx} 
                                  className="flex items-center gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * idx }}
                                >
                                  <div 
                                    className="p-1 rounded-full" 
                                    style={{ background: `${cert.color}22` }}
                                  >
                                    <Check className="w-4 h-4" style={{ color: cert.color }} />
                                  </div>
                                  <span className="text-gray-600">{benefit}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              {/* Background decorative effect */}
              <motion.div
                className="absolute inset-0 rounded-xl z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredCert === cert.id || selected === cert.id ? 0.05 : 0,
                  scale: hoveredCert === cert.id || selected === cert.id ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
                style={{ background: cert.color }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <motion.div 
            className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-neutral-50 to-neutral-100 mb-6"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-semibold mb-4">Comprometidos con la excelencia</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nuestras certificaciones respaldan nuestro compromiso con la calidad y la sostenibilidad en todos nuestros procesos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
