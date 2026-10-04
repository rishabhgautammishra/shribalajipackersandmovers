import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LocationDetailPage from './pages/LocationDetailPage';
import ContactPage from './pages/ContactPage';
import GetAQuotePage from './pages/GetAQuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-slate-800 antialiased selection:bg-saffron-500 selection:text-white">
      <ScrollToTop />
      
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Routed Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          
          {/* Location Specific Landing Pages */}
          <Route path="/packers-movers-kanpur" element={<LocationDetailPage />} />
          <Route path="/packers-movers-noida" element={<LocationDetailPage />} />
          <Route path="/packers-movers-lucknow" element={<LocationDetailPage />} />
          <Route path="/packers-movers-delhi" element={<LocationDetailPage />} />
          <Route path="/:citySlug" element={<LocationDetailPage />} />

          {/* Contact & Quote Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-a-quote" element={<GetAQuotePage />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Structured Footer */}
      <Footer />

      {/* Floating Action Buttons: Mobile Bottom Bar + Desktop Floating WhatsApp */}
      <FloatingActionButtons />
    </div>
  );
}
