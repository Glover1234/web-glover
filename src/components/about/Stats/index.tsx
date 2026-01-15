import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Factory, Users, Trees } from 'lucide-react';

const statsIcons = [Factory, Users, Trees];

const Stats: React.FC = () => {
  const { t } = useTranslation('about');
  const stats = t('stats.items', { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <div className="mb-0">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase mb-2">{t('stats.title')}</h2>
        <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => {
          const Icon = statsIcons[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border-l-4 border-red-600"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
