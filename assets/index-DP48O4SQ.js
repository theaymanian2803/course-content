import{r as l,u as $,j as e,L as x,a as A,C as oe,T as P,G as w,b as S,X as R,M as z,t as f,c as v,H as le,d as ce,B as de,e as xe,R as I,f as me,D as k,P as pe,g as he,S as ue,O,Z as T,h as Y,i as J,E as K,k as m,l as h,m as u,v as g,I as j,A as ge,n as be,o as fe,p as ve,q as we,s as Ne,w as X,x as je,y as L,z as ye,F as b,J as D,K as C,N as ke,Q as Se,U as N,V as Z,W as Q,Y as Ce,_ as ee,$ as E,a0 as Re,a1 as ze,a2 as te,a3 as y,a4 as B,a5 as Te,a6 as Me,a7 as G,a8 as Ee,a9 as Ae,aa as Pe,ab as Ie}from"./vendor-BJ0pd6CS.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();function _(...t){return f(v(t))}const F="https://github.com/repos?q=owner%3A%40me",H=[{name:"Guide",path:"/",icon:A},{name:"Components",path:"/components",icon:oe},{name:"CLI",path:"/cli",icon:P}];function Oe(){const[t,i]=l.useState(!1),o=$();return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",children:[e.jsxs(x,{to:"/",className:"group flex items-center gap-3 relative z-10",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-orange-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"}),e.jsx("div",{className:"relative w-10 h-10 bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 transition-colors",children:e.jsx(A,{size:20,className:"text-white group-hover:text-orange-500 transition-colors"})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"font-bold tracking-tight text-lg leading-none text-white flex items-center gap-2",children:["unccode",e.jsx("span",{className:"px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/5 text-gray-400 border border-white/5",children:"v2.0"})]}),e.jsx("span",{className:"text-[10px] text-gray-500 font-medium tracking-widest mt-1 group-hover:text-orange-500 transition-colors",children:"STACK GUIDE"})]})]}),e.jsx("div",{className:"hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 absolute left-1/2 -translate-x-1/2",children:H.map(a=>{const s=o.pathname===a.path,n=a.icon;return e.jsxs(x,{to:a.path,className:_("px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2",s?"bg-[#111] text-white shadow-sm ring-1 ring-white/10":"text-gray-400 hover:text-white hover:bg-white/5"),children:[e.jsx(n,{size:12,className:_(s?"text-orange-500":"opacity-50")}),a.name]},a.name)})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("a",{href:F,target:"_blank",rel:"noreferrer",className:"hidden md:flex group relative items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-orange-500 hover:text-white transition-all overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"}),e.jsx(w,{size:16}),e.jsx("span",{children:"get Repos"}),e.jsx(S,{size:14,className:"opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"})]}),e.jsx("button",{onClick:()=>i(!t),className:"md:hidden p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg",children:t?e.jsx(R,{size:20}):e.jsx(z,{size:20})})]})]})}),t&&e.jsx("div",{className:"fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[H.map(a=>{const s=a.icon;return e.jsxs(x,{to:a.path,onClick:()=>i(!1),className:"flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-lg font-medium text-gray-200 hover:bg-white/10 hover:border-orange-500/30 transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:20,className:"text-orange-500"}),a.name]}),e.jsx(S,{size:16,className:"text-gray-600"})]},a.name)}),e.jsxs("a",{href:F,target:"_blank",rel:"noreferrer",className:"mt-4 flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-orange-500 hover:text-white transition-colors",children:[e.jsx(w,{size:18})," Clone Repo"]})]})})]})}function M(...t){return f(v(t))}const Le=[{name:"Shadcn Setup",path:"/setup",icon:ce},{name:"libraries",path:"/libraries",icon:de},{name:"Git Workflow",path:"/git",icon:xe},{name:"Reset Git",path:"/git/reset",icon:I},{name:"Github Hosting",path:"/git/hosting",icon:me},{name:"Prisma DB",path:"/prisma",icon:k},{name:"Components",path:"/components",icon:k},{name:"landingPages",path:"/fullpages",icon:k}];function De(){const[t,i]=l.useState(!1),o=$();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:hidden sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4 flex justify-between items-center",children:[e.jsxs("span",{className:"font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2",children:[e.jsx(le,{size:16,className:"text-orange-600 fill-orange-600/20"}),"Modules"]}),e.jsx("button",{onClick:()=>i(!t),className:"p-2 bg-[#111] rounded-lg border border-white/10 text-gray-400 hover:text-white",children:t?e.jsx(R,{size:20}):e.jsx(z,{size:20})})]}),e.jsxs("aside",{className:M("fixed inset-y-0 left-0 z-30 w-64 bg-[#050505] border-r border-white/5 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-80px)] md:sticky md:top-20",t?"translate-x-0":"-translate-x-full"),children:[e.jsx("div",{className:"p-6 border-b border-white/5 md:hidden",children:e.jsxs("h2",{className:"text-lg font-black italic uppercase tracking-tighter text-white",children:["Nav",e.jsx("span",{className:"text-orange-600",children:"igation"})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2",children:[e.jsx("div",{className:"px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600",children:"Development"}),Le.map(a=>{const s=o.pathname===a.path,n=a.icon;return e.jsxs(x,{to:a.path,onClick:()=>i(!1),className:M("group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 border border-transparent",s?"bg-[#111] text-white border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]":"text-gray-500 hover:text-gray-300 hover:bg-white/5"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{size:16,className:M("transition-colors",s?"text-orange-500":"text-gray-600 group-hover:text-gray-400")}),e.jsx("span",{children:a.name})]}),s&&e.jsx(S,{size:14,className:"text-orange-600 animate-in fade-in slide-in-from-left-2"})]},a.name)})]}),e.jsx("div",{className:"p-4 border-t border-white/5 bg-black/20",children:e.jsxs("div",{className:"px-4 py-3 rounded-xl bg-orange-600/5 border border-orange-500/10 flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-orange-500 animate-pulse"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[10px] font-bold text-orange-500 uppercase",children:"System Status"}),e.jsx("span",{className:"text-[10px] text-gray-500 font-medium",children:"v2.4.0 Stable"})]})]})})]}),t&&e.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden",onClick:()=>i(!1)})]})}function Be(){const[t,i]=l.useState(!0);return e.jsxs("div",{className:"min-h-screen w-full bg-black/90 text-white selection:bg-orange-500/30 font-body",children:[e.jsx(Oe,{}),e.jsxs("main",{className:"w-full pt-28 pb-12",children:[e.jsxs("div",{className:"w-full px-6 md:px-12 mb-8 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-4xl font-extrabold tracking-tight md:text-5xl font-display uppercase",children:["Start"," ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",children:"Navigating"})]}),e.jsx("p",{className:"text-stone-400 mt-2 text-sm",children:"Select your preferences to find the perfect setup."})]}),e.jsxs("button",{onClick:()=>i(!t),className:`
              group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300
              ${t?"bg-orange-500/10 border-orange-500/50 text-orange-400":"bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-white"}
            `,children:[t?e.jsx(pe,{className:"w-5 h-5 transition-transform group-hover:-translate-x-1"}):e.jsx(he,{className:"w-5 h-5 transition-transform group-hover:translate-x-1"}),e.jsx("span",{className:"font-bold text-sm tracking-wide uppercase",children:t?"Hide Filters":"Show Filters"}),!t&&e.jsx(ue,{className:"w-4 h-4 ml-2 opacity-50"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-0 items-start w-full px-4 md:px-8 relative transition-all",children:[e.jsx("aside",{className:`
              flex-shrink-0 sticky top-32 z-40 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${t?"w-full md:w-72 opacity-100 mr-8":"w-0 opacity-0 mr-0"}
            `,children:e.jsx("div",{className:"w-full md:w-72",children:e.jsx(De,{})})}),e.jsxs("section",{className:"flex-1 w-full min-w-0 bg-[#0f0b0a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-50"}),e.jsx(O,{})]})]})]})]})}const U="https://github.com/theaymanian2803/react-shadcn-tailwindcss-setup",Ge=[{id:"step-1",step:"01",name:"Project Initialization",filename:"terminal",language:"bash",description:"Start by creating a new Vite project using the React template. We also install the core dependencies for Tailwind CSS and the Lucide icon library.",code:`npm create vite@latest my-app -- --template react
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`},{id:"step-2",step:"02",name:"Path Configuration",filename:"vite.config.js",language:"javascript",description:'Shadcn UI requires path aliases to work correctly. Update your vite config to resolve "@" to your source directory.',code:`import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`},{id:"step-3",step:"03",name:"The CLI Init",filename:"terminal",language:"bash",description:"Run the Shadcn initialization command. This wizard will ask you questions about your style preferences and automatically configure your components.json.",code:"npx shadcn@latest init"},{id:"step-4",step:"04",name:"Structure Check",filename:"jsconfig.json",language:"json",description:"Ensure your compiler options are set up to understand the path aliases. This file helps your IDE provide intelligent autocompletion.",code:`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`},{id:"step-5",step:"05",name:"Add Components",filename:"terminal",language:"bash",description:"You are now ready to add components. Shadcn uses a copy-paste architecture via CLI. Let's add a Button to test the setup.",code:"npx shadcn@latest add button"}];function _e(...t){return f(v(t))}const Fe=({item:t})=>{const[i,o]=l.useState("code"),[a,s]=l.useState(!1),n=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(r=>e.jsx("button",{onClick:()=>o(r),className:_e("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",i===r?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:r},r))})]}),e.jsx("div",{className:"relative",children:i==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:n,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:a?e.jsx(m,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(j,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function He(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(T,{size:14})," TAILWIND V4 + REACT 19"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Modern ",e.jsx("span",{className:"text-orange-600",children:"JS"})," Stack"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"The professional setup for building high-speed React applications with Tailwind v4 and Shadcn components."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:U,className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["Go to Repository ",e.jsx(w,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(Y,{size:18})," JS VERSION"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(J,{size:18})," VITE 6"]})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:[Ge.map(t=>e.jsx(Fe,{item:t},t.id)),e.jsx("div",{className:"mt-20 p-px bg-linear-to-r from-transparent via-orange-600/50 to-transparent rounded-3xl",children:e.jsxs("div",{className:"bg-[#0A0A0A] rounded-[23px] p-12 text-center border border-white/5",children:[e.jsx("h2",{className:"text-4xl font-black uppercase italic mb-4",children:"Launch Environment"}),e.jsx("p",{className:"text-gray-400 mb-8 max-w-lg mx-auto",children:"Ready to start? Visit the GitHub repository to clone the full template or explore the documentation."}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsxs("a",{href:U,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 px-10 py-4 bg-white text-black rounded-xl font-black uppercase text-sm hover:bg-orange-600 hover:text-white transition-all shadow-xl",children:["View on GitHub ",e.jsx(K,{size:18})]}),e.jsxs(x,{to:"/components",className:"flex items-center gap-2 px-10 py-4 bg-[#1A1A1A] border border-[#333] rounded-xl font-black uppercase text-sm hover:bg-[#222] transition-all",children:["Browse UI Components ",e.jsx(S,{size:18})]})]})]})})]}),e.jsx("footer",{className:"py-12 border-t border-white/5 text-center",children:e.jsx("p",{className:"text-gray-600 text-[10px] uppercase font-bold tracking-[0.4em]",children:"© 2026 unccode stack // for experimental web only"})})]})}function Ue(){return e.jsx("div",{children:e.jsx(He,{})})}const We=[{name:"Framer Motion",url:"https://www.framer.com/motion/",icon:T,description:'The standard for React animations. It uses a declarative syntax that feels incredibly "React-like".',bestFor:"Complex layout transitions, gestures (drag/hover), and shared element animations.",install:"npm install framer-motion"},{name:"GSAP",url:"https://gsap.com/resources/React/",icon:ge,description:"The heavy lifter. A robust JavaScript toolset that creates high-performance, complex timeline animations.",bestFor:"Scroll-triggered effects (ScrollTrigger) and orchestrating multi-step sequences.",install:"npm install @gsap/react gsap"},{name:"React Spring",url:"https://www.react-spring.dev/",icon:be,description:"Physics-based animation library. It calculates motion based on spring dynamics (tension, friction) rather than duration.",bestFor:"Natural, fluid, organic feeling UI elements that react to user input.",install:"npm install @react-spring/web"},{name:"AutoAnimate",url:"https://auto-animate.formkit.com/",icon:fe,description:"Zero-config. A single line of code that automatically animates mounting, unmounting, and list reordering.",bestFor:"Drop-in smooth transitions for lists, dropdowns, and accordions with zero effort.",install:"npm install @formkit/auto-animate"},{name:"Lottie React",url:"https://lottiereact.com/",icon:A,description:"Renders Adobe After Effects animations as JSON. Perfect for vector-based, high-fidelity illustrations.",bestFor:"Displaying complex brand animations, loading spinners, or detailed illustrations.",install:"npm install lottie-react"}],qe=()=>e.jsxs("div",{className:"w-full animate-in fade-in duration-700",children:[e.jsxs("div",{className:"mb-10",children:[e.jsxs("h2",{className:"text-3xl font-bold tracking-tight text-white",children:["Animation ",e.jsx("span",{className:"text-orange-500",children:"Toolkit"})]}),e.jsx("p",{className:"mt-2 text-gray-400",children:"The top 5 libraries standardizing motion in the React ecosystem."})]}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:We.map(t=>e.jsxs("div",{className:"group relative flex flex-col rounded-xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] transition-all duration-300",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors",children:e.jsx(t.icon,{size:20})}),e.jsx("h3",{className:"text-xl font-bold text-white",children:t.name})]}),e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"text-gray-500 hover:text-white transition-colors",title:"View Documentation",children:e.jsx(K,{size:18})})]}),e.jsx("p",{className:"mb-4 text-sm text-gray-400 leading-relaxed",children:t.description}),e.jsxs("div",{className:"mb-6 rounded bg-white/5 p-3",children:[e.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-orange-400",children:"Best For"}),e.jsx("p",{className:"text-xs text-gray-300",children:t.bestFor})]}),e.jsx("div",{className:"mt-auto pt-4 border-t border-white/5",children:e.jsx("code",{className:"flex items-center justify-between rounded bg-black px-3 py-2 text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors",children:e.jsx("span",{children:t.install})})})]},t.name))})]}),Ve=[{id:"step-1",step:"01",name:"Purge Git History",filename:"powershell",language:"bash",description:'Completely disconnect the project from its previous history. This command deletes the hidden .git directory, effectively making the project "git-less" so you can start fresh.',code:"Remove-Item -Recurse -Force .git"},{id:"step-2",step:"02",name:"Re-Initialize Repo",filename:"powershell",language:"bash",description:"Create a brand new local Git repository. This generates a fresh .git folder without any of the old commit logs or remote origin links.",code:`git init
git add .`},{id:"step-3",step:"03",name:"Establish Main Branch",filename:"powershell",language:"bash",description:'Perform your first commit and rename the default branch to "main". This is the standard naming convention for modern GitHub repositories.',code:`git commit -m "Initial commit for new project"
git branch -M main`},{id:"step-4",step:"04",name:"Push to New Remote",filename:"powershell",language:"bash",description:"Link your local project to your newly created GitHub repository and push your files. Make sure to replace the placeholder URL with your actual repo link.",code:`git remote add origin https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
git push -u origin main`}],$e="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME";function Ye(...t){return f(v(t))}const Je=({item:t})=>{const[i,o]=l.useState("code"),[a,s]=l.useState(!1),n=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(r=>e.jsx("button",{onClick:()=>o(r),className:Ye("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",i===r?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:r},r))})]}),e.jsx("div",{className:"relative",children:i==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:n,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:a?e.jsx(m,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(j,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function Ke(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(I,{size:14,className:"animate-spin-slow"})," GIT RESET PROTOCOL"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["New ",e.jsx("span",{className:"text-orange-600",children:"Repo"})," Launch"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Step-by-step guide to purging local Git history and migrating your MERN project to a fresh GitHub repository."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:$e,className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["Create New Repo ",e.jsx(w,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(Y,{size:18})," WINDOWS CLI"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(J,{size:18})," MERN STACK"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:Ve.map(t=>e.jsx(Je,{item:t},t.id))})]})}function Xe(){return e.jsx("div",{children:e.jsx(Ke,{})})}const Ze=[{id:"step-1",step:"01",name:"Locate Hidden Git Folder",filename:"powershell",language:"bash",description:`Before deleting, you must verify the existence of the .git directory. Since it is a hidden system folder, a standard "ls" won't show it. Using "-Force" reveals all hidden items in the current path.`,code:"ls -Force"},{id:"step-2",step:"02",name:"Remove Repository Link",filename:"powershell",language:"bash",description:'This command forcefully and recursively removes the .git directory. "-Recurse" ensures all sub-files are deleted, and "-Force" bypasses read-only restrictions. Your project is now a regular local folder.',code:"Remove-Item -Recurse -Force .git"},{id:"step-3",step:"03",name:"Initialize Fresh Project",filename:"powershell",language:"bash",description:"Restart your version control from scratch. This creates a brand new .git folder. We then stage all current files (npm install, src, etc.) for a clean initial commit.",code:`git init
git add .`},{id:"step-4",step:"04",name:"Connect New GitHub Remote",filename:"powershell",language:"bash",description:'Create a new repo on GitHub, then link it here. We rename the branch to "main" for modern compatibility and push the code to the new destination.',code:`git commit -m "Initial commit for new project"
git branch -M main
git remote add origin <YOUR_NEW_URL>
git push -u origin main`}],Qe="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME";function et(...t){return f(v(t))}const tt=({item:t})=>{const[i,o]=l.useState("code"),[a,s]=l.useState(!1),n=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(r=>e.jsx("button",{onClick:()=>o(r),className:et("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",i===r?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:r},r))})]}),e.jsx("div",{className:"relative",children:i==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:n,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:a?e.jsx(m,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(j,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function st(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(I,{size:14,className:"animate-spin-slow"})," WINDOWS GIT MIGRATION"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Unlink ",e.jsx("span",{className:"text-orange-600",children:"&"})," Rebuild"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Purge existing version history and re-initialize your MERN project for a new GitHub destination using PowerShell."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:Qe,className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["Create New Repo ",e.jsx(w,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(ve,{size:18})," LS -FORCE"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(we,{size:18})," RM -RECURSE"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:Ze.map(t=>e.jsx(tt,{item:t},t.id))})]})}function at(){return e.jsx("div",{children:e.jsx(st,{})})}const rt=[{id:"step-1",step:"01",name:"Inject Deploy Tool",filename:"terminal",language:"bash",description:'First, we need to install the "gh-pages" utility. This package acts as a bridge, allowing us to publish our "dist" build folder directly to a specific branch on GitHub.',code:"npm install gh-pages --save-dev"},{id:"step-2",step:"02",name:"Configure Base Path",filename:"vite.config.js",language:"javascript",description:'Vite needs to know it is running in a sub-folder. We add the "base" property matching your repository name exactly. This ensures assets like CSS and images load correctly.',code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/caseit/", // MUST match repo name
})`},{id:"step-3",step:"03",name:"Update Manifest",filename:"package.json",language:"json",description:"We must tell the deployer where the site will live (homepage) and add the specific scripts to build and upload the code automatically.",code:`{
  "name": "caseit",
  "homepage": "https://theaymanian2803.github.io/caseit",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}`},{id:"step-4",step:"04",name:"Fix Router Scope",filename:"src/App.tsx",language:"tsx",description:'React Router expects to be at the root domain. Since we are in "/caseit", we must add the "basename" prop so the app understands its relative position.',code:`import { BrowserRouter, Routes, Route } from "react-router-dom";

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
);`},{id:"step-5",step:"05",name:"Push & Ignite",filename:"terminal",language:"bash",description:'Finalize the setup by committing the changes and running the deploy script. This builds the static files and sends them to the "gh-pages" branch.',code:`git add .
git commit -m "Configured for deployment"
git push
npm run deploy`}],it="https://github.com/theaymanian2803/caseit";function nt(...t){return f(v(t))}const ot=({item:t})=>{const[i,o]=l.useState("code"),[a,s]=l.useState(!1),n=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(r=>e.jsx("button",{onClick:()=>o(r),className:nt("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",i===r?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:r},r))})]}),e.jsx("div",{className:"relative",children:i==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:n,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:a?e.jsx(m,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(j,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function lt(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(Ne,{size:14,className:"animate-pulse"})," GITHUB PAGES DEPLOYMENT"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Build ",e.jsx("span",{className:"text-orange-600",children:"&"})," Broadcast"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Compile your local React environment and ship it to the edge using GitHub Pages and Vite."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:it,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["View Live Repo ",e.jsx(w,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(P,{size:18})," NPM RUN DEPLOY"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(X,{size:18})," GH-PAGES"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:rt.map(t=>e.jsx(ot,{item:t},t.id))})]})}function ct(){return e.jsx("div",{children:e.jsx(lt,{})})}const dt=[{id:"step-1",step:"01",name:"Engine Core & Drivers",filename:"terminal",language:"bash",description:"In Prisma v7, the Rust engine is removed for better performance and smaller builds. We must install the Prisma Client, the PG adapter for communication, and the PG driver itself.",code:`npm install @prisma/client @prisma/adapter-pg pg
npm install -D prisma tsx @types/pg`},{id:"step-2",step:"02",name:"Model Definition",filename:"prisma/schema.prisma",language:"prisma",description:'Define your data architecture. In v7, the "url" property is removed from the datasource block. We set a custom output path inside the lib folder to maintain a clean Next.js structure.',code:`generator client {
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
}`},{id:"step-3",step:"03",name:"Global Configuration",filename:"prisma.config.ts",language:"typescript",description:"This file is now mandatory. It centralizes environment variables and seeding logic for the Prisma CLI, replacing the need for connection strings inside the schema file.",code:`import 'dotenv/config';
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
});`},{id:"step-4",step:"04",name:"Singleton Adapter",filename:"lib/prisma.ts",language:"typescript",description:"We instantiate the Prisma Client using the PrismaPg adapter. This bridge allows the JS runtime to communicate with Neon PostgreSQL without a native binary engine.",code:`import { PrismaClient } from './generated/prisma/client';
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
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;`},{id:"step-5",step:"05",name:"Data Seeding",filename:"db/seed.ts",language:"typescript",description:"Automate your database population. This script resets your product table and injects fresh data using the singleton client we created in the lib directory.",code:`import 'dotenv/config';
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

main().catch(e => { console.error(e); process.exit(1); });`},{id:"step-6",step:"06",name:"Automated Scripts",filename:"package.json",language:"json",description:"Map your workflow to NPM commands. These scripts handle generating the client at the custom path, pushing schema changes to Neon, and triggering your seeder.",code:`{
  "scripts": {
    "postinstall": "prisma generate",
    "db:push": "prisma db push",
    "db:seed": "npx tsx ./db/seed.ts",
    "studio": "npx prisma studio"
  }
}`}];function xt(...t){return f(v(t))}const mt=({item:t})=>{const[i,o]=l.useState("code"),[a,s]=l.useState(!1),n=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(r=>e.jsx("button",{onClick:()=>o(r),className:xt("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",i===r?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:r},r))})]}),e.jsx("div",{className:"relative",children:i==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:n,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:a?e.jsx(m,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(j,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function pt(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(k,{size:14,className:"animate-pulse"})," PRISMA V7 STACK SETUP"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Schema ",e.jsx("span",{className:"text-orange-600",children:"&"})," Seed"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Configure a Rust-free Prisma v7 environment with local generation and automated seeding for Next.js."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20 cursor-default",children:["Ready for Production ",e.jsx(T,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(P,{size:18})," NPM RUN DB:SEED"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(X,{size:18})," NEON DB"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:dt.map(t=>e.jsx(mt,{item:t},t.id))})]})}function ht(){return e.jsx("div",{children:e.jsx(pt,{})})}const ut=()=>{const t=je();return e.jsx("div",{className:"flex min-h-screen w-full flex-col items-center justify-center bg-black text-white p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600",children:"404"}),e.jsx("div",{className:"bg-[#FF6A00] px-2 text-sm rounded rotate-12 absolute inline-block text-black font-bold",children:"Page Not Found"}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-2xl font-bold md:text-3xl text-gray-200",children:"Lost in Space?"}),e.jsx("p",{className:"mt-4 text-gray-400 max-w-md mx-auto",children:"The page you are looking for doesn't exist or has been moved."}),e.jsx("div",{className:"mt-2 text-xs font-mono text-gray-600",children:t?.statusText||t?.message}),e.jsx(x,{to:"/",className:"mt-8 inline-block rounded-full border border-orange-500 px-8 py-3 text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-black focus:outline-none focus:ring active:text-orange-500 transition-all duration-300",children:"Back to Home"})]})]})})},W=`import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden py-24 text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative order-last lg:order-first flex justify-center"
          >
             <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-orange-500/20 blur-[50px] rounded-full scale-75" />
              <img
                src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1742&auto=format&fit=crop"
                alt="Camera"
                className="relative z-10 w-full max-w-[500px] drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUpVariants} className="mb-6">
              <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase bg-orange-500/10 px-3 py-1 rounded">
                New Arrival
              </span>
            </motion.div>

            <motion.h2 variants={fadeUpVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              PURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                PRECISION
              </span>
            </motion.h2>

            <motion.p variants={fadeUpVariants} className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Experience the perfect balance of performance and portability. 
              Designed for creators who demand excellence in every shot.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/25">
                Pre-Order Now
              </button>
              
              {/* This button triggers the code view in the preview */}
              <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold tracking-wide">
                Get Code
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default ProductShowcase`,se=()=>{const[t,i]=l.useState(!1),[o,a]=l.useState(!1),s=()=>{navigator.clipboard.writeText(W),a(!0),setTimeout(()=>a(!1),2e3)};return t?e.jsx("div",{className:"relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center p-8",children:e.jsxs("div",{className:"w-full max-w-5xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("button",{onClick:()=>i(!1),className:"flex items-center gap-2 text-white hover:text-orange-500 transition-colors",children:[e.jsx(L,{size:20}),e.jsx("span",{className:"font-semibold",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold text-white transition-colors",children:[o?e.jsx(m,{size:16,className:"text-green-400"}):e.jsx(h,{size:16}),o?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 shadow-2xl",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",maxHeight:"80vh"},showLineNumbers:!0,children:W})})]})}):e.jsx(gt,{onGetCode:()=>i(!0)})},gt=({onGetCode:t})=>{const i=l.useRef(null),o=ye(i,{once:!0,margin:"-10% 0px"}),a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2}}},s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}};return e.jsxs("section",{ref:i,className:"relative min-h-screen flex items-center bg-neutral-950 overflow-hidden py-24 text-white",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"}),e.jsx("div",{className:"w-full px-6 md:px-12 lg:px-24 relative z-10",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-24 items-center",children:[e.jsx(b.div,{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:1},className:"relative order-last lg:order-first flex justify-center",children:e.jsxs(b.div,{animate:{y:[0,-15,0]},transition:{repeat:1/0,duration:6,ease:"easeInOut"},className:"relative z-10",children:[e.jsx("div",{className:"absolute inset-0 bg-orange-500/20 blur-[50px] rounded-full scale-75"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1742&auto=format&fit=crop",alt:"Camera",className:"relative z-10 w-full max-w-[500px] drop-shadow-2xl"})]})}),e.jsxs(b.div,{variants:a,initial:"hidden",animate:o?"visible":"hidden",className:"text-center lg:text-left",children:[e.jsx(b.div,{variants:s,className:"mb-6",children:e.jsx("span",{className:"text-orange-500 font-bold tracking-[0.2em] text-xs uppercase bg-orange-500/10 px-3 py-1 rounded",children:"New Arrival"})}),e.jsxs(b.h2,{variants:s,className:"text-5xl md:text-7xl font-bold tracking-tight mb-6",children:["PURE ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600",children:"PRECISION"})]}),e.jsx(b.p,{variants:s,className:"text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10",children:"Experience the perfect balance of performance and portability. Designed for creators who demand excellence in every shot."}),e.jsxs(b.div,{variants:s,className:"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",children:[e.jsx("button",{className:"bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/25",children:"Pre-Order Now"}),e.jsx("button",{onClick:t,className:"px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold tracking-wide",children:"Get Code"})]})]})]})})]})};function bt(){return e.jsxs("div",{className:"flex flex-wrap gap-8 p-8",children:[e.jsxs("div",{className:"group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(se,{})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"}),e.jsx(x,{to:"/sections/sectionone",className:"absolute inset-0 z-20","aria-label":"View Product Showcase"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none",children:[e.jsx("span",{className:"text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block",children:"Hero Component"}),e.jsx("h3",{className:"text-white font-display text-2xl font-bold uppercase tracking-wide",children:"Product Showcase"})]})]}),e.jsx("div",{className:"relative w-[400px] h-[300px] rounded-2xl border border-dashed border-white/10 bg-white/5 overflow-hidden flex items-center justify-center group",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-xl text-white/40 font-display uppercase tracking-widest mb-4 group-hover:text-white transition-colors",children:"Section Two"}),e.jsx(x,{to:"/sections/sectionstwo",className:"px-6 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white hover:text-black transition-colors",children:"Coming Soon"})]})})]})}function ft(){return e.jsx("div",{children:e.jsx(O,{})})}const q=`import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Calendar, Phone, MapPin, CheckCircle, ArrowRight,
  Star, Menu, X, Send, User, Mail, MessageSquare, Home, Code
} from 'lucide-react';

const CarCleaningLanding = ({ onShowCode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Exterior Detailing',
      price: 'From $50',
      description: 'Hand wash, clay bar, and premium wax for a mirror finish.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Interior Deep Clean',
      price: 'From $80',
      description: 'Steam cleaning and leather conditioning to restore that new car smell.',
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Ceramic Coating',
      price: 'From $300',
      description: 'Ultimate protection against water, dirt, and UV rays for years.',
      image: 'https://images.unsplash.com/photo-1632823471419-f45a053183aa?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="w-full relative bg-white font-sans text-slate-800 overflow-hidden rounded-xl shadow-sm border border-slate-100">
      
      {/* Navbar */}
      <header className={\`absolute top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}\`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold text-slate-900">Pristine<span className="text-blue-600">Auto</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="h-6 w-px bg-slate-200"></div>
            
            {/* Show Code Trigger */}
            <button 
              onClick={onShowCode}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              <Code size={16} /> View Source
            </button>

            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Book Now
            </a>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} /> Premium Auto Care
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Showroom shine, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                delivered to you.
              </span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              We bring the showroom shine to your driveway with eco-friendly products and expert techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Get a Quote <ArrowRight size={18} />
              </a>
              <a href="tel:+15551234567" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Phone size={18} /> (555) 123-4567
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
            <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000" alt="Car Detailing" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           {/* ... Services content ... */}
        </div>
      </section>
    </div>
  );
};
export default CarCleaningLanding;`,ae=()=>{const[t,i]=l.useState(!1),[o,a]=l.useState(!1),s=()=>{navigator.clipboard.writeText(q),a(!0),setTimeout(()=>a(!1),2e3)};return t?e.jsxs("div",{className:"w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-slate-800 shadow-2xl overflow-hidden h-auto min-h-[800px]",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6 flex-shrink-0 z-10",children:[e.jsxs("button",{onClick:()=>i(!1),className:"flex items-center gap-2 text-white hover:text-blue-400 transition-colors group",children:[e.jsx("div",{className:"bg-white/10 p-2 rounded-lg group-hover:bg-blue-600 transition-colors",children:e.jsx(L,{size:20})}),e.jsx("span",{className:"font-semibold tracking-wide",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-blue-500/20",children:[o?e.jsx(m,{size:16,className:"text-white"}):e.jsx(h,{size:16}),o?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"relative flex-grow rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]",children:e.jsx("div",{className:"absolute inset-0 overflow-auto custom-scrollbar",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",minHeight:"100%",fontSize:"14px",lineHeight:"1.6",backgroundColor:"#0d0d0d"},showLineNumbers:!0,wrapLines:!0,children:q})})})]}):e.jsx(vt,{onShowCode:()=>i(!0)})},vt=({onShowCode:t})=>{const[i,o]=l.useState(!1),[a,s]=l.useState(!1);l.useEffect(()=>{const r=()=>{o(window.scrollY>20)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=[{title:"Exterior Detailing",price:"From $50",description:"Complete hand wash, clay bar treatment, and premium wax application for a mirror-like finish.",image:"https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800"},{title:"Interior Deep Clean",price:"From $80",description:"Steam cleaning, leather conditioning, and deep vacuuming to restore that new car smell.",image:"https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800"},{title:"Ceramic Coating",price:"From $300",description:"Long-lasting paint protection that repels water, dirt, and UV rays for years.",image:"https://images.unsplash.com/photo-1632823471419-f45a053183aa?auto=format&fit=crop&q=80&w=800"}];return e.jsxs("div",{className:"w-full relative bg-white font-sans text-slate-800 overflow-x-hidden rounded-xl border border-slate-100 shadow-sm",children:[e.jsxs("header",{className:`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3":"bg-transparent py-5"}`,children:[e.jsxs("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[e.jsxs("a",{href:"#",className:"flex items-center gap-2 group",children:[e.jsx("div",{className:"bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200",children:e.jsx(D,{size:20})}),e.jsxs("span",{className:"text-xl font-bold tracking-tight text-slate-900",children:["Pristine",e.jsx("span",{className:"text-blue-600",children:"Auto"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[e.jsxs("nav",{className:"flex items-center gap-6 text-sm font-medium text-slate-600",children:[e.jsx("a",{href:"#",className:"hover:text-blue-600 transition-colors",children:"Home"}),e.jsx("a",{href:"#services",className:"hover:text-blue-600 transition-colors",children:"Services"}),e.jsx("a",{href:"#contact",className:"hover:text-blue-600 transition-colors",children:"Contact"})]}),e.jsx("div",{className:"h-6 w-px bg-slate-200"}),e.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors",children:[e.jsx(C,{size:16})," View Source"]}),e.jsx("a",{href:"#contact",className:"px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20",children:"Book Now"})]}),e.jsx("button",{className:"md:hidden text-slate-900 p-2",onClick:()=>s(!a),children:a?e.jsx(R,{size:24}):e.jsx(z,{size:24})})]}),a&&e.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-5",children:e.jsxs("nav",{className:"flex flex-col gap-4 text-center",children:[e.jsx("a",{href:"#",className:"text-slate-600 py-2 hover:text-blue-600 font-medium",onClick:()=>s(!1),children:"Home"}),e.jsx("a",{href:"#services",className:"text-slate-600 py-2 hover:text-blue-600 font-medium",onClick:()=>s(!1),children:"Services"}),e.jsx("a",{href:"#contact",className:"text-slate-600 py-2 hover:text-blue-600 font-medium",onClick:()=>s(!1),children:"Contact"}),e.jsxs("button",{onClick:()=>{t(),s(!1)},className:"text-slate-600 py-2 hover:text-blue-600 font-medium flex items-center justify-center gap-2",children:[e.jsx(C,{size:16})," View Source"]}),e.jsx("a",{href:"#contact",className:"bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-200",onClick:()=>s(!1),children:"Book Appointment"})]})})]}),e.jsx("section",{className:"relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",children:e.jsxs("div",{className:"container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center",children:[e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6",children:[e.jsx(ke,{size:14})," Premium Auto Care"]}),e.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6",children:["Showroom shine, ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500",children:"delivered to you."})]}),e.jsx("p",{className:"text-lg text-slate-500 mb-8 leading-relaxed",children:"Experience the ultimate car care service. We use eco-friendly products and advanced techniques to make your vehicle look brand new again."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs("a",{href:"#contact",className:"px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group",children:["Get a Quote"," ",e.jsx(Se,{size:18,className:"group-hover:translate-x-1 transition-transform"})]}),e.jsxs("a",{href:"tel:+15551234567",className:"px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2",children:[e.jsx(N,{size:18})," (555) 123-4567"]})]})]}),e.jsxs("div",{className:"relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000",alt:"Luxury Car Washing",className:"h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"})]})]})}),e.jsx("section",{id:"services",className:"py-24 bg-slate-50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs("div",{className:"text-center max-w-xl mx-auto mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Our Services"}),e.jsx("p",{className:"text-slate-500 text-lg",children:"Choose from our range of premium cleaning packages designed to protect and enhance your vehicle."})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:n.map((r,d)=>e.jsxs("div",{className:"group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col",children:[e.jsxs("div",{className:"h-48 overflow-hidden relative bg-slate-100",children:[e.jsx("div",{className:"absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"}),e.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})]}),e.jsxs("div",{className:"p-8 flex flex-col flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-slate-900",children:r.title}),e.jsx("span",{className:"text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm",children:r.price})]}),e.jsx("p",{className:"text-slate-500 mb-6 text-sm leading-relaxed flex-grow",children:r.description}),e.jsx("button",{className:"w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-center",children:"Learn More"})]})]},d))})]})}),e.jsx("section",{className:"py-24 bg-white",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[e.jsxs("div",{className:"relative order-last lg:order-first",children:[e.jsx("div",{className:"aspect-square rounded-3xl overflow-hidden relative z-10 shadow-2xl bg-slate-100",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&fit=crop&q=80&w=1000",alt:"Detailing worker",className:"w-full h-full object-cover"})}),e.jsx("div",{className:"absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-slate-900 mb-6",children:"Why choose Pristine?"}),e.jsx("div",{className:"space-y-8",children:[{title:"Eco-Friendly Products",desc:"We use only biodegradable soaps and water-saving techniques."},{title:"Certified Professionals",desc:"Our team is trained in the latest detailing technologies."},{title:"Satisfaction Guaranteed",desc:"If you aren't happy, we'll re-clean it for free."}].map((r,d)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"mt-1 flex-shrink-0",children:e.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600",children:e.jsx(Z,{size:24})})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-slate-900",children:r.title}),e.jsx("p",{className:"text-slate-500 mt-2 leading-relaxed",children:r.desc})]})]},d))})]})]})})}),e.jsx("section",{id:"contact",className:"py-24 bg-slate-50 relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-6 relative z-10",children:e.jsx("div",{className:"max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden",children:e.jsxs("div",{className:"grid md:grid-cols-2",children:[e.jsxs("div",{className:"p-12 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"text-3xl font-bold mb-4",children:"Book Appointment"}),e.jsx("p",{className:"text-slate-400 mb-8 text-lg",children:"Fill out the form and we'll get back to you within 24 hours to confirm your slot."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",children:e.jsx(N,{size:20,className:"text-blue-400"})}),e.jsx("span",{className:"font-medium",children:"+1 (555) 123-4567"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",children:e.jsx(Q,{size:20,className:"text-blue-400"})}),e.jsx("span",{className:"font-medium",children:"123 Detailing Blvd, NY"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",children:e.jsx(Ce,{size:20,className:"text-blue-400"})}),e.jsx("span",{className:"font-medium",children:"Mon-Sat, 8am - 6pm"})]})]})]}),e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"})]}),e.jsx("div",{className:"p-12",children:e.jsxs("form",{action:"https://formspree.io/f/YOUR_FORM_ID",method:"POST",className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-bold text-slate-700 mb-2",children:"Full Name"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(ee,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"John Doe"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-bold text-slate-700 mb-2",children:"Email Address"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(E,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"john@example.com"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-bold text-slate-700 mb-2",children:"Phone Number"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(N,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0,className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"+1 (555) 123-4567"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"neighborhood",className:"block text-sm font-bold text-slate-700 mb-2",children:"Neighborhood"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(Re,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"text",id:"neighborhood",name:"neighborhood",className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"Downtown, Westside, etc."})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-bold text-slate-700 mb-2",children:"Message"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-3 left-3 flex items-center pointer-events-none",children:e.jsx(ze,{size:18,className:"text-slate-400"})}),e.jsx("textarea",{id:"message",name:"message",rows:"4",className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none",placeholder:"How can we help you?"})]})]}),e.jsxs("button",{type:"submit",className:"w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2",children:["Send Request ",e.jsx(te,{size:18})]})]})})]})})})}),e.jsx("footer",{className:"bg-slate-950 text-slate-400 py-12 border-t border-slate-900",children:e.jsxs("div",{className:"container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(D,{size:18,className:"text-blue-600"}),e.jsx("span",{className:"font-bold text-white text-lg",children:"PristineAuto"})]}),e.jsx("p",{className:"text-sm",children:"© 2024 Pristine Auto Spa. All rights reserved."}),e.jsxs("div",{className:"flex gap-6 text-sm font-medium",children:[e.jsx(x,{to:"/privacy",className:"hover:text-white transition-colors",children:"Privacy"}),e.jsx(x,{to:"/terms",className:"hover:text-white transition-colors",children:"Terms"})]})]})})]})},V=`import React, { useState, useEffect } from 'react';
import { 
  Coffee, Wrench, Phone, Mail, MapPin, 
  Clock, CheckCircle, ArrowRight, Star, 
  Zap, ShieldCheck, Menu, X, Code, Send, User,
  Truck, ShoppingBag, Map as MapIcon, Loader2
} from 'lucide-react';

const CoffeeRepairLanding = ({ onShowCode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form State
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/xlgndygr", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); // Clear form
        setTimeout(() => setFormStatus('idle'), 5000); // Reset button after 5s
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="w-full relative bg-[#0f0b0a] text-stone-100 font-sans selection:bg-amber-600 selection:text-white overflow-hidden rounded-xl border border-stone-800 shadow-2xl">
      
      {/* --- NAVIGATION --- */}
      <nav 
        className={\`absolute top-0 left-0 right-0 z-50 transition-all duration-300 \${
          isScrolled 
            ? 'bg-[#0f0b0a]/90 backdrop-blur-md border-b border-stone-800 py-3' 
            : 'bg-transparent py-6'
        }\`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20">
              <Coffee className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-none">
                ATLAS <span className="text-amber-500">ESPRESSO</span>
              </h1>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Repair & Sales • Marrakech</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-sm font-medium text-stone-300 hover:text-white transition">Services</button>
            <button onClick={() => scrollTo('sales')} className="text-sm font-medium text-stone-300 hover:text-white transition">Shop Machines</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium text-stone-300 hover:text-white transition">Contact</button>
            
            <div className="h-6 w-px bg-stone-800"></div>

            {/* View Source Button */}
            <button 
              onClick={onShowCode}
              className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-stone-800"
            >
              <Code size={16} /> Source
            </button>

            <button 
              onClick={() => scrollTo('contact')}
              className="bg-white text-[#0f0b0a] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-stone-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-200"
            >
              Book Repair
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1c1412] border-b border-stone-800 p-6 md:hidden shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-5 z-40">
            <button onClick={() => scrollTo('services')} className="text-left text-lg font-medium text-stone-300">Services</button>
            <button onClick={() => scrollTo('sales')} className="text-left text-lg font-medium text-stone-300">Buy Machines</button>
            <button 
               onClick={() => { onShowCode(); setMobileMenuOpen(false); }}
               className="flex items-center gap-2 text-stone-400 font-medium py-2"
            >
              <Code size={18} /> View Source Code
            </button>
            <button onClick={() => scrollTo('contact')} className="bg-amber-600 text-white py-3 rounded-lg font-bold text-center mt-2">Book Appointment</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-900/50 bg-amber-950/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Serving All of Marrakech
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-white">
              Don't Let a <br />
              Broken Machine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Stop the Brew.</span>
            </h1>
            
            <p className="text-lg text-stone-400 max-w-xl leading-relaxed">
              We repair, service, and sell professional espresso machines. Whether you need a quick fix or a brand new setup, Atlas Espresso is Marrakech's trusted partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={() => scrollTo('contact')} className="group flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 transition shadow-lg shadow-amber-900/40">
                <Wrench className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Schedule Repair
              </button>
              <button onClick={() => scrollTo('sales')} className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-stone-300 border border-stone-800 hover:border-stone-600 hover:bg-stone-900 transition">
                <ShoppingBag className="h-5 w-5" /> Shop Machines
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#1c1412] border border-stone-800 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent opacity-50 blur-2xl"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
               <div className="w-32 h-32 rounded-full bg-stone-900 border-4 border-amber-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Coffee className="h-16 w-16 text-amber-600" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Expert Diagnostics</h3>
               <p className="text-stone-500">Sales & Repair in Marrakech</p>
               
               <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">Certified Technicians</p>
                    <p className="text-xs text-stone-400">Available Today</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-24 px-6 relative bg-[#16100e]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Services We Offer</h2>
              <div className="h-1 w-20 bg-amber-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-6 w-6 text-amber-400" />,
                title: "Electrical Repair",
                desc: "Heating elements, sensors, and circuit boards."
              },
              {
                icon: <Wrench className="h-6 w-6 text-amber-400" />,
                title: "Hydraulic Repair",
                desc: "Pressure leaks, flow issues, and steam wands."
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-amber-400" />,
                title: "Deep Cleaning",
                desc: "Descaling and maintenance for longevity."
              },
               {
                icon: <Truck className="h-6 w-6 text-amber-400" />,
                title: "We Come To You",
                desc: "Pickup, delivery, and on-site repair in Marrakech."
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-[#1c1412] border border-stone-800 p-8 rounded-2xl hover:border-amber-900/50 hover:bg-stone-900 transition duration-300">
                <div className="w-12 h-12 bg-stone-950 rounded-lg flex items-center justify-center mb-6 border border-stone-800 group-hover:border-amber-600/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOBILE SERVICE BANNER --- */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900/20 to-stone-900 border-y border-stone-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
                <div className="bg-amber-600 p-4 rounded-2xl shadow-lg shadow-amber-900/20 hidden md:block">
                    <Truck className="h-10 w-10 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Mobile Repair Service</h3>
                    <p className="text-stone-400 max-w-lg">Can't bring your machine to us? We offer pickup and delivery services across Marrakech, or on-site diagnosis for commercial cafes.</p>
                </div>
            </div>
            <button onClick={() => scrollTo('contact')} className="bg-white text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition whitespace-nowrap shadow-lg">
                Schedule Pickup
            </button>
        </div>
      </section>

      {/* --- SALES SECTION --- */}
      <section id="sales" className="py-24 px-6 relative bg-[#0f0b0a]">
         <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">Store</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Machines for Sale</h2>
                <p className="text-stone-400">We sell certified refurbished machines and brand new units. All come with a warranty.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        tag: "Refurbished",
                        name: "Breville Barista Express",
                        price: "4,500 DH",
                        desc: "Fully serviced, new gaskets, 6-month warranty. Perfect for home use."
                    },
                    {
                        tag: "Brand New",
                        name: "Rocket Appartamento",
                        price: "16,000 DH",
                        desc: "Compact commercial grade machine. Heat exchanger with E61 group head."
                    },
                    {
                        tag: "Used - Good",
                        name: "Nuova Simonelli Appia",
                        price: "Contact for Price",
                        desc: "2-Group commercial machine. Ideal for starting a small coffee shop."
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-[#1c1412] rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-600 transition group">
                        <div className="h-48 bg-stone-800 flex items-center justify-center relative">
                            <Coffee className="h-16 w-16 text-stone-600 group-hover:scale-110 transition duration-500" />
                            <span className={\`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full \${item.tag === 'Brand New' ? 'bg-amber-600 text-white' : 'bg-stone-700 text-stone-300'}\`}>
                                {item.tag}
                            </span>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                            <p className="text-amber-500 font-bold text-lg mb-4">{item.price}</p>
                            <p className="text-stone-400 text-sm mb-6">{item.desc}</p>
                            <button onClick={() => scrollTo('contact')} className="w-full py-3 rounded-lg border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition font-bold">
                                Inquire Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- CONTACT & MAP SECTION --- */}
      <section id="contact" className="py-24 px-6 relative bg-[#16100e]">
        <div className="container mx-auto relative z-10">
          <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
            <div className="grid lg:grid-cols-2">
              
              {/* Info Side */}
              <div className="p-10 lg:p-16 bg-gradient-to-br from-amber-900/20 to-[#1c1412] flex flex-col relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6">Visit Our Workshop</h2>
                  <p className="text-stone-400 mb-8">Located in Marrakech. Call us for mobile service or drop by.</p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-600/10 p-3 rounded-lg text-amber-500">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Phone / WhatsApp</p>
                        <a href="tel:0613591929" className="text-xl font-bold text-white hover:text-amber-500 transition">0613 59 19 29</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-amber-600/10 p-3 rounded-lg text-amber-500">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Email</p>
                        <a href="mailto:sberechou@gmail.com" className="text-lg font-bold text-white hover:text-amber-500 transition">sberechou@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  {/* MAP PLACEHOLDER */}
                  <div className="w-full h-64 bg-stone-800 rounded-2xl border border-stone-700 relative overflow-hidden group">
                     {/* Styling to look like a dark map */}
                     <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="h-10 w-10 text-amber-600 drop-shadow-lg animate-bounce" />
                     </div>
                     <div className="absolute bottom-4 left-4 bg-stone-900/90 px-4 py-2 rounded-lg text-xs font-bold text-stone-300 border border-stone-700">
                        Marrakech, Morocco
                     </div>
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <a href="https://maps.google.com/?q=Marrakech" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition">
                           Open in Google Maps
                        </a>
                     </div>
                  </div>

                </div>
              </div>

              {/* Form Side */}
              <div className="p-10 lg:p-16 bg-white">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Request Service / Buy</h3>
                <p className="text-stone-500 mb-8 text-sm">Tell us if you need a repair or want to buy a machine.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">Name</label>
                    <div className="relative">
                       <User className="absolute left-3 top-3.5 text-stone-400 h-4 w-4" />
                       <input name="name" type="text" required className="w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm" placeholder="Your Name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Phone (Required) */}
                     <div>
                        <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">Phone</label>
                        <div className="relative">
                           <Phone className="absolute left-3 top-3.5 text-stone-400 h-4 w-4" />
                           <input name="phone" type="tel" required className="w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm" placeholder="06..." />
                        </div>
                     </div>
                     {/* Email (Optional) */}
                     <div>
                        <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">Email (Optional)</label>
                        <div className="relative">
                           <Mail className="absolute left-3 top-3.5 text-stone-400 h-4 w-4" />
                           <input name="email" type="email" className="w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm" placeholder="Optional" />
                        </div>
                     </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">Service Type</label>
                    <select name="serviceType" className="w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm">
                        <option value="Workshop Repair">Repair at Workshop</option>
                        <option value="Mobile Repair">Mobile Repair (Come to me)</option>
                        <option value="Buying">Buy a Machine</option>
                        <option value="Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">Details</label>
                    <textarea name="message" className="w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition h-24 resize-none outline-none text-sm" placeholder="Machine model, issue, or request..."></textarea>
                  </div>

                  <button 
                     type="submit" 
                     disabled={formStatus === 'submitting' || formStatus === 'success'}
                     className={\`w-full font-bold py-4 rounded-xl transition duration-300 shadow-xl flex items-center justify-center gap-2 \${
                        formStatus === 'success' ? 'bg-green-600 text-white' : 
                        formStatus === 'error' ? 'bg-red-600 text-white' :
                        'bg-stone-900 text-white hover:bg-amber-600'
                     }\`}
                  >
                    {formStatus === 'submitting' && <Loader2 className="h-5 w-5 animate-spin" />}
                    {formStatus === 'success' && <><Check className="h-5 w-5" /> Message Sent!</>}
                    {formStatus === 'error' && "Error - Try Again"}
                    {formStatus === 'idle' && <>Send Request <Send size={18} /></>}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee size={18} className="text-amber-600" />
            <span className="font-bold text-white text-lg">AtlasEspresso</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Atlas Espresso. Marrakech, Morocco.</p>
        </div>
      </footer>
    </div>
  );
};
export default CoffeeRepairLanding;`,re=()=>{const[t,i]=l.useState(!1),[o,a]=l.useState(!1),s=()=>{navigator.clipboard.writeText(V),a(!0),setTimeout(()=>a(!1),2e3)};return t?e.jsxs("div",{className:"w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-stone-800 shadow-2xl overflow-hidden h-auto min-h-[800px]",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6 flex-shrink-0 z-10",children:[e.jsxs("button",{onClick:()=>i(!1),className:"flex items-center gap-2 text-white hover:text-amber-400 transition-colors group",children:[e.jsx("div",{className:"bg-white/10 p-2 rounded-lg group-hover:bg-amber-600 transition-colors",children:e.jsx(L,{size:20})}),e.jsx("span",{className:"font-semibold tracking-wide",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-amber-500/20",children:[o?e.jsx(m,{size:16,className:"text-white"}):e.jsx(h,{size:16}),o?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"relative flex-grow rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]",children:e.jsx("div",{className:"absolute inset-0 overflow-auto custom-scrollbar",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",minHeight:"100%",fontSize:"14px",lineHeight:"1.6",backgroundColor:"#0d0d0d"},showLineNumbers:!0,wrapLines:!0,children:V})})})]}):e.jsx(wt,{onShowCode:()=>i(!0)})},wt=({onShowCode:t})=>{const[i,o]=l.useState(!1),[a,s]=l.useState(!1),[n,r]=l.useState("idle");l.useEffect(()=>{const c=()=>{o(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const d=c=>{const p=document.getElementById(c);p&&(p.scrollIntoView({behavior:"smooth"}),s(!1))},ie=async c=>{c.preventDefault(),r("submitting");const p=new FormData(c.target);try{(await fetch("https://formspree.io/f/xlgndygr",{method:"POST",body:p,headers:{Accept:"application/json"}})).ok?(r("success"),c.target.reset(),setTimeout(()=>r("idle"),5e3)):r("error")}catch{r("error")}};return e.jsxs("div",{className:"w-full relative bg-[#0f0b0a] text-stone-100 font-sans selection:bg-amber-600 selection:text-white overflow-hidden rounded-xl border border-stone-800 shadow-2xl",children:[e.jsxs("nav",{className:`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-[#0f0b0a]/90 backdrop-blur-md border-b border-stone-800 py-3":"bg-transparent py-6"}`,children:[e.jsxs("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20",children:e.jsx(y,{className:"text-white h-6 w-6"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-xl font-bold tracking-tight text-white leading-none",children:["ATLAS ",e.jsx("span",{className:"text-amber-500",children:"ESPRESSO"})]}),e.jsx("p",{className:"text-[10px] text-stone-400 uppercase tracking-widest",children:"Repair & Sales • Marrakech"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[e.jsx("button",{onClick:()=>d("services"),className:"text-sm font-medium text-stone-300 hover:text-white transition",children:"Services"}),e.jsx("button",{onClick:()=>d("sales"),className:"text-sm font-medium text-stone-300 hover:text-white transition",children:"Shop Machines"}),e.jsx("button",{onClick:()=>d("contact"),className:"text-sm font-medium text-stone-300 hover:text-white transition",children:"Contact"}),e.jsx("div",{className:"h-6 w-px bg-stone-800"}),e.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-stone-800",children:[e.jsx(C,{size:16})," Source"]}),e.jsx("button",{onClick:()=>d("contact"),className:"bg-white text-[#0f0b0a] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-stone-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-200",children:"Book Repair"})]}),e.jsx("button",{onClick:()=>s(!a),className:"md:hidden text-white p-2",children:a?e.jsx(R,{}):e.jsx(z,{})})]}),a&&e.jsxs("div",{className:"absolute top-full left-0 right-0 bg-[#1c1412] border-b border-stone-800 p-6 md:hidden shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-5 z-40",children:[e.jsx("button",{onClick:()=>d("services"),className:"text-left text-lg font-medium text-stone-300",children:"Services"}),e.jsx("button",{onClick:()=>d("sales"),className:"text-left text-lg font-medium text-stone-300",children:"Buy Machines"}),e.jsxs("button",{onClick:()=>{t(),s(!1)},className:"flex items-center gap-2 text-stone-400 font-medium py-2",children:[e.jsx(C,{size:18})," View Source Code"]}),e.jsx("button",{onClick:()=>d("contact"),className:"bg-amber-600 text-white py-3 rounded-lg font-bold text-center mt-2",children:"Book Appointment"})]})]}),e.jsxs("section",{className:"relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"}),e.jsxs("div",{className:"container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-900/50 bg-amber-950/30 text-amber-400 text-xs font-semibold tracking-wide uppercase",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500 animate-pulse"}),"Serving All of Marrakech"]}),e.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold leading-[1.1] text-white",children:["Don't Let a ",e.jsx("br",{}),"Broken Machine ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600",children:"Stop the Brew."})]}),e.jsx("p",{className:"text-lg text-stone-400 max-w-xl leading-relaxed",children:"We repair, service, and sell professional espresso machines. Whether you need a quick fix or a brand new setup, Atlas Espresso is Marrakech's trusted partner."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 pt-2",children:[e.jsxs("button",{onClick:()=>d("contact"),className:"group flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 transition shadow-lg shadow-amber-900/40",children:[e.jsx(B,{className:"h-5 w-5 group-hover:rotate-12 transition-transform"}),"Schedule Repair"]}),e.jsxs("button",{onClick:()=>d("sales"),className:"flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-stone-300 border border-stone-800 hover:border-stone-600 hover:bg-stone-900 transition",children:[e.jsx(Te,{className:"h-5 w-5"})," Shop Machines"]})]})]}),e.jsxs("div",{className:"relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#1c1412] border border-stone-800 group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent opacity-50 blur-2xl"}),e.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center text-center p-8",children:[e.jsx("div",{className:"w-32 h-32 rounded-full bg-stone-900 border-4 border-amber-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",children:e.jsx(y,{className:"h-16 w-16 text-amber-600"})}),e.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Expert Diagnostics"}),e.jsx("p",{className:"text-stone-500",children:"Sales & Repair in Marrakech"}),e.jsxs("div",{className:"absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4",children:[e.jsx("div",{className:"bg-green-500/20 p-2 rounded-lg",children:e.jsx(Z,{className:"h-6 w-6 text-green-500"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Certified Technicians"}),e.jsx("p",{className:"text-xs text-stone-400",children:"Available Today"})]})]})]})]})]})]}),e.jsx("section",{id:"services",className:"py-24 px-6 relative bg-[#16100e]",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 gap-4",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-6",children:"Services We Offer"}),e.jsx("div",{className:"h-1 w-20 bg-amber-600 rounded-full"})]})}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:e.jsx(T,{className:"h-6 w-6 text-amber-400"}),title:"Electrical Repair",desc:"Heating elements, sensors, and circuit boards."},{icon:e.jsx(B,{className:"h-6 w-6 text-amber-400"}),title:"Hydraulic Repair",desc:"Pressure leaks, flow issues, and steam wands."},{icon:e.jsx(Me,{className:"h-6 w-6 text-amber-400"}),title:"Deep Cleaning",desc:"Descaling and maintenance for longevity."},{icon:e.jsx(G,{className:"h-6 w-6 text-amber-400"}),title:"We Come To You",desc:"Pickup, delivery, and on-site repair in Marrakech."}].map((c,p)=>e.jsxs("div",{className:"group bg-[#1c1412] border border-stone-800 p-8 rounded-2xl hover:border-amber-900/50 hover:bg-stone-900 transition duration-300",children:[e.jsx("div",{className:"w-12 h-12 bg-stone-950 rounded-lg flex items-center justify-center mb-6 border border-stone-800 group-hover:border-amber-600/30 transition-colors",children:c.icon}),e.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:c.title}),e.jsx("p",{className:"text-stone-400 leading-relaxed text-sm",children:c.desc})]},p))})]})}),e.jsx("section",{className:"py-20 px-6 bg-gradient-to-r from-amber-900/20 to-stone-900 border-y border-stone-800",children:e.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"bg-amber-600 p-4 rounded-2xl shadow-lg shadow-amber-900/20 hidden md:block",children:e.jsx(G,{className:"h-10 w-10 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Mobile Repair Service"}),e.jsx("p",{className:"text-stone-400 max-w-lg",children:"Can't bring your machine to us? We offer pickup and delivery services across Marrakech, or on-site diagnosis for commercial cafes."})]})]}),e.jsx("button",{onClick:()=>d("contact"),className:"bg-white text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition whitespace-nowrap shadow-lg",children:"Schedule Pickup"})]})}),e.jsx("section",{id:"sales",className:"py-24 px-6 relative bg-[#0f0b0a]",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[e.jsx("span",{className:"text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block",children:"Store"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Machines for Sale"}),e.jsx("p",{className:"text-stone-400",children:"We sell certified refurbished machines and brand new units. All come with a warranty."})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{tag:"Refurbished",name:"Breville Barista Express",price:"4,500 DH",desc:"Fully serviced, new gaskets, 6-month warranty. Perfect for home use."},{tag:"Brand New",name:"Rocket Appartamento",price:"16,000 DH",desc:"Compact commercial grade machine. Heat exchanger with E61 group head."},{tag:"Used - Good",name:"Nuova Simonelli Appia",price:"Contact for Price",desc:"2-Group commercial machine. Ideal for starting a small coffee shop."}].map((c,p)=>e.jsxs("div",{className:"bg-[#1c1412] rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-600 transition group",children:[e.jsxs("div",{className:"h-48 bg-stone-800 flex items-center justify-center relative",children:[e.jsx(y,{className:"h-16 w-16 text-stone-600 group-hover:scale-110 transition duration-500"}),e.jsx("span",{className:`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${c.tag==="Brand New"?"bg-amber-600 text-white":"bg-stone-700 text-stone-300"}`,children:c.tag})]}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:c.name}),e.jsx("p",{className:"text-amber-500 font-bold text-lg mb-4",children:c.price}),e.jsx("p",{className:"text-stone-400 text-sm mb-6",children:c.desc}),e.jsx("button",{onClick:()=>d("contact"),className:"w-full py-3 rounded-lg border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition font-bold",children:"Inquire Now"})]})]},p))})]})}),e.jsx("section",{id:"contact",className:"py-24 px-6 relative bg-[#16100e]",children:e.jsx("div",{className:"container mx-auto relative z-10",children:e.jsx("div",{className:"bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800",children:e.jsxs("div",{className:"grid lg:grid-cols-2",children:[e.jsx("div",{className:"p-10 lg:p-16 bg-gradient-to-br from-amber-900/20 to-[#1c1412] flex flex-col relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Visit Our Workshop"}),e.jsx("p",{className:"text-stone-400 mb-8",children:"Located in Marrakech. Call us for mobile service or drop by."}),e.jsxs("div",{className:"space-y-6 mb-10",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-amber-600/10 p-3 rounded-lg text-amber-500",children:e.jsx(N,{className:"h-5 w-5"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-stone-500 uppercase font-bold tracking-wider",children:"Phone / WhatsApp"}),e.jsx("a",{href:"tel:0613591929",className:"text-xl font-bold text-white hover:text-amber-500 transition",children:"0613 59 19 29"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-amber-600/10 p-3 rounded-lg text-amber-500",children:e.jsx(E,{className:"h-5 w-5"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-stone-500 uppercase font-bold tracking-wider",children:"Email"}),e.jsx("a",{href:"mailto:sberechou@gmail.com",className:"text-lg font-bold text-white hover:text-amber-500 transition",children:"sberechou@gmail.com"})]})]})]}),e.jsxs("div",{className:"w-full h-64 bg-stone-800 rounded-2xl border border-stone-700 relative overflow-hidden group",children:[e.jsx("div",{className:"absolute inset-0 opacity-30 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsx(Q,{className:"h-10 w-10 text-amber-600 drop-shadow-lg animate-bounce"})}),e.jsx("div",{className:"absolute bottom-4 left-4 bg-stone-900/90 px-4 py-2 rounded-lg text-xs font-bold text-stone-300 border border-stone-700",children:"Marrakech, Morocco"}),e.jsx("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center",children:e.jsx("a",{href:"https://maps.google.com/?q=Marrakech",target:"_blank",rel:"noopener noreferrer",className:"bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition",children:"Open in Google Maps"})})]})]})}),e.jsxs("div",{className:"p-10 lg:p-16 bg-white",children:[e.jsx("h3",{className:"text-2xl font-bold text-stone-900 mb-2",children:"Request Service / Buy"}),e.jsx("p",{className:"text-stone-500 mb-8 text-sm",children:"Tell us if you need a repair or want to buy a machine."}),e.jsxs("form",{onSubmit:ie,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Name"}),e.jsxs("div",{className:"relative",children:[e.jsx(ee,{className:"absolute left-3 top-3.5 text-stone-400 h-4 w-4"}),e.jsx("input",{name:"name",type:"text",required:!0,className:"w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",placeholder:"Your Name"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Phone"}),e.jsxs("div",{className:"relative",children:[e.jsx(N,{className:"absolute left-3 top-3.5 text-stone-400 h-4 w-4"}),e.jsx("input",{name:"phone",type:"tel",required:!0,className:"w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",placeholder:"06..."})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Email (Optional)"}),e.jsxs("div",{className:"relative",children:[e.jsx(E,{className:"absolute left-3 top-3.5 text-stone-400 h-4 w-4"}),e.jsx("input",{name:"email",type:"email",className:"w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",placeholder:"Optional"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Service Type"}),e.jsxs("select",{name:"serviceType",className:"w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",children:[e.jsx("option",{value:"Workshop Repair",children:"Repair at Workshop"}),e.jsx("option",{value:"Mobile Repair",children:"Mobile Repair (Come to me)"}),e.jsx("option",{value:"Buying",children:"Buy a Machine"}),e.jsx("option",{value:"Inquiry",children:"General Inquiry"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Details"}),e.jsx("textarea",{name:"message",className:"w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition h-24 resize-none outline-none text-sm",placeholder:"Machine model, issue, or request..."})]}),e.jsxs("button",{type:"submit",disabled:n==="submitting"||n==="success",className:`w-full font-bold py-4 rounded-xl transition duration-300 shadow-xl flex items-center justify-center gap-2 ${n==="success"?"bg-green-600 text-white":n==="error"?"bg-red-600 text-white":"bg-stone-900 text-white hover:bg-amber-600"}`,children:[n==="submitting"&&e.jsx(Ee,{className:"h-5 w-5 animate-spin"}),n==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"h-5 w-5"})," Message Sent!"]}),n==="error"&&"Error - Try Again",n==="idle"&&e.jsxs(e.Fragment,{children:["Send Request ",e.jsx(te,{size:18})]})]})]})]})]})})})}),e.jsx("footer",{className:"bg-stone-950 text-stone-400 py-12 border-t border-stone-900",children:e.jsxs("div",{className:"container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{size:18,className:"text-amber-600"}),e.jsx("span",{className:"font-bold text-white text-lg",children:"AtlasEspresso"})]}),e.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," Atlas Espresso. Marrakech, Morocco."]})]})})]})};function Nt(){return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-8 p-8",children:[e.jsxs("div",{className:"group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(ae,{})}),e.jsx(x,{to:"/sectionpages/pageone",className:"absolute inset-0 z-20"})]}),e.jsxs("div",{className:"group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(re,{})}),e.jsx(x,{to:"/sectionpages/pagetwo",className:"absolute inset-0 z-20"})]}),e.jsx("div",{className:"relative w-[400px] h-[300px] rounded-2xl border border-dashed border-white/10 bg-white/5 overflow-hidden flex items-center justify-center group",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-xl text-white/40 font-display uppercase tracking-widest mb-4 group-hover:text-white transition-colors",children:"page three"}),e.jsx(x,{to:"/sections/sectionstwo",className:"px-6 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white hover:text-black transition-colors",children:"Coming Soon"})]})})]})})}function jt(){return e.jsxs("div",{className:"p-5",children:[e.jsx("h1",{className:"text-orange-500 font-bold text-4xl tracking-wide uppercase mb-4",children:"landing pages"}),e.jsx(O,{})]})}const yt=Ae([{path:"/",element:e.jsx(Be,{}),errorElement:e.jsx(ut,{}),children:[{path:"setup",element:e.jsx(Ue,{})},{path:"libraries",element:e.jsx(qe,{})},{path:"git",element:e.jsx(Xe,{})},{path:"git/reset",element:e.jsx(at,{})},{path:"git/hosting",element:e.jsx(ct,{})},{path:"prisma",element:e.jsx(ht,{})},{path:"components",element:e.jsx(bt,{})},{path:"fullpages",element:e.jsx(Nt,{})},{path:"/sections",element:e.jsx(ft,{}),children:[{path:"/sections/sectionone",element:e.jsx(se,{})}]},{path:"/sectionpages",element:e.jsx(jt,{}),children:[{path:"/sectionpages/pageone",element:e.jsx(ae,{})},{path:"/sectionpages/pagetwo",element:e.jsx(re,{})}]}]}],{basename:"/course-content"});Pe.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(Ie,{router:yt})}));
