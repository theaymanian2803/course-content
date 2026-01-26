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
  Server,
  Terminal,
  Settings,
  Zap,
  Box,
  Code2,
} from 'lucide-react'

// --- PRISMA V7 DATA STRUCTURE ---
const PRISMA_STEPS = [
  {
    id: 'step-1',
    step: '01',
    name: 'Engine Core & Drivers',
    filename: 'terminal',
    language: 'bash',
    description:
      'In Prisma v7, the Rust engine is removed for better performance and smaller builds. We must install the Prisma Client, the PG adapter for communication, and the PG driver itself.',
    code: `npm install @prisma/client @prisma/adapter-pg pg
npm install -D prisma tsx @types/pg`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'Model Definition',
    filename: 'prisma/schema.prisma',
    language: 'prisma',
    description:
      'Define your data architecture. In v7, the "url" property is removed from the datasource block. We set a custom output path inside the lib folder to maintain a clean Next.js structure.',
    code: `generator client {
  provider = "prisma-client"
  output   = "../lib/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model Product {
  id          String   @id @default(uuid())
  name        String
  description String
  price       Decimal
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'Global Configuration',
    filename: 'prisma.config.ts',
    language: 'typescript',
    description:
      'This file is now mandatory. It centralizes environment variables and seeding logic for the Prisma CLI, replacing the need for connection strings inside the schema file.',
    code: `import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx db/seed.ts',
  },
});`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'Singleton Adapter',
    filename: 'lib/prisma.ts',
    language: 'typescript',
    description:
      'We instantiate the Prisma Client using the PrismaPg adapter. This bridge allows the JS runtime to communicate with Neon PostgreSQL without a native binary engine.',
    code: `import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;`,
  },
  {
    id: 'step-5',
    step: '05',
    name: 'Data Seeding',
    filename: 'db/seed.ts',
    language: 'typescript',
    description:
      'Automate your database population. This script resets your product table and injects fresh data using the singleton client we created in the lib directory.',
    code: `import 'dotenv/config';
import prisma from '../lib/prisma';

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ 
    data: [
      { name: 'iPhone 15', description: 'Latest model', price: 999 },
      { name: 'Pixel 8', description: 'Google flagship', price: 799 }
    ] 
  });
  console.log('Seeded successfully!');
}

main().catch(e => { console.error(e); process.exit(1); });`,
  },
  {
    id: 'step-6',
    step: '06',
    name: 'Automated Scripts',
    filename: 'package.json',
    language: 'json',
    description:
      'Map your workflow to NPM commands. These scripts handle generating the client at the custom path, pushing schema changes to Neon, and triggering your seeder.',
    code: `{
  "scripts": {
    "postinstall": "prisma generate",
    "db:push": "prisma db push",
    "db:seed": "npx tsx ./db/seed.ts",
    "studio": "npx prisma studio"
  }
}`,
  },
]

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

const StepCard = ({ item }: { item: (typeof PRISMA_STEPS)[0] }) => {
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
          {/* ORANGE ACCENT */}
          <span className="text-5xl font-black text-orange-600/20 italic">{item.step}</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.name}</h3>
      </div>

      {/* ORANGE BORDER ON HOVER */}
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
                    ? 'bg-orange-600 text-white' // ORANGE ACTIVE TAB
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
                {/* ORANGE INFO BACKGROUND & ICON */}
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

export default function PrismaSetupGuide() {
  return (
    // ORANGE SELECTION COLOR
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        {/* ORANGE BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8">
          <Database size={14} className="animate-pulse" /> PRISMA V7 STACK SETUP
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">
          {/* ORANGE TEXT SPAN */}
          Schema <span className="text-orange-600">&</span> Seed
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Configure a Rust-free Prisma v7 environment with local generation and automated seeding
          for Next.js.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* ORANGE BUTTON & SHADOW */}
          <div className="flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20 cursor-default">
            Ready for Production <Zap size={18} />
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Terminal size={18} /> NPM RUN DB:SEED
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <Server size={18} /> NEON DB
            </div>
          </div>
        </div>
      </div>

      {/* Steps List */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        {PRISMA_STEPS.map((step) => (
          <StepCard key={step.id} item={step} />
        ))}
      </section>
    </div>
  )
}
