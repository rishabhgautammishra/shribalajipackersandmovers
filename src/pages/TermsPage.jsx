import React from 'react';
import SEOHead from '../components/SEOHead';
import { FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Shiv Ganga Packers & Movers"
        description="Terms and conditions for relocation, household shifting and transport services by Shiv Ganga Packers & Movers Kanpur."
        canonicalPath="/terms-and-conditions"
      />

      <main className="bg-slate-50/50 py-16 md:py-20 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4 text-saffron-600" />
              Terms of Service
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-400">Last updated: 2026</p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                By booking relocation services with <strong>{BUSINESS_INFO.name}</strong>, you agree to the following operational terms and conditions:
              </p>

              <h2 className="text-base font-bold text-navy pt-2">1. Quotations & Billing</h2>
              <p>
                Initial online or verbal estimates are based on the inventory details provided by the customer. In the event of additional unlisted items, excessive stairs without elevator access, or unforeseen parking delays, adjusted rates may apply transparently upon inspection.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">2. Prohibited Goods</h2>
              <p>
                Customers must not pack hazardous substances, inflammable liquids, firearms, or illegal contraband. Cash, jewelry, and irreplaceable personal identity documents must be carried personally by the customer.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">3. Transit Insurance</h2>
              <p>
                Optional transit insurance coverage is available for long-distance domestic moves against transit accidents as per carrier policy norms.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">4. Booking & Cancellation</h2>
              <p>
                Advance notice for rescheduling or cancellation helps us reallocate vehicles and crews efficiently. Please notify our coordinator at least 24 hours in advance.
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
