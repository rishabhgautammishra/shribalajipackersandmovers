import React from 'react';
import { Home, Building2, Car, PackageCheck, ShieldCheck, Clock4 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TRUST_ITEMS = [
  {
    title: "Home Shifting",
    desc: "Complete house moving",
    icon: Home,
    link: "/services/home-shifting"
  },
  {
    title: "Office Relocation",
    desc: "Zero-downtime moves",
    icon: Building2,
    link: "/services/office-shifting"
  },
  {
    title: "Vehicle Transport",
    desc: "Enclosed carriers",
    icon: Car,
    link: "/services/vehicle-transportation"
  },
  {
    title: "Packing & Unpacking",
    desc: "5-ply carton safety",
    icon: PackageCheck,
    link: "/services/packing-unpacking"
  }
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-slate-100 py-6 md:py-8 shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="group flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-navy group-hover:bg-navy group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-navy group-hover:text-saffron-600 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-500 font-normal">
                    {item.desc}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
