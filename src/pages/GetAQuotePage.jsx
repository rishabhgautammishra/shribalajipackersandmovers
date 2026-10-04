import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LeadQuoteForm from '../components/LeadQuoteForm';
import { 
  Calculator, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles,
  Truck,
  Box,
  Layers,
  Phone
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function GetAQuotePage() {
  const location = useLocation();
  const state = location.state || {};

  // Interactive Estimator calculation widget
  const [estType, setEstType] = useState('2bhk');
  const [estDistance, setEstDistance] = useState('local');
  const [estPacking, setEstPacking] = useState('standard');

  const getEstimatedRange = () => {
    let base = 4500;
    if (estType === '1rk') base = 3000;
    if (estType === '1bhk') base = 4000;
    if (estType === '2bhk') base = 6500;
    if (estType === '3bhk') base = 9500;
    if (estType === '4bhk') base = 14000;
    if (estType === 'office') base = 8000;

    let multiplier = 1;
    if (estDistance === 'intercity_short') multiplier = 1.8;
    if (estDistance === 'intercity_medium') multiplier = 2.8;
    if (estDistance === 'intercity_long') multiplier = 4.2;

    let packingFactor = estPacking === 'premium' ? 1.25 : 1.0;

    const min = Math.round((base * multiplier * packingFactor) / 500) * 500;
    const max = Math.round((min * 1.3) / 500) * 500;

    return { min, max };
  };

  const estimate = getEstimatedRange();

  return (
    <>
      <SEOHead
        title="Get a Free Moving Quote | Shri Balaji Packers & Movers Kanpur"
        description="Calculate your relocation and vehicle transport cost estimate and request a free moving quote from Shri Balaji Packers & Movers in Kanpur."
        canonicalPath="/get-a-quote"
      />

      <main className="bg-slate-50/50">
        
        {/* Header */}
        <section className="bg-white border-b border-slate-100 py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-saffron-600" />
                Instant Estimate & Custom Quote
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Get Your Free Relocation Quote
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Tell us about your moving requirements to receive a fair, transparent price estimate tailored to your volume, floor level, and destination.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form & Instant Calculator Grid */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Interactive Estimator Widget & Trust points */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                {/* Interactive Cost Estimator Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-saffron-600 uppercase tracking-wider">Interactive Guide</span>
                      <h2 className="text-lg font-bold text-navy">Instant Cost Indicator</h2>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-saffron-50 text-saffron-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-500">
                    Use this quick estimator for an indicative range, then submit the form for a finalized quote.
                  </p>

                  {/* 1. Size Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Home / Office Size</label>
                    <select
                      value={estType}
                      onChange={(e) => setEstType(e.target.value)}
                      className="w-full px-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                    >
                      <option value="1rk">1 RK / Single Room</option>
                      <option value="1bhk">1 BHK Apartment</option>
                      <option value="2bhk">2 BHK Apartment / House</option>
                      <option value="3bhk">3 BHK Family Home</option>
                      <option value="4bhk">4+ BHK / Independent House</option>
                      <option value="office">Commercial / Office Move</option>
                    </select>
                  </div>

                  {/* 2. Distance */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Moving Distance</label>
                    <select
                      value={estDistance}
                      onChange={(e) => setEstDistance(e.target.value)}
                      className="w-full px-3 py-2 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500"
                    >
                      <option value="local">Within Kanpur City (Local Shift)</option>
                      <option value="intercity_short">Kanpur to Lucknow / Nearby (Under 100 km)</option>
                      <option value="intercity_medium">Kanpur to Delhi NCR / Prayagraj (100 - 500 km)</option>
                      <option value="intercity_long">Kanpur to Mumbai / Bangalore (500+ km)</option>
                    </select>
                  </div>

                  {/* 3. Packing Level */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Packaging Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setEstPacking('standard')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          estPacking === 'standard'
                            ? 'border-navy bg-navy text-white'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        Standard 5-Ply
                      </button>
                      <button
                        type="button"
                        onClick={() => setEstPacking('premium')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          estPacking === 'premium'
                            ? 'border-navy bg-navy text-white'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        Premium Multi-Layer
                      </button>
                    </div>
                  </div>

                  {/* Calculated Approximate Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-navy text-white space-y-1">
                    <span className="text-[11px] text-saffron-400 font-bold uppercase tracking-wider block">
                      Estimated Cost Range*
                    </span>
                    <div className="text-2xl font-extrabold tracking-tight">
                      ₹{estimate.min.toLocaleString('en-IN')} – ₹{estimate.max.toLocaleString('en-IN')}
                    </div>
                    <p className="text-[10px] text-slate-300">
                      *Subject to physical / video inventory assessment and elevator accessibility.
                    </p>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-subtle space-y-3.5">
                  <h3 className="text-sm font-bold text-navy">Why Book With Shri Balaji?</h3>
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Zero hidden fuel or toll surprises</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Dedicated moving supervisors on site</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Door-to-door delivery inside your rooms</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <LeadQuoteForm
                  initialPickup={state.pickup || ''}
                  initialDrop={state.drop || ''}
                  initialDate={state.moveDate || ''}
                />
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
