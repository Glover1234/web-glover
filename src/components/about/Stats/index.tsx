import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg',
    value: '30.000m²',
    label: 'Infraestructura',
    delay: 0,
  },
  {
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    value: '450+',
    label: 'Colaboradores',
    delay: 0.2,
  },
  {
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
    value: '+3.000 m3/mes',
    label: 'Madera Procesada',
    delay: 0.4,
  },
];

const Stats: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase mb-2">NUESTRA CAPACIDAD</h2>
        <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

interface StatCardProps {
  image: string;
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ image, value, label, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-red-600/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6" />
      <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg transform transition-transform group-hover:-translate-y-2">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 overflow-hidden rounded-full">
          <motion.img 
            src={image}
            alt={label}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="space-y-2 text-center">
          <div className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
            {value}
          </div>
          <div className="w-12 h-0.5 bg-red-600 mx-auto" />
          <p className="text-xs sm:text-sm lg:text-base text-neutral-600 font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
