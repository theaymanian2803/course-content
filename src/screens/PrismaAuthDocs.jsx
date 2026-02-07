import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  Database,
  Shield,
  Key,
  Server,
  LayoutTemplate,
  Check,
  Copy,
  Terminal,
  FileJson,
  Code2,
  Lock,
  ArrowRight,
  Loader2,
  Globe,
} from 'lucide-react'

const PrismaAuthDocs = () => {
  const [copiedState, setCopiedState] = useState({})
  // Added 'route' to the active tabs state
  const [activeTab, setActiveTab] = useState({
    schema: 'code',
    auth: 'code',
    route: 'code',
    actions: 'code',
    frontend: 'preview',
  })

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedState((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => setCopiedState((prev) => ({ ...prev, [id]: false })), 2000)
  }

  const toggleTab = (section, mode) => {
    setActiveTab((prev) => ({ ...prev, [section]: mode }))
  }

  // ==========================================
  // 1. DATA: PRISMA SCHEMA
  // ==========================================
  const schemaCode = `// schema.prisma

generator client {
  provider = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// The Core User Model
model User {
  id            String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name          String    @default("NO_NAME")
  email         String    @unique(map: "user_email_idx")
  password      String?   // Optional because OAuth users won't have one
  role          String    @default("user")
  image         String?
  createdAt     DateTime  @default(now()) @db.Timestamp(6)
  updatedAt     DateTime  @updatedAt
  
  // Relationships for NextAuth
  accounts      Account[]
  sessions      Session[]
}

// Required for OAuth Providers (Google, GitHub, etc.)
model Account {
  userId            String  @db.Uuid
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@id([provider, providerAccountId])
}

// Required for Database Sessions (if not using JWT)
model Session {
  sessionToken String   @id
  userId       String   @db.Uuid
  expires      DateTime @db.Timestamp(6)
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}`

  // ==========================================
  // 2. DATA: NEXT AUTH CONFIG
  // ==========================================
  const authCode = `// auth.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compareSync } from 'bcrypt-ts-edge'
import { prisma } from '@/db/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const user = await prisma.user.findFirst({
          where: { email: credentials.email as string },
        })

        if (user && user.password) {
          const isMatch = compareSync(credentials.password as string, user.password)
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            }
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      session.user.id = token.sub
      if (trigger === 'update') {
        session.user.name = user.name
      }
      return session
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)`

  // ==========================================
  // 3. DATA: THE API ROUTE HANDLER (NEW)
  // ==========================================
  const routeCode = `// app/api/auth/[...nextauth]/route.ts

import { handlers } from '@/auth'

// We export the GET and POST handlers from our auth configuration.
// Next.js App Router will use these to handle requests to /api/auth/*
export const { GET, POST } = handlers`

  // ==========================================
  // 4. DATA: SERVER ACTIONS
  // ==========================================
  const actionCode = `// lib/actions/user.actions.ts
'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

export async function signInWithCredentials(
  prevState: unknown, 
  formData: FormData
) {
  try {
    const email = formData.get('email')
    const password = formData.get('password')

    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    return { success: true, message: 'Signed in successfully' }
  } catch (error: any) {
    if (error?.digest?.includes('NEXT_REDIRECT')) {
      throw error
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { success: false, message: 'Invalid email or password' }
        default:
          return { success: false, message: error.message }
      }
    }

    return { success: false, message: 'Something went wrong.' }
  }
}`

  // ==========================================
  // 5. DATA: FRONTEND UI
  // ==========================================
  const frontendCode = `// app/(auth)/sign-in/credentials-signin-form.tsx
'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CredentialsSignInForm() {
  const [state, action] = useActionState(signInWithCredentials, {
    success: false,
    message: ''
  })

  return (
    <form action={action} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          Email
        </label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="bg-slate-900 border-slate-700 text-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-slate-200">
          Password
        </label>
        <Input 
          id="password" 
          name="password" 
          type="password" 
          required 
          className="bg-slate-900 border-slate-700 text-white"
        />
      </div>

      {state.message && (
        <div className={\`p-3 rounded-md text-sm \${
          state.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
        }\`}>
          {state.message}
        </div>
      )}

      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full bg-blue-600 hover:bg-blue-500 text-white"
    >
      {pending ? 'Signing In...' : 'Sign In'}
    </Button>
  )
}`

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* ==================== HEADER ==================== */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-800/50 text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Fullstack Authentication
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Prisma & NextAuth Workflow
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            A complete guide to connecting your Postgres database to a secure authentication system
            using Server Actions and modern React hooks.
          </p>
        </div>

        {/* ==================== SECTION 1: DATABASE ==================== */}
        <section className="space-y-8">
          <SectionHeader
            title="1. The Database Layer"
            description="Defining the relationships between Users, Accounts (OAuth), and Sessions."
            icon={<Database className="w-6 h-6 text-blue-400" />}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FileJson className="w-5 h-5 text-blue-400" />}
              title="@db.Uuid"
              text={
                <span>
                  We use UUIDs for IDs instead of integers for better security and scalability.{' '}
                  <code className="text-blue-300 bg-blue-900/30 px-1 rounded">
                    gen_random_uuid()
                  </code>{' '}
                  handles generation.
                </span>
              }
            />
            <FeatureCard
              icon={<LayoutTemplate className="w-5 h-5 text-purple-400" />}
              title="NextAuth Models"
              text="The Account and Session models are strictly required by the PrismaAdapter. If they are missing, OAuth logins will fail."
            />
            <FeatureCard
              icon={<Shield className="w-5 h-5 text-emerald-400" />}
              title="The Password Field"
              text={
                <span>
                  It is optional (
                  <code className="text-emerald-300 bg-emerald-900/30 px-1 rounded">String?</code>)
                  because users signing in via Google won't have a password stored in your DB.
                </span>
              }
            />
          </div>

          <CodeBlock
            code={schemaCode}
            language="prisma"
            id="schema"
            copied={copiedState.schema}
            onCopy={() => handleCopy(schemaCode, 'schema')}
          />
        </section>

        <Separator />

        {/* ==================== SECTION 2: AUTH CONFIG ==================== */}
        <section className="space-y-8">
          <SectionHeader
            title="2. The Configuration"
            description="Setting up the Strategy, Provider, and Hash Verification."
            icon={<Shield className="w-6 h-6 text-indigo-400" />}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Key className="w-5 h-5 text-indigo-400" />}
              title="Credentials Provider"
              text="This allows users to login with Email/Password. We manually fetch the user from Prisma and use bcrypt to compare the hashed password."
            />
            <FeatureCard
              icon={<Lock className="w-5 h-5 text-orange-400" />}
              title="Session Strategy: JWT"
              text="We explicitly set the strategy to JWT. This avoids hitting the database on every single page load, making the app much faster."
            />
          </div>

          <CodeBlock
            code={authCode}
            language="typescript"
            id="auth"
            copied={copiedState.auth}
            onCopy={() => handleCopy(authCode, 'auth')}
          />
        </section>

        <Separator />

        {/* ==================== SECTION 3: THE API ROUTE (NEW) ==================== */}
        <section className="space-y-8">
          <SectionHeader
            title="3. The API Route Handler"
            description="Exposing the Auth endpoints to the browser and external providers."
            icon={<Globe className="w-6 h-6 text-pink-400" />}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<ArrowRight className="w-5 h-5 text-pink-400" />}
              title="The Catch-All Route"
              text={
                <span>
                  The filename{' '}
                  <code className="text-pink-300 bg-pink-900/30 px-1 rounded">
                    [...nextauth]/route.ts
                  </code>{' '}
                  creates a dynamic route that catches all requests to{' '}
                  <code className="text-pink-300 bg-pink-900/30 px-1 rounded">/api/auth/*</code>.
                </span>
              }
            />
            <FeatureCard
              icon={<Terminal className="w-5 h-5 text-cyan-400" />}
              title="GET & POST Handlers"
              text="Next.js App Router needs explicit exports for HTTP methods. We import these directly from our 'auth.ts' config."
            />
          </div>

          <CodeBlock
            code={routeCode}
            language="typescript"
            id="route"
            copied={copiedState.route}
            onCopy={() => handleCopy(routeCode, 'route')}
          />
        </section>

        <Separator />

        {/* ==================== SECTION 4: SERVER ACTIONS ==================== */}
        <section className="space-y-8">
          <SectionHeader
            title="4. Server Actions"
            description="Handling the form submission securely on the server."
            icon={<Server className="w-6 h-6 text-rose-400" />}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Code2 className="w-5 h-5 text-rose-400" />}
              title="No API Routes"
              text="Instead of fetching an API endpoint manually, we invoke this function directly from the form action."
            />
            <FeatureCard
              icon={<Terminal className="w-5 h-5 text-yellow-400" />}
              title="Error Handling"
              text={
                <span>
                  We catch{' '}
                  <code className="text-yellow-300 bg-yellow-900/30 px-1 rounded">AuthError</code>{' '}
                  specifically to give the user helpful feedback (e.g., 'Invalid password').
                </span>
              }
            />
            <FeatureCard
              icon={<Code2 className="w-5 h-5 text-cyan-400" />}
              title="FormData"
              text="The function accepts standard FormData, making it compatible with progressive enhancement."
            />
          </div>

          <CodeBlock
            code={actionCode}
            language="typescript"
            id="actions"
            copied={copiedState.actions}
            onCopy={() => handleCopy(actionCode, 'actions')}
          />
        </section>

        <Separator />

        {/* ==================== SECTION 5: THE FRONTEND UI ==================== */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <SectionHeader
              title="5. The Sign In Component"
              description="Connecting the UI to the Server Action using React Hooks."
              icon={<LayoutTemplate className="w-6 h-6 text-teal-400" />}
            />
            {/* Toggle Preview/Code */}
            <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-800 self-start md:self-center">
              <button
                onClick={() => toggleTab('frontend', 'preview')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab.frontend === 'preview' ? 'bg-teal-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>
                Preview UI
              </button>
              <button
                onClick={() => toggleTab('frontend', 'code')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab.frontend === 'code' ? 'bg-teal-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>
                Source Code
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<ActivityIcon className="w-5 h-5 text-teal-400" />}
              title="useActionState"
              text={
                <span>
                  (Formerly useFormState). This hook manages the return value of the server action,
                  allowing us to display error messages returned from the server.
                </span>
              }
            />
            <FeatureCard
              icon={<Loader2 className="w-5 h-5 text-pink-400" />}
              title="useFormStatus"
              text="Used inside the button component. It automatically detects when the server action is running to show a loading spinner or disable the button."
            />
          </div>

          {/* Conditional Render: Code or Preview */}
          {activeTab.frontend === 'code' ? (
            <CodeBlock
              code={frontendCode}
              language="tsx"
              id="frontend"
              copied={copiedState.frontend}
              onCopy={() => handleCopy(frontendCode, 'frontend')}
            />
          ) : (
            <div className="w-full max-w-md mx-auto mt-8 border border-slate-800 bg-[#0F0F0F] rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white">Sign In</h3>
                <p className="text-slate-400 text-sm mt-2">
                  Enter your credentials to access your account
                </p>
              </div>

              {/* VISUAL MOCKUP OF THE FORM */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Email</label>
                  <div className="relative">
                    <input
                      disabled
                      type="email"
                      value="admin@example.com"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Password</label>
                  <input
                    disabled
                    type="password"
                    value="123456"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 cursor-not-allowed"
                  />
                </div>
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                  Sign In
                </button>
                <div className="p-3 rounded-md text-sm bg-green-500/10 text-green-400 text-center border border-green-500/20">
                  Preview Only: Returns success
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

const SectionHeader = ({ title, description, icon }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
    <p className="text-slate-400 text-lg leading-relaxed pl-9 border-l-2 border-slate-800">
      {description}
    </p>
  </div>
)

const FeatureCard = ({ icon, title, text }) => (
  <div className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">{text}</p>
      </div>
    </div>
  </div>
)

const CodeBlock = ({ code, language, id, copied, onCopy }) => (
  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0F0F0F] shadow-2xl shadow-black/50 ring-1 ring-white/5 mt-6">
    <div className="flex items-center justify-between px-4 py-3 bg-[#161616] border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <span className="text-xs text-slate-500 font-mono ml-3">{id}.ts</span>
      </div>
      <button
        onClick={onCopy}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        margin: 0,
        padding: '1.5rem',
        background: 'transparent',
        fontSize: '0.9rem',
      }}
      showLineNumbers={true}
      wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  </div>
)

const Separator = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-16" />
)

// Simple icon wrapper
const ActivityIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)

export default PrismaAuthDocs
