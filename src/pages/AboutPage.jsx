import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ShieldCheck, Truck, Users, HeartHandshake, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import QuoteCtaBanner from '../components/QuoteCtaBanner';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us | Shri Balaji Packers & Movers Kanpur"
        description="Learn about Shri Balaji Packers & Movers & Car Carrier - Kanpur's dedicated relocation and moving specialists focused on safe handling, transparent pricing, and dependable service."
        canonicalPath="/about"
      />

      <main className="bg-slate-50/50">
        
        {/* Page Hero */}
        <section className="bg-white border-b border-slate-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-saffron-600" />
                About Shri Balaji Packers & Movers
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Dedicated to Safe, Stress-Free Relocation.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Based in Kanpur, Uttar Pradesh, we specialize in high-care residential, vehicle transportation, car carrier, and commercial moving solutions tailored to simplify your relocation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Core Narrative */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                    Built on Trust, Care, and Genuine Service
                  </h2>
                  <div className="w-12 h-1 bg-saffron-600 rounded-full" />
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  Moving your home, vehicle, or office is more than just loading boxes onto a truck—it is about moving memories, valuable vehicles, equipment, and personal belongings that represent years of hard work.
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  At <strong>Shri Balaji Packers & Movers</strong>, our philosophy is grounded in straightforward integrity: transparent pricing without hidden surprise fees, trained moving personnel who treat your belongings as their own, and clear communication from the moment you request a quote until the last item is placed in your new room.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-navy">Local Kanpur Expertise</h3>
                      <p className="text-xs text-slate-500">In-depth familiarity with city routes, society permissions, and traffic regulations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-navy">Zero Compromise on Packing Materials</h3>
                      <p className="text-xs text-slate-500">We utilize heavy-duty corrugated cartons, multilayer bubble wrap, and waterproof stretch films.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-navy">Accountable Moving Crews</h3>
                      <p className="text-xs text-slate-500">Courteous, experienced staff equipped with proper moving dollies and safety gear.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual Grid */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 aspect-[4/5] bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                      alt="Careful packing and bubble wrapping"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 aspect-[4/3] bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                        alt="Logistics truck and transit safety"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-navy p-6 rounded-2xl text-white space-y-2 text-left">
                      <p className="text-xs text-saffron-400 font-bold uppercase tracking-wider">Our Promise</p>
                      <h4 className="text-base font-bold text-white leading-snug">Safety First in Every Move</h4>
                      <p className="text-xs text-slate-300">Dedicated supervision throughout loading, highway transit, and placement.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Operating Pillars */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">Our Service Principles</h2>
              <p className="text-sm text-slate-600">The standards that guide every relocation assignment we take.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-lg font-bold text-navy">Transparent Estimates</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We believe in upfront, clear quotations based on actual inventory and distance, preventing unexpected surprises on moving day.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-600 text-white flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-lg font-bold text-navy">Trained Crew Handling</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our packing crews are trained in proper lifting postures, furniture wrapping, appliance securing, and delicate item compartmentalization.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-lg font-bold text-navy">Direct Doorstep Accountability</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  From initial pickup inside your old home to complete setup inside your new home, our team remains directly accountable to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <QuoteCtaBanner />

      </main>
    </>
  );
}
