import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ImpactItem {
  title: string;
  description: string;
}

const Impact: React.FC = () => {
  const { t } = useTranslation('sustainability');
  const impacts = t('impact.items', { returnObjects: true }) as ImpactItem[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900">
            {t('impact.title')}
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Impact cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {impacts.map((imp, i) => (
                <motion.div
                  key={imp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-100 p-6 sm:p-8 rounded-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {imp.title}
                  </h3>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                    {imp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
              <img 
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg" 
                alt="Impacto Ambiental - Bosques" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
