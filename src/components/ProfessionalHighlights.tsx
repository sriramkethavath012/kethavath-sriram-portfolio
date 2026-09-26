import React from 'react';
import { Cpu, BookOpen, Sparkles, Code2 } from 'lucide-react';
import { professionalHighlights } from '../data/portfolioData';

const highlightIcons: Record<string, React.ElementType> = {
  Cpu,
  BookOpen,
  Sparkles,
  Code: Code2,
};

export const ProfessionalHighlights: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-4 h-[1px] bg-cyan-400" />
            <span>Core Pillars</span>
            <span className="w-4 h-[1px] bg-cyan-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineering Focus & Mindset
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Fundamental strengths cultivated through deliberate practice, academic discipline, and curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {professionalHighlights.map((item) => {
            const Icon = highlightIcons[item.iconName] || Cpu;
            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b13] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-cyan-400/70">
                  Engineering Pillar
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
