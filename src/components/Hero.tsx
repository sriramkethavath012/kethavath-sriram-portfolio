import React from 'react';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { GitHubLogo, LinkedInLogo, InstagramLogo } from './BrandIcons';
import { NeuralVisual } from './NeuralVisual';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Small student badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{personalInfo.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-400">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {personalInfo.role}
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              {personalInfo.description}
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={personalInfo.resumePath}
                  download="Kethavath_Sriram_Resume.pdf"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>

                {onOpenResumeModal && (
                  <button
                    type="button"
                    onClick={onOpenResumeModal}
                    title="Quick preview resume"
                    className="p-3 text-slate-400 hover:text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
                    aria-label="Preview Resume in Modal"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Official Social Profile Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kethavath Sriram's GitHub profile (@sriramkethavath012) in a new tab"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 shadow-md shadow-black/40 hover:shadow-cyan-500/10 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <GitHubLogo className="w-5 h-5 text-slate-200 group-hover:text-cyan-300 transition-colors" />
                <span className="text-sm font-semibold tracking-wide">{socialLinks.github.name}</span>
                <span className="text-xs text-slate-400 font-mono group-hover:text-cyan-300/90 transition-colors hidden sm:inline">
                  {socialLinks.github.username}
                </span>
              </a>

              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Kethavath Sriram on LinkedIn in a new tab"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-blue-500/50 shadow-md shadow-black/40 hover:shadow-blue-500/10 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedInLogo className="w-5 h-5 text-[#0a66c2] group-hover:text-[#388bfd] transition-colors" />
                <span className="text-sm font-semibold tracking-wide">{socialLinks.linkedin.name}</span>
                <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors hidden sm:inline">
                  {socialLinks.linkedin.username}
                </span>
              </a>

              <a
                href={socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Kethavath Sriram on Instagram (@sriramnayak_1438) in a new tab"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-pink-500/50 shadow-md shadow-black/40 hover:shadow-pink-500/10 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <InstagramLogo className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
                <span className="text-sm font-semibold tracking-wide">{socialLinks.instagram.name}</span>
                <span className="text-xs text-slate-400 font-mono group-hover:text-pink-300/90 transition-colors hidden sm:inline">
                  {socialLinks.instagram.username}
                </span>
              </a>

              <a
                href={socialLinks.email.url}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-cyan-300 bg-slate-900/50 hover:bg-slate-800/80 border border-white/[0.06] hover:border-cyan-500/30 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email Kethavath Sriram directly"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{socialLinks.email.address}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: AI / Neural Network Visual */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 w-full flex flex-col items-center"
          >
            <NeuralVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
