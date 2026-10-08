import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, UserCheck, Truck, CheckCircle2, MessageSquare, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl, createWhatsAppQuoteUrl } from '../utils/whatsapp';

export default function HeroSection() {
  const navigate = useNavigate();
  const [quickEstimate, setQuickEstimate] = useState({
    pickup: '',
    drop: '',
    moveDate: '',
    homeSize: '2 BHK'
  });

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickEstimate.pickup || !quickEstimate.drop) {
      navigate('/get-a-quote');
      return;
    }
    // Form prefilled link to WhatsApp or redirect to quote page with state
    navigate('/get-a-quote', { state: quickEstimate });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-100">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-saffron-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 border border-saffron-200/80 text-saffron-800 text-xs md:text-sm font-semibold shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-saffron-600 animate-pulse" />
              Trusted Relocation Services in Lucknow & Nationwide
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12]">
                Move Without <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-saffron-500">
                  the Stress.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                Professional packing, moving and relocation services designed to make your move safe, simple and hassle-free.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-saffron-600 hover:bg-saffron-700 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] text-center"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:shadow transition-all duration-200 text-center group"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-slate-700">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Safe & Secure Handling</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Trained Moving Team</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Door-to-Door Service</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Realistic Visual + Floating Quick Estimate Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Realistic Logistics Visual */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Professional movers packing household belongings carefully with bubble wrap and sturdy boxes"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                
                {/* Visual Label Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold bg-navy/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-saffron-400" />
                    Verified Moving Crew & Equipment
                  </span>
                  <span className="text-slate-300">Lucknow & Central UP Hub</span>
                </div>
              </div>

              {/* Floating Quick Quote Card */}
              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-6 lg:w-[92%] bg-white rounded-2xl shadow-floating border border-slate-200/90 p-5 md:p-6 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-base md:text-lg font-bold text-navy">Planning a Move?</h2>
                    <p className="text-xs text-slate-500">Get a quick, transparent cost estimate</p>
                  </div>
                  <span className="text-[11px] font-bold bg-saffron-50 text-saffron-700 px-2 py-1 rounded-md border border-saffron-200">
                    Zero Obligation
                  </span>
                </div>

                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Pickup Location */}
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Pickup (e.g. Kakadeo)"
                        value={quickEstimate.pickup}
                        onChange={(e) => setQuickEstimate({ ...quickEstimate, pickup: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    {/* Drop Location */}
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-saffron-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Drop (e.g. Civil Lines)"
                        value={quickEstimate.drop}
                        onChange={(e) => setQuickEstimate({ ...quickEstimate, drop: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Move Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={quickEstimate.moveDate}
                        onChange={(e) => setQuickEstimate({ ...quickEstimate, moveDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-slate-700"
                      />
                    </div>

                    <select
                      value={quickEstimate.homeSize}
                      onChange={(e) => setQuickEstimate({ ...quickEstimate, homeSize: e.target.value })}
                      className="w-full px-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all text-slate-700 font-medium"
                    >
                      <option value="1 RK / 1 BHK">1 RK / 1 BHK</option>
                      <option value="2 BHK">2 BHK Household</option>
                      <option value="3 BHK">3 BHK Household</option>
                      <option value="4+ BHK / Villa">4+ BHK / Villa</option>
                      <option value="Office / Commercial">Office / Commercial</option>
                      <option value="Vehicle Only">Vehicle Only</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-navy hover:bg-slate-800 text-white font-bold text-xs md:text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.99]"
                  >
                    <span>Get Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-saffron-400" />
                  </button>
                </form>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
