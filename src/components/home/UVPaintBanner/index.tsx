import React from 'react';
import { useTranslation } from 'react-i18next';

const UVPaintBanner: React.FC = () => {
  const { t } = useTranslation('home');

  const features = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-1 text-neutral-900">
            {t('uvPaintBanner.title')}
          </h2>
          <span className="block text-base md:text-lg font-normal mb-2 text-neutral-900">{t('uvPaintBanner.subtitle')}</span>
          <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {feature.id}
                </span>
                <h3 className="text-base md:text-lg font-bold text-neutral-900">{t(`uvPaintBanner.features.${feature.id}.title`)}</h3>
              </div>
              <div className="w-10 h-0.5 bg-red-600 mb-2 ml-9"></div>
              <p className="text-sm text-neutral-600 leading-relaxed ml-9">{t(`uvPaintBanner.features.${feature.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UVPaintBanner;