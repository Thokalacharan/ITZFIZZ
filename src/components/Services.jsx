import React from 'react';
import { Code2, Palette, Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      badge: 'Core Engine',
      icon: Code2,
      desc: 'Robust, responsive, and performance-tuned web applications engineered with React, Vite, and clean modular code standards.',
      tags: ['React & Vite', 'Semantic HTML5', 'Tailwind CSS', 'API Integration']
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      badge: 'Aesthetic Craft',
      icon: Palette,
      desc: 'Modern digital agency aesthetics, intentional typography, dark mode interfaces, and frictionless user flows designed to convert.',
      tags: ['Design Systems', 'Dark Aesthetics', 'Visual Hierarchy', 'Wireframing']
    },
    {
      id: 'digital-exp',
      title: 'Digital Experiences',
      badge: 'Motion Magic',
      icon: Sparkles,
      desc: 'Cinematic scroll-driven animations, interactive storytelling, and micro-interactions powered by GSAP and ScrollTrigger.',
      tags: ['GSAP & ScrollTrigger', 'Kinetic Typography', 'Scrub Sync', 'Interactive Canvas']
    }
  ];

  return (
    <section id="services" className="relative py-28 bg-dark-950 border-t border-white/10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-lime mb-4">
            <span>02 / SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Crafted for Impact
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-4 font-light">
            Specialized solutions bridging visual elegance and frontend engineering precision.
          </p>
        </div>

        {/* Three Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-brand-lime/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lime-glow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-black group-hover:scale-105 transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                    {service.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-lime transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>
              </div>

              {/* Tag Pills & Link */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-6">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-300 group-hover:text-brand-lime transition-colors"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
