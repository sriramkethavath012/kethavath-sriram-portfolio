import React, { useEffect } from 'react';
import { X, Download, Mail, MapPin, GraduationCap, Code } from 'lucide-react';
import { personalInfo, educationData, skillCategories, socialLinks } from '../data/portfolioData';
import { GitHubLogo, LinkedInLogo, InstagramLogo } from './BrandIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-doc-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[#090d18] border border-cyan-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c1222] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              RESUME DOCUMENT PREVIEW
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              · Configured for /resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Kethavath_Sriram_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg hover:brightness-110 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#090d18]">
          {/* Header of Resume */}
          <div className="border-b border-white/[0.1] pb-6">
            <h2 id="resume-doc-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <div className="text-sm font-semibold text-cyan-400 mt-1">
              {personalInfo.role} · {personalInfo.badge}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <a
                href={socialLinks.email.url}
                className="flex items-center gap-1.5 text-cyan-300 hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {socialLinks.email.address}
              </a>
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-300 hover:underline"
              >
                <LinkedInLogo className="w-3.5 h-3.5 text-[#0a66c2]" />
                LinkedIn
              </a>
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-300 hover:underline"
              >
                <GitHubLogo className="w-3.5 h-3.5 text-slate-200" />
                GitHub ({socialLinks.github.username})
              </a>
              <a
                href={socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-pink-300 hover:underline"
              >
                <InstagramLogo className="w-3.5 h-3.5 text-pink-400" />
                Instagram ({socialLinks.instagram.username})
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Career Objective & Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white">
                    <span>{edu.institution}</span>
                    <span className="text-cyan-400 font-mono text-xs">{edu.duration}</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {edu.degree} · <span className="text-slate-400">{edu.field}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Location: {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.05]">
                  <span className="font-semibold text-white uppercase text-[11px] font-mono">
                    {cat.title}:
                  </span>
                  <div className="text-slate-300 mt-1">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note on replacing file */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300">
            <span className="text-cyan-300 font-semibold font-mono">Developer Note:</span> To have your actual PDF downloaded directly, simply place your compiled resume file at <code className="text-cyan-200 bg-slate-900 px-1.5 py-0.5 rounded">public/resume.pdf</code>.
          </div>
        </div>
      </div>
    </div>
  );
};
