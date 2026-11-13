/**
 * Nutcrackers Google Analytics 4 (GA4) Telemetry & Conversion Tracking
 * 
 * Provides privacy-conscious, lightweight event dispatching for high-intent user interactions:
 * - Page views on route changes
 * - Direct WhatsApp CTA clicks (with context)
 * - Lead intake form submissions
 * - Quote requests
 * - Video showreel engagement
 * - Service & Case Study inspections
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Environment variable configuration: VITE_GA_MEASUREMENT_ID (e.g. 'G-XXXXXXXXXX')
export const GA_MEASUREMENT_ID = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || '';

/**
 * Initializes GA4 script tag dynamically if VITE_GA_MEASUREMENT_ID is defined.
 * If not yet defined, functions safely log to console in development mode.
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID) {
    if ((import.meta as any).env?.DEV) {
      console.info('[Analytics] VITE_GA_MEASUREMENT_ID not set. GA4 events running in mock/debug mode.');
    }
    return;
  }

  // Prevent duplicate script injection
  if (document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // Handled manually on route navigation
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });
};

/**
 * Dispatches a Page View event on SPA route changes
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;

  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: pageTitle,
      page_location: pageLocation,
    });
  } else if ((import.meta as any).env?.DEV) {
    console.debug(`[Analytics Track] Page View: ${path} | ${pageTitle}`);
  }
};

/**
 * Dispatches custom conversion events
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window === 'undefined') return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, eventParams);
  } else if ((import.meta as any).env?.DEV) {
    console.debug(`[Analytics Track] Event: ${eventName}`, eventParams);
  }
};

/**
 * Specialized high-intent conversion event: WhatsApp click
 */
export const trackWhatsAppClick = (source: string, service?: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Lead Generation',
    event_label: source,
    service_name: service || 'General Inquiry',
    phone_number: '+923125355078',
  });
};

/**
 * Specialized high-intent conversion event: Lead Form submission or Quote Request
 */
export const trackFormSubmission = (service: string, budget?: string, timeline?: string) => {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    service_name: service,
    budget_range: budget || 'Unspecified',
    timeline: timeline || 'Unspecified',
    currency: 'USD',
  });
};

export const trackLeadConversion = (action: string, serviceTitle?: string) => {
  trackEvent('conversion_intent', {
    event_category: 'Lead Action',
    action_type: action,
    service_name: serviceTitle || 'General',
  });
};


/**
 * Specialized engagement event: Video play
 */
export const trackVideoPlay = (videoTitle: string, duration?: number) => {
  trackEvent('video_start', {
    event_category: 'Engagement',
    video_title: videoTitle,
    video_duration: duration || 0,
  });
};
