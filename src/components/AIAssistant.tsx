import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, X, Send, Trash2, Sparkles, User, ExternalLink } from 'lucide-react';
import {
  personalInfo,
  socialLinks,
  skillCategories,
  projectsData,
  educationData,
  certificatesData,
  roadmapStages,
} from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const INITIAL_MESSAGE: Message = {
  id: 'msg-welcome',
  sender: 'assistant',
  text: "Hi! I'm Sriram's portfolio assistant. Ask me about his skills, projects, education, roadmap, or contact information.",
  timestamp: 'Just now',
};

const SUGGESTED_QUESTIONS = [
  'What skills does Sriram have?',
  'Show me his projects.',
  'What is Sriram studying?',
  'Tell me about his roadmap.',
  'How can I contact Sriram?',
];

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Local knowledge-based answering directly and strictly from portfolioData.ts
  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    // Skills
    if (q.includes('skill') || q.includes('language') || q.includes('c++') || q.includes('python') || q.includes('tech stack')) {
      const skillsList = skillCategories
        .map((cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`)
        .join('; ');
      return `Sriram's verified technical skills from university coursework and practice include:\n\n• ${skillsList}.\n\nHe is actively focusing on C, C++, Python, Data Structures, Algorithms, Web Development, and foundational AI/ML.`;
    }

    // Projects
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('github repo')) {
      const projs = projectsData
        .map((p) => `• ${p.title} (${p.category}): ${p.shortDescription} [Tech: ${p.technologies.join(', ')}]`)
        .join('\n');
      return `Here are the projects configured in Sriram's portfolio:\n\n${projs}\n\nAll projects link directly to verified GitHub repositories or structured student templates.`;
    }

    // Education / Study
    if (q.includes('study') || q.includes('studying') || q.includes('education') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('b.tech')) {
      const edu = educationData[0];
      return `Sriram is currently pursuing his ${edu.degree} in ${edu.field} at ${edu.institution} (${edu.location}). His duration is ${edu.duration} (${edu.status}), with an academic focus on algorithms, applied intelligence systems, and software engineering foundations.`;
    }

    // Roadmap
    if (q.includes('roadmap') || q.includes('learning') || q.includes('future') || q.includes('focus') || q.includes('goal')) {
      return `Sriram's Learning Roadmap represents his journey from B.Tech CSE (AI & ML) student to an applied software engineer.\n\nHis Current Focus is:\n"CSE Fundamentals + Programming + AI/ML"\n\nRoadmap stages:\n01. Programming Foundations\n02. CS Fundamentals\n03. Web Development\n04. Artificial Intelligence\n05. Machine Learning\n06. Advanced AI / ML\n07. Software Engineering\n08. Professional Journey.`;
    }

    // Contact
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('touch') || q.includes('message') || q.includes('hire') || q.includes('connect')) {
      return `You can reach out to Sriram through:\n\n• Email: ${socialLinks.email.address}\n• LinkedIn: ${socialLinks.linkedin.url}\n• GitHub: ${socialLinks.github.url}\n• Instagram: ${socialLinks.instagram.url}\n\nYou can also use the contact form located at the bottom of this portfolio!`;
    }

    // Certificates
    if (q.includes('certif') || q.includes('credential')) {
      const certs = certificatesData.map((c) => `• ${c.title} (${c.category})`).join('\n');
      return `Sriram's configured certificate areas include:\n\n${certs}\n\nThese reflect academic milestones and verified technical credentials.`;
    }

    // About / Bio
    if (q.includes('who is') || q.includes('about') || q.includes('bio') || q.includes('sriram')) {
      return `${personalInfo.name} is a ${personalInfo.badge} and ${personalInfo.role}. ${personalInfo.aboutText}`;
    }

    // Strict truthful fallback
    return "I don't have that information in Sriram's portfolio yet. I only answer from his verified academic data, skills, projects, roadmap, and contact channels.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateResponse(text);
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleClear = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-2xl shadow-cyan-500/40 hover:brightness-110 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Open Sriram AI portfolio assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-cyan-200" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="tracking-wide">Sriram AI</span>
        </button>
      )}

      {/* Chat Window Popover */}
      {isOpen && (
        <div
          className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] rounded-2xl bg-[#090d18] border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden animate-fade-in"
          role="dialog"
          aria-label="Sriram AI Chatbot"
        >
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#0d1527] to-[#0a101f] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white tracking-wide">Sriram AI</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-1.5 py-0.2 rounded-full">
                    Portfolio Agent
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                  Knowledge-grounded assistant
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Clear conversation"
                aria-label="Clear conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-[#0f172a] text-slate-200 border border-white/[0.06] rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] font-mono mt-1 ${
                      msg.sender === 'user' ? 'text-slate-800/80' : 'text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-md bg-slate-800 border border-white/[0.1] text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono">
                <div className="w-6 h-6 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1 bg-slate-900 p-2 rounded-xl border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompts */}
          <div className="px-3.5 py-2 border-t border-white/[0.05] bg-[#070b13] flex gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-cyan-950/50 hover:border-cyan-500/30 border border-white/[0.06] text-[10px] text-slate-300 hover:text-cyan-300 transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-[#090d18] border-t border-white/[0.08] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Sriram's skills, projects..."
              className="flex-1 bg-slate-900/90 border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message to Sriram AI"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
