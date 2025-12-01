import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4"
      >
        Nuestra Filosofía
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-neutral-700 max-w-3xl mx-auto"
      >
        Creemos que solo a través de prácticas responsables podemos garantizar la calidad y durabilidad de nuestros productos. 
        Desde la selección de madera certificada hasta cada etapa de secado y ensamblaje, nuestro enfoque prioriza la salud de los bosques  
        y el bienestar de las comunidades.
      </motion.p>
    </div>
  </section>
);

export default Philosophy;
