import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { navigationItems } from '../../routes';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  const businessLines = [
    { path: '/business-lines/doors', name: t('businessLines.doors') },
    { path: '/business-lines/furniture', name: t('businessLines.furniture') },
    { path: '/business-lines/wood', name: t('businessLines.wood') },
    { path: '/business-lines/structures', name: t('businessLines.structures') },
    { path: '/business-lines/complements', name: t('businessLines.complements') },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-white shadow-lg"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <motion.ul className="flex flex-col py-4 container">
            {navigationItems.map((item) => {
              const translatedName = item.path === '/' 
                ? t('nav.home')
                : item.path === '/business-lines'
                ? t('nav.businessLines')
                : item.path === '/certifications-sustainability'
                ? t('nav.sustainability')
                : item.path === '/technological-processes'
                ? t('nav.processes')
                : item.path === '/sales-room'
                ? t('nav.salesroom')
                : item.path === '/about-us'
                ? t('nav.aboutUs')
                : item.path === '/contact'
                ? t('nav.contact')
                : item.name;

              return (
              <motion.li key={item.path} variants={itemVariants}>
                {item.path === '/business-lines' ? (
                  <div>
                    <button
                      onClick={() => setExpandedItem(expandedItem === 'business' ? null : 'business')}
                      className={`flex items-center justify-between w-full py-3 px-4 text-sm font-medium ${
                        location.pathname.includes(item.path)
                          ? 'text-red-900'
                          : 'text-neutral-900 hover:text-red-900'
                      }`}
                    >
                      {translatedName}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedItem === 'business' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedItem === 'business' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-neutral-50"
                        >
                          {businessLines.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block py-2 px-8 text-sm font-medium ${
                                location.pathname === subItem.path
                                  ? 'text-red-900'
                                  : 'text-neutral-900 hover:text-red-900'
                              }`}
                              onClick={onClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 text-sm font-medium ${
                      location.pathname === item.path
                        ? 'text-red-900'
                        : 'text-neutral-900 hover:text-red-900'
                    }`}
                    onClick={onClose}
                  >
                    {translatedName}
                  </Link>
                )}
              </motion.li>
            );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;