/**
 * Nutcrackers Analytics & Telemetry Layer
 * 
 * Configured with:
 * - Google Tag Manager Container ID: GTM-T4TT4C9D
 * - Google Analytics 4 Measurement ID: G-VZGF3JW1T5
 * 
 * Provides robust, non-blocking telemetry via the window.dataLayer:
 * - Client-side SPA route changes (page_view)
 * - Direct WhatsApp CTA interactions (whatsapp_click)
 * - Lead form and quote requests (generate_lead)
 * - Showreel video engagement (video_start)
 * - Privacy-preserving fallbacks when adblockers or privacy shields block network requests
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GTM_CONTAINER_ID = 'GTM-T4TT4C9D';
export const GA4_MEASUREMENT_ID = 'G-VZGF3JW1T5';

/**
 * Ensures window.dataLayer exists safely. GTM snippet in index.html handles container loading.
 * No duplicate independent gtag.js script is injected.
 */
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
  } catch (e) {
    // Graceful degradation if window access is restricted
  }
};

// Backward-compatible alias
export const initGA = initAnalytics;

/**
 * Dispatches a 'page_view' event to GTM dataLayer on client-side route transitions.
 * Guarantees zero runtime crashes if third-party scripts are blocked.
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;

  try {
    const pageTitle = title || document.title;
    const pageLocation = window.location.href;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: pageTitle,
      page_location: pageLocation,
      ga4_measurement_id: GA4_MEASUREMENT_ID,
    });

    if ((import.meta as any).env?.DEV) {
      console.debug(`[GTM Telemetry] page_view:`, { path, pageTitle, pageLocation });
    }
  } catch (err) {
    // Prevent client errors when adblockers restrict dataLayer
  }
};

/**
 * Dispatches custom conversion and engagement events to GTM dataLayer
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window === 'undefined') return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });

    if ((import.meta as any).env?.DEV) {
      console.debug(`[GTM Telemetry] event: ${eventName}`, eventParams);
    }
  } catch (err) {
    // Graceful error suppression
  }
};

/**
 * High-intent conversion event: WhatsApp direct interaction
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
 * High-intent conversion event: Lead intake form or quote request
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

/**
 * Secondary lead action intent event
 */
export const trackLeadConversion = (action: string, serviceTitle?: string) => {
  trackEvent('conversion_intent', {
    event_category: 'Lead Action',
    action_type: action,
    service_name: serviceTitle || 'General',
  });
};

/**
 * Engagement event: Video showcase playback
 */
export const trackVideoPlay = (videoTitle: string, duration?: number) => {
  trackEvent('video_start', {
    event_category: 'Engagement',
    video_title: videoTitle,
    video_duration: duration || 0,
  });
};
