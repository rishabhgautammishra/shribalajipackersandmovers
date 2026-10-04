import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronDown, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICES_LIST } from '../data/servicesData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Business Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl py-0.5 px-1 transition-all"
            aria-label="Shri Balaji Packers and Movers Home"
          >
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-slate-950 border border-amber-500/30 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Shri Balaji Packers & Movers"
                className="h-10 sm:h-12 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight leading-none">
                  Shri Balaji
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-300 leading-none">
                  Packers & Movers
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 tracking-wider uppercase mt-1">
                Car Carrier & Relocation Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[15px] font-medium text-slate-700">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-colors duration-150 ${
                isActive('/') && location.pathname === '/'
                  ? 'text-navy font-semibold bg-slate-100'
                  : 'hover:text-navy hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg transition-colors duration-150 ${
                isActive('/about')
                  ? 'text-navy font-semibold bg-slate-100'
                  : 'hover:text-navy hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors duration-150 ${
                  isActive('/services')
                    ? 'text-navy font-semibold bg-slate-100'
                    : 'hover:text-navy hover:bg-slate-50'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-floating border border-slate-100 py-3 px-2 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Our Relocation Services
                  </div>
                  {SERVICES_LIST.slice(0, 7).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors"
                    >
                      <span>{service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-saffron-600 hover:text-saffron-700 flex items-center gap-1"
                    >
                      View All 8 Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors duration-150 ${
                  location.pathname.includes('packers-movers')
                    ? 'text-navy font-semibold bg-slate-100'
                    : 'hover:text-navy hover:bg-slate-50'
                }`}
              >
                Locations
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-floating border border-slate-100 py-3 px-2 transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Operating Hubs
                  </div>
                  <Link
                    to="/packers-movers-kanpur"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-navy hover:bg-slate-50 transition-colors"
                  >
                    <span>Kanpur (Primary Hub)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Active</span>
                  </Link>
                  <Link
                    to="/packers-movers-lucknow"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors"
                  >
                    <span>Lucknow</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Corridor</span>
                  </Link>
                  <Link
                    to="/packers-movers-noida"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors"
                  >
                    <span>Noida</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Branch</span>
                  </Link>
                  <Link
                    to="/packers-movers-delhi"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors"
                  >
                    <span>Delhi NCR</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Network</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg transition-colors duration-150 ${
                isActive('/contact')
                  ? 'text-navy font-semibold bg-slate-100'
                  : 'hover:text-navy hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {/* Phone Call CTA */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:text-navy hover:bg-slate-50 font-semibold transition-all group"
              title="Call Shri Balaji Packers & Movers"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-navy group-hover:text-white flex items-center justify-center text-slate-700 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-slate-400 font-normal leading-none uppercase tracking-wider">Call Helpline</span>
                <span className="text-sm font-bold text-navy leading-tight">{BUSINESS_INFO.phone}</span>
              </div>
            </a>

            {/* Primary Get Quote CTA */}
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-saffron-600 hover:bg-saffron-700 shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {/* Direct Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call Shri Balaji Packers and Movers"
              className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 active:bg-slate-200"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center active:bg-emerald-100"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <Link
              to="/get-a-quote"
              className="w-full text-center py-2.5 px-3 rounded-xl bg-saffron-600 text-white font-bold text-sm shadow-sm"
            >
              Get Free Quote
            </Link>
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div className="space-y-1 font-medium text-slate-700 pt-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg ${location.pathname === '/' ? 'bg-slate-100 text-navy font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-lg ${location.pathname === '/about' ? 'bg-slate-100 text-navy font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-lg ${location.pathname.startsWith('/services') ? 'bg-slate-100 text-navy font-semibold' : ''}`}
            >
              All Services (8)
            </Link>
            <Link
              to="/packers-movers-kanpur"
              className={`block px-3 py-2 rounded-lg ${location.pathname === '/packers-movers-kanpur' ? 'bg-slate-100 text-navy font-semibold' : ''}`}
            >
              Kanpur Service Hub
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-lg ${location.pathname === '/contact' ? 'bg-slate-100 text-navy font-semibold' : ''}`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Helpline: {BUSINESS_INFO.phone}</p>
            <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</p>
          </div>
        </div>
      )}
    </header>
  );
}
