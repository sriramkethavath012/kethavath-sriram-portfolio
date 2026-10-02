import React, { useState } from 'react';
import {
  Terminal,
  Binary,
  Layout,
  BrainCircuit,
  Layers,
  Cpu,
  GitFork,
  Rocket,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Calendar,
  Filter,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { roadmapStages, RoadmapStage } from '../data/portfolioData';
import { RoadmapModal } from './RoadmapModal';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Binary,
  Layout,
  BrainCircuit,
  Layers,
  Cpu,
  GitFork,
  Rocket,
};

type FilterCategory = 'all' | 'foundation' | 'learning' | 'exploring' | 'future';

export const Roadmap: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [activeModalStage, setActiveModalStage] = useState<RoadmapStage | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const filteredStages = roadmapStages.filter((stage) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'foundation') return stage.status.toLowerCase() === 'foundation';
    if (selectedFilter === 'learning') return stage.status.toLowerCase() === 'learning';
    if (selectedFilter === 'exploring') return stage.status.toLowerCase() === 'exploring';
    if (selectedFilter === 'future') {
      return (
        stage.status.toLowerCase().includes('future') ||
        stage.status.toLowerCase().includes('career')
      );
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'foundation':
        return 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30';
      case 'learning':
        return 'bg-blue-950/60 text-blue-300 border-blue-500/30';
      case 'exploring':
        return 'bg-purple-950/60 text-purple-300 border-purple-500/30';
      case 'future focus':
      case 'future goal':
      case 'career goal':
        return 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30';
      case 'completed':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-900 text-slate-300 border-white/[0.08]';
    }
  };

  return (
    <section id="roadmap" className="py-20 lg:py-28 relative scroll-mt-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Progress Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.roadmap.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.roadmap.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {t.roadmap.subtitle}
            </p>
          </div>

          {/* Qualitative Progress Journey Tracker */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 to-[#0c1322] border border-cyan-500/20 shadow-xl self-start lg:self-auto">
            <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{t.roadmap.myJourney}</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide flex items-center flex-wrap gap-2">
              <span className="text-cyan-300">Learning</span>
              <span className="text-slate-500">→</span>
              <span className="text-blue-300">Building</span>
              <span className="text-slate-500">→</span>
              <span className="text-purple-300">Exploring</span>
              <span className="text-slate-500">→</span>
              <span className="text-indigo-300">Growing</span>
            </div>
          </div>
        </div>

        {/* 5. Highlighted Milestone: Currently Learning */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0c1629] via-[#09101f] to-[#0d1222] border border-cyan-500/40 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-full bg-cyan-500/5 blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {t.roadmap.activeFocus}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {t.roadmap.currentStage}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.roadmap.currentFocusTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {t.roadmap.currentFocusDesc}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-cyan-300 border border-white/[0.08]">
                C & C++
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-blue-300 border border-white/[0.08]">
                Python
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-purple-300 border border-white/[0.08]">
                Data Structures
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-indigo-300 border border-white/[0.08]">
                AI Foundations
              </span>
            </div>
          </div>
        </div>

        {/* 6. Roadmap Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter Milestones:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-white/[0.08] rounded-xl self-start sm:self-auto">
            {(
              [
                { label: 'All', key: 'all' },
                { label: 'Foundation', key: 'foundation' },
                { label: 'Learning', key: 'learning' },
                { label: 'Exploring', key: 'exploring' },
                { label: 'Future Goal', key: 'future' },
              ] as const
            ).map((filter) => {
              const isActive = selectedFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty state if filtered category has 0 milestones */}
        {filteredStages.length === 0 && (
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/[0.06] text-center max-w-lg mx-auto space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white">
              {t.roadmap.noCompletedTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.roadmap.noCompletedDesc}
            </p>
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
            >
              {t.roadmap.viewAll}
            </button>
          </div>
        )}

        {/* Desktop Layout: Alternating Road Map with Central Journey Path */}
        <div className="hidden lg:block relative py-6">
          {/* Central Connecting Timeline Path */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-purple-500/60" />

          <div className="space-y-12">
            {filteredStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = iconMap[stage.iconName] || Terminal;

              return (
                <div key={stage.id} className="relative grid grid-cols-12 items-center">
                  {/* Left Column Content (when isEven) */}
                  <div className={`col-span-5 ${isEven ? 'pr-8 text-right' : 'order-last pl-8 text-left'}`}>
                    <button
                      type="button"
                      onClick={() => setActiveModalStage(stage)}
                      className={`group w-full p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 text-left focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                        stage.isCurrentFocus ? 'ring-1 ring-cyan-500/30 shadow-cyan-950/30' : ''
                      }`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          STAGE {stage.stageNumber}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(
                            stage.status
                          )}`}
                        >
                          {stage.status}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {stage.title}
                      </h4>

                      <p className="text-xs text-slate-300/90 mt-2 leading-relaxed">
                        {stage.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                        {stage.topics.slice(0, 3).map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-cyan-300 border border-white/[0.05]"
                          >
                            {topic}
                          </span>
                        ))}
                        {stage.topics.length > 3 && (
                          <span className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-400">
                            +{stage.topics.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-cyan-400 group-hover:text-cyan-300">
                        <span>View learning goals & details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>

                  {/* Central Node Anchor */}
                  <div className="col-span-2 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveModalStage(stage)}
                      className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-lg cursor-pointer ${
                        stage.isCurrentFocus
                          ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-cyan-500/40 scale-110'
                          : 'bg-[#090d18] border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white'
                      }`}
                      aria-label={`Open details for Stage ${stage.stageNumber}: ${stage.title}`}
                    >
                      <Icon className="w-5 h-5" />
                      {stage.isCurrentFocus && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </button>
                  </div>

                  {/* Opposite Column Filler */}
                  <div className={`col-span-5 ${isEven ? 'pl-8' : 'pr-8 order-first'}`}>
                    <div className="p-4 rounded-xl bg-slate-900/30 border border-white/[0.03] text-xs text-slate-400 font-mono">
                      <span className="text-cyan-400 font-bold block mb-1">Target Outcome</span>
                      "{stage.goal}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Layout: Vertical Timeline Path */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 ml-3 sm:ml-6 space-y-8">
          {filteredStages.map((stage) => {
            const Icon = iconMap[stage.iconName] || Terminal;

            return (
              <div key={stage.id} className="relative">
                {/* Milestone Node */}
                <button
                  type="button"
                  onClick={() => setActiveModalStage(stage)}
                  className={`absolute -left-[37px] sm:-left-[45px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border-2 transition-transform cursor-pointer ${
                    stage.isCurrentFocus
                      ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/30 scale-105'
                      : 'bg-[#090d18] border-slate-700 text-slate-300'
                  }`}
                  aria-label={`Open details for Stage ${stage.stageNumber}: ${stage.title}`}
                >
                  <Icon className="w-4 h-4" />
                </button>

                {/* Milestone Card */}
                <button
                  type="button"
                  onClick={() => setActiveModalStage(stage)}
                  className={`w-full p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-cyan-500/40 text-left transition-all shadow-lg ${
                    stage.isCurrentFocus ? 'ring-1 ring-cyan-500/30' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      STAGE {stage.stageNumber}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(
                        stage.status
                      )}`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {stage.title}
                  </h4>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                    {stage.topics.slice(0, 3).map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-cyan-300 border border-white/[0.05]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-cyan-400">
                    <span>View roadmap stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Detail Modal */}
        <RoadmapModal
          stage={activeModalStage}
          allStages={roadmapStages}
          onClose={() => setActiveModalStage(null)}
          onSelectStage={(s) => setActiveModalStage(s)}
        />
      </div>
    </section>
  );
};
