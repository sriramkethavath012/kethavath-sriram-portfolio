import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Home,
  User,
  Cpu,
  Compass,
  Briefcase,
  Sparkles,
  Award,
  FileText,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  CornerDownLeft,
  X,
} from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'External' | 'Actions';
  icon: React.ElementType;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Go to Home',
      category: 'Navigation',
      icon: Home,
      action: () => navigateTo('#home'),
    },
    {
      id: 'nav-about',
      title: 'Go to About',
      category: 'Navigation',
      icon: User,
      action: () => navigateTo('#about'),
    },
    {
      id: 'nav-skills',
      title: 'Go to Skills',
      category: 'Navigation',
      icon: Cpu,
      action: () => navigateTo('#skills'),
    },
    {
      id: 'nav-roadmap',
      title: 'Go to Roadmap',
      category: 'Navigation',
      icon: Compass,
      action: () => navigateTo('#roadmap'),
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      category: 'Navigation',
      icon: Briefcase,
      action: () => navigateTo('#projects'),
    },
    {
      id: 'nav-ai-lab',
      title: 'Go to AI Lab',
      category: 'Navigation',
      icon: Sparkles,
      action: () => navigateTo('#ai-lab'),
    },
    {
      id: 'nav-certificates',
      title: 'Go to Certificates',
      category: 'Navigation',
      icon: Award,
      action: () => navigateTo('#certificates'),
    },
    {
      id: 'action-resume',
      title: 'Open Resume',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        if (onOpenResumeModal) onOpenResumeModal();
        else navigateTo('#resume');
      },
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact',
      category: 'Navigation',
      icon: Mail,
      action: () => navigateTo('#contact'),
    },
    {
      id: 'ext-github',
      title: 'Open GitHub',
      category: 'External',
      icon: Github,
      action: () => {
        onClose();
        window.open(socialLinks.github.url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn',
      category: 'External',
      icon: Linkedin,
      action: () => {
        onClose();
        window.open(socialLinks.linkedin.url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'ext-instagram',
      title: 'Open Instagram',
      category: 'External',
      icon: Instagram,
      action: () => {
        onClose();
        window.open(socialLinks.instagram.url, '_blank', 'noopener,noreferrer');
      },
    },
  ];

  // Easter Egg check: "hello"
  const isEasterEgg = query.trim().toLowerCase() === 'hello';

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle shortcut: Ctrl + K or Cmd + K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger handled in parent or global
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#090e1b] border border-cyan-500/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-[#0c1424]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search portfolio... (e.g. Projects, Skills, Resume)"
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none font-sans"
          />
          <kbd className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-white/[0.08]">
            ESC
          </kbd>
        </div>

        {/* Easter Egg Message */}
        {isEasterEgg && (
          <div className="p-4 bg-cyan-950/40 border-b border-cyan-500/30 text-cyan-300 text-sm font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Hello, fellow developer 👋</span>
          </div>
        )}

        {/* Command Items List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-cyan-500/30 text-cyan-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-medium block">
                        {cmd.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                      <span>Jump</span>
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Command Palette Footer */}
        <div className="px-4 py-2.5 bg-[#070b13] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Kethavath Sriram Command Center</span>
        </div>
      </div>
    </div>
  );
};
