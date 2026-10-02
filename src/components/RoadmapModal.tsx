import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Target, CheckCircle2, Sparkles, BookOpen, Layers } from 'lucide-react';
import { RoadmapStage } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface RoadmapModalProps {
  stage: RoadmapStage | null;
  allStages: RoadmapStage[];
  onClose: () => void;
  onSelectStage: (stage: RoadmapStage) => void;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({
  stage,
  allStages,
  onClose,
  onSelectStage,
}) => {
  const { t } = useLanguage();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!stage) return;
      const currentIndex = allStages.findIndex((s) => s.id === stage.id);
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectStage(allStages[currentIndex - 1]);
      }
      if (e.key === 'ArrowRight' && currentIndex < allStages.length - 1) {
        onSelectStage(allStages[currentIndex + 1]);
      }
    };

    if (stage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stage, allStages, onClose, onSelectStage]);

  if (!stage) return null;

  const currentIndex = allStages.findIndex((s) => s.id === stage.id);
  const prevStage = currentIndex > 0 ? allStages[currentIndex - 1] : null;
  const nextStage = currentIndex < allStages.length - 1 ? allStages[currentIndex + 1] : null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'foundation':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40';
      case 'learning':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/40';
      case 'exploring':
        return 'bg-purple-500/20 text-purple-300 border-purple-400/40';
      case 'future focus':
      case 'future goal':
      case 'career goal':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40';
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40';
      default:
        return 'bg-slate-800 text-slate-300 border-white/[0.08]';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="roadmap-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090e1b] border border-cyan-500/30 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              STAGE {stage.stageNumber} OF {String(allStages.length).padStart(2, '0')}
            </span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getStatusColor(
                stage.status
              )}`}
            >
              {stage.status}
            </span>
            {stage.isCurrentFocus && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Active Focus
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close milestone detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Description */}
        <h3 id="roadmap-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          {stage.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {stage.description}
        </p>

        {/* Goal Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-white/[0.08] mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <Target className="w-4 h-4" />
            <span>{t.roadmap.modalTargetGoal}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            "{stage.goal}"
          </p>
        </div>

        {/* Core Topics */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>{t.roadmap.modalCurriculum}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {stage.topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-white/[0.04] text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>{t.roadmap.modalTechnologies}</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {stage.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-800/90 border border-white/[0.08] text-cyan-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Navigation Buttons */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={!prevStage}
            onClick={() => prevStage && onSelectStage(prevStage)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Navigate to previous roadmap milestone"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.roadmap.modalPrev}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800/60 text-slate-300 hover:text-white transition-colors"
          >
            {t.roadmap.modalClose}
          </button>

          <button
            type="button"
            disabled={!nextStage}
            onClick={() => nextStage && onSelectStage(nextStage)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Navigate to next roadmap milestone"
          >
            <span>{t.roadmap.modalNext}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
