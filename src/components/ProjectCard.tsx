import React from 'react';
import { Github, ExternalLink, ArrowRight, Edit3, Cpu, Binary, Layout } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  // Select an illustrative technical icon for the card banner
  const getIcon = () => {
    switch (project.category) {
      case 'AI & ML':
        return Cpu;
      case 'Software Engineering':
        return Binary;
      case 'Web Development':
        return Layout;
      default:
        return Cpu;
    }
  };

  const VisualIcon = getIcon();

  return (
    <div className="group rounded-2xl bg-[#090e1a] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      {/* Top Banner / Graphic Header */}
      <div className={`relative h-44 w-full bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between border-b border-white/[0.06] overflow-hidden`}>
        {/* Subtle background circuit pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
            PROJECT {project.number}
          </span>
          {project.isPlaceholder && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-200 border border-amber-500/30">
              <Edit3 className="w-2.5 h-2.5" />
              Placeholder Slot
            </span>
          )}
        </div>

        <div className="relative z-10 flex items-end justify-between">
          <div className="text-white/80">
            <VisualIcon className="w-10 h-10 text-cyan-400/90 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies List */}
        <div>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-800/80 border border-white/[0.06] text-cyan-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400 rounded p-1"
          >
            <span>View Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
              title="View repository"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
            {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-white/[0.08] rounded-lg transition-colors"
                title="View live deployment"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
