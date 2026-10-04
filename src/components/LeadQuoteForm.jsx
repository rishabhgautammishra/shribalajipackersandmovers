import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  MapPin, 
  Calendar, 
  Layers, 
  MessageSquare, 
  ShieldCheck, 
  Loader2 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppQuoteUrl } from '../utils/whatsapp';

export default function LeadQuoteForm({ 
  initialService = '', 
  initialPickup = '', 
  initialDrop = '', 
  initialDate = '',
  compact = false 
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: initialPickup,
    drop: initialDrop,
    moveDate: initialDate,
    serviceRequired: initialService || 'Home Shifting',
    homeSize: '2 BHK Household',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(true);

  useEffect(() => {
    if (initialService) setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    if (initialPickup) setFormData((prev) => ({ ...prev, pickup: initialPickup }));
    if (initialDrop) setFormData((prev) => ({ ...prev, drop: initialDrop }));
    if (initialDate) setFormData((prev) => ({ ...prev, moveDate: initialDate }));
  }, [initialService, initialPickup, initialDrop, initialDate]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, '')) && formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.pickup.trim()) errs.pickup = 'Please enter pickup location';
    if (!formData.drop.trim()) errs.drop = 'Please enter destination / drop location';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // If user chose WhatsApp or default, trigger WhatsApp link
      if (sendViaWhatsApp) {
        const url = createWhatsAppQuoteUrl({
          name: formData.name,
          phone: formData.phone,
          pickup: formData.pickup,
          drop: formData.drop,
          moveDate: formData.moveDate || 'To be decided',
          serviceType: `${formData.serviceRequired} (${formData.homeSize})`,
          message: formData.message
        });
        window.open(url, '_blank');
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-card text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-navy">Quote Request Received!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our Kanpur moving coordinator will review your move details and contact you shortly at <strong>{formData.phone}</strong>.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-700 max-w-sm mx-auto">
          <p><strong>Route:</strong> {formData.pickup} → {formData.drop}</p>
          <p><strong>Service:</strong> {formData.serviceRequired} ({formData.homeSize})</p>
          {formData.moveDate && <p><strong>Target Date:</strong> {formData.moveDate}</p>}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                pickup: '',
                drop: '',
                moveDate: '',
                serviceRequired: 'Home Shifting',
                homeSize: '2 BHK Household',
                message: ''
              });
            }}
            className="text-xs font-bold text-navy hover:underline"
          >
            Submit Another Request
          </button>
          <span className="hidden sm:inline text-slate-300">•</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-xs font-bold text-saffron-600 hover:underline"
          >
            Need Urgent Moving Assistance? Call Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8 lg:p-10'} border border-slate-200 shadow-card relative`}>
      
      {/* Header */}
      <div className="mb-6 space-y-1 text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-600 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Zero Spam • Transparent Estimates
        </div>
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-navy`}>
          Request Free Moving Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal">
          Fill in your details below for an accurate, no-obligation quotation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all ${
                errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all ${
                errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Pickup & Drop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Kakadeo, Kanpur"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                className={`w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all ${
                  errors.pickup ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.pickup && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.pickup}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Drop Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-saffron-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Civil Lines, Kanpur / Noida"
                value={formData.drop}
                onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                className={`w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all ${
                  errors.drop ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.drop && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.drop}
              </p>
            )}
          </div>
        </div>

        {/* Move Date & Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Moving Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                value={formData.moveDate}
                onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Service Required
            </label>
            <select
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all text-slate-700 font-medium"
            >
              {SERVICES_LIST.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Move Inventory Size */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Approximate Load / Size
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {['1 BHK / Studio', '2 BHK Home', '3 BHK Home', '4+ BHK / Villa', 'Office / Goods', 'Vehicle Only'].map((size) => (
              <button
                type="button"
                key={size}
                onClick={() => setFormData({ ...formData, homeSize: size })}
                className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                  formData.homeSize === size
                    ? 'border-saffron-600 bg-saffron-50 text-saffron-800'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Optional Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Additional Notes / Fragile Items (Optional)
          </label>
          <textarea
            rows="2"
            placeholder="e.g. heavy double bed, glass dining table, piano, lift available on 3rd floor..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
          />
        </div>

        {/* WhatsApp Forwarding Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="whatsapp-check"
            checked={sendViaWhatsApp}
            onChange={(e) => setSendViaWhatsApp(e.target.checked)}
            className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
          />
          <label htmlFor="whatsapp-check" className="text-xs text-slate-600 font-medium">
            Also open instant WhatsApp chat with moving manager
          </label>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Calculating Quote...</span>
            </>
          ) : (
            <>
              <span>Request Free Quote</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

      </form>
    </div>
  );
}
