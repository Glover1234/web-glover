import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../routes';
import MobileMenu from './MobileMenu';
import logo from '../../assets/general/logo.jpeg';

const businessLines = [
  { path: '/business-lines/doors', name: 'Puertas' },
  { path: '/business-lines/furniture', name: 'Muebles' },
  { path: '/business-lines/wood', name: 'Maderas de exportación' },
  { path: '/business-lines/structures', name: 'Estructuras' },
  { path: '/business-lines/complements', name: 'Complementos' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownOpen = () => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    // Set a small delay before closing to allow cursor movement between items
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Glover Logo"
            className="h-8 w-auto object-contain md:h-10 lg:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.path === '/business-lines') {
                return (
                  <li key={item.path} className="relative" ref={dropdownRef}>
                    <button
                      className={`relative py-2 text-sm font-medium transition-colors inline-flex items-center ${
                        location.pathname.includes(item.path)
                          ? 'text-red-900'
                          : 'text-neutral-900 hover:text-red-900'
                      }`}
                      onMouseEnter={handleDropdownOpen}
                      onMouseLeave={handleDropdownClose}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-lg py-2 rounded-md"
                          onMouseEnter={handleDropdownOpen}
                          onMouseLeave={handleDropdownClose}
                          style={{ marginTop: '-2px' }}
                        >
                          {businessLines.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm font-medium transition-colors ${
                                location.pathname === subItem.path
                                  ? 'text-red-900 bg-neutral-50'
                                  : 'text-neutral-900 hover:text-red-900 hover:bg-neutral-50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-red-900'
                        : 'text-neutral-900 hover:text-red-900'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-red-900"
                        layoutId="underline"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-neutral-900 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
}

export default Header;