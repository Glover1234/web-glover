# Google Analytics 4 Implementation Guide

## Overview
This project has Google Analytics 4 (GA4) integrated with custom event tracking for the Glover corporate website.

## Setup

### 1. Environment Variables
Add your GA4 Measurement ID to your `.env` file:
```bash
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Features Implemented

#### Automatic Page Tracking
- Tracks all route changes automatically
- Records page views with proper titles and paths

#### Custom Event Tracking
- Business line interactions
- Contact form submissions
- Navigation clicks
- Video interactions
- Product views
- Banner clicks
- Catalog downloads

## Usage

### In Components
```tsx
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

const MyComponent = () => {
  const { trackEvent, trackBusinessLineView } = useGoogleAnalytics();

  const handleClick = () => {
    trackEvent('custom_event', {
      event_category: 'engagement',
      custom_parameter: 'value'
    });
  };

  const handleBusinessLineClick = (businessLine: string) => {
    trackBusinessLineView(businessLine);
  };

  // Component JSX...
};
```

### Available Tracking Functions

#### `trackEvent(eventName, parameters)`
Generic event tracking for custom events.

#### `trackBusinessLineView(businessLine)`
Tracks when users interact with business line sections.

#### `trackContactFormSubmit()`
Tracks contact form submissions.

#### `trackCatalogDownload(catalogType)`
Tracks catalog/brochure downloads.

#### `trackBannerClick(bannerType, bannerPosition)`
Tracks banner interactions.

#### `trackVideoPlay(videoName, businessLine)`
Tracks video play events.

#### `trackNavClick(linkText, destination)`
Tracks navigation link clicks.

#### `trackProductInteraction(productName, businessLine)`
Tracks product detail views.

## Events Currently Tracked

### Automatic Events
- `page_view` - All page navigation
- `session_start` - User sessions
- `first_visit` - New users

### Custom Events
- `business_line_view` - Business line interactions
- `contact_form_submit` - Contact form submissions
- `quick_link_click` - Quick navigation links
- `category_click` - Category page navigation
- `contact_cta_click` - Call-to-action buttons
- `video_play` - Video interactions
- `video_pause` - Video pauses
- `video_complete` - Video completions
- `banner_click` - Banner interactions
- `catalog_download` - Resource downloads
- `product_view` - Product detail views
- `navigation_click` - General navigation

## Data Privacy & Compliance

### Features Implemented
- IP Anonymization enabled
- Secure cookie flags set
- GDPR-ready configuration
- No personal data collection without consent

### Cookie Configuration
```javascript
cookie_flags: 'SameSite=Strict;Secure'
anonymize_ip: true
```

## Troubleshooting

### Common Issues

1. **Events not showing in GA4**
   - Verify `VITE_GA4_MEASUREMENT_ID` is correctly set
   - Check browser console for GA4 initialization messages
   - Ensure gtag script is loaded in index.html

2. **Development vs Production**
   - Use different GA4 properties for dev/staging/production
   - Set different measurement IDs in respective .env files

3. **Debug Mode**
   - Open browser dev tools
   - Check for GA4 related console messages
   - Verify gtag function is available: `window.gtag`

### Testing Events
```javascript
// In browser console
window.gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'manual_test'
});
```

## Performance Impact
- GA4 script loads asynchronously
- Events are queued and sent in batches
- Minimal impact on Core Web Vitals
- Uses modern performance-optimized gtag implementation

## Future Enhancements
- Enhanced E-commerce tracking for future online store
- User engagement metrics
- Conversion funnel analysis
- Custom audiences for remarketing
- Enhanced reporting dashboards
