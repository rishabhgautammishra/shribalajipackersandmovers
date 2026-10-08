import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight SEO management component that dynamically sets Title,
 * Meta description, OpenGraph, and Canonical URL per page.
 */
export default function SEOHead({
  title = "SHREE BALAJI PACKERS AND MOVERS | Safe Shift • Secure Future",
  description = "SHREE BALAJI PACKERS AND MOVERS provides professional car carrier, home shifting, office relocation, vehicle transportation and moving services in Lucknow, Kanpur and across India.",
  canonicalPath = ""
}) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://shribalajipackersandmovers.shop${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, canonicalUrl]);

  return null;
}
