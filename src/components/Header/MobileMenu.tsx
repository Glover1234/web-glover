import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../routes';
import { ChevronDown } from 'lucide-react';

const businessLines = [
  { path: '/business-lines/doors', name: 'Puertas' },
  { path: '/business-lines/furniture', name: 'Muebles' },
  { path: '/business-lines/wood', name: 'Maderas de exportación' },
  { path: '/business-lines/structures', name: 'Estructuras' },
  { path: '/business-lines/complements', name: 'Complementos' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

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
            {navigationItems.map((item) => (
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
                      {item.name}
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
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;