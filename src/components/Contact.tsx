import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { GitHubLogo, LinkedInLogo, InstagramLogo } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Direct client fallback to mailto so messages are genuinely sent through the user's email client
      const subjectEncoded = encodeURIComponent(formData.subject.trim() || 'Portfolio Inquiry');
      const bodyEncoded = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400/60" />
            <span>{t.contact.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
            I'm always interested in learning, building, and connecting with people in technology. Reach out directly or send a message below.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b13] border border-white/[0.08] shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you have an internship opportunity, a project discussion, or simply wish to connect, feel free to drop a message or reach out via LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item with 1-click copy */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-slate-500 uppercase">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-300 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">
                      Current Location
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] hover:border-blue-500/40 flex items-center justify-between gap-3 group transition-all"
                  aria-label="Connect with Kethavath Sriram on LinkedIn"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#0a66c2] group-hover:text-[#388bfd] shrink-0 transition-colors">
                      <LinkedInLogo className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">
                        {socialLinks.linkedin.name}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors">
                        {socialLinks.linkedin.username}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">→</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition-all"
                  aria-label="Visit Kethavath Sriram's GitHub profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 group-hover:text-cyan-300 shrink-0 transition-colors">
                      <GitHubLogo className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">
                        {socialLinks.github.name}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-300 font-mono transition-colors">
                        {socialLinks.github.username}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">→</span>
                </a>

                {/* Instagram Item */}
                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] hover:border-pink-500/40 flex items-center justify-between gap-3 group transition-all"
                  aria-label="Follow Kethavath Sriram on Instagram"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 group-hover:text-pink-300 shrink-0 transition-colors">
                      <InstagramLogo className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">
                        {socialLinks.instagram.name}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-pink-300 font-mono transition-colors">
                        {socialLinks.instagram.username}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b13] border border-white/[0.08] shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-wide mb-1">
                {t.contact.sendMessage}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {t.contact.formSubtitle}
              </p>

              {/* Status Alert Banners */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Opening Email Client...</p>
                    <p className="text-cyan-300/90 mt-0.5">
                      Your inquiry has been formatted. If your email application didn't launch automatically, please reach out directly at{' '}
                      <a href={`mailto:${personalInfo.email}`} className="underline font-mono text-white font-semibold">
                        {personalInfo.email}
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Could not send message</p>
                    <p className="text-rose-300 mt-0.5">
                      Please try again or email me directly at {personalInfo.email}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      {t.contact.nameLabel} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.name ? 'border-rose-500/60' : 'border-white/[0.08]'
                      }`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      {t.contact.emailLabel} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.email ? 'border-rose-500/60' : 'border-white/[0.08]'
                      }`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    {t.contact.subjectLabel} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.subjectPlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                      errors.subject ? 'border-rose-500/60' : 'border-white/[0.08]'
                    }`}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    {t.contact.messageLabel} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-y ${
                      errors.message ? 'border-rose-500/60' : 'border-white/[0.08]'
                    }`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 disabled:opacity-60 rounded-xl shadow-md shadow-cyan-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.sendButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
