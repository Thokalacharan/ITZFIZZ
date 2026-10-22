import React from 'react';
import { Award, Zap, ShieldCheck } from 'lucide-react';

export const statsData = [
  {
    id: 'stat-satisfaction',
    value: '95%',
    label: 'Client Satisfaction',
    desc: 'Exceeding client expectations consistently',
    icon: Award,
    color: 'from-lime-400 to-emerald-400'
  },
  {
    id: 'stat-delivery',
    value: '80%',
    label: 'Faster Delivery',
    desc: 'Optimized agile production pipelines',
    icon: Zap,
    color: 'from-brand-lime to-teal-300'
  },
  {
    id: 'stat-commitment',
    value: '100%',
    label: 'Creative Commitment',
    desc: 'Uncompromising dedication to craft',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-brand-lime'
  }
];

export default function Stats({ className = '', variant = 'cards' }) {
  if (variant === 'compact') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 ${className}`}>
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="stat-item glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-brand-lime/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white group-hover:text-brand-lime transition-colors">
                {stat.value}
              </span>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime group-hover:scale-110 transition-transform">
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-200 tracking-wide">
              {stat.label}
            </p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-1">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="stat-card glass-panel rounded-2xl p-6 text-left border border-white/10 hover:border-brand-lime/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-glow-sm group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-brand-lime transition-colors">
              {stat.value}
            </span>
            <div className="w-10 h-10 rounded-xl bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all">
              <stat.icon className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-base font-semibold text-gray-100 tracking-wide">
            {stat.label}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {stat.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
