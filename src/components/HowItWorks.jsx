import React from 'react';
import { ClipboardList, Calculator, Package, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    number: "01",
    title: "Share Your Move",
    desc: "Tell us your pickup, destination and moving date.",
    icon: ClipboardList
  },
  {
    number: "02",
    title: "Get Your Quote",
    desc: "Receive a transparent estimate based on your requirements.",
    icon: Calculator
  },
  {
    number: "03",
    title: "We Pack & Move",
    desc: "Our team safely packs, loads and transports your belongings.",
    icon: Package
  },
  {
    number: "04",
    title: "Safe Delivery",
    desc: "Your belongings are delivered to your destination.",
    icon: CheckCircle2
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            Clear 4-Step Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Moving Made Simple
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A seamless, stress-free relocation process from initial consultation to final box placement.
          </p>
        </div>

        {/* 4-Step Timeline */}
        <div className="relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col items-center text-center relative group"
                >
                  {/* Step Number Badge */}
                  <span className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-navy text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                    Step {step.number}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 text-navy group-hover:bg-saffron-600 group-hover:text-white group-hover:border-saffron-600 flex items-center justify-center mb-5 transition-all duration-200 mt-2 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA bottom prompt */}
        <div className="mt-12 text-center">
          <Link
            to="/get-a-quote"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-saffron-600 transition-colors"
          >
            <span>Ready to start Step 01? Share your move details</span>
            <ArrowRight className="w-4 h-4 text-saffron-600" />
          </Link>
        </div>

      </div>
    </section>
  );
}
