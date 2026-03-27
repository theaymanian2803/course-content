import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  Copy,
  Check,
  Info,
  Database,
  Terminal,
  FileCode,
  Settings,
  RefreshCw,
  ArrowRightLeft,
  Box,
  Cpu,
  Layers,
  FolderTree,
  AlertTriangle,
} from 'lucide-react'

// --- THE ANATOMY DATA (What is inside the code) ---
const anatomyData = [
  {
    title: 'The Vite Engine',
    detail:
      'Lovable uses Vite for the frontend. This means all environment variables MUST start with VITE_ or the browser will ignore them for security reasons.',
    icon: <Cpu className="text-orange-500" />,
  },
  {
    title: 'Supabase Folder',
    detail:
      "Contains your migrations (SQL) and config.toml. This is the 'brain' that tells the Supabase CLI how to talk to your specific database project.",
    icon: <FolderTree className="text-blue-500" />,
  },
  {
    title: 'The .lovable Ghost',
    detail:
      'A hidden directory used for AI syncing. Once you move to VS Code, this folder is dead weight and can be deleted to fully decouple the project.',
    icon: <Layers className="text-purple-500" />,
  },
]

const transitionSteps = [
  {
    id: 'step-1',
    step: '01',
    name: 'Environment Variable Sync',
    filename: '.env',
    language: 'env',
    description:
      "When Lovable exports, it uses its own project strings. To use your own Supabase instance, you must replace the URL and Anon Key. Remember: If it doesn't start with VITE_, React won't see it.",
    code: `# OLD LOVABLE PROJECT
# VITE_SUPABASE_URL="https://lovable-project.supabase.co"

# YOUR NEW PROJECT
VITE_SUPABASE_URL="https://wershivozpwtfnypmmrd.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGci..."`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'CLI Connection (TOML)',
    filename: 'supabase/config.toml',
    language: 'toml',
    description:
      'The config.toml file is what the "npx supabase" commands use. If the project_id here doesn\'t match your new project, migrations will fail or push to the wrong place.',
    code: `[project]
# Change this to your new ID: wershivozpwtfnypmmrd
project_id = "wershivozpwtfnypmmrd"

[api]
port = 54321`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'CLI Authentication',
    filename: 'terminal',
    language: 'bash',
    description:
      'Before linking your new project, you must clear out any old Lovable or cached sessions. Logging out and logging back in ensures you are authenticated under your own Supabase account.',
    code: `npx supabase logout
npx supabase login`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'Linking & Pushing',
    filename: 'terminal',
    language: 'bash',
    description:
      'You must "handshake" your local folder with the remote project. "Link" establishes the connection; "db push" executes the SQL files in your migrations folder to build your tables on the live database.',
    code: `npx supabase link --project-ref wershivozpwtfnypmmrd
npx supabase db push`,
  },
  {
    id: 'step-5',
    step: '05',
    name: 'Injecting Payment Secrets',
    filename: 'terminal',
    language: 'bash',
    description:
      'Your Supabase Edge Functions need secure access to your PayPal credentials to process payments. We use the secrets command to inject them directly into your Supabase cloud securely (never hardcode these!).',
    code: `npx supabase secrets set PAYPAL_CLIENT_ID="your_paypal_client_id"
npx supabase secrets set PAYPAL_SECRET="your_paypal_secret"`,
  },
  {
    id: 'step-6',
    step: '06',
    name: 'Deploying Edge Functions',
    filename: 'terminal',
    language: 'bash',
    description:
      'Finally, push your local Edge Functions to the cloud. This deploys the PayPal logic to Supabase so your frontend can securely create and capture payment orders.',
    code: `npx supabase functions deploy create-paypal-order
npx supabase functions deploy capture-paypal-order`,
  },
]

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

      <div className="lg:col-span-9 bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30">
        <div className="flex items-center justify-between px-5 py-3 bg-[#111] border-b border-[#1A1A1A]">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            {item.filename}
          </span>
          <div className="flex gap-2">
            {['code', 'explain'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-3 py-1 text-[10px] font-bold rounded transition-all uppercase',
                  activeTab === tab
                    ? 'bg-orange-600 text-white'
                    : 'bg-[#1A1A1A] text-gray-500 hover:text-white'
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
                  background: '#050505',
                }}>
                {item.code}
              </SyntaxHighlighter>
            </div>
          ) : (
            <div className="p-10 min-h-[200px] flex flex-col justify-center">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-orange-600/10 rounded-2xl">
                  <Info className="text-orange-500" size={32} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-3">The Logic</h4>
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

export default function CompleteHandoverGuide() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* 1. TOP EXPLAINER SECTION: THE ANATOMY */}
      <section className="max-w-6xl mx-auto px-6 pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold mb-8 uppercase tracking-widest">
          <AlertTriangle size={14} /> Migration Required
        </div>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">
          Decoupling <span className="text-orange-600 text-6xl md:text-8xl">Lovable</span>
        </h1>
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl p-8 md:p-12 mb-20 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight flex items-center gap-3">
            <Box className="text-orange-500" /> What's inside the code?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-3xl">
            When you clone a repo from Lovable, you are inheriting a fully configured{' '}
            <strong>Vite + React + Supabase</strong> stack. However, the project is still
            "hard-coded" to Lovable's cloud database. To take control, you must swap the identity of
            the project in three specific locations: the Frontend, the CLI, and the Cloud.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {anatomyData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 bg-[#111] rounded-2xl border border-white/5">
                <div className="p-3 bg-white/5 w-fit rounded-xl">{item.icon}</div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE STEPS SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-black uppercase italic mb-16 flex items-center gap-4">
          <Settings className="text-orange-600" /> Execution Steps
        </h2>
        {transitionSteps.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}

        {/* 3. FINAL CTA */}
        <div className="mt-20 p-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent rounded-3xl text-center">
          <div className="bg-[#050505] rounded-[23px] p-12 border border-white/5">
            <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tight">
              System Ready
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Once these files are saved, restart your server. You are no longer running an
              AI-managed site; you are running a professional production build.
            </p>
            <button className="px-10 py-4 bg-orange-600 text-white rounded-xl font-black uppercase text-sm hover:scale-105 transition-all flex items-center gap-2 mx-auto">
              <RefreshCw size={18} /> Rebuild Project
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.4em]">
          &copy; 2026 UNCTRAIN ECOSYSTEM // BIG MOLETTE STANDARDS
        </p>
      </footer>
    </div>
  )
}
