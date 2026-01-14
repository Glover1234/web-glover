import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Certifications: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section 
      className="relative py-32 text-neutral-900"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-2">
            {t('certifications.title')}
          </h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          <p className="text-neutral-900 mt-4 text-xl">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/certifications-sustainability"
            className="group inline-flex items-center gap-2 text-neutral-900 border-2 border-neutral-900 px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <span className="font-bold">{t('certifications.button')}</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;