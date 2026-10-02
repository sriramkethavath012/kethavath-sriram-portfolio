import React, { useState } from 'react';
import { Play, RotateCcw, Terminal, CheckCircle2, ShieldCheck, Copy, Check, Sparkles } from 'lucide-react';
import { playgroundExamples, PlaygroundExample } from '../data/portfolioData';

export const CodePlayground: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<PlaygroundExample>(playgroundExamples[0]);
  const [editableCode, setEditableCode] = useState<string>(playgroundExamples[0].code);
  const [consoleOutput, setConsoleOutput] = useState<string>(playgroundExamples[0].output);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectExample = (example: PlaygroundExample) => {
    setSelectedExample(example);
    setEditableCode(example.code);
    setConsoleOutput(example.output);
  };

  const handleReset = () => {
    setEditableCode(selectedExample.code);
    setConsoleOutput(selectedExample.output);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editableCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate brief compiler / interpreter latency in a safe client-side sandbox
    setTimeout(() => {
      // If code was not changed, output the exact evaluated result
      if (editableCode.trim() === selectedExample.code.trim()) {
        setConsoleOutput(selectedExample.output);
      } else {
        // Safe line-by-line simulation for basic print statements
        try {
          const lines = editableCode.split('\n');
          const outputs: string[] = [];
          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
              let inner = trimmed.slice(6, -1);
              // Handle quotes
              if (
                (inner.startsWith('"') && inner.endsWith('"')) ||
                (inner.startsWith("'") && inner.endsWith("'"))
              ) {
                outputs.push(inner.slice(1, -1));
              } else if (inner.startsWith('f"') || inner.startsWith("f'")) {
                // simple interpolation
                let clean = inner.slice(2, -1);
                clean = clean
                  .replace('{name}', 'Kethavath Sriram')
                  .replace('{branch}', 'B.Tech CSE (AI & ML)')
                  .replace('{university}', 'Marwadi University, Rajkot')
                  .replace('{target}', '58')
                  .replace('{index}', '4');
                outputs.push(clean);
              } else {
                outputs.push(`[Evaluated]: ${inner}`);
              }
            }
          }
          if (outputs.length > 0) {
            setConsoleOutput(outputs.join('\n'));
          } else {
            setConsoleOutput(
              `Program executed safely in sandbox.\nNote: Arbitrary server code is disabled for security.\nOutput:\n${selectedExample.output}`
            );
          }
        } catch {
          setConsoleOutput(selectedExample.output);
        }
      }
      setIsRunning(false);
    }, 400);
  };

  return (
    <section id="playground" className="py-20 lg:py-28 relative scroll-mt-16 bg-[#070b13]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Developer Environment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Code Playground
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore safe algorithmic samples and fundamental Python implementations directly in this browser-based interactive terminal.
            </p>
          </div>

          {/* Safe sandbox badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sandboxed Client Execution</span>
          </div>
        </div>

        {/* Predefined Example Selectors */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
            Curriculum Examples:
          </span>
          {playgroundExamples.map((ex) => {
            const isSelected = selectedExample.id === ex.id;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => handleSelectExample(ex)}
                className={`px-3.5 py-2 text-xs font-mono font-medium rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-950/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border-white/[0.08] hover:bg-slate-800'
                }`}
              >
                {ex.title}
              </button>
            );
          })}
        </div>

        {/* Code Editor & Console Output Container */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#06080e] shadow-2xl overflow-hidden">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                sriram_workspace / {selectedExample.id}.py
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Copy code snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Reset example code"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>

              <button
                type="button"
                onClick={handleRunCode}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 text-xs font-mono font-bold transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Two-Pane Layout: Code on Left, Terminal Output on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
            {/* Left Pane: Code Editor */}
            <div className="lg:col-span-7 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between">
              <label htmlFor="code-textarea" className="sr-only">
                Editable Code Sample
              </label>
              <textarea
                id="code-textarea"
                value={editableCode}
                onChange={(e) => setEditableCode(e.target.value)}
                spellCheck={false}
                className="w-full h-64 sm:h-72 font-mono text-xs sm:text-sm text-cyan-200 bg-transparent resize-none focus:outline-none leading-relaxed selection:bg-cyan-500/30"
              />

              <div className="pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Language: Python 3.x (Simulated)</span>
                <span>Editable Code Block</span>
              </div>
            </div>

            {/* Right Pane: Terminal Output */}
            <div className="lg:col-span-5 p-4 sm:p-5 bg-[#05070c] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Terminal Standard Output (stdout)</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/[0.04] min-h-[180px] overflow-x-auto">
                  {consoleOutput}
                </pre>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-white/[0.04] text-xs text-slate-400 space-y-1">
                <span className="text-cyan-400 font-bold block text-[11px] font-mono uppercase">
                  Concept Insight:
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {selectedExample.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
