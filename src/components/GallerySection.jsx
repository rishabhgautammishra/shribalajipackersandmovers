import React, { useState } from 'react';
import { Camera, ZoomIn, ShieldCheck } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Household Packing & Bubble Wrapping",
    category: "Household",
    caption: "Multi-layered protective wrap for fragile glassware and electronics in Kanpur",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    title: "Moving Truck & Transit Logistics",
    category: "Transport",
    caption: "Weatherproof closed-body container trucks ready for local & highway transit",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1"
  },
  {
    id: 3,
    title: "Furniture Protection & Corner Guards",
    category: "Safety",
    caption: "Heavy-duty blankets and edge protectors for sofas, wardrobes, and wooden beds",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1"
  },
  {
    id: 4,
    title: "Heavy-Duty Cartons & Stacking",
    category: "Packaging",
    caption: "Industrial 5-ply cartons labeled by room for orderly destination unloading",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1"
  },
  {
    id: 5,
    title: "Corporate & Office Relocation",
    category: "Commercial",
    caption: "Systematic server, desktop, and office furniture relocation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-2"
  }
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider">
            On-Ground Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Careful Handling in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Take a look at our day-to-day packing quality, protective cushioning, and transport fleet.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-2xl overflow-hidden shadow-card border border-slate-200/80 bg-slate-100 cursor-pointer aspect-[4/3] md:aspect-auto ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full min-h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-navy text-[11px] font-bold shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 font-normal">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/70 text-white flex items-center justify-center hover:bg-navy transition-colors font-bold text-sm"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-saffron-600 uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500">{BUSINESS_INFO.shortName} standard</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">{activeImage.title}</h3>
              <p className="text-sm text-slate-600">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
