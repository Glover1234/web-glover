import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  
  // Initialize Google Analytics tracking
  useGoogleAnalytics();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow relative" key={`${location.pathname}-${i18n.language}`}>
        <Outlet />
      </main>
      <FloatingContactButton />
      <Footer />
    </div>
  );
};

export default MainLayout;