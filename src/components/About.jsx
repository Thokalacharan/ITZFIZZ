import React from 'react';
import { Sparkles, Layers, Cpu, Compass } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Intentional Motion',
      desc: 'Micro-animations and scroll-driven kinematics that captivate without friction.'
    },
    {
      icon: Layers,
      title: 'Design Precision',
      desc: 'Pixel-perfect digital craft designed around your brand’s boldest ambitions.'
    },
    {
      icon: Cpu,
      title: 'Velocity & Power',
      desc: 'Blazing fast load times, optimized rendering cycles, and zero bloat.'
    },
    {
      icon: Compass,
      title: 'Scalable Architecture',
      desc: 'Built with modern React and clean component hierarchies ready to expand.'
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-dark-900 border-t border-white/10 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-lime/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-electric/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-lime">
              <span>01 / ABOUT ITZFIZZ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              We Turn Ideas Into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-brand-lime">
                Digital Experiences
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              At Itzfizz Digital, we specialize in high-impact web design, creative development, 
              and fluid digital journeys. We merge cutting-edge frontend engineering with immersive 
              visual storytelling—crafting responsive, accessible, and unforgettable web applications 
              that propel businesses forward.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              From scroll-driven interactive hero showcases to enterprise design systems, every line of 
              code is engineered with precision, high frame rates, and meaningful user interactions.
            </p>

            {/* Credo quote */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border-l-2 border-brand-lime backdrop-blur-sm mt-6">
              <p className="text-sm italic text-gray-300">
                “Motion isn't just decoration. It is the language through which users feel the speed, 
                confidence, and personality of your product.”
              </p>
              <span className="block mt-2 text-xs font-mono text-brand-lime">— The Itzfizz Design Philosophy</span>
            </div>
          </div>

          {/* Right Column: Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime mb-4 group-hover:bg-brand-lime group-hover:text-black transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-brand-lime transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
