import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
          alt="Sustainability"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold uppercase text-white mb-2">
                COMPROMISO CON LA SOSTENIBILIDAD
              </h1>
              <div className="w-24 h-0.5 bg-red-600"></div>
            </div>
            <p className="text-xl text-white/90">
              [Descripción del compromiso con la sostenibilidad]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;