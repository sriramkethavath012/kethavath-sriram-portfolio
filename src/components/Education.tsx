import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#070a12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400/60" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            My formal engineering and pre-university academic journey focused on computer science, mathematics, and physical sciences.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] ml-2 sm:ml-6 space-y-12">
          {educationData.map((item, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={item.id} className="relative group">
                {/* Timeline node/dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isFirst
                      ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50'
                      : 'bg-[#080d19] border-slate-600 group-hover:border-cyan-400'
                  }`}
                >
                  {isFirst && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                        {item.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                        {item.institution}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-white/[0.05] self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-slate-200">
                    {item.degree} — <span className="text-cyan-300">{item.field}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <ul className="space-y-2">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
