import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const AnimatedSlogan: React.FC = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [text] = useTypewriter({
    words: ['GLOVER, CALIDAD QUE SE SIENTE'],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
    onLoopDone: () => setIsTypingDone(true),
  });

  return (
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
  );
};

export default AnimatedSlogan;