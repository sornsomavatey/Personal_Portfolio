import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setValidationError('');
  };

  // Copy details to Clipboard
  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;

    if (!name || !email || !subject || !message) {
      setValidationError('Please complete all form fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Mock API Submission Delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className="px-6 py-16 lg:px-8 text-left relative overflow-hidden">
      <div className="glow-spot-emerald -top-20 -left-20 animate-pulse" />
      <div className="glow-spot-blue bottom-10 right-10" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Get In Touch
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white md:text-6xl">
            Let's Connect
          </h1>
          <p className="mt-4 text-base text-slate-400 max-w-2xl leading-relaxed">
            Have an open vacancy, internship opportunity, or a project in mind? Reach out via the contact form or connect with me directly through my social channels.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 items-start">
          {/* Contact Details (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold font-display text-white">Contact Info</h2>
            <p className="text-xs text-slate-450 leading-relaxed">
              Based in Phnom Penh, Cambodia. Available for hybrid/remote web development or cloud integration roles.
            </p>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="glass-panel border-slate-850 p-5 rounded-2xl flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-panel border-slate-850 p-5 rounded-2xl flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Phone number</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-emerald-450 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
                  title="Copy phone to clipboard"
                >
                  {copiedType === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel border-slate-850 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Office Location</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Socials Connection block */}
            <div className="pt-6 border-t border-slate-800/80">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect on Socials</h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-950 border border-slate-800 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 rounded-xl text-xs font-semibold transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg> LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-950 border border-slate-800 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 rounded-xl text-xs font-semibold transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg> GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (3 columns) */}
          <div className="lg:col-span-3">
            <div className="glass-panel border-slate-850 p-8 rounded-3xl relative">
              <h2 className="text-xl font-bold font-display text-white mb-6">Send a Message</h2>

              {submitSuccess ? (
                <div className="py-10 text-center space-y-4 animate-fade-in">
                  <div className="mx-auto p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full w-fit">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Thank you, Message Sent!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    I have received your message and will review it shortly. You will receive a response at the email address you specified.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 rounded-full bg-slate-900 border border-slate-800 px-6 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {validationError && (
                    <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-semibold text-red-400">
                      {validationError}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-slate-950 border border-slate-850 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-slate-950 border border-slate-850 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="bg-slate-950 border border-slate-850 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all"
                      placeholder="Opportunity / Collaboration..."
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Message Body</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-slate-950 border border-slate-850 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none resize-none transition-all"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-slate-950 hover:bg-emerald-450 disabled:bg-emerald-800 disabled:text-slate-400 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>Sending message...</>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
