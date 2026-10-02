import React from 'react';
import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';
import { GitHubLogo, LinkedInLogo, InstagramLogo } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLabelMap: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    roadmap: t.nav.roadmap,
    projects: t.nav.projects,
    education: t.nav.education,
    certificates: t.nav.certificates,
    resume: t.nav.resume,
    contact: t.nav.contact,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient footer lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Brand, Tagline, & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          {/* 1. Name & 2. Tagline & Bio */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-cyan-500/20">
                KS
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-white uppercase block">
                  {personalInfo.name}
                </span>
                <span className="text-xs text-cyan-400 font-mono">
                  {personalInfo.badge}
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-200">
              {personalInfo.role} · {personalInfo.tagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300">
              <span>Learning | Coding | Creating</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Focused on algorithmic problem solving, software engineering fundamentals, and practical machine learning applications. Open to student collaborations and software engineering internships.
            </p>

            {/* Direct Email Link in brand section */}
            <div className="pt-1">
              <a
                href={socialLinks.email.url}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="Send direct email to Kethavath Sriram"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{socialLinks.email.address}</span>
              </a>
            </div>
          </div>

          {/* 3. Navigation links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const label = navLabelMap[sectionId] || item.label;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Back to top CTA */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all hover:-translate-y-0.5"
              aria-label="Scroll back to top of the page"
            >
              <span>{t.common.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4. Dedicated "Connect With Me" Social Cards Section */}
        <div className="py-12 border-b border-white/[0.06]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-1">
                <span className="w-4 h-[1px] bg-cyan-400" />
                <span>{t.footer.officialProfiles}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {t.footer.connectWithMe}
              </h3>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline font-mono">
              {t.footer.liveVerified}
            </span>
          </div>

          {/* Three Large Social Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* GitHub Card */}
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Kethavath Sriram's GitHub profile (@sriramkethavath012) in a new browser tab"
              className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/[0.08] group-hover:border-cyan-500/30 flex items-center justify-center text-slate-100 group-hover:text-cyan-300 transition-colors shadow-inner">
                    <GitHubLogo className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    Source & Code
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {socialLinks.github.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-cyan-300/80 font-mono">
                    {socialLinks.github.username}
                  </p>
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Browse my programming exercises, machine learning experiments, and upcoming software repositories.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>View my GitHub profile</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Kethavath Sriram on LinkedIn in a new browser tab"
              className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-blue-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/[0.08] group-hover:border-blue-500/30 flex items-center justify-center text-[#0a66c2] group-hover:text-[#388bfd] transition-colors shadow-inner">
                    <LinkedInLogo className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-mono text-blue-400/80 bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-500/20">
                    Professional Network
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {socialLinks.linkedin.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {socialLinks.linkedin.username}
                  </p>
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Connect for academic collaboration, software engineering networking, and student internship discussions.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                <span>Connect with me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={socialLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Kethavath Sriram on Instagram (@sriramnayak_1438) in a new browser tab"
              className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b14] border border-white/[0.08] hover:border-pink-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/[0.08] group-hover:border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:text-pink-300 transition-colors shadow-inner">
                    <InstagramLogo className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-mono text-pink-400/80 bg-pink-950/40 px-2.5 py-1 rounded-md border border-pink-500/20">
                    Social & Updates
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    {socialLinks.instagram.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-pink-300/80 font-mono">
                    {socialLinks.instagram.username}
                  </p>
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Follow for student tech updates, university life, and personal projects journey.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-pink-400 group-hover:text-pink-300">
                <span>Follow me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* 5. Footer Logos (Compact 32–40px icons) & 6. Email & 7. Copyright */}
        <div className="pt-10 pb-4 flex flex-col items-center justify-center space-y-4 text-center">
          {/* Compact Official Logos */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (@sriramkethavath012)"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.1] hover:border-cyan-400/50 flex items-center justify-center text-slate-200 hover:text-white transition-all hover:scale-105 shadow-sm"
              title="GitHub - @sriramkethavath012"
            >
              <GitHubLogo className="w-5 h-5" />
            </a>

            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (Kethavath Sriram)"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.1] hover:border-blue-400/50 flex items-center justify-center text-[#0a66c2] hover:text-[#388bfd] transition-all hover:scale-105 shadow-sm"
              title="LinkedIn - Kethavath Sriram"
            >
              <LinkedInLogo className="w-5 h-5" />
            </a>

            <a
              href={socialLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile (@sriramnayak_1438)"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.1] hover:border-pink-400/50 flex items-center justify-center text-pink-400 hover:text-pink-300 transition-all hover:scale-105 shadow-sm"
              title="Instagram - @sriramnayak_1438"
            >
              <InstagramLogo className="w-5 h-5" />
            </a>

            <a
              href={socialLinks.email.url}
              aria-label={`Email ${socialLinks.email.address}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.1] hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all hover:scale-105 shadow-sm"
              title={`Email ${socialLinks.email.address}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 font-mono">
            © 2026 Kethavath Sriram. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};
