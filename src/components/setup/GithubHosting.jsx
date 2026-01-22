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
  Globe,
  Server,
  Terminal,
  Settings,
  Github,
  Rocket,
  LayoutTemplate,
} from 'lucide-react'

// --- HOSTING DATA STRUCTURE ---
const HOSTING_STEPS = [
  {
    id: 'step-1',
    step: '01',
    name: 'Inject Deploy Tool',
    filename: 'terminal',
    language: 'bash',
    description:
      'First, we need to install the "gh-pages" utility. This package acts as a bridge, allowing us to publish our "dist" build folder directly to a specific branch on GitHub.',
    code: `npm install gh-pages --save-dev`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'Configure Base Path',
    filename: 'vite.config.js',
    language: 'javascript',
    description:
      'Vite needs to know it is running in a sub-folder. We add the "base" property matching your repository name exactly. This ensures assets like CSS and images load correctly.',
    code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/caseit/", // MUST match repo name
})`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'Update Manifest',
    filename: 'package.json',
    language: 'json',
    description:
      'We must tell the deployer where the site will live (homepage) and add the specific scripts to build and upload the code automatically.',
    code: `{
  "name": "caseit",
  "homepage": "https://theaymanian2803.github.io/caseit",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'Fix Router Scope',
    filename: 'src/App.tsx',
    language: 'tsx',
    description:
      'React Router expects to be at the root domain. Since we are in "/caseit", we must add the "basename" prop so the app understands its relative position.',
    code: `import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  // Add basename here
  <BrowserRouter basename="/caseit">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  or if using this Setup
  const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/setup',
          element: <ChadcnScreen />,
        },
        {
          path: '/docs',
          element: <DocsScreen />,
        },
        {
          path: '/git',
          element: <GithubScreen />,
        },
        {
          path: '/git/reset',
          element: <GitResetScreen />,
        },
        {
          path: '/git/hosting',
          element: <GithibHostingScreen />,
        },
        {
          path: '/prisma',
          element: <PrismaScreen />,
        },
      ],
    },
  ],
  {
    // --- ADDED BASENAME HERE ---
    basename: "/websitephones", 
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
);`,
  },
  {
    id: 'step-5',
    step: '05',
    name: 'Push & Ignite',
    filename: 'terminal',
    language: 'bash',
    description:
      'Finalize the setup by committing the changes and running the deploy script. This builds the static files and sends them to the "gh-pages" branch.',
    code: `git add .
git commit -m "Configured for deployment"
git push
npm run deploy`,
  },
]

const GITHUB_REPO_URL = 'https://github.com/theaymanian2803/caseit'

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

function HostingGuide() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8">
          <Globe size={14} className="animate-pulse" /> GITHUB PAGES DEPLOYMENT
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">
          Build <span className="text-orange-600">&</span> Broadcast
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Compile your local React environment and ship it to the edge using GitHub Pages and Vite.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20">
            View Live Repo <Github size={18} />
          </a>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Terminal size={18} /> NPM RUN DEPLOY
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Server size={18} /> GH-PAGES
            </div>
          </div>
        </div>
      </div>

      {/* Steps List */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        {HOSTING_STEPS.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}
      </section>
    </div>
  )
}
export default HostingGuide
