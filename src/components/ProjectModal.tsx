import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, AlertCircle, Edit3 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090e1b] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Kicker & Editable Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            PROJECT {project.number} · {project.category}
          </span>
          {project.isPlaceholder && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Edit3 className="w-3 h-3" />
              Editable Template Slot
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Placeholder Info Callout */}
        {project.isPlaceholder && (
          <div className="mb-6 p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-200 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">How to update this project with your real work:</p>
              <p className="text-slate-300 mt-1">
                Open <code className="text-cyan-300 font-mono">src/data/portfolioData.ts</code> and replace the title, problem statement, key features, and GitHub link with your actual coursework or personal build.
              </p>
            </div>
          </div>
        )}

        {/* Deep Dive Sections: Problem & Solution */}
        <div className="space-y-5 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5">
              Problem Statement
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.06]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5">
              Proposed Solution & Architecture
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Key Features & Highlights
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/[0.08] text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>View Source on GitHub</span>
          </a>

          {project.liveDemoUrl && project.liveDemoUrl !== '#' ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-slate-500 font-mono italic">
              Live Demo: Add URL in portfolioData.ts
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
