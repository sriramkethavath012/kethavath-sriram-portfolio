import React from 'react';
import { User, GraduationCap, MapPin, Target, Sparkles, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const infoCards = [
    {
      label: t.about.academicFocus,
      value: personalInfo.name,
      icon: User,
      color: 'text-cyan-400',
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-950/20',
    },
    {
      label: t.about.currentStatus,
      value: t.about.institution,
      sub: t.about.statusValue,
      icon: GraduationCap,
      color: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-950/20',
    },
    {
      label: 'Location',
      value: t.about.location,
      icon: MapPin,
      color: 'text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-950/20',
    },
    {
      label: 'Career Focus',
      value: t.hero.role,
      sub: t.hero.tagline,
      icon: Target,
      color: 'text-purple-400',
      border: 'border-purple-500/20',
      bg: 'bg-purple-950/20',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400/60" />
            <span>{t.about.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Descriptive Narrative & Currently Learning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0c1220] to-[#080d17] border border-white/[0.08] shadow-xl space-y-5">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {t.about.bioParagraph1}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                {t.about.bioParagraph2}
              </p>

              {/* Learning Philosophy note */}
              <div className="pt-4 border-t border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    Continuous Growth Mindset
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Actively expanding knowledge through coursework, documentation study, coding practice, and open academic collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Currently Exploring Interactive Card */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-white/[0.08] shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Currently Exploring
                </h3>
                <span className="text-[11px] font-mono text-cyan-400/80 ml-auto bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  Student Exploration
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'AI & Machine Learning',
                  'Programming',
                  'Data Structures & Algorithms',
                  'Web Development',
                  'Software Engineering',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-white/[0.05] hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-200 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 mt-3 italic">
                * Focused on core concepts and steady development without claiming unsupported expertise.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border ${card.border} hover:border-white/[0.2] transition-all duration-200 shadow-lg hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      {card.label}
                    </span>
                    <div className={`p-2.5 rounded-xl ${card.bg} ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {card.value}
                    </div>
                    {card.sub && (
                      <div className="text-xs text-slate-400 mt-1">
                        {card.sub}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
