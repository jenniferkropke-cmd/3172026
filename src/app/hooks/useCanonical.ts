import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function useCanonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Build the canonical URL
    const baseUrl = 'https://jenniferkropke.com';
    const canonicalUrl = pathname === '/' ? baseUrl : `${baseUrl}${pathname}`;
    
    // Find or create canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    
    canonicalTag.href = canonicalUrl;
  }, [pathname]);
}