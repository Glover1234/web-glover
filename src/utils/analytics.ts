// Google Analytics 4 helper functions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId?: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

export const isGAEnabled = (): boolean => {
  return !!(GA4_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag);
};

export const initGA4 = (): void => {
  if (!isGAEnabled()) {
    console.warn('Google Analytics 4 not initialized: Missing measurement ID or gtag');
    return;
  }

  // Set up gtag configuration
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID!, {
    page_title: document.title,
    page_location: window.location.href,
    anonymize_ip: true,
    cookie_flags: 'SameSite=Strict;Secure',
  });

  console.log('Google Analytics 4 initialized successfully');
};

export const trackPageView = (path: string): void => {
  if (!isGAEnabled()) return;

  window.gtag('config', GA4_MEASUREMENT_ID!, {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
};

export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
): void => {
  if (!isGAEnabled()) return;

  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: eventName,
    ...parameters,
  });
};

// Specific tracking functions for Glover website
export const trackBusinessLineInteraction = (businessLine: string): void => {
  trackEvent('business_line_view', {
    business_line: businessLine,
    event_category: 'business_engagement',
  });
};

export const trackContactFormSubmission = (): void => {
  trackEvent('contact_form_submit', {
    event_category: 'lead_generation',
    value: 1,
  });
};

export const trackCatalogDownload = (catalogType: string): void => {
  trackEvent('catalog_download', {
    catalog_type: catalogType,
    event_category: 'engagement',
    value: 1,
  });
};

export const trackVideoInteraction = (action: string, videoName: string, businessLine: string): void => {
  trackEvent(`video_${action}`, {
    video_name: videoName,
    business_line: businessLine,
    event_category: 'media_engagement',
  });
};

export const trackNavigationClick = (linkText: string, destination: string): void => {
  trackEvent('navigation_click', {
    link_text: linkText,
    destination: destination,
    event_category: 'navigation',
  });
};

export const trackBannerInteraction = (bannerType: string, bannerPosition: string): void => {
  trackEvent('banner_click', {
    banner_type: bannerType,
    banner_position: bannerPosition,
    event_category: 'promotion_engagement',
  });
};

export const trackProductView = (productName: string, businessLine: string): void => {
  trackEvent('product_view', {
    product_name: productName,
    business_line: businessLine,
    event_category: 'product_engagement',
  });
};

// Re-export initGA4 as initializeGA4 for backwards compatibility
export { initGA4 as initializeGA4 };

// Eventos específicos para Looker Studio - Glover
export const trackGloverBusinessLine = (businessLine: string, action: string, value?: number) => {
  trackEvent('glover_business_line', {
    business_line: businessLine,
    action: action,
    value: value,
    timestamp: Date.now(),
    page_location: window.location.pathname,
    page_title: document.title
  });
};

export const trackGloverProduct = (productType: string, productId: string, action: string) => {
  trackEvent('glover_product_interaction', {
    product_type: productType, // 'door', 'furniture', 'wood', etc.
    product_id: productId,
    action: action, // 'view', 'download_catalog', 'request_quote'
    page_location: window.location.pathname,
    timestamp: Date.now()
  });
};

export const trackGloverLead = (leadType: string, source: string, businessLine?: string) => {
  trackEvent('glover_lead_generated', {
    lead_type: leadType, // 'contact_form', 'phone_call', 'email', 'catalog_download'
    source: source, // 'header', 'footer', 'business_line_page', 'contact_page'
    business_line: businessLine,
    lead_value: 100, // Valor estimado del lead para Looker Studio
    timestamp: Date.now(),
    page_location: window.location.pathname
  });
};

export const trackGloverSustainability = (certType: string, engagement: string) => {
  trackEvent('glover_sustainability', {
    certification_type: certType, // 'FSC', 'PEFC', 'ISO14001', etc.
    engagement_level: engagement, // 'view', 'detailed_view', 'download_certificate'
    sustainability_score: 1, // Para métricas de engagement
    timestamp: Date.now(),
    page_location: window.location.pathname
  });
};

export const trackGloverNavigation = (section: string, action: string, destination?: string) => {
  trackEvent('glover_navigation', {
    section: section, // 'header', 'footer', 'sidebar', 'breadcrumb'
    action: action, // 'click', 'hover', 'scroll_to'
    destination: destination,
    navigation_depth: window.location.pathname.split('/').length - 1,
    timestamp: Date.now()
  });
};

export const trackGloverEngagement = (contentType: string, engagementType: string, duration?: number) => {
  trackEvent('glover_engagement', {
    content_type: contentType, // 'video', 'image_gallery', 'text_content', 'form'
    engagement_type: engagementType, // 'scroll', 'time_spent', 'interaction', 'completion'
    duration: duration, // Tiempo en segundos
    engagement_score: duration ? Math.min(duration / 60, 10) : 1, // Score 1-10 para Looker
    page_location: window.location.pathname,
    timestamp: Date.now()
  });
};

// Función para tracking de objetivos de negocio específicos
export const trackGloverGoal = (goalName: string, goalValue: number, currency = 'CLP') => {
  trackEvent('glover_goal_completion', {
    goal_name: goalName, // 'quote_request', 'catalog_download', 'contact_form'
    goal_value: goalValue,
    currency: currency,
    conversion_type: 'macro', // 'macro' o 'micro'
    timestamp: Date.now(),
    page_location: window.location.pathname
  });
};

// Tracking de rendimiento para Looker Studio
export const trackGloverPerformance = (metricName: string, value: number, unit: string) => {
  trackEvent('glover_performance', {
    metric_name: metricName, // 'page_load_time', 'form_completion_time', etc.
    metric_value: value,
    metric_unit: unit, // 'seconds', 'milliseconds', 'percentage'
    performance_category: 'web_vitals',
    timestamp: Date.now(),
    page_location: window.location.pathname
  });
};
