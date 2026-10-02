import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Code2,
  BrainCircuit,
  Rocket,
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { digitalJourneyStages, DigitalJourneyStage } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Student: GraduationCap,
  Learner: BookOpen,
  Builder: Code2,
  'AI Explorer': BrainCircuit,
  'Software Engineer': Rocket,
};

export const DigitalJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState<DigitalJourneyStage>(digitalJourneyStages[0]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Current':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40';
      case 'Active Focus':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/40';
      case 'Next Step':
        return 'bg-purple-500/20 text-purple-300 border-purple-400/40';
      case 'Aspirational':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40';
      default:
        return 'bg-slate-800 text-slate-300 border-white/[0.08]';
    }
  };

  return (
    <section id="digital-journey" className="py-20 lg:py-24 relative bg-[#070b14]/70 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Futuristic Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Digital Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A future-oriented vision outlining progression from foundational student coursework to production engineering. Click each milestone to inspect aspirations.
          </p>
        </div>

        {/* Horizontal Journey Nodes (Connected Flow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
          {digitalJourneyStages.map((stage, idx) => {
            const Icon = iconMap[stage.role] || Code2;
            const isSelected = activeStage.id === stage.id;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage)}
                className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0e172e] to-[#0a1122] border-cyan-400/60 shadow-xl shadow-cyan-950/50 scale-102 ring-1 ring-cyan-500/40'
                    : 'bg-[#090d18] border-white/[0.06] hover:border-cyan-500/30 hover:bg-[#0c1222]'
                }`}
                aria-label={`View stage ${stage.step}: ${stage.role}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      STAGE {stage.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(
                        stage.status
                      )}`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`p-2 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 group-hover:text-cyan-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {stage.role}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {stage.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-500'}>
                    {isSelected ? 'Active Selection' : 'Inspect Stage'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Insight Banner for Active Selection */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0c1527] via-[#09101f] to-[#0a1224] border border-cyan-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                STAGE {activeStage.step} PROFILE
              </span>
              <span className="text-xs text-slate-500 font-mono">·</span>
              <span className="text-xs font-mono text-slate-300">
                {activeStage.focus}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>{activeStage.role}</span>
              <span
                className={`text-xs font-mono font-normal px-2.5 py-0.5 rounded-full border ${getStatusBadge(
                  activeStage.status
                )}`}
              >
                {activeStage.status}
              </span>
            </h4>

            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-2 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Structured Career Progression</span>
          </div>
        </div>
      </div>
    </section>
  );
};
