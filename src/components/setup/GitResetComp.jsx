import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  Copy,
  Check,
  Info,
  Code2,
  Zap,
  Rocket,
  ChevronRight,
  ExternalLink,
  Github,
  RefreshCw,
  Search,
  Trash2,
} from 'lucide-react'

// --- REFACTORED DATA STRUCTURE ---
const GIT_MIGRATION_STEPS = [
  {
    id: 'step-1',
    step: '01',
    name: 'Locate Hidden Git Folder',
    filename: 'powershell',
    language: 'bash',
    description:
      'Before deleting, you must verify the existence of the .git directory. Since it is a hidden system folder, a standard "ls" won\'t show it. Using "-Force" reveals all hidden items in the current path.',
    code: `ls -Force`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'Remove Repository Link',
    filename: 'powershell',
    language: 'bash',
    description:
      'This command forcefully and recursively removes the .git directory. "-Recurse" ensures all sub-files are deleted, and "-Force" bypasses read-only restrictions. Your project is now a regular local folder.',
    code: `Remove-Item -Recurse -Force .git`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'Initialize Fresh Project',
    filename: 'powershell',
    language: 'bash',
    description:
      'Restart your version control from scratch. This creates a brand new .git folder. We then stage all current files (npm install, src, etc.) for a clean initial commit.',
    code: `git init\ngit add .`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'Connect New GitHub Remote',
    filename: 'powershell',
    language: 'bash',
    description:
      'Create a new repo on GitHub, then link it here. We rename the branch to "main" for modern compatibility and push the code to the new destination.',
    code: `git commit -m "Initial commit for new project"\ngit branch -M main\ngit remote add origin <YOUR_NEW_URL>\ngit push -u origin main`,
  },
]

const GITHUB_REPO_URL = 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const StepCard = ({ item }) => {
  const [activeTab, setActiveTab] = useState('code')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
      <div className="lg:col-span-3 pt-4">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl font-black text-orange-600/20 italic">{item.step}</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.name}</h3>
      </div>

      <div className="lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30">
        <div className="flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2">
              {item.filename}
            </span>
          </div>
          <div className="flex gap-2">
            {['code', 'info'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-3 py-1 text-[10px] font-bold rounded transition-all uppercase',
                  activeTab === tab
                    ? 'bg-orange-600 text-white'
                    : 'bg-[#222] text-gray-500 hover:text-white'
                )}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {activeTab === 'code' ? (
            <div className="relative">
              <button
                onClick={copyToClipboard}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all">
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
              <SyntaxHighlighter
                language={item.language}
                style={vscDarkPlus}
                showLineNumbers={true}
                customStyle={{
                  margin: 0,
                  padding: '30px',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  background: '#0D0D0D',
                }}
                lineNumberStyle={{ color: '#333', minWidth: '2.5em' }}>
                {item.code}
              </SyntaxHighlighter>
            </div>
          ) : (
            <div className="p-10 min-h-50 flex flex-col justify-center">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-orange-600/10 rounded-2xl">
                  <Info className="text-orange-500" size={32} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-3">Technical Breakdown</h4>
                  <p className="text-gray-400 leading-relaxed text-base max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function GitResetGuide() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8">
          <RefreshCw size={14} className="animate-spin-slow" /> WINDOWS GIT MIGRATION
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">
          Unlink <span className="text-orange-600">&</span> Rebuild
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Purge existing version history and re-initialize your MERN project for a new GitHub
          destination using PowerShell.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href={GITHUB_REPO_URL}
            className="flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20">
            Create New Repo <Github size={18} />
          </a>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Search size={18} /> LS -FORCE
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Trash2 size={18} /> RM -RECURSE
            </div>
          </div>
        </div>
      </div>

      {/* Steps List */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        {GIT_MIGRATION_STEPS.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}
      </section>
    </div>
  )
}
export default GitResetGuide
