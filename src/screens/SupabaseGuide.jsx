import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  Database,
  CloudLightning,
  ShieldAlert,
  Terminal,
  Check,
  Copy,
  Globe,
  Key,
  Server,
  Mail,
  AlertTriangle,
  RefreshCw,
  FileSearch,
} from 'lucide-react'

const SupabaseGuide = () => {
  // State to handle copy feedback
  const [copiedState, setCopiedState] = useState({})
  // State to handle tabs
  const [activeTab, setActiveTab] = useState({
    migration: 'cli',
    functions: 'deploy',
    dns: 'resend',
    troubleshoot: 'link',
  })

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedState((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => setCopiedState((prev) => ({ ...prev, [id]: false })), 2000)
  }

  const toggleTab = (section, mode) => {
    setActiveTab((prev) => ({ ...prev, [section]: mode }))
  }

  // --- SECTION 1: DATABASE & ENV ---

  const envCode = `# 1. In your root directory, update .env
VITE_SUPABASE_PROJECT_ID="tlwbclqmbpkvtnvtrtrf"
VITE_SUPABASE_URL="https://tlwbclqmbpkvtnvtrtrf.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_key_..."

# 2. Login to Supabase CLI
npx supabase login`

  const migrationCode = `# 1. Link to the NEW project (Fixes .toml mismatch)
npx supabase link --project-ref tlwbclqmbpkvtnvtrtrf
# (Enter your DB password when prompted)

# 2. Push tables to the new remote database
npx supabase db push`

  // --- SECTION 2: EDGE FUNCTIONS ---

  const deployCode = `# 1. Deploy the function
# --no-verify-jwt is MANDATORY for public forms!
npx supabase functions deploy send-booking-email --no-verify-jwt

# If you see "401 Unauthorized", you forgot this flag.`

  const secretsCode = `# 1. Set the API key for the NEW project
# (Crucial step after linking to a new project ID)
npx supabase secrets set RESEND_API_KEY=re_123456789

# 2. Verify it exists
npx supabase secrets list`

  // --- SECTION 3: DNS & RESEND ---

  const dnsRecords = `# HOSTINGER DNS CONFIGURATION

# Record 1: DKIM (Authentication)
Type:  TXT
Name:  resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQ...
TTL:   3600

# Record 2: SPF (Permission)
Type:  TXT
Name:  @  (or leave blank)
Value: v=spf1 include:resend.com ~all
TTL:   3600

# Record 3: MX (Mail Server)
Type:  MX
Name:  send
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10`

  const emailCode = `// Update index.ts after DNS verification

// ❌ OLD (Test Mode - Only sends to you)
from: "UncAcademyCode <onboarding@resend.dev>",

// ✅ NEW (Production Mode - Sends to clients)
from: "UncAcademy <bookings@mdinadesigner.com>",`

  // --- SECTION 4: TROUBLESHOOTING (NEW) ---

  const linkFixCode = `# THE "WRONG PROJECT" FIX
# If deployments happen but nothing changes, your .toml 
# might be pointing to the old project (frwg...).

# 1. Force Link to the correct ID
npx supabase link --project-ref tlwbclqmbpkvtnvtrtrf

# 2. Re-Deploy Everything
npx supabase functions deploy send-booking-email --no-verify-jwt`

  const logsCode = `# IF CLI LOGS FAIL:
# 1. Go to Supabase Dashboard > Edge Functions
# 2. Click "send-booking-email"
# 3. Click the "Logs" tab
# 4. Refresh after submitting the form

# COMMON ERRORS:
# 401 Unauthorized -> Redeploy with --no-verify-jwt
# 500 Internal Server Error -> Check RESEND_API_KEY secret`

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-emerald-500/30">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Supabase Production Guide
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The complete handbook for migrating, deploying, and fixing common project mismatch
            errors.
          </p>
        </div>

        {/* ==================== STEP 1: DATABASE & ENV ==================== */}
        <section className="space-y-8">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-800/50 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Step 01: Connect & Migrate
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Project Linking
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Ensure your local environment is talking to the <strong>correct</strong> remote
              project (<code className="text-emerald-400">tlwb...</code>). This fixes the "Table not
              found" and "Wrong Project" errors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Key className="w-5 h-5 text-emerald-400" />}
              title="Env Variables"
              text="Update .env with the new URL and Anon Key. Do not use the old project credentials."
            />
            <FeatureCard
              icon={<Database className="w-5 h-5 text-cyan-400" />}
              title="Supabase Link"
              text="The most important command. It updates your local config to point to the new project ID."
            />
            <FeatureCard
              icon={<Server className="w-5 h-5 text-teal-400" />}
              title="DB Push"
              text="Uploads your 'appointments' table structure to the new empty database."
            />
          </div>

          <CodeBlock
            activeTab={activeTab.migration}
            toggleTab={(val) => toggleTab('migration', val)}
            tabs={[
              { id: 'cli', label: '1. Env Setup', icon: <Terminal className="w-3.5 h-3.5" /> },
              { id: 'push', label: '2. Link & Push', icon: <Database className="w-3.5 h-3.5" /> },
            ]}
            codes={{ cli: envCode, push: migrationCode }}
            copiedState={copiedState}
            handleCopy={handleCopy}
            blockId="migration"
          />
        </section>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* ==================== STEP 2: EDGE FUNCTIONS ==================== */}
        <section className="space-y-8">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/20 border border-amber-800/50 text-amber-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Step 02: Deploy Backend
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Functions & Secrets
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Deploying the logic that sends emails. We must enable public access and provide the
              API key.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<CloudLightning className="w-5 h-5 text-amber-400" />}
              title="Deploy Flag"
              text="Use --no-verify-jwt. Without it, Supabase blocks all requests as '401 Unauthorized'."
            />
            <FeatureCard
              icon={<Key className="w-5 h-5 text-orange-400" />}
              title="Set Secrets"
              text="The new project doesn't know your Resend Key. You must set it again explicitly."
            />
            <FeatureCard
              icon={<ShieldAlert className="w-5 h-5 text-yellow-400" />}
              title="No Verify"
              text="Crucial: This flag turns off the login requirement so guests can book appointments."
            />
          </div>

          <CodeBlock
            activeTab={activeTab.functions}
            toggleTab={(val) => toggleTab('functions', val)}
            tabs={[
              {
                id: 'deploy',
                label: '1. Deploy Command',
                icon: <CloudLightning className="w-3.5 h-3.5" />,
              },
              { id: 'secrets', label: '2. Set Secrets', icon: <Key className="w-3.5 h-3.5" /> },
            ]}
            codes={{ deploy: deployCode, secrets: secretsCode }}
            copiedState={copiedState}
            handleCopy={handleCopy}
            blockId="functions"
          />
        </section>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* ==================== STEP 3: DNS & RESEND ==================== */}
        <section className="space-y-8">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-900/20 border border-indigo-800/50 text-indigo-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Step 03: Domain Verification
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Production Email
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Switching from "Test Mode" to "Live Mode". We verify ownership of{' '}
              <code>mdinadesigner.com</code> to email anyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Globe className="w-5 h-5 text-indigo-400" />}
              title="Hostinger DNS"
              text="Add the DKIM (TXT), SPF (TXT), and MX records provided by Resend to your domain."
            />
            <FeatureCard
              icon={<Check className="w-5 h-5 text-purple-400" />}
              title="Verification"
              text="Wait for the green checkmark in Resend. TTL 3600 helps it propagate in ~1 hour."
            />
            <FeatureCard
              icon={<Mail className="w-5 h-5 text-blue-400" />}
              title="Update Code"
              text="Change the 'from' address in index.ts to use your verified domain."
            />
          </div>

          <CodeBlock
            activeTab={activeTab.dns}
            toggleTab={(val) => toggleTab('dns', val)}
            tabs={[
              { id: 'resend', label: 'DNS Records', icon: <Globe className="w-3.5 h-3.5" /> },
              {
                id: 'code',
                label: 'Update index.ts',
                icon: <FileSearch className="w-3.5 h-3.5" />,
              },
            ]}
            codes={{ resend: dnsRecords, code: emailCode }}
            copiedState={copiedState}
            handleCopy={handleCopy}
            blockId="dns"
          />
        </section>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* ==================== STEP 4: TROUBLESHOOTING (NEW) ==================== */}
        <section className="space-y-8">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-900/20 border border-red-800/50 text-red-400 text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Step 04: Troubleshooting
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Fixing Errors
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              If your booking form is still failing, it's likely a Project ID mismatch or a missing
              secret.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<RefreshCw className="w-5 h-5 text-red-400" />}
              title="Force Link"
              text="If .toml has the old ID, deployments go to the wrong place. Run 'link' to fix it."
            />
            <FeatureCard
              icon={<FileSearch className="w-5 h-5 text-rose-400" />}
              title="Check Logs"
              text="CLI logs empty? Use the Dashboard > Edge Functions > Logs tab to see the real error."
            />
            <FeatureCard
              icon={<ShieldAlert className="w-5 h-5 text-orange-400" />}
              title="401 vs 500"
              text="401 = Forgot '--no-verify-jwt'. 500 = Missing API Key or Domain Error."
            />
          </div>

          <CodeBlock
            activeTab={activeTab.troubleshoot}
            toggleTab={(val) => toggleTab('troubleshoot', val)}
            tabs={[
              {
                id: 'link',
                label: 'Fix Wrong Project',
                icon: <RefreshCw className="w-3.5 h-3.5" />,
              },
              { id: 'logs', label: 'How to Debug', icon: <FileSearch className="w-3.5 h-3.5" /> },
            ]}
            codes={{ link: linkFixCode, logs: logsCode }}
            copiedState={copiedState}
            handleCopy={handleCopy}
            blockId="troubleshoot"
          />
        </section>
      </div>
    </div>
  )
}

// --- Sub-Components ---

const CodeBlock = ({ activeTab, toggleTab, tabs, codes, copiedState, handleCopy, blockId }) => (
  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0F0F0F] shadow-2xl shadow-black/50 ring-1 ring-white/5">
    {/* Toolbar */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#161616] border-b border-slate-800 gap-4">
      <div className="flex items-center gap-4 bg-slate-900/50 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => toggleTab(tab.id)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? 'bg-slate-700 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}>
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <button
        onClick={() => handleCopy(codes[activeTab], blockId)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ml-auto sm:ml-0">
        {copiedState[blockId] ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
        {copiedState[blockId] ? 'Copied!' : 'Copy'}
      </button>
    </div>

    {/* Syntax Highlighter */}
    <SyntaxHighlighter
      language={blockId === 'dns' && activeTab === 'code' ? 'typescript' : 'bash'}
      style={vscDarkPlus}
      customStyle={{
        margin: 0,
        padding: '1.5rem',
        background: 'transparent',
        fontSize: '0.9rem',
      }}
      showLineNumbers={true}
      wrapLines={true}>
      {codes[activeTab]}
    </SyntaxHighlighter>
  </div>
)

const FeatureCard = ({ icon, title, text }) => (
  <div className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-900 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-emerald-500/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">{text}</p>
      </div>
    </div>
  </div>
)

export default SupabaseGuide
