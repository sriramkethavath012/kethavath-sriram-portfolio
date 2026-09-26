import React from 'react';
import { Trophy, Calendar, MapPin, Edit3 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 relative bg-[#070a12]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <span className="w-6 h-[1px] bg-cyan-400/60" />
              <span>Milestones & Participation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Achievements & Highlights
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Academic honors, coding platform engagements, and technical activities. Configured as editable slots ready for verified accomplishments.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editable placeholder slots</span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b13] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {item.title}
                </h3>

                <div className="text-xs text-cyan-300/90 font-mono mb-3">
                  {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Status</span>
                <span className="text-amber-400/80">Pending Real Entry</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
