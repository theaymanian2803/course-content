const SHADCN_SETUP_STEPS = [
  {
    id: 'step-1',
    step: '01',
    name: 'Create Vite Project',
    filename: 'terminal',
    language: 'bash',
    description:
      'Scaffold a React environment using Vite. We use the vanilla JavaScript template for this setup.',
    code: `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'Install Tailwind v4',
    filename: 'terminal',
    language: 'bash',
    description:
      'Install the latest Tailwind CSS. Version 4 is high-performance and uses a simplified engine.',
    code: `npm install tailwindcss @tailwindcss/vite`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'Vite Plugin Config',
    filename: 'vite.config.js',
    language: 'javascript',
    description:
      'Configure the Tailwind v4 Vite plugin and set up the "@" path alias for your source folder.',
    code: `import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\nimport tailwindcss from '@tailwindcss/vite'\nimport path from 'path'\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src"),\n    },\n  },\n})`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'JS Config Resolution',
    filename: 'jsconfig.json',
    language: 'json',
    description:
      'Crucial for VS Code IntelliSense. This allows your editor to understand the "@" import path.',
    code: `{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  }\n}`,
  },
  {
    id: 'step-5',
    step: '05',
    name: 'Initialize Shadcn',
    filename: 'terminal',
    language: 'bash',
    description:
      'Initialize the Shadcn UI CLI. This creates your components.json and global styles.',
    code: `npx shadcn-ui@latest init`,
  },
  {
    id: 'step-6',
    step: '06',
    name: 'Install Components',
    filename: 'terminal',
    language: 'bash',
    description:
      'Add specific components to your project. These will be added to your "@/components/ui" folder.',
    code: `npx shadcn-ui@latest add button card input accordion`,
  },
  {
    id: 'step-7',
    step: '07',
    name: 'Usage Example',
    filename: 'App.jsx',
    language: 'javascript',
    description: 'Now you can import and use your components using the clean "@" alias.',
    code: `import { Button } from "@/components/ui/button"\n\nexport default function App() {\n  return (\n    <Button variant="outline">Click Me</Button>\n  )\n}`,
  },
]
export default SHADCN_SETUP_STEPS
