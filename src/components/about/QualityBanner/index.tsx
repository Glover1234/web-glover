import React from 'react';
import { motion } from 'framer-motion';
import qualityBannerImg from '../../../assets/us/qualitybanner.jpeg';

const QualityBanner: React.FC = () => {
  return (
    <div className="relative py-32 mb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={qualityBannerImg}
          alt="Calidad Glover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CONTAMOS CON LA CAPACIDAD PARA LOGRARLO
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default QualityBanner;