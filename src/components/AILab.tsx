import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  Layers,
  Cpu,
  ScanFace,
  MessageSquareCode,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Code2,
  X,
  Target,
} from 'lucide-react';
import { aiTopicsData, AITopic } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Layers,
  Cpu,
  ScanFace,
  MessageSquareCode,
  Sparkles,
};

export const AILab: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<AITopic | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTopic(null);
    };
    if (selectedTopic) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTopic]);

  return (
    <section id="ai-lab" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#060911]/80">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Knowledge Module</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              AI / ML Lab
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore the concepts I'm learning in Artificial Intelligence and Machine Learning. Click any domain card to inspect foundational theory, practical examples, and relevant toolkits.
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/[0.08] text-xs font-mono text-cyan-300 self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive Learning Sandbox</span>
          </div>
        </div>

        {/* 6 AI / ML Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTopicsData.map((topic) => {
            const Icon = iconMap[topic.iconName] || BrainCircuit;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1.5 text-left flex flex-col justify-between cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label={`Open interactive lab module on ${topic.title}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center shadow-lg shadow-cyan-950/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                      Concept Module
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {topic.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {topic.relatedTechnologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-cyan-300/90 border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>Inspect Lab Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Learning Footnote */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-white/[0.05] text-center text-xs text-slate-400 max-w-3xl mx-auto">
          <p>
            * These modules represent concepts currently being explored through academic lectures, computational textbooks, and university laboratory experiments. Explanations reflect student-level conceptual mastery.
          </p>
        </div>

        {/* Detail Modal */}
        {selectedTopic && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedTopic(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lab-modal-title"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090e1b] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-lg">
                    {React.createElement(iconMap[selectedTopic.iconName] || BrainCircuit, {
                      className: 'w-6 h-6',
                    })}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block">
                      AI / ML Concept Study
                    </span>
                    <h3 id="lab-modal-title" className="text-2xl font-extrabold text-white tracking-tight">
                      {selectedTopic.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTopic(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Close concept details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* What It Is */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>What It Is</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/[0.04]">
                  {selectedTopic.whatItIs}
                </p>
              </div>

              {/* Why It Matters */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>Why It Matters</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/[0.04]">
                  {selectedTopic.whyItMatters}
                </p>
              </div>

              {/* Basic Example */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Practical Example / Formulation</span>
                </div>
                <div className="p-4 rounded-xl bg-[#06080e] border border-purple-500/20 text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
                  {selectedTopic.basicExample}
                </div>
              </div>

              {/* Related Technologies */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Technologies & Libraries</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTopic.relatedTechnologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-cyan-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedTopic(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  Close Concept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
