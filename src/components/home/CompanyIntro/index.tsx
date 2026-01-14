import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CompanyIntro: React.FC = () => {
  const { t } = useTranslation('home');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [text] = useTypewriter({
    words: [t('companyIntro.tagline')],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
    onLoopDone: () => setIsTypingDone(true),
  });

  return (
    <>
      {/* Corporate Presentation Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-neutral-900">
                {t('companyIntro.title')}
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-4 text-neutral-600">
                <p className="text-base md:text-lg">
                  {t('companyIntro.paragraph1')}
                </p>
                <p className="text-base md:text-lg">
                  {t('companyIntro.paragraph2')}
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <Link
                  to="/about-us"
                  className="group inline-flex items-center gap-2 text-neutral-900 border-2 border-neutral-900 px-6 md:px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <span className="font-bold">{t('companyIntro.button')}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Text Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container px-6 md:px-8">
          <div className="relative border-4 border-white/20 p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 relative"
                style={{ WebkitTextStroke: '1px white' }}
                initial={{ color: 'transparent' }}
                animate={{ color: 'white' }}
                transition={{ 
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {text}
                <Cursor cursorStyle="_" />
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.2, 0.4, 0.1, 0] }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    filter: 'blur(8px)',
                    mixBlendMode: 'overlay'
                  }}
                />
              </motion.h2>
              <AnimatePresence>
                {isTypingDone && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '96px' }}
                    className="h-0.5 bg-red-600 mx-auto"
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyIntro;