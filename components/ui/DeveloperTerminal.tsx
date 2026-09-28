'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export function DeveloperTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            🚀 Vrushabh B [Dev Terminal v2.7.0]
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-mono bg-cyan-950/60 px-1 py-0.5 rounded">help</span> to list available commands or click quick suggestions below.
          </p>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resultNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-cyan-300 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-violet-400 font-mono">neofetch</span> - System specs & info</div>
              <div><span className="text-violet-400 font-mono">skills</span> - List core tech stack</div>
              <div><span className="text-violet-400 font-mono">projects</span> - Showcase highlighted repos</div>
              <div><span className="text-violet-400 font-mono">education</span> - Academic details</div>
              <div><span className="text-violet-400 font-mono">contact</span> - Direct contact channels</div>
              <div><span className="text-violet-400 font-mono">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'neofetch':
        resultNode = (
          <div className="flex flex-col sm:flex-row gap-4 py-2 font-mono text-xs">
            <div className="text-cyan-400 font-bold leading-tight select-none">
              <pre>{`
  __      _______ 
  \\ \\    / /  _  \\
   \\ \\  / /| |_| |
    \\ \\/ / |  _ < 
     \\  /  | |_| |
      \\/   |____/ `}</pre>
            </div>
            <div className="space-y-1 text-slate-300">
              <p><span className="text-cyan-400 font-bold">User:</span> vrushabh@rec-hulkoti</p>
              <p><span className="text-cyan-400 font-bold">Role:</span> 1st Year B.E. (CSE) 2025–2029</p>
              <p><span className="text-cyan-400 font-bold">Campus:</span> Rural Engineering College, Hulkoti</p>
              <p><span className="text-cyan-400 font-bold">OS:</span> Next.js 15 / React 19 / Turbopack</p>
              <p><span className="text-cyan-400 font-bold">Core:</span> C, C++, Python, TypeScript, Tailwind CSS</p>
              <p><span className="text-cyan-400 font-bold">Status:</span> 🟢 Available for Summer Internships</p>
            </div>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-xs">
            {portfolioData.skillCategories.map((cat, idx) => (
              <div key={idx}>
                <span className="text-cyan-300 font-semibold">{cat.category}: </span>
                <span className="text-slate-300 font-mono">
                  {cat.skills.map((s) => s.name).join(' • ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-xs">
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-white/4 border border-white/8">
                <span className="text-cyan-400 font-bold font-mono">[{proj.category}]</span>{' '}
                <span className="text-white font-semibold">{proj.title}</span>
                <p className="text-slate-400 text-[11px] mt-0.5">{proj.tagline}</p>
                <div className="text-[10px] text-violet-300 font-mono mt-1">
                  Stack: {proj.techStack.join(', ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        resultNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="font-semibold text-white">🎓 Rural Engineering College, Hulkoti</p>
            <p className="text-cyan-300">Bachelor of Engineering in Computer Science & Engineering</p>
            <p className="text-slate-400 text-[11px]">Period: 2025 – 2029 Batch • 1st Year CSE</p>
            <p className="text-slate-400 text-[11px]">Location: Hulkoti – 588205, Gadag District, Karnataka</p>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-semibold">📬 Get in touch:</p>
            <p>Email: <a href={`mailto:${portfolioData.personal.socials.email}`} className="text-cyan-300 underline">{portfolioData.personal.socials.email}</a></p>
            <p>GitHub: <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{portfolioData.personal.socials.github}</a></p>
            <p>LinkedIn: <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{portfolioData.personal.socials.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resultNode = (
          <p className="text-rose-400 text-xs font-mono">
            zsh: command not found: {trimmed}. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => runCommand('help')}>help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: resultNode }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  const quickPills = ['neofetch', 'skills', 'projects', 'education', 'contact', 'clear'];

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#080d1a]/95 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 flex flex-col font-mono text-sm ${
        isExpanded ? 'h-[480px]' : 'h-[360px]'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-white/8 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_6px_#f43f5e]" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_#f59e0b]" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_#10b981]" />
          <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            vrushabh@devbox:~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal History Log */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400 font-bold">❯</span>
              <span className="font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 text-slate-200">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Pills Bar */}
      <div className="px-4 py-2 bg-slate-950/70 border-t border-white/5 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Quick:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill}
            onClick={() => runCommand(pill)}
            className="px-2 py-0.5 rounded-md bg-white/4 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/8 text-[11px] font-mono text-slate-400 transition-colors"
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <form
        onSubmit={handleSubmit}
        className="px-4 py-2.5 bg-slate-950 border-t border-white/10 flex items-center gap-2"
      >
        <span className="text-emerald-400 font-bold text-sm">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or any command..."
          className="flex-1 bg-transparent border-none outline-hidden text-cyan-200 font-mono text-xs placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="p-1 rounded-md text-slate-500 hover:text-cyan-300 hover:bg-white/5 transition-colors"
          aria-label="Send Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
