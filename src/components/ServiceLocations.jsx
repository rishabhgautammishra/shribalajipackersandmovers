import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

const LOCATION_CARDS = [
  {
    city: "Kanpur",
    badge: "Primary Operating Hub",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    desc: "Comprehensive door-to-door moving across all Kanpur sectors, residential colonies & industrial belts.",
    areas: ["Civil Lines", "Kakadeo", "Swaroop Nagar", "Kidwai Nagar", "Kalyanpur", "Barra"],
    link: "/packers-movers-kanpur",
    isActive: true
  },
  {
    city: "Lucknow",
    badge: "Regular Corridor Hub",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    desc: "Daily connecting transit routes between Kanpur and Lucknow capital district.",
    areas: ["Gomti Nagar", "Indira Nagar", "Alambagh", "Hazratganj"],
    link: "/packers-movers-lucknow",
    isActive: true,
    isCorridor: true
  },
  {
    city: "Noida & Greater Noida",
    badge: "NCR Branch Network",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    desc: "High-rise apartment shifting & corporate moves between Kanpur and Delhi NCR.",
    areas: ["Sector 62", "Sector 50", "Greater Noida West", "Expressway"],
    link: "/packers-movers-noida",
    isActive: true,
    isCorridor: true
  },
  {
    city: "Delhi NCR",
    badge: "Interstate Network",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    desc: "Direct container transport connecting Central UP with National Capital Region.",
    areas: ["South Delhi", "Dwarka", "Rohini", "Connaught Place"],
    link: "/packers-movers-delhi",
    isActive: true,
    isCorridor: true
  }
];

export default function ServiceLocations() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            Network Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Serving Customers Across Key Locations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Rooted in Kanpur with reliable highway corridors across Uttar Pradesh and Delhi NCR.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATION_CARDS.map((loc, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                loc.city === "Kanpur"
                  ? 'bg-gradient-to-b from-white to-slate-50/80 border-saffron-300 shadow-card ring-1 ring-saffron-400/20'
                  : 'bg-white border-slate-200/90 shadow-card hover:shadow-card-hover'
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-navy flex items-center justify-center border border-slate-100">
                    <MapPin className="w-5 h-5 text-saffron-600" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${loc.badgeColor}`}>
                    {loc.badge}
                  </span>
                </div>

                {/* City Name */}
                <h3 className="text-xl font-bold text-navy mb-2">
                  {loc.city}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  {loc.desc}
                </p>

                {/* Localities pill tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {loc.areas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to={loc.link}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-navy hover:text-saffron-600 group transition-colors"
                >
                  <span>Explore {loc.city} Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Kanpur Localities Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-navy flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Active Local Kanpur Neighbourhoods Covered:
              </h4>
              <p className="text-xs text-slate-500">
                Civil Lines • Swaroop Nagar • Kakadeo • Kidwai Nagar • Kalyanpur • Barra (1-8) • Govind Nagar • Shyam Nagar • Panki • Ashok Nagar • Cantt & Armapur
              </p>
            </div>
            <Link
              to="/packers-movers-kanpur"
              className="flex-shrink-0 text-xs font-bold text-saffron-600 hover:text-saffron-700 underline underline-offset-4"
            >
              View Kanpur Service Areas →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
