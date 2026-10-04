import React from 'react';
import SEOHead from '../components/SEOHead';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';
import LeadQuoteForm from '../components/LeadQuoteForm';
import FaqAccordion from '../components/FaqAccordion';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Us | Shri Balaji Packers & Movers Kanpur"
        description="Get in touch with Shri Balaji Packers & Movers in Kanpur. Call, WhatsApp, or submit your move requirements for a free, transparent relocation quote."
        canonicalPath="/contact"
      />

      <main className="bg-slate-50/50">
        
        {/* Header */}
        <section className="bg-white border-b border-slate-100 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-4 h-4 text-saffron-600" />
                Contact Relocation Support
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                We're Here to Help You Move.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Whether you have an immediate moving date, vehicle shipment, or simply want an honest quote estimate, connect with our Kanpur team through phone, WhatsApp, or our quick form.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Official Contact Cards */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                {/* Main Contact Card */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-navy">
                      Head Office & Dispatch Center
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Shri Balaji Packers & Movers
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 text-navy flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <Phone className="w-5 h-5 text-saffron-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Helpline Number</span>
                        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-base font-bold text-navy hover:text-saffron-600 transition-colors">
                          {BUSINESS_INFO.phone}
                        </a>
                        <p className="text-[11px] text-slate-500">Available 7:00 AM – 10:00 PM</p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">WhatsApp Chat</span>
                        <a href={getDirectWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-emerald-700 hover:underline">
                          {BUSINESS_INFO.whatsapp}
                        </a>
                        <p className="text-[11px] text-slate-500">Quick estimate & item checklist sharing</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 text-navy flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Email Inquiries</span>
                        <p className="text-sm font-semibold text-slate-800">
                          {BUSINESS_INFO.email}
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 text-navy flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <MapPin className="w-5 h-5 text-saffron-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase">Office Address</span>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {BUSINESS_INFO.address.full}
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center flex-shrink-0 border border-slate-100">
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

                {/* Assurance Box */}
                <div className="p-6 rounded-3xl bg-navy text-white space-y-2">
                  <div className="flex items-center gap-2 text-saffron-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    Strict Privacy Assurance
                  </div>
                  <h3 className="text-base font-bold text-white">Your details are safe with us</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    We never share your contact information with third-party telemarketers. We only contact you to fulfill your quotation request.
                  </p>
                </div>

              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <LeadQuoteForm />
              </div>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqAccordion />

      </main>
    </>
  );
}
