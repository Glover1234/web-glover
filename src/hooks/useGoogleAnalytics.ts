import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackEvent,
  trackBusinessLineInteraction,
  trackContactFormSubmission,
  trackCatalogDownload,
  trackVideoInteraction,
  trackNavigationClick,
  trackBannerInteraction,
  trackProductView,
} from '../utils/analytics';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname + location.search);
  }, [location]);

  // Function to track custom events
  const trackCustomEvent = (
    eventName: string,
    parameters?: Record<string, any>
  ) => {
    trackEvent(eventName, parameters);
  };

  // Function to track business line interactions
  const trackBusinessLineView = (businessLine: string) => {
    trackBusinessLineInteraction(businessLine);
  };

  // Function to track contact form interactions
  const trackContactFormSubmit = () => {
    trackContactFormSubmission();
  };

  // Function to track product catalog downloads
  const trackCatalogDownloadAction = (catalogType: string) => {
    trackCatalogDownload(catalogType);
  };

  // Function to track banner clicks
  const trackBannerClick = (bannerType: string, bannerPosition: string) => {
    trackBannerInteraction(bannerType, bannerPosition);
  };

  // Function to track video interactions
  const trackVideoPlay = (videoName: string, businessLine: string) => {
    trackVideoInteraction('play', videoName, businessLine);
  };

  const trackVideoPause = (videoName: string, businessLine: string) => {
    trackVideoInteraction('pause', videoName, businessLine);
  };

  const trackVideoComplete = (videoName: string, businessLine: string) => {
    trackVideoInteraction('complete', videoName, businessLine);
  };

  // Function to track navigation clicks
  const trackNavClick = (linkText: string, destination: string) => {
    trackNavigationClick(linkText, destination);
  };

  // Function to track product views
  const trackProductInteraction = (productName: string, businessLine: string) => {
    trackProductView(productName, businessLine);
  };

  return {
    trackEvent: trackCustomEvent,
    trackBusinessLineView,
    trackContactFormSubmit,
    trackCatalogDownload: trackCatalogDownloadAction,
    trackBannerClick,
    trackVideoPlay,
    trackVideoPause,
    trackVideoComplete,
    trackNavClick,
    trackProductInteraction,
  };
};

// Re-export the initialization function
export { initGA4 as initializeGA4 } from '../utils/analytics';
