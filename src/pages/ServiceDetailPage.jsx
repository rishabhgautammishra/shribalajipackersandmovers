import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
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
  CheckCircle2,
  Phone,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';
import LeadQuoteForm from '../components/LeadQuoteForm';
import FaqAccordion from '../components/FaqAccordion';

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

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = ICON_MAP[service.icon] || Truck;
  const otherServices = SERVICES_LIST.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <SEOHead
        title={`${service.title} in Kanpur | Shri Balaji Packers & Movers`}
        description={`${service.shortDescription} Door-to-door ${service.title.toLowerCase()} services in Kanpur by Shri Balaji Packers & Movers.`}
        canonicalPath={`/services/${service.slug}`}
      />

      <main className="bg-slate-50/50">
        
        {/* Breadcrumb & Hero */}
        <section className="bg-white border-b border-slate-100 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
              <Link to="/" className="hover:text-navy">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <Link to="/services" className="hover:text-navy">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-navy font-bold">{service.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider border border-saffron-200">
                  <IconComponent className="w-4 h-4 text-saffron-600" />
                  <span>{service.badge || "Professional Moving"}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                  {service.title} Services in Kanpur
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {service.overview}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-saffron-400" />
                    <span>Call Helpline: {BUSINESS_INFO.phone}</span>
                  </a>

                  <a
                    href={getDirectWhatsAppUrl(`Hi, I would like to inquire about ${service.title} services in Kanpur.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-slate-100 aspect-[4/3] relative">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 text-navy text-xs font-semibold flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Careful Handling & Damage-Free Guarantee
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Content Breakdown: Process & Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Highlights & Execution Process */}
              <div className="lg:col-span-7 space-y-12 text-left">
                
                {/* Highlights */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-6">
                  <h2 className="text-2xl font-bold text-navy">
                    Key Highlights & Inclusions
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Moving Process */}
                {service.process && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold text-navy">
                        How We Execute Your {service.title}
                      </h2>
                      <p className="text-sm text-slate-500">
                        Systematic steps designed to ensure maximum protection and smooth transit.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle flex items-start gap-4"
                        >
                          <span className="w-10 h-10 rounded-xl bg-navy text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                            {step.step}
                          </span>
                          <div>
                            <h3 className="text-base font-bold text-navy mb-1">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specific FAQs for this service */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-6">
                    <h2 className="text-xl font-bold text-navy">
                      Questions About {service.title}
                    </h2>
                    <div className="space-y-4">
                      {service.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                          <h3 className="text-sm font-bold text-navy">
                            Q: {faq.q}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Pre-selected Quote Form */}
              <div className="lg:col-span-5 sticky top-24">
                <LeadQuoteForm
                  initialService={service.title}
                  compact={true}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Other Related Services */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-navy">Other Moving Services</h3>
                <p className="text-xs sm:text-sm text-slate-500">Explore additional relocation solutions in Kanpur</p>
              </div>
              <Link to="/services" className="text-xs font-bold text-saffron-600 hover:underline">
                View All Services →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:shadow-card transition-all text-left group"
                >
                  <h4 className="text-base font-bold text-navy group-hover:text-saffron-600 mb-1 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {item.shortDescription}
                  </p>
                  <span className="text-xs font-bold text-navy group-hover:text-saffron-600 flex items-center gap-1">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
