import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Feature {
  title: string;
  content: string;
}

interface BusinessLineAttributesProps {
  businessLine: 'doors' | 'furniture' | 'wood' | 'structures' | 'complements';
}

const BusinessLineAttributes: React.FC<BusinessLineAttributesProps> = ({ businessLine }) => {
  const { t } = useTranslation('business');
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const features = t(`${businessLine}.attributes`, { returnObjects: true }) as Feature[];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-neutral-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenSection(openSection === feature.title ? null : feature.title)}
                className="w-full flex items-center justify-between text-left py-6 group"
              >
                <span className="text-lg font-light uppercase text-neutral-900 group-hover:text-red-600 transition-colors tracking-wider">
                  {feature.title}
                </span>
                <Plus
                  className={`w-5 h-5 transition-all duration-300 ${
                    openSection === feature.title ? 'rotate-45 text-red-600' : 'group-hover:text-red-600'
                  }`}
                />
              </button>
              <AnimatePresence>
                {openSection === feature.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-600 pb-6 leading-relaxed">
                      {feature.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLineAttributes;