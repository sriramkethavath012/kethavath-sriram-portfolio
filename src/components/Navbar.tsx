import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';
import { GitHubLogo, LinkedInLogo, InstagramLogo } from './BrandIcons';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLabelMap: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    roadmap: t.nav.roadmap,
    projects: t.nav.projects,
    'ai-lab': t.nav.ailab || 'AI Lab',
    education: t.nav.education,
    certificates: t.nav.certificates,
    resume: t.nav.resume,
    contact: t.nav.contact,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 transition-transform"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              KS
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono tracking-tight -mt-0.5">
                B.Tech CSE (AI & ML)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const label = navLabelMap[sectionId] || item.label;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Command Palette, Social Icons, Language, Theme, & Let's Connect */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-all"
                title="Search portfolio (Ctrl+K or Cmd+K)"
                aria-label="Open command palette"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] text-slate-400 hidden xl:inline">Search</span>
                <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-white/[0.08]">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-1 pl-1 border-l border-white/[0.08]">
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                aria-label="Open GitHub profile in a new tab"
                title="GitHub"
              >
                <GitHubLogo className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#0a66c2] hover:bg-white/[0.05] transition-colors"
                aria-label="Open LinkedIn profile in a new tab"
                title="LinkedIn"
              >
                <LinkedInLogo className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-white/[0.05] transition-colors"
                aria-label="Open Instagram profile in a new tab"
                title="Instagram"
              >
                <InstagramLogo className="w-4 h-4" />
              </a>
            </div>

            <LanguageToggle />
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-sm shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400"
            >
              <span>{t.nav.letsConnect}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Search, Language, Theme, & Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08]"
                aria-label="Open command search"
              >
                <Search className="w-5 h-5 text-cyan-400" />
              </button>
            )}

            <LanguageToggle />
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] bg-black/70 backdrop-blur-md lg:hidden z-40 animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-[#0a0f1d] border-b border-white/[0.1] px-6 py-6 shadow-2xl flex flex-col gap-2 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const label = navLabelMap[sectionId] || item.label;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="text-xs font-mono text-cyan-400">{t.nav.current}</span>}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono text-slate-400">{t.common.language}</span>
                <LanguageToggle showFullLabel={true} />
              </div>

              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono text-slate-400">{t.common.appearance}</span>
                <ThemeToggle showLabel={true} />
              </div>

              <div className="flex items-center justify-center gap-4 py-2 border-t border-white/[0.04]">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-white/[0.06]"
                  aria-label="GitHub profile"
                >
                  <GitHubLogo className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-300 hover:text-[#0a66c2] bg-slate-900 border border-white/[0.06]"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInLogo className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-300 hover:text-pink-400 bg-slate-900 border border-white/[0.06]"
                  aria-label="Instagram profile"
                >
                  <InstagramLogo className="w-4 h-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow-md"
              >
                <span>{t.nav.letsConnect}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
