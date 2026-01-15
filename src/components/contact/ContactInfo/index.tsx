import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactItem {
  id: string;
  icon: typeof MapPin;
  title: string;
  content: string;
  link?: string;
  color: string;
}

const ContactInfo: React.FC = () => {
  const { t } = useTranslation('contact');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const contactItems: ContactItem[] = [
    {
      id: 'address',
      icon: MapPin,
      title: t('info.address'),
      content: t('info.addressValue'),
      link: 'https://maps.google.com',
      color: '#DC2626'
    },
    {
      id: 'phone',
      icon: Phone,
      title: t('info.phone'),
      content: t('info.phoneValue'),
      link: 'tel:+56452967500',
      color: '#DC2626'
    },
    {
      id: 'email',
      icon: Mail,
      title: t('info.email'),
      content: t('info.emailValue'),
      link: 'mailto:contacto@glover.cl',
      color: '#DC2626'
    },
    {
      id: 'hours',
      icon: Clock,
      title: t('info.hours'),
      content: t('info.hoursValue'),
      color: '#DC2626'
    },
    {
      id: 'salesroom',
      icon: Store,
      title: t('info.salesroom'),
      content: t('info.salesroomValue'),
      link: '/sales-room',
      color: '#DC2626'
    }
  ];

  const selectedItem = contactItems[selectedIndex];
  const IconComponent = selectedItem.icon;
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          {t('info.title')}
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-md mx-auto">
          {t('info.description')}
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        {/* Top bar with contact icons */}
        <div className="flex gap-3 justify-center overflow-x-auto pb-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className={`relative p-4 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  selectedIndex === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/80 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active indicator */}
                {selectedIndex === index && (
                  <motion.div
                    layoutId="activeContactIndicator"
                    className="absolute left-0 right-0 top-0 h-1 rounded-b-full bg-red-600"
                  />
                )}
                
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12">
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${
                    selectedIndex === index ? 'text-red-600' : 'text-gray-500'
                  }`} />
                </div>
              </motion.button>
            );
          })}
        </div>
        
        {/* Content area below */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Gradient header */}
              <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-400"></div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{selectedItem.title}</h3>
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
                
                {selectedItem.link ? (
                  <a
                    href={selectedItem.link}
                    target={selectedItem.link.startsWith('http') ? '_blank' : undefined}
                    rel={selectedItem.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-700 hover:text-red-600 transition-colors leading-relaxed block"
                  >
                    {selectedItem.content}
                  </a>
                ) : (
                  <p className="text-gray-700 leading-relaxed">{selectedItem.content}</p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;