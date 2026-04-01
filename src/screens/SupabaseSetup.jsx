import { clsx } from 'clsx'
import {
  AlertTriangle,
  Box,
  Check,
  Cloud,
  Copy,
  Cpu,
  FolderTree,
  Info,
  Layers,
  Layout,
  RefreshCw,
  Settings,
} from 'lucide-react'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { twMerge } from 'tailwind-merge'

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
  {
    title: 'Cloudflare R2 Bucket',
    detail:
      'Your S3-compatible image storage. Bypasses standard storage limits and provides a lightning-fast CDN via .r2.dev public links.',
    icon: <Cloud className="text-cyan-500" />,
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

// --- NEW R2 STORAGE STEPS ---
const r2Steps = [
  {
    id: 'r2-1',
    step: '07',
    name: 'Create R2 Edge Function',
    filename: 'terminal',
    language: 'bash',
    description:
      'We need a secure backend tunnel to talk to Cloudflare. First, generate the empty function folder in your local project.',
    code: `npx supabase functions new r2-upload-url`,
  },
  {
    id: 'r2-2',
    step: '08',
    name: 'The Edge Function Code',
    filename: 'supabase/functions/r2-upload-url/index.ts',
    language: 'typescript',
    description:
      'This Deno code uses the AWS S3 SDK to generate a secure presigned upload URL for Cloudflare R2. It completely bypasses the need for the frontend browser to hold your secret Cloudflare keys.',
    code: `import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { S3Client, PutObjectCommand } from "npm:@aws-sdk/client-s3"
import { getSignedUrl } from "npm:@aws-sdk/s3-request-presigner"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('Unauthorized')

    const { fileName, contentType } = await req.json()

    const s3Client = new S3Client({
      region: "auto",
      endpoint: \`https://\${Deno.env.get("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com\`,
      credentials: {
        accessKeyId: Deno.env.get("R2_ACCESS_KEY_ID")!,
        secretAccessKey: Deno.env.get("R2_SECRET_ACCESS_KEY")!,
      },
      forcePathStyle: true,
    })

    const command = new PutObjectCommand({
      Bucket: Deno.env.get("R2_BUCKET_NAME"),
      Key: fileName,
      ContentType: contentType,
    })

    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
    const publicUrl = \`\${Deno.env.get("R2_PUBLIC_DOMAIN")}/\${fileName}\`

    return new Response(
      JSON.stringify({ uploadUrl, publicUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})`,
  },
  {
    id: 'r2-3',
    step: '09',
    name: 'R2 Secrets & Deployment',
    filename: 'terminal',
    language: 'bash',
    description:
      'Inject your Cloudflare R2 credentials into Supabase secrets and deploy the function. CRUCIAL: In the Supabase Dashboard, you must uncheck "Enforce JWT Verification" for this function so the CORS preflight request doesn\'t get blocked!',
    code: `npx supabase secrets set R2_ACCOUNT_ID="your_account_id"
npx supabase secrets set R2_BUCKET_NAME="templatewebsite"
npx supabase secrets set R2_ACCESS_KEY_ID="your_access_key"
npx supabase secrets set R2_SECRET_ACCESS_KEY="your_secret_key"
npx supabase secrets set R2_PUBLIC_DOMAIN="https://pub-xxx.r2.dev"

npx supabase functions deploy r2-upload-url`,
  },
  {
    id: 'r2-4',
    step: '10',
    name: 'Cloudflare API & CORS',
    filename: 'cloudflare-dashboard',
    language: 'json',
    description:
      'Create an API token in Cloudflare R2 with "Object Read & Write" permissions. Then, go to your Bucket Settings -> CORS Policy and paste this exact JSON to whitelist your app. Without this, your browser will block the upload.',
    code: `[
  {
    "AllowedOrigins": [
      "http://localhost:8080",
      "https://your-production-domain.com"
    ],
    "AllowedMethods": [
      "GET",
      "PUT",
      "POST",
      "DELETE",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": []
  }
]`,
  },
]

// --- NEW FRONTEND INTEGRATION STEPS ---
const frontendSteps = [
  {
    id: 'fe-1',
    step: '11',
    name: 'The React Uploader Component',
    filename: 'src/components/admin/R2ImageUpload.tsx',
    language: 'tsx',
    description:
      'This component handles the secure 3-step sequence: 1) Ask Supabase for a Cloudflare ticket, 2) Upload the file directly to Cloudflare, 3) Return the public image URL directly back to the form.',
    code: `import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, UploadCloud, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface R2ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export function R2ImageUpload({ value, onChange }: R2ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      // Generate secure random filename
      const fileExt = file.name.split('.').pop();
      const fileName = \`\${Math.random().toString(36).substring(2, 15)}-\${Date.now()}.\${fileExt}\`;

      // 1. Ask Edge Function for Upload Ticket
      const { data, error } = await supabase.functions.invoke("r2-upload-url", {
        body: { fileName, contentType: file.type },
      });
      if (error) throw new Error(error.message);

      // 2. Upload straight to Cloudflare R2
      const uploadResponse = await fetch(data.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!uploadResponse.ok) throw new Error("Failed to upload to R2");

      // 3. Update form with public URL
      onChange(data.publicUrl);

    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
      {value ? (
        <div className="relative w-full h-48 rounded-xl overflow-hidden group border border-border/50">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button type="button" variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
               {isUploading ? <Loader2 className="animate-spin w-4 h-4" /> : "Replace"}
            </Button>
            <Button type="button" variant="destructive" size="sm" onClick={() => onChange("")}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div onClick={() => !isUploading && fileInputRef.current?.click()} className="w-full h-48 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-muted/10 transition-colors">
           {isUploading ? <Loader2 className="animate-spin text-primary w-8 h-8" /> : <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />}
        </div>
      )}
    </div>
  );
}`,
  },
  {
    id: 'fe-2',
    step: '12',
    name: 'Form Integration',
    filename: 'src/components/admin/TemplateForm.tsx',
    language: 'tsx',
    description:
      'Finally, import your new component into the admin form. Simply replace the standard text `<Input />` with `<R2ImageUpload />`. Because it handles its own internal state and just passes back a string URL, it plugs seamlessly into your existing form.',
    code: `// 1. Import the new R2 Image Uploader at the top
import { R2ImageUpload } from './R2ImageUpload'

// 2. Replace your standard text input with the new component:
<div className="space-y-2 md:col-span-2">
  <Label>Template Image *</Label>
  <div className="max-w-md">
    <R2ImageUpload
      value={imageUrl}
      onChange={(newUrl) => {
        setImageUrl(newUrl)
        // Clear validation errors automatically
        if (errors.image_url) {
          setErrors((prev) => ({ ...prev, image_url: '' }))
        }
      }}
    />
  </div>
  {errors.image_url && (
    <p className="text-sm text-destructive">{errors.image_url}</p>
  )}
</div>`,
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
                  <p className="text-gray-400 leading-relaxed text-base max-w-2xl whitespace-pre-line">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <Settings className="text-orange-600" /> Core Environment Setup
        </h2>

        {transitionSteps.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}

        {/* --- NEW R2 STORAGE HEADER & STEPS --- */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-black uppercase italic flex items-center gap-4">
            <Cloud className="text-cyan-500" /> Cloudflare R2 Backend Setup
          </h2>
          <div className="h-px w-full bg-white/10 mt-6"></div>
        </div>

        {r2Steps.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}

        {/* --- NEW FRONTEND HEADER & STEPS --- */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-black uppercase italic flex items-center gap-4">
            <Layout className="text-purple-500" /> React Frontend Integration
          </h2>
          <div className="h-px w-full bg-white/10 mt-6"></div>
        </div>

        {frontendSteps.map((step) => (
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
              AI-managed site; you are running a professional, scalable production build.
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
