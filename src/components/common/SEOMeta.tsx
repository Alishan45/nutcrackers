import { useEffect } from 'react';

export interface SEOMetaProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  schema?: object | object[];
}

export function SEOMeta({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://nutcrackers.tech/new_nutcrackers_business_card.jpeg',
  publishedTime,
  modifiedTime,
  authorName,
  schema
}: SEOMetaProps) {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta
    setMetaTag('name', 'description', description);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Nutcrackers');

    if (publishedTime) {
      setMetaTag('property', 'article:published_time', publishedTime);
    }
    if (modifiedTime) {
      setMetaTag('property', 'article:modified_time', modifiedTime);
    }
    if (authorName) {
      setMetaTag('property', 'article:author', authorName);
    }

    // 5. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Schema.org JSON-LD
    const existingSchemaScript = document.getElementById('dynamic-page-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const script = document.getElementById('dynamic-page-schema');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, publishedTime, modifiedTime, authorName, schema]);

  return null;
}
