import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { LOCATIONS_DATA } from '../data/locationsData';
import { 
  MapPin, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Info,
  Clock,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';
import LeadQuoteForm from '../components/LeadQuoteForm';
import ServicesGrid from '../components/ServicesGrid';

export default function LocationDetailPage() {
  const { citySlug } = useParams();
  
  // Resolve city key from URL (e.g. /packers-movers-kanpur -> kanpur)
  let locationKey = 'kanpur';
  if (citySlug) {
    locationKey = citySlug.replace('packers-movers-', '').toLowerCase();
  }

  const locationData = LOCATIONS_DATA[locationKey] || LOCATIONS_DATA['kanpur'];

  return (
    <>
      <SEOHead
        title={locationData.title}
        description={locationData.metaDescription}
        canonicalPath={`/${locationData.slug}`}
      />

      <main className="bg-slate-50/50">
        
        {/* Hero Section for Location */}
        <section className="bg-white border-b border-slate-100 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider border border-saffron-200">
                <MapPin className="w-4 h-4 text-saffron-600" />
                <span>{locationData.heroBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                {locationData.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {locationData.subheadline}
              </p>

              {/* Direct CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-saffron-400" />
                  <span>Call {locationData.city} Moving Helpline</span>
                </a>

                <a
                  href={getDirectWhatsAppUrl(`Hi, I need packers and movers service for ${locationData.city}. Please share estimated quote.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Clear Placeholder Notice for non-primary locations to uphold strict truthfulness */}
        {locationData.isPlaceholder && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3 text-left">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <div>
                <strong>Location Architecture Notice:</strong> {locationData.placeholderNotice} All intercity shifting to/from this hub is fully operational via our {BUSINESS_INFO.address.city} headquarters.
              </div>
            </div>
          </div>
        )}

        {/* Localities & Main Routes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Localities Coverage & Routes */}
              <div className="lg:col-span-7 space-y-10 text-left">
                
                {/* Localities Grid */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-navy">
                      Localities Covered in {locationData.city}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Our moving crews operate across all sectors and residential neighborhoods.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {locationData.localities.map((loc, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-saffron-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-bold text-navy">{loc.name}</h3>
                          <p className="text-xs text-slate-500">{loc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Transit Routes */}
                {locationData.routes && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-navy">
                        Regular Intercity Routes from {locationData.city}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Scheduled closed container movements and express transit lanes.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {locationData.routes.map((route, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <span className="text-sm font-bold text-navy">
                              {locationData.city} → {route.to}
                            </span>
                            <span className="text-xs text-slate-500 block">
                              Approx {route.distance} • {route.type}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-saffron-700 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 self-start sm:self-auto">
                            Est. {route.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Quote Form */}
              <div className="lg:col-span-5 sticky top-24">
                <LeadQuoteForm
                  initialPickup={`${locationData.city}`}
                  compact={true}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Services in this Location */}
        <ServicesGrid showHeading={true} />

      </main>
    </>
  );
}
