import React from 'react';
import SEOHead from '../components/SEOHead';
import { ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Shiv Ganga Packers & Movers"
        description="Privacy policy for Shiv Ganga Packers & Movers Kanpur. Details on how customer contact information and move details are handled securely."
        canonicalPath="/privacy-policy"
      />

      <main className="bg-slate-50/50 py-16 md:py-20 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-50 text-saffron-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-saffron-600" />
              Privacy Policy
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400">Last updated: 2026</p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                At <strong>{BUSINESS_INFO.name}</strong>, we respect your privacy and are committed to protecting any personal information you share with us.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">1. Information We Collect</h2>
              <p>
                When you request a quotation or contact us, we collect basic contact information including your name, phone number, email address, pickup and destination addresses, and preferred moving dates.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">2. How We Use Your Information</h2>
              <p>
                Your information is used strictly to calculate and communicate relocation quotes, coordinate moving crews and transportation logistics, and provide customer support related to your service. We do not sell or rent your information to third-party telemarketers.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">3. Data Security</h2>
              <p>
                We implement appropriate security measures to safeguard your personal details and moving inventory information against unauthorized access.
              </p>

              <h2 className="text-base font-bold text-navy pt-2">4. Contacting Us</h2>
              <p>
                If you have questions regarding this privacy policy, you may contact us at {BUSINESS_INFO.phone} or via email at {BUSINESS_INFO.email}.
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
