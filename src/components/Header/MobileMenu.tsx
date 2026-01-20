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

  const aboutItems = [
    { path: '/about-us', name: t('nav.aboutUs') },
    { path: '/technological-processes', name: t('nav.processes') },
    { path: '/certifications-sustainability', name: t('nav.sustainability') },
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
            {/* Home */}
            <motion.li variants={itemVariants}>
              <Link
                to="/"
                className={`block py-3 px-4 text-sm font-medium ${
                  location.pathname === '/'
                    ? 'text-red-900'
                    : 'text-neutral-900 hover:text-red-900'
                }`}
                onClick={onClose}
              >
                {t('nav.home')}
              </Link>
            </motion.li>

            {/* Products Dropdown */}
            <motion.li variants={itemVariants}>
              <div>
                <button
                  onClick={() => setExpandedItem(expandedItem === 'products' ? null : 'products')}
                  className="flex items-center justify-between w-full py-3 px-4 text-sm font-medium text-neutral-900 hover:text-red-900"
                >
                  {t('nav.products')}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedItem === 'products' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedItem === 'products' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-neutral-50"
                    >
                      {/* Business Lines nested dropdown */}
                      <div>
                        <button
                          onClick={() => setExpandedItem(expandedItem === 'business' ? 'products' : 'business')}
                          className="flex items-center justify-between w-full py-2 px-8 text-sm font-medium text-neutral-900 hover:text-red-900"
                        >
                          {t('nav.businessLines')}
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
                              className="bg-neutral-100"
                            >
                              {businessLines.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block py-2 px-12 text-sm font-medium ${
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
                      {/* Catalog direct link */}
                      <Link
                        to="/catalog"
                        className={`block py-2 px-8 text-sm font-medium ${
                          location.pathname === '/catalog'
                            ? 'text-red-900'
                            : 'text-neutral-900 hover:text-red-900'
                        }`}
                        onClick={onClose}
                      >
                        {t('nav.catalog')}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.li>

            {/* About Dropdown */}
            <motion.li variants={itemVariants}>
              <div>
                <button
                  onClick={() => setExpandedItem(expandedItem === 'about' ? null : 'about')}
                  className="flex items-center justify-between w-full py-3 px-4 text-sm font-medium text-neutral-900 hover:text-red-900"
                >
                  {t('nav.about')}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedItem === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedItem === 'about' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-neutral-50"
                    >
                      {aboutItems.map((subItem) => (
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
            </motion.li>

            {/* Remaining navigation items */}
            {navigationItems.filter(item => item.path !== '/').map((item) => {
              const translatedName = item.path === '/sales-room'
                ? t('nav.salesroom')
                : item.path === '/contact'
                ? t('nav.contact')
                : item.name;

              return (
              <motion.li key={item.path} variants={itemVariants}>
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