import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CorporatePresentation: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-3 md:p-5 rounded-lg shadow-lg"
          >
            <div className="text-center mb-2">
              <h3 className="text-lg md:text-xl font-bold uppercase mb-1.5 text-neutral-900">
                {t('companyIntro.title')}
              </h3>
              <div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            <div className="space-y-3 text-neutral-600">
              <p className="text-sm md:text-base">
                {t('companyIntro.paragraph1')}
              </p>
              <p className="text-sm md:text-base">
                {t('companyIntro.paragraph2')}
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                to="/about-us"
                className="group inline-flex items-center gap-2 text-neutral-900 border-2 border-neutral-900 px-6 md:px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                <span className="font-bold">{t('companyIntro.button')}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporatePresentation;