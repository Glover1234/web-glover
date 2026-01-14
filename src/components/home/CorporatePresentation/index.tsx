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
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-neutral-900">
              {t('companyIntro.title')}
            </h3>
            <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-4 text-neutral-600">
              <p className="text-base md:text-lg">
                {t('companyIntro.paragraph1')}
              </p>
              <p className="text-base md:text-lg">
                {t('companyIntro.paragraph2')}
              </p>
            </div>
            <div className="flex justify-center mt-8">
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