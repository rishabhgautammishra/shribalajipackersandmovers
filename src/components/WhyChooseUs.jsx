import React from 'react';
import { 
  ShieldCheck, 
  ReceiptText, 
  Users, 
  Clock4, 
  DoorOpen, 
  HeartHandshake 
} from 'lucide-react';

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Safe Handling",
    desc: "Careful packing and secure transportation."
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    desc: "Clear estimates without unnecessary surprises."
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Experienced people handling your belongings."
  },
  {
    icon: Clock4,
    title: "On-Time Service",
    desc: "We respect your schedule and moving date."
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Support",
    desc: "From pickup to final delivery."
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    desc: "Responsive support throughout the journey."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider">
            Our Core Commitments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Why Choose Shiv Ganga?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We focus on reliability, clear communication, and careful handling every single time.
          </p>
        </div>

        {/* 6 Clean Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-start text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-navy group-hover:bg-navy group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200 border border-slate-100 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
