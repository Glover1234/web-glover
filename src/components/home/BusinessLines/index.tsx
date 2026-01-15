import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import doorsImg from '../../../assets/home_lines/doors.jpeg';
import furnitureImg from '../../../assets/home_lines/furniture.jpeg';
import woodImg from '../../../assets/home_lines/wood.jpeg';
import structuresImg from '../../../assets/home_lines/structures.jpeg';
import complementsImg from '../../../assets/home_lines/complements.jpeg';

const BusinessLines: React.FC = () => {
  const { t } = useTranslation(['home', 'common']);

  const businessLines = [
    { 
      id: 'doors', 
      titleKey: 'businessLines.doors', 
      path: '/business-lines/doors',
      image: doorsImg 
    },
    { 
      id: 'furniture', 
      titleKey: 'businessLines.furniture', 
      path: '/business-lines/furniture',
      image: furnitureImg 
    },
    { 
      id: 'wood', 
      titleKey: 'businessLines.wood', 
      path: '/business-lines/wood',
      image: woodImg 
    },
    { 
      id: 'structures', 
      titleKey: 'businessLines.structures', 
      path: '/business-lines/structures',
      image: structuresImg 
    },
    { 
      id: 'complements', 
      titleKey: 'businessLines.complements', 
      path: '/business-lines/complements',
      image: complementsImg 
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-neutral-900">
            {t('home:businessLines.title')}
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto mb-4"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t('home:businessLines.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {businessLines.slice(0, 3).map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={line.path} 
                  className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative h-64">
                    {/* Image Section */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <img 
                        src={line.image} 
                        alt={t(`common:${line.titleKey}`)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-red-600/30 transition-colors duration-300" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                        {t(`common:${line.titleKey}`)}
                      </h3>
                      <button className="px-4 py-2 bg-white border-2 border-gray-400 text-gray-700 text-sm font-semibold rounded hover:bg-gray-50 hover:border-gray-600 transition-colors">
                        {t('common:buttons.go')}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessLines.slice(3, 5).map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
              >
                <Link 
                  to={line.path} 
                  className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative h-64">
                    {/* Image Section */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <img 
                        src={line.image} 
                        alt={t(`common:${line.titleKey}`)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-red-600/30 transition-colors duration-300" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                        {t(`common:${line.titleKey}`)}
                      </h3>
                      <button className="px-4 py-2 bg-white border-2 border-gray-400 text-gray-700 text-sm font-semibold rounded hover:bg-gray-50 hover:border-gray-600 transition-colors">
                        {t('common:buttons.go')}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLines;