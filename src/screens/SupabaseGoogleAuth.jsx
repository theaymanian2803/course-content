import { clsx } from 'clsx'
import {
  AlertTriangle,
  Box,
  Check,
  Cloud,
  Copy,
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
    title: 'Google Cloud Console',
    detail:
      'The source of truth for your OAuth 2.0 application. This is where you generate your Client ID and Client Secret, and whitelist your safe domains.',
    icon: <Cloud className="text-blue-500" />,
  },
  {
    title: 'Supabase Auth',
    detail:
      'Acts as the middleman. It securely holds your Google Secret, handles the complex OAuth handshake, and mints JWTs for your React frontend.',
    icon: <Settings className="text-green-500" />,
  },
  {
    title: 'The Callback URL',
    detail:
      'The crucial bridge. After Google authenticates a user, it securely redirects them back to your specific database project callback.',
    icon: <RefreshCw className="text-purple-500" />,
  },
  {
    title: 'React Context',
    detail:
      'The frontend memory. It listens for Supabase session changes and broadcasts the user state (logged in or out) to your entire application.',
    icon: <Layers className="text-cyan-500" />,
  },
]

const cloudSteps = [
  {
    id: 'gcp-1',
    step: '01',
    name: 'GCP: OAuth Consent Screen',
    filename: 'console.cloud.google.com',
    language: 'text',
    description:
      'Before Google lets you generate keys, you must configure the consent screen (the pop-up users see when they log in). Open Google Cloud Console, select your project, and navigate using the left sidebar.',
    code: `NAVIGATION: 
APIs & Services > OAuth consent screen

ACTIONS:
1. Select User Type: 'External' -> Click Create.
2. App info: Enter your App Name and User Support Email.
3. App domain: Add links to your homepage and privacy policy if you have them.
4. Authorized domains: Add 'supabase.co' 
5. Developer contact info: Enter your email.
6. Click 'Save and Continue' all the way to the end.`,
  },
  {
    id: 'gcp-2',
    step: '02',
    name: 'GCP: Create Credentials',
    filename: 'console.cloud.google.com',
    language: 'json',
    description:
      'Now you generate the actual API keys that Supabase needs to talk to Google. Keep this tab open when you are done, because you will need to copy these strings.',
    code: `NAVIGATION:
APIs & Services > Credentials

ACTIONS:
1. Click the "+ CREATE CREDENTIALS" button at the top.
2. Select "OAuth client ID".
3. Application Type: Select "Web application".
4. Name: e.g., "Supabase Auth Web".
5. Click Create.

Google will pop up a modal with two crucial keys:
{
  "Client ID": "797999789620-ntp...apps.googleusercontent.com",
  "Client Secret": "GOCSPX-..."
}`,
  },
  {
    id: 'supa-1',
    step: '03',
    name: 'Supabase: Enable Provider',
    filename: 'supabase.com/dashboard',
    language: 'text',
    description:
      'Open a new tab, go to your Supabase Project dashboard. You are going to paste the keys from Google here, and grab the Callback URL to take back to Google.',
    code: `NAVIGATION:
Authentication (Lock Icon in left sidebar) > Providers > Google

ACTIONS:
1. Toggle ON "Enable Sign in with Google".
2. Paste your Google 'Client ID'.
3. Paste your Google 'Client Secret'.
4. Toggle ON "Skip nonce checks" (Important for this React setup).
5. Toggle ON "Allow users without an email" (Optional).
6. Copy the "Callback URL (for OAuth)" at the bottom.
   (It looks like: https://[REF].supabase.co/auth/v1/callback)
7. Click the green SAVE button.`,
  },
  {
    id: 'gcp-3',
    step: '04',
    name: 'GCP: Whitelist URIs',
    filename: 'console.cloud.google.com',
    language: 'text',
    description:
      'Go back to your Google Cloud tab. Google blocks login attempts from unknown URLs for security. You must whitelist your local development environment and your Supabase callback URL.',
    code: `NAVIGATION:
APIs & Services > Credentials > Click on your Web Client ID to edit it.

ACTIONS:
1. Under "Authorized JavaScript origins", click + ADD URI:
   - http://localhost:8080
   - (Add your production domain here later, e.g., https://myapp.com)

2. Under "Authorized redirect URIs", click + ADD URI:
   - Paste the Supabase Callback URL you just copied.
   - https://[REF].supabase.co/auth/v1/callback

3. Click SAVE at the bottom.`,
  },
]

// --- FRONTEND INTEGRATION STEPS ---
const frontendSteps = [
  {
    id: 'fe-1',
    step: '05',
    name: 'The Auth Hook Engine',
    filename: 'src/hooks/useAuth.jsx',
    language: 'jsx',
    description:
      'This is the engine of your frontend auth. It creates a React Context to hold the user session, sets up an active listener for login events, and exposes the signInWithGoogle function.',
    code: `import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const AuthContext = createContext({
  session: null,
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user: session?.user ?? null, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);`,
  },
  {
    id: 'fe-2',
    step: '06',
    name: 'The Login Component',
    filename: 'src/components/Login.jsx',
    language: 'jsx',
    description:
      'Finally, consume the useAuth hook inside your login page. Tie the signInWithGoogle function to the onClick handler of your button to trigger the OAuth flow.',
    code: `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm border-border/50">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="font-mono text-2xl tracking-tight text-primary">
            App Login
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGoogleLogin} className="w-full gap-2" size="lg">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;`,
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

export default function AuthHandoverGuide() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* 1. TOP EXPLAINER SECTION: THE ANATOMY */}
      <section className="max-w-6xl mx-auto px-6 pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold mb-8 uppercase tracking-widest">
          <AlertTriangle size={14} /> Critical Architecture
        </div>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">
          Connecting <span className="text-orange-600 text-6xl md:text-8xl">Google Auth</span>
        </h1>
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl p-8 md:p-12 mb-20 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight flex items-center gap-3">
            <Box className="text-orange-500" /> How the system talks
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-3xl">
            Google Authentication relies on a secure handshake between three distinct environments.
            Google Cloud provides the identity verification, Supabase manages the secure session
            generation, and your React application consumes that data to render the user's state.
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
          <Settings className="text-orange-600" /> Cloud Setup Phase
        </h2>

        {cloudSteps.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}

        {/* --- NEW FRONTEND HEADER & STEPS --- */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-black uppercase italic flex items-center gap-4">
            <Layout className="text-purple-500" /> React Frontend Implementation
          </h2>
          <div className="h-px w-full bg-white/10 mt-6"></div>
        </div>

        {frontendSteps.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}

        {/* 3. FINAL CTA */}
        <div className="mt-20 p-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent rounded-3xl text-center">
          <div className="bg-[#050505] rounded-[23px] p-12 border border-white/5">
            <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tight">Auth Ready</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              With your Google Cloud App approved, your Supabase Provider active, and your React
              hook listening, your application is fully equipped to handle secure OAuth sign-ins.
            </p>
            <button className="px-10 py-4 bg-orange-600 text-white rounded-xl font-black uppercase text-sm hover:scale-105 transition-all flex items-center gap-2 mx-auto">
              <RefreshCw size={18} /> Test Authentication
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
