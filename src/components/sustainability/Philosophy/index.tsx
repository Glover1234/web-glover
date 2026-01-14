import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Philosophy: React.FC = () => {
  const { t } = useTranslation('sustainability');
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900"
        >
          {t('philosophy.title')}
        </motion.h2>
        <div className="w-24 h-0.5 bg-red-600 mx-auto mb-8"></div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-700 max-w-3xl mx-auto"
        >
          {t('philosophy.description')}
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
