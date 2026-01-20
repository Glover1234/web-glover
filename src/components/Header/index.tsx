import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { navigationItems } from '../../routes';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from '../LanguageSwitcher';
import logo from '../../assets/general/logo.jpeg';

const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isBusinessLinesDropdownOpen, setIsBusinessLinesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const productsDropdownTimeoutRef = useRef<number | null>(null);
  const businessLinesDropdownTimeoutRef = useRef<number | null>(null);
  const aboutDropdownTimeoutRef = useRef<number | null>(null);
  const productsDropdownRef = useRef<HTMLLIElement>(null);
  const businessLinesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLLIElement>(null);

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
      if (aboutDropdownTimeoutRef.current) {
        clearTimeout(aboutDropdownTimeoutRef.current);
      }
      if (productsDropdownTimeoutRef.current) {
        clearTimeout(productsDropdownTimeoutRef.current);
      }
      if (businessLinesDropdownTimeoutRef.current) {
        clearTimeout(businessLinesDropdownTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProductsDropdownOpen = () => {
    if (productsDropdownTimeoutRef.current) {
      clearTimeout(productsDropdownTimeoutRef.current);
      productsDropdownTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleProductsDropdownClose = () => {
    productsDropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
      setIsBusinessLinesDropdownOpen(false);
    }, 100);
  };

  const handleBusinessLinesDropdownOpen = () => {
    if (businessLinesDropdownTimeoutRef.current) {
      clearTimeout(businessLinesDropdownTimeoutRef.current);
      businessLinesDropdownTimeoutRef.current = null;
    }
    setIsBusinessLinesDropdownOpen(true);
  };

  const handleBusinessLinesDropdownClose = () => {
    businessLinesDropdownTimeoutRef.current = setTimeout(() => {
      setIsBusinessLinesDropdownOpen(false);
    }, 100);
  };

  const handleAboutDropdownOpen = () => {
    if (aboutDropdownTimeoutRef.current) {
      clearTimeout(aboutDropdownTimeoutRef.current);
      aboutDropdownTimeoutRef.current = null;
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutDropdownClose = () => {
    aboutDropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 100);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
        setIsBusinessLinesDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
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
            {/* Home */}
            <li>
              <Link
                to="/"
                className={`relative py-2 text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-red-900'
                    : 'text-neutral-900 hover:text-red-900'
                }`}
              >
                {t('nav.home')}
                {location.pathname === '/' && (
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

            {/* Menu Productos con dropdown anidado */}
            <li className="relative" ref={productsDropdownRef}>
              <button
                className={`relative py-2 text-sm font-medium transition-colors inline-flex items-center ${
                  location.pathname.includes('/business-lines') || location.pathname.includes('/catalog')
                    ? 'text-red-900'
                    : 'text-neutral-900 hover:text-red-900'
                }`}
                onMouseEnter={handleProductsDropdownOpen}
                onMouseLeave={handleProductsDropdownClose}
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                {t('nav.products')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-lg py-2 rounded-md"
                    onMouseEnter={handleProductsDropdownOpen}
                    onMouseLeave={handleProductsDropdownClose}
                    style={{ marginTop: '-2px' }}
                  >
                    {/* Líneas de Negocio con sub-dropdown */}
                    <div
                      className="relative"
                      ref={businessLinesDropdownRef}
                      onMouseEnter={handleBusinessLinesDropdownOpen}
                      onMouseLeave={handleBusinessLinesDropdownClose}
                    >
                      <button
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center justify-between ${
                          location.pathname.includes('/business-lines')
                            ? 'text-red-900 bg-neutral-50'
                            : 'text-neutral-900 hover:text-red-900 hover:bg-neutral-50'
                        }`}
                      >
                        {t('nav.businessLines')}
                        <ChevronDown className="ml-1 w-4 h-4 -rotate-90" />
                      </button>
                      <AnimatePresence>
                        {isBusinessLinesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-full top-0 w-64 bg-white shadow-lg py-2 rounded-md"
                            onMouseEnter={handleBusinessLinesDropdownOpen}
                            onMouseLeave={handleBusinessLinesDropdownClose}
                            style={{ marginLeft: '-2px' }}
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
                                onClick={() => {
                                  setIsProductsDropdownOpen(false);
                                  setIsBusinessLinesDropdownOpen(false);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Catálogo */}
                    <Link
                      to="/catalog"
                      className={`block px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname.includes('/catalog')
                          ? 'text-red-900 bg-neutral-50'
                          : 'text-neutral-900 hover:text-red-900 hover:bg-neutral-50'
                      }`}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {t('nav.catalog')}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Menu Nosotros con dropdown */}
            <li className="relative" ref={aboutDropdownRef}>
              <button
                className={`relative py-2 text-sm font-medium transition-colors inline-flex items-center ${
                  location.pathname.includes('/about-us') || 
                  location.pathname.includes('/technological-processes') || 
                  location.pathname.includes('/certifications-sustainability')
                    ? 'text-red-900'
                    : 'text-neutral-900 hover:text-red-900'
                }`}
                onMouseEnter={handleAboutDropdownOpen}
                onMouseLeave={handleAboutDropdownClose}
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                {t('nav.about')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-lg py-2 rounded-md"
                    onMouseEnter={handleAboutDropdownOpen}
                    onMouseLeave={handleAboutDropdownClose}
                    style={{ marginTop: '-2px' }}
                  >
                    {aboutItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'text-red-900 bg-neutral-50'
                            : 'text-neutral-900 hover:text-red-900 hover:bg-neutral-50'
                        }`}
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Resto de items del menú */}
            {navigationItems.filter(item => item.path !== '/').map((item) => {
              const translatedName = item.path === '/sales-room'
                ? t('nav.salesroom')
                : item.path === '/contact'
                ? t('nav.contact')
                : item.name;

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
                    {translatedName}
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

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
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
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
}

export default Header;