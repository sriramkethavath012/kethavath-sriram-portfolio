import React, { useEffect } from 'react';
import { X, CheckCircle2, BookOpen, Layers } from 'lucide-react';

export interface SkillDetail {
  name: string;
  category: string;
  description: string;
  icon?: React.ElementType;
}

interface SkillDetailModalProps {
  skill: SkillDetail | null;
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ skill, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (skill) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [skill, onClose]);

  if (!skill) return null;

  const Icon = skill.icon || Layers;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-[#0a0f1d] border border-cyan-500/30 p-6 sm:p-7 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-950/40">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                {skill.category}
              </span>
              <h3 id="skill-modal-title" className="text-xl font-bold text-white tracking-tight">
                {skill.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close skill details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Curriculum Focus</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300/90 pt-1">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Active coursework & lab implementation area</span>
        </div>

        <div className="pt-3 border-t border-white/[0.08] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
