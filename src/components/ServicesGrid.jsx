import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Truck, 
  Compass, 
  Car, 
  PackageCheck, 
  Boxes, 
  Warehouse, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';

const ICON_MAP = {
  Home,
  Building2,
  Truck,
  Compass,
  Car,
  PackageCheck,
  Boxes,
  Warehouse
};

export default function ServicesGrid({ limit, showHeading = true }) {
  const displayServices = limit ? SERVICES_LIST.slice(0, limit) : SERVICES_LIST;

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider">
              Comprehensive Relocation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Everything You Need for a Smooth Move
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From careful packing to safe transportation, we handle the heavy lifting.
            </p>
          </div>
        )}

        {/* 8 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Truck;
            return (
              <div
                key={service.slug}
                className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-navy group-hover:bg-navy group-hover:text-white flex items-center justify-center transition-colors duration-200 border border-slate-100 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-saffron-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow Button Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-saffron-600 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/get-a-quote"
                    className="text-[11px] font-semibold text-slate-400 hover:text-slate-700"
                  >
                    Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA if on homepage or limited */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-navy text-navy font-bold text-sm shadow-sm transition-all"
            >
              Explore All 8 Moving Services
              <ArrowRight className="w-4 h-4 text-saffron-600" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
