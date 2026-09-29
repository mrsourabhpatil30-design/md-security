import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import { COMPANY_INFO, SECURITY_SERVICES } from '../data/companyData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: preselectedService || 'Security Guard Services',
    location: '',
    personnelCount: '1-5 Personnel',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update when prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappInquiryUrl = `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
    `Hello M.D. Security, I would like to enquire about ${formData.serviceRequired || 'security services'} for ${formData.companyName || 'our premises'}.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
            Prompt Manpower Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Looking for Reliable Security Manpower?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tell us about your security requirements and our team will discuss a suitable, vetted manpower
            solution for your premises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Company Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Direct Contact Channels
              </h3>

              {/* Phones */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">
                    Call Operational Team
                  </div>
                  <div className="mt-1 space-y-0.5">
                    <a
                      href={`tel:+91${COMPANY_INFO.primaryPhone}`}
                      className="block text-sm font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      +91 {COMPANY_INFO.primaryPhone}
                    </a>
                    <a
                      href={`tel:+91${COMPANY_INFO.secondaryPhone}`}
                      className="block text-sm font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      +91 {COMPANY_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 rounded-xl shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">
                    Instant WhatsApp Support
                  </div>
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-emerald-400 hover:underline mt-1"
                  >
                    Chat directly with operations →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">
                    Email Inquiries
                  </div>
                  <div className="mt-1 space-y-0.5">
                    <a
                      href={`mailto:${COMPANY_INFO.primaryEmail}`}
                      className="block text-xs font-medium text-slate-200 hover:text-white truncate"
                    >
                      {COMPANY_INFO.primaryEmail}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.corporateEmail}`}
                      className="block text-xs font-medium text-slate-200 hover:text-white truncate"
                    >
                      {COMPANY_INFO.corporateEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl shrink-0 mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">
                    Official Website
                  </div>
                  <span className="text-xs font-medium text-slate-200">
                    {COMPANY_INFO.website}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                <div className="p-2.5 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">
                    Office Location
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {COMPANY_INFO.address.fullFormatted}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-orange-600/20 border border-orange-500 flex items-center justify-center text-orange-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your enquiry for <strong>{formData.serviceRequired}</strong> has been received. Our
                    operations manager will review your requirement and connect with you shortly at{' '}
                    <span className="text-white font-semibold">{formData.phone}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          phone: '',
                          email: '',
                          serviceRequired: 'Security Guard Services',
                          location: '',
                          personnelCount: '1-5 Personnel',
                          message: ''
                        });
                      }}
                      className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Request a Proposal & Manpower Quote
                  </h3>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patil"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Establishment Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Industrial Ltd."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. office@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      >
                        {SECURITY_SERVICES.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Housekeeping Services">Housekeeping Services</option>
                        <option value="Combined Security & Housekeeping">Combined Security & Housekeeping</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Number of Personnel Required
                      </label>
                      <select
                        name="personnelCount"
                        value={formData.personnelCount}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      >
                        <option value="1-5 Personnel">1 - 5 Personnel</option>
                        <option value="6-15 Personnel">6 - 15 Personnel</option>
                        <option value="16-30 Personnel">16 - 30 Personnel</option>
                        <option value="30+ Turnkey Staffing">30+ Turnkey Workforce</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Premises Location / Area
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Khalapur / Khopoli / MIDC Patalganga / Panvel"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Special Shift Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your security post timings, shifts, armed requirements, or gate pass duties..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-950/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Strict confidentiality maintained. We do not share your contact details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
