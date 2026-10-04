import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICES_LIST } from '../data/servicesData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-12 text-sm font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-auto rounded-xl bg-slate-950 border border-amber-500/40 p-1 flex items-center justify-center shadow-md">
                <img
                  src="/logo.png"
                  alt="Shri Balaji Packers & Movers Logo"
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
                  Shri Balaji Packers & Movers
                </span>
                <span className="text-[11px] text-amber-400 font-medium uppercase tracking-wider">
                  Car Carrier & Relocation Specialist
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Making relocation simple, safe and stress-free. Professional packing, household shifting, vehicle transport and corporate relocation services across Kanpur and nationwide routes.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <a
                href={BUSINESS_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-saffron-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={BUSINESS_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-saffron-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href={BUSINESS_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-saffron-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-white font-bold text-base tracking-tight mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_LIST.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-saffron-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Operating Locations (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-white font-bold text-base tracking-tight mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-saffron-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-saffron-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-saffron-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="hover:text-saffron-400 transition-colors">
                  Get Free Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-saffron-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-bold text-sm tracking-tight pt-4 mb-2">
              Locations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/packers-movers-kanpur" className="hover:text-white transition-colors">
                  Kanpur (Hub)
                </Link>
              </li>
              <li>
                <Link to="/packers-movers-lucknow" className="hover:text-white transition-colors">
                  Lucknow Route
                </Link>
              </li>
              <li>
                <Link to="/packers-movers-noida" className="hover:text-white transition-colors">
                  Noida / NCR
                </Link>
              </li>
              <li>
                <Link to="/packers-movers-delhi" className="hover:text-white transition-colors">
                  Delhi NCR
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact Information (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-white font-bold text-base tracking-tight mb-4">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-saffron-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px] font-medium uppercase">Phone Call</span>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-saffron-400 font-semibold">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px] font-medium uppercase">WhatsApp</span>
                  <a href={getDirectWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 font-semibold">
                    {BUSINESS_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px] font-medium uppercase">Email</span>
                  <span className="text-slate-300">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-saffron-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px] font-medium uppercase">Address</span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {BUSINESS_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex items-start gap-3 pt-1">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-slate-500 text-[11px] font-medium uppercase">Working Hours</span>
                  <p className="text-slate-400 text-xs">
                    {BUSINESS_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Shri Balaji Packers & Movers. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
