import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CombinedSection: React.FC = () => {
  const { t } = useTranslation(['home', 'about']);

  const cards = [
    {
      icon: Target,
      title: t('about:dna.mission.title'),
      content: t('about:dna.mission.content'),
    },
    {
      icon: Eye,
      title: t('about:dna.vision.title'),
      content: t('about:dna.vision.content'),
    },
    {
      icon: Heart,
      title: t('about:dna.values.title'),
      content: t('about:dna.values.items', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-6 md:px-8">
        {/* Mobile: Stack both sections */}
        <div className="block lg:hidden space-y-12">
          {/* Corporate Presentation Mobile */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-neutral-900">
                {t('home:companyIntro.title')}
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="space-y-3 text-neutral-600 text-center">
                <p className="text-base md:text-lg">
                  {t('home:companyIntro.paragraph1')}
                </p>
                <p className="text-base md:text-lg">
                  {t('home:companyIntro.paragraph2')}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  to="/about-us"
                  className="group inline-flex items-center gap-2 text-neutral-900 border-2 border-neutral-900 px-6 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <span className="font-bold">{t('home:companyIntro.button')}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* DNA Mobile */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 text-red-600">
                {t('about:dna.title')}
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            <div className="space-y-3">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-white rounded-lg shadow-md p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-red-100 rounded">
                      {React.createElement(card.icon, { className: "w-5 h-5 text-red-600" })}
                    </div>
                    <span className="text-sm font-bold text-gray-800">
                      {card.title}
                    </span>
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed text-justify">
                    {Array.isArray(card.content) ? (
                      <ul className="list-none space-y-1">
                        {card.content.map((val, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{card.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Corporate Presentation Desktop - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold uppercase mb-2 text-neutral-900">
                {t('home:companyIntro.title')}
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            <div className="bg-white p-6 xl:p-8 rounded-lg shadow-lg flex-1 flex flex-col justify-center">
              <div className="space-y-3 text-neutral-600 text-center">
                <p className="text-lg">
                  {t('home:companyIntro.paragraph1')}
                </p>
                <p className="text-lg">
                  {t('home:companyIntro.paragraph2')}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  to="/about-us"
                  className="group inline-flex items-center gap-2 text-neutral-900 border-2 border-neutral-900 px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <span className="font-bold">{t('home:companyIntro.button')}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* DNA Desktop - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold uppercase mb-2 text-red-600">
                {t('about:dna.title')}
              </h3>
              <div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            <div className="space-y-4">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-white rounded-lg shadow-lg p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-100 rounded">
                      {React.createElement(card.icon, { className: "w-6 h-6 text-red-600" })}
                    </div>
                    <span className="text-base font-bold text-gray-800">
                      {card.title}
                    </span>
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed text-justify">
                    {Array.isArray(card.content) ? (
                      <ul className="list-none space-y-1">
                        {card.content.map((val, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{card.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;
