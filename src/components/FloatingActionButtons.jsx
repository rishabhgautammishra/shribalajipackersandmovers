import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, FileText, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingActionButtons({ onOpenQuoteModal }) {
  return (
    <>
      {/* Mobile Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5 lg:hidden">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs active:scale-95 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 mb-1 text-navy" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={getDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 mb-1 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Get Quote CTA */}
          <Link
            to="/get-a-quote"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 mb-1" />
            <span>Get Quote</span>
          </Link>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <a
          href={getDirectWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-white text-slate-800 p-2 pr-4 rounded-full shadow-floating border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Chat directly on WhatsApp"
        >
          <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <MessageSquare className="w-6 h-6 fill-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider leading-none">Instant Chat</span>
            <span className="text-xs font-bold text-navy">WhatsApp Us</span>
          </div>
        </a>
      </div>
    </>
  );
}
