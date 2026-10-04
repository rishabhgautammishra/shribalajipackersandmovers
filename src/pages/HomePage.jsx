import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ServicesGrid from '../components/ServicesGrid';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import MovingChecklist from '../components/MovingChecklist';
import GallerySection from '../components/GallerySection';
import QuoteCtaBanner from '../components/QuoteCtaBanner';
import ServiceLocations from '../components/ServiceLocations';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqAccordion from '../components/FaqAccordion';
import LeadQuoteForm from '../components/LeadQuoteForm';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Shri Balaji Packers & Movers | Car Carrier & Safe Relocation"
        description="Shri Balaji Packers & Movers provides professional car carrier, vehicle transport, home shifting, and moving services in Kanpur and nationwide."
        canonicalPath="/"
      />

      <main>
        {/* SECTION 1 — HERO */}
        <HeroSection />

        {/* TRUST STRIP */}
        <TrustStrip />

        {/* SERVICES (8 items) */}
        <ServicesGrid />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* MOVING CHECKLIST / VALUE SECTION */}
        <MovingChecklist />

        {/* PHOTO / GALLERY */}
        <GallerySection />

        {/* QUOTE CTA BANNER */}
        <QuoteCtaBanner />

        {/* SERVICE LOCATIONS */}
        <ServiceLocations />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FAQ SECTION */}
        <FaqAccordion />

        {/* CONTACT & DETAILED QUOTE SECTION */}
        <section id="contact-form" className="py-16 md:py-24 bg-slate-50/80 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider">
                Direct Contact & Bookings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Get in Touch with Our Team
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Have a query or ready to schedule your move? Reach out directly or fill the quote form.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Contact Info */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">
                      Shri Balaji Packers & Movers
                    </h3>
                    <p className="text-xs text-slate-500">
                      Central Relocation Office, Kanpur
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-slate-700">
                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-saffron-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Phone</span>
                        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-base font-bold text-navy hover:text-saffron-600 transition-colors">
                          {BUSINESS_INFO.phone}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">WhatsApp</span>
                        <a href={getDirectWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-emerald-700 hover:underline">
                          {BUSINESS_INFO.whatsapp}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Email</span>
                        <span className="text-sm font-semibold text-slate-800">
                          {BUSINESS_INFO.email}
                        </span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-saffron-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Address</span>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {BUSINESS_INFO.address.full}
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Operating Hours</span>
                        <p className="text-xs font-semibold text-slate-700">
                          {BUSINESS_INFO.workingHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Lead / Quote Form */}
              <div className="lg:col-span-7">
                <LeadQuoteForm />
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}
