import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FloatingContactButton: React.FC = () => {
  const { t } = useTranslation('common');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/contact">
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          className="bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          
          {/* Text that appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pr-4 font-medium whitespace-nowrap overflow-hidden"
              >
                {t('floatingButton.contact') || 'Contáctanos'}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-red-600 rounded-full -z-10"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </motion.div>
    </Link>
  );
};

export default FloatingContactButton;
