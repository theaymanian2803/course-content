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
} from 'lucide-react'

const GITHUB_REPO_URL = 'https://github.com/theaymanian2803/react-shadcn-tailwindcss-setup'

// --- MISSING DATA: ADDED HERE ---
const shadcn = [
  {
    id: 'step-1',
    step: '01',
    name: 'Project Initialization',
    filename: 'terminal',
    language: 'bash',
    description:
      'Start by creating a new Vite project using the React template. We also install the core dependencies for Tailwind CSS and the Lucide icon library.',
    code: `npm create vite@latest my-app -- --template react
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'Path Configuration',
    filename: 'vite.config.js',
    language: 'javascript',
    description:
      'Shadcn UI requires path aliases to work correctly. Update your vite config to resolve "@" to your source directory.',
    code: `import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'The CLI Init',
    filename: 'terminal',
    language: 'bash',
    description:
      'Run the Shadcn initialization command. This wizard will ask you questions about your style preferences and automatically configure your components.json.',
    code: `npx shadcn@latest init`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'Structure Check',
    filename: 'jsconfig.json',
    language: 'json',
    description:
      'Ensure your compiler options are set up to understand the path aliases. This file helps your IDE provide intelligent autocompletion.',
    code: `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`,
  },
  {
    id: 'step-5',
    step: '05',
    name: 'Add Components',
    filename: 'terminal',
    language: 'bash',
    description:
      "You are now ready to add components. Shadcn uses a copy-paste architecture via CLI. Let's add a Button to test the setup.",
    code: `npx shadcn@latest add button`,
  },
]

// Shadcn utility for merging tailwind classes
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
      {/* Side Label */}
      <div className="lg:col-span-3 pt-4">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl font-black text-orange-600/20 italic">{item.step}</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.name}</h3>
      </div>

      {/* Code Window */}
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

export default function ShadcnDeploymentGuide() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8">
          <Zap size={14} /> TAILWIND V4 + REACT 19
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">
          Modern <span className="text-orange-600">JS</span> Stack
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          The professional setup for building high-speed React applications with Tailwind v4 and
          Shadcn components.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href={GITHUB_REPO_URL}
            className="flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20">
            Go to Repository <Github size={18} />
          </a>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Code2 size={18} /> JS VERSION
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Rocket size={18} /> VITE 6
            </div>
          </div>
        </div>
      </div>

      {/* Steps List */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        {shadcn.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}

        {/* Bottom CTA */}
        <div className="mt-20 p-px bg-linear-to-r from-transparent via-orange-600/50 to-transparent rounded-3xl">
          <div className="bg-[#0A0A0A] rounded-[23px] p-12 text-center border border-white/5">
            <h2 className="text-4xl font-black uppercase italic mb-4">Launch Environment</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Ready to start? Visit the GitHub repository to clone the full template or explore the
              documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-10 py-4 bg-white text-black rounded-xl font-black uppercase text-sm hover:bg-orange-600 hover:text-white transition-all shadow-xl">
                View on GitHub <ExternalLink size={18} />
              </a>
              <Link
                to="/components"
                className="flex items-center gap-2 px-10 py-4 bg-[#1A1A1A] border border-[#333] rounded-xl font-black uppercase text-sm hover:bg-[#222] transition-all">
                Browse UI Components <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.4em]">
          &copy; 2026 unccode stack // for experimental web only
        </p>
      </footer>
    </div>
  )
}
