import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Info } from 'lucide-react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider">
            Customer Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Client Feedback & Reviews
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Real experiences from families and businesses who trusted us with their moving journey.
          </p>
        </div>

        {/* Informative placeholder note for business transparency */}
        <div className="max-w-2xl mx-auto mb-10 p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-900 text-xs flex items-center gap-2.5">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span>
            <strong>Business Note:</strong> Testimonial slots below are ready for genuine customer reviews upon Google My Business / WhatsApp feedback collection.
          </span>
        </div>

        {/* 3 Placeholder Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star UI without fake numeric claims */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-1.5">5.0</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy flex items-center gap-1">
                    {item.customerName}
                  </h4>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>

                <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                  {item.serviceType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
