import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Clock4 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export default function QuoteCtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy via-slate-900 to-navy text-white relative overflow-hidden border-y border-slate-800">
      {/* Background ambient accents */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-saffron-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-saffron-400 text-xs font-semibold border border-white/10 backdrop-blur-sm">
          <Clock4 className="w-3.5 h-3.5" />
          <span>Quick 15-Minute Response Time</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Planning Your Next Move?
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us where you're moving from and where you're going. We'll help you plan the move with transparent rates and dedicated team support.
        </p>

        {/* 3 Prominent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 max-w-xl mx-auto">
          {/* 1. Get Free Quote */}
          <Link
            to="/get-a-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-saffron-600 hover:bg-saffron-500 text-white shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* 2. Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-saffron-400" />
            <span>Call Now</span>
          </a>

          {/* 3. WhatsApp */}
          <a
            href={getDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-200 shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Footer Guarantee */}
        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            No hidden costs
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Free in-person / virtual inspection</span>
        </div>

      </div>
    </section>
  );
}
