import React, { useState } from 'react';
import {
  Terminal,
  Code2,
  FileCode,
  Layout,
  Palette,
  FileJson,
  Database,
  HardDrive,
  Binary,
  GitFork,
  BrainCircuit,
  Layers,
  Filter,
  GitBranch,
  Github,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { SkillDetailModal, SkillDetail } from './SkillDetailModal';

// Map iconName strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Code2,
  FileCode,
  Layout,
  Palette,
  FileJson,
  Database,
  HardDrive,
  Binary,
  GitFork,
  BrainCircuit,
  Layers,
  GitBranch,
  Github,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkillModal, setActiveSkillModal] = useState<SkillDetail | null>(null);
  const { t } = useLanguage();

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#070a11]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <span className="w-6 h-[1px] bg-cyan-400/60" />
              <span>{t.skills.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.skills.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Category Filter Pills (Functional Filter Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-white/[0.08] rounded-xl">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                    · {cat.skills.length} competencies
                  </span>
                </div>
                <span className="text-xs text-slate-400 max-w-md text-right hidden md:block">
                  {cat.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.iconName] || Terminal;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() =>
                        setActiveSkillModal({
                          name: skill.name,
                          category: cat.title,
                          description: skill.description,
                          icon: Icon,
                        })
                      }
                      className="group p-5 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b13] border border-white/[0.06] hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                      aria-label={`View details for ${skill.name} in ${cat.title}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3 w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400">
                              {cat.title}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-2">
                        {skill.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500 w-full">
                        <span>Click for overview</span>
                        <span className="text-cyan-400/80 group-hover:text-cyan-300">Active Learning</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding skill evaluation */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-white/[0.05] text-center text-xs text-slate-400">
          <p>
            * Skills are listed strictly according to academic coursework and active problem-solving focus. Percentages or arbitrary proficiency scores are excluded to maintain honest technical representation.
          </p>
        </div>
      </div>

      {/* Skill Detail Modal */}
      <SkillDetailModal
        skill={activeSkillModal}
        onClose={() => setActiveSkillModal(null)}
      />
    </section>
  );
};
