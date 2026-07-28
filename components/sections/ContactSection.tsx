'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, GraduationCap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { MotionCard } from '@/components/animations/MotionCard';
import { MagneticButton } from '@/components/animations/MagneticButton';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Basic Client-side check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('An unexpected network error occurred.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#05070f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient">Vrushabh B</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Have a project idea, opportunity, technical question, or feedback? Send a message and I’ll respond promptly.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <MotionCard>
              <div className="p-6 sm:p-8 space-y-6">
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Direct Contact Information
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Feel free to reach out directly via email or connect with me on LinkedIn and GitHub.
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href={`mailto:${portfolioData.personal.socials.email}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 block">Email Address</span>
                      <span className="text-xs sm:text-sm font-medium">{portfolioData.personal.socials.email}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                    <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-violet-400 block">College</span>
                      <span className="text-xs sm:text-sm font-medium">{portfolioData.personal.college}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 block">Location</span>
                      <span className="text-xs sm:text-sm font-medium">{portfolioData.personal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <MagneticButton className="w-full">
                    <a
                      href={portfolioData.personal.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all block text-center"
                    >
                      <GithubIcon className="w-4 h-4 inline" />
                      <span>GitHub</span>
                    </a>
                  </MagneticButton>
                  <MagneticButton className="w-full">
                    <a
                      href={portfolioData.personal.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all block text-center"
                    >
                      <LinkedinIcon className="w-4 h-4 inline" />
                      <span>LinkedIn</span>
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </MotionCard>
          </div>

          {/* Validated Contact Form */}
          <div className="lg:col-span-7">
            <MotionCard glowColor="violet">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h4>

                {/* Hidden Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all focus:bg-white/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / General Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all focus:bg-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 mb-2">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-all focus:bg-white/10 resize-none"
                  />
                </div>

                {/* Form Feedback Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage || 'Failed to submit form.'}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
