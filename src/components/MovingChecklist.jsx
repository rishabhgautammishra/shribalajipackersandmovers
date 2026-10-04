import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CHECKLIST_ITEMS = [
  { text: "Professional packing with sturdy 5-ply cartons", sub: "Fragile items, glassware, electronics safely double-wrapped" },
  { text: "Furniture protection & corner cushioning", sub: "Beds, almirahs & dining tables wrapped with scratch-free blankets" },
  { text: "Safe loading by experienced crews", sub: "Ergonomic lifting techniques & secure stacking inside trucks" },
  { text: "Secure transportation in closed containers", sub: "Weatherproof transit ensuring dust and rain protection" },
  { text: "Unloading assistance directly inside your rooms", sub: "Cartons and furniture placed exactly where you want them" },
  { text: "Door-to-door delivery & handover", sub: "Complete end-to-end relocation without third-party handoffs" }
];

export default function MovingChecklist() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-navy rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-floating">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-saffron-400 text-xs font-semibold border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                Streamlined Relocation Standard
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Moving Day, <br />
                <span className="text-saffron-400">Without the Chaos</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Every moving requirement is systematically checked and executed by our dedicated team, ensuring your personal belongings arrive just the way you left them.
              </p>

              <div className="pt-2">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold bg-saffron-600 hover:bg-saffron-500 text-white shadow-lg transition-all duration-200 active:scale-[0.98]"
                >
                  Plan My Move
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Checklist Items */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-3.5 bg-slate-900/80 p-5 sm:p-7 rounded-2xl border border-white/10 backdrop-blur-sm">
                {CHECKLIST_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-semibold text-white leading-snug">
                        {item.text}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
