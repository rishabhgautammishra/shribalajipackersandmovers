import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { SERVICES_LIST } from '../data/servicesData';
import { 
  Home, 
  Building2, 
  Truck, 
  Compass, 
  Car, 
  PackageCheck, 
  Boxes, 
  Warehouse, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import QuoteCtaBanner from '../components/QuoteCtaBanner';
import HowItWorks from '../components/HowItWorks';

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

export default function ServicesOverviewPage() {
  return (
    <>
      <SEOHead
        title="Relocation & Moving Services in Kanpur | Shri Balaji Packers & Movers"
        description="Explore our complete range of moving services in Kanpur: Car carrier, vehicle transport, home shifting, office relocation, and packing solutions."
        canonicalPath="/services"
      />

      <main className="bg-slate-50/50">
        
        {/* Page Header */}
        <section className="bg-white border-b border-slate-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4 text-saffron-600" />
                Comprehensive Moving Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Our Relocation & Shifting Services
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Professional, damage-free moving services designed to suit every requirement—from local single-item shifting to full household and corporate transfers.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services Listing */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES_LIST.map((service, index) => {
                const IconComponent = ICON_MAP[service.icon] || Truck;
                return (
                  <div
                    key={service.slug}
                    className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between text-left"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 text-navy flex items-center justify-center border border-slate-100 shadow-sm">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        {service.badge && (
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-200">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h2 className="text-2xl font-bold text-navy mb-3">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                        {service.overview}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2.5 mb-8">
                        {service.highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-navy hover:text-saffron-600 transition-colors"
                      >
                        <span>Explore {service.title} Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to="/get-a-quote"
                        className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-saffron-50 hover:bg-saffron-100 text-saffron-800 text-xs font-bold border border-saffron-200 transition-colors"
                      >
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* CTA Banner */}
        <QuoteCtaBanner />

      </main>
    </>
  );
}
