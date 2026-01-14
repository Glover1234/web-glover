import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import qualityBannerImg from '../../../assets/us/qualitybanner.jpeg';

const QualityBanner: React.FC = () => {
  const { t } = useTranslation('about');
  
  return (
    <div className="relative py-8 md:py-12 mb-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={qualityBannerImg}
          alt="Calidad Glover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
            {t('quality.title')}
          </h2>
          <div className="w-16 h-0.5 bg-red-600 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default QualityBanner;