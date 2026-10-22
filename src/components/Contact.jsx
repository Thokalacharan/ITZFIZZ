import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 relative overflow-hidden">
          
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-lime">
                <span>03 / INITIATE CONTACT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to accelerate your <br />
                <span className="text-brand-lime">digital presence?</span>
              </h2>
              <p className="text-base text-gray-300 max-w-xl font-light">
                Whether you have an upcoming project, need high-performance frontend development, 
                or want to talk creative animations—let's build something unforgettable.
              </p>
            </div>

            {/* Right Form / Direct Email */}
            <div className="lg:col-span-5 bg-dark-950/80 p-6 sm:p-8 rounded-2xl border border-white/10">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
                  <p className="text-xs text-gray-400">Thank you! The Itzfizz team will connect shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-gray-400 mb-2">
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-lime text-black hover:bg-white hover:shadow-lime-glow transition-all duration-200"
                  >
                    <span>Connect With Itzfizz</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-gray-500 font-mono">
                    Direct channel: <a href="mailto:hello@itzfizz.digital" className="text-gray-400 hover:text-brand-lime underline">hello@itzfizz.digital</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
