import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';

const ContactCTA: React.FC = () => {
  const { t } = useTranslation('home');
  const { trackEvent } = useGoogleAnalytics();

  const handleContactClick = () => {
    trackEvent('contact_cta_click', {
      event_category: 'lead_generation',
      event_label: 'main_contact_button',
    });
  };

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="container px-6 md:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {t('contactCTA.title')}
            </h2>
            <motion.div 
              className="w-24 h-0.5 bg-red-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 mb-12"
          >
            {t('contactCTA.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/contact"
              onClick={handleContactClick}
              className="group inline-flex items-center gap-2 text-white border-2 border-white px-6 md:px-8 py-3 hover:bg-white hover:text-neutral-900 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 font-bold">{t('contactCTA.button')}</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;