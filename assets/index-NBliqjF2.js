import{r as o,u as ne,j as e,L as x,a as B,C as oe,T as F,G as S,b as v,X as M,M as A,t as w,c as N,H as Se,d as Ce,B as ze,e as Re,R as G,f as Te,D as ce,g as Pe,h as Ie,F as U,P as Ee,i as Me,S as Ae,k as _,O as H,Z as L,l as de,m as me,E as xe,n as p,o as h,p as u,v as g,I as P,A as pe,q as Le,s as Oe,w as _e,x as De,y as Be,z as he,J as Fe,K as z,N as W,Q as m,U as ue,V as C,W as Ge,Y as He,_ as q,$ as We,a0 as Ve,a1 as Ue,a2 as T,a3 as ge,a4 as be,a5 as qe,a6 as V,a7 as D,a8 as $e,a9 as Ye,aa as fe,ab as I,ac as $,ad as Xe,ae as Ke,af as Y,ag as Je,ah as Ze,ai as X,aj as K,ak as Qe,al as et,am as tt,an as st}from"./vendor-C6ioRiR_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function J(...t){return w(N(t))}const Z="https://github.com/repos?q=owner%3A%40me",Q=[{name:"Guide",path:"/",icon:B},{name:"Components",path:"/components",icon:oe},{name:"CLI",path:"/",icon:F}];function at(){const[t,a]=o.useState(!1),r=ne();return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",children:[e.jsxs(x,{to:"/",className:"group flex items-center gap-3 relative z-10",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-orange-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"}),e.jsx("div",{className:"relative w-10 h-10 bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 transition-colors",children:e.jsx(B,{size:20,className:"text-white group-hover:text-orange-500 transition-colors"})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"font-bold tracking-tight text-lg leading-none text-white flex items-center gap-2",children:["unccode",e.jsx("span",{className:"px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/5 text-gray-400 border border-white/5",children:"v1.0"})]}),e.jsx("span",{className:"text-[10px] text-gray-500 font-medium tracking-widest mt-1 group-hover:text-orange-500 transition-colors",children:"STACK GUIDE"})]})]}),e.jsx("div",{className:"hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 absolute left-1/2 -translate-x-1/2",children:Q.map(i=>{const s=r.pathname===i.path,l=i.icon;return e.jsxs(x,{to:i.path,className:J("px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2",s?"bg-[#111] text-white shadow-sm ring-1 ring-white/10":"text-gray-400 hover:text-white hover:bg-white/5"),children:[e.jsx(l,{size:12,className:J(s?"text-orange-500":"opacity-50")}),i.name]},i.name)})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"hidden md:flex group relative items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-orange-500 hover:text-white transition-all overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"}),e.jsx(S,{size:16}),e.jsx("span",{children:"get Repos"}),e.jsx(v,{size:14,className:"opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"})]}),e.jsx("button",{onClick:()=>a(!t),className:"md:hidden p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg",children:t?e.jsx(M,{size:20}):e.jsx(A,{size:20})})]})]})}),t&&e.jsx("div",{className:"fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[Q.map(i=>{const s=i.icon;return e.jsxs(x,{to:i.path,onClick:()=>a(!1),className:"flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-lg font-medium text-gray-200 hover:bg-white/10 hover:border-orange-500/30 transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:20,className:"text-orange-500"}),i.name]}),e.jsx(v,{size:16,className:"text-gray-600"})]},i.name)}),e.jsxs("a",{href:Z,target:"_blank",rel:"noreferrer",className:"mt-4 flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-orange-500 hover:text-white transition-colors",children:[e.jsx(S,{size:18})," Clone Repo"]})]})})]})}function O(...t){return w(N(t))}const it=[{name:"Shadcn Setup",path:"/setup",icon:Ce},{name:"libraries",path:"/libraries",icon:ze},{name:"Git Workflow",path:"/git",icon:Re},{name:"Reset Git",path:"/git/reset",icon:G},{name:"Github Hosting",path:"/git/hosting",icon:Te},{name:"Prisma DB",path:"/prisma",icon:ce},{name:"Components",path:"/components",icon:Pe},{name:"landingPages",path:"/fullpages",icon:Ie},{name:"full frontend builds",path:"/frontend",icon:U},{name:"python tutorials",path:"/py",icon:U}];function rt(){const[t,a]=o.useState(!1),r=ne();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:hidden sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4 flex justify-between items-center",children:[e.jsxs("span",{className:"font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2",children:[e.jsx(Se,{size:16,className:"text-orange-600 fill-orange-600/20"}),"Modules"]}),e.jsx("button",{onClick:()=>a(!t),className:"p-2 bg-[#111] rounded-lg border border-white/10 text-gray-400 hover:text-white",children:t?e.jsx(M,{size:20}):e.jsx(A,{size:20})})]}),e.jsxs("aside",{className:O("fixed inset-y-0 left-0 z-30 w-64 bg-[#050505] border-r border-white/5 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-80px)] md:sticky md:top-20",t?"translate-x-0":"-translate-x-full"),children:[e.jsx("div",{className:"p-6 border-b border-white/5 md:hidden",children:e.jsxs("h2",{className:"text-lg font-black italic uppercase tracking-tighter text-white",children:["Nav",e.jsx("span",{className:"text-orange-600",children:"igation"})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2",children:[e.jsx("div",{className:"px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600",children:"Development"}),it.map(i=>{const s=r.pathname===i.path,l=i.icon;return e.jsxs(x,{to:i.path,onClick:()=>a(!1),className:O("group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 border border-transparent",s?"bg-[#111] text-white border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]":"text-gray-500 hover:text-gray-300 hover:bg-white/5"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(l,{size:16,className:O("transition-colors",s?"text-orange-500":"text-gray-600 group-hover:text-gray-400")}),e.jsx("span",{children:i.name})]}),s&&e.jsx(v,{size:14,className:"text-orange-600 animate-in fade-in slide-in-from-left-2"})]},i.name)})]}),e.jsx("div",{className:"p-4 border-t border-white/5 bg-black/20",children:e.jsxs("div",{className:"px-4 py-3 rounded-xl bg-orange-600/5 border border-orange-500/10 flex items-center gap-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-orange-500 animate-pulse"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[10px] font-bold text-orange-500 uppercase",children:"System Status"}),e.jsx("span",{className:"text-[10px] text-gray-500 font-medium",children:"v2.4.0 Stable"})]})]})})]}),t&&e.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden",onClick:()=>a(!1)})]})}function lt(){const[t,a]=o.useState(!0);return e.jsxs("div",{className:"min-h-screen w-full bg-black/90 text-white selection:bg-orange-500/30 font-body",children:[e.jsx(at,{}),e.jsxs("main",{className:"w-full pt-28 pb-12",children:[e.jsxs("div",{className:"w-full px-6 md:px-12 mb-8 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-4xl font-extrabold tracking-tight md:text-5xl font-display uppercase",children:["Start"," ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",children:"Navigating"})]}),e.jsx("p",{className:"text-stone-400 mt-2 text-sm",children:"Select your preferences to find the perfect setup."})]}),e.jsxs("button",{onClick:()=>a(!t),className:`
              group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300
              ${t?"bg-orange-500/10 border-orange-500/50 text-orange-400":"bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-white"}
            `,children:[t?e.jsx(Ee,{className:"w-5 h-5 transition-transform group-hover:-translate-x-1"}):e.jsx(Me,{className:"w-5 h-5 transition-transform group-hover:translate-x-1"}),e.jsx("span",{className:"font-bold text-sm tracking-wide uppercase",children:t?"Hide Filters":"Show Filters"}),!t&&e.jsx(Ae,{className:"w-4 h-4 ml-2 opacity-50"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-0 items-start w-full px-4 md:px-8 relative transition-all",children:[e.jsx("aside",{className:`
              flex-shrink-0 sticky top-32 z-40 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${t?"w-full md:w-72 opacity-100 mr-8":"w-0 opacity-0 mr-0"}
            `,children:e.jsx("div",{className:"w-full md:w-72",children:e.jsx(rt,{})})}),e.jsxs("section",{className:"flex-1 w-full min-w-0  border-white/5 overflow-hidden shadow-2xl relative",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider",children:[e.jsx(_,{size:12}),e.jsx("span",{children:"Welcome Aboard"})]}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full p-3 h-1 bg-linear-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-50"}),e.jsx(H,{})]})]})]})]})}const ee="https://github.com/theaymanian2803/react-shadcn-tailwindcss-setup",nt=[{id:"step-1",step:"01",name:"Project Initialization",filename:"terminal",language:"bash",description:"Start by creating a new Vite project using the React template. We also install the core dependencies for Tailwind CSS and the Lucide icon library.",code:`npm create vite@latest my-app -- --template react
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
}`},{id:"step-5",step:"05",name:"Add Components",filename:"terminal",language:"bash",description:"You are now ready to add components. Shadcn uses a copy-paste architecture via CLI. Let's add a Button to test the setup.",code:"npx shadcn@latest add button"}];function ot(...t){return w(N(t))}const ct=({item:t})=>{const[a,r]=o.useState("code"),[i,s]=o.useState(!1),l=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(n=>e.jsx("button",{onClick:()=>r(n),className:ot("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",a===n?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:n},n))})]}),e.jsx("div",{className:"relative",children:a==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:l,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:i?e.jsx(p,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(P,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function dt(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(L,{size:14})," TAILWIND V4 + REACT 19"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Modern ",e.jsx("span",{className:"text-orange-600",children:"JS"})," Stack"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"The professional setup for building high-speed React applications with Tailwind v4 and Shadcn components."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:ee,className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["Go to Repository ",e.jsx(S,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(de,{size:18})," JS VERSION"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(me,{size:18})," VITE 6"]})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:[nt.map(t=>e.jsx(ct,{item:t},t.id)),e.jsx("div",{className:"mt-20 p-px bg-linear-to-r from-transparent via-orange-600/50 to-transparent rounded-3xl",children:e.jsxs("div",{className:"bg-[#0A0A0A] rounded-[23px] p-12 text-center border border-white/5",children:[e.jsx("h2",{className:"text-4xl font-black uppercase italic mb-4",children:"Launch Environment"}),e.jsx("p",{className:"text-gray-400 mb-8 max-w-lg mx-auto",children:"Ready to start? Visit the GitHub repository to clone the full template or explore the documentation."}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsxs("a",{href:ee,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 px-10 py-4 bg-white text-black rounded-xl font-black uppercase text-sm hover:bg-orange-600 hover:text-white transition-all shadow-xl",children:["View on GitHub ",e.jsx(xe,{size:18})]}),e.jsxs(x,{to:"/components",className:"flex items-center gap-2 px-10 py-4 bg-[#1A1A1A] border border-[#333] rounded-xl font-black uppercase text-sm hover:bg-[#222] transition-all",children:["Browse UI Components ",e.jsx(v,{size:18})]})]})]})})]}),e.jsx("footer",{className:"py-12 border-t border-white/5 text-center",children:e.jsx("p",{className:"text-gray-600 text-[10px] uppercase font-bold tracking-[0.4em]",children:"© 2026 unccode stack // for experimental web only"})})]})}function mt(){return e.jsx("div",{children:e.jsx(dt,{})})}const xt=[{name:"Framer Motion",url:"https://www.framer.com/motion/",icon:L,description:'The standard for React animations. It uses a declarative syntax that feels incredibly "React-like".',bestFor:"Complex layout transitions, gestures (drag/hover), and shared element animations.",install:"npm install framer-motion"},{name:"GSAP",url:"https://gsap.com/resources/React/",icon:pe,description:"The heavy lifter. A robust JavaScript toolset that creates high-performance, complex timeline animations.",bestFor:"Scroll-triggered effects (ScrollTrigger) and orchestrating multi-step sequences.",install:"npm install @gsap/react gsap"},{name:"React Spring",url:"https://www.react-spring.dev/",icon:Le,description:"Physics-based animation library. It calculates motion based on spring dynamics (tension, friction) rather than duration.",bestFor:"Natural, fluid, organic feeling UI elements that react to user input.",install:"npm install @react-spring/web"},{name:"AutoAnimate",url:"https://auto-animate.formkit.com/",icon:Oe,description:"Zero-config. A single line of code that automatically animates mounting, unmounting, and list reordering.",bestFor:"Drop-in smooth transitions for lists, dropdowns, and accordions with zero effort.",install:"npm install @formkit/auto-animate"},{name:"Lottie React",url:"https://lottiereact.com/",icon:B,description:"Renders Adobe After Effects animations as JSON. Perfect for vector-based, high-fidelity illustrations.",bestFor:"Displaying complex brand animations, loading spinners, or detailed illustrations.",install:"npm install lottie-react"}],pt=()=>e.jsxs("div",{className:"w-full animate-in fade-in duration-700",children:[e.jsxs("div",{className:"mb-10",children:[e.jsxs("h2",{className:"text-3xl font-bold tracking-tight text-white",children:["Animation ",e.jsx("span",{className:"text-orange-500",children:"Toolkit"})]}),e.jsx("p",{className:"mt-2 text-gray-400",children:"The top 5 libraries standardizing motion in the React ecosystem."})]}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:xt.map(t=>e.jsxs("div",{className:"group relative flex flex-col rounded-xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] transition-all duration-300",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors",children:e.jsx(t.icon,{size:20})}),e.jsx("h3",{className:"text-xl font-bold text-white",children:t.name})]}),e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"text-gray-500 hover:text-white transition-colors",title:"View Documentation",children:e.jsx(xe,{size:18})})]}),e.jsx("p",{className:"mb-4 text-sm text-gray-400 leading-relaxed",children:t.description}),e.jsxs("div",{className:"mb-6 rounded bg-white/5 p-3",children:[e.jsx("span",{className:"mb-1 block text-xs font-bold uppercase tracking-wider text-orange-400",children:"Best For"}),e.jsx("p",{className:"text-xs text-gray-300",children:t.bestFor})]}),e.jsx("div",{className:"mt-auto pt-4 border-t border-white/5",children:e.jsx("code",{className:"flex items-center justify-between rounded bg-black px-3 py-2 text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors",children:e.jsx("span",{children:t.install})})})]},t.name))})]}),ht=[{id:"step-1",step:"01",name:"Purge Git History",filename:"powershell",language:"bash",description:'Completely disconnect the project from its previous history. This command deletes the hidden .git directory, effectively making the project "git-less" so you can start fresh.',code:"Remove-Item -Recurse -Force .git"},{id:"step-2",step:"02",name:"Re-Initialize Repo",filename:"powershell",language:"bash",description:"Create a brand new local Git repository. This generates a fresh .git folder without any of the old commit logs or remote origin links.",code:`git init
git add .`},{id:"step-3",step:"03",name:"Establish Main Branch",filename:"powershell",language:"bash",description:'Perform your first commit and rename the default branch to "main". This is the standard naming convention for modern GitHub repositories.',code:`git commit -m "Initial commit for new project"
git branch -M main`},{id:"step-4",step:"04",name:"Push to New Remote",filename:"powershell",language:"bash",description:"Link your local project to your newly created GitHub repository and push your files. Make sure to replace the placeholder URL with your actual repo link.",code:`git remote add origin https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
git push -u origin main`}],ut="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME";function gt(...t){return w(N(t))}const bt=({item:t})=>{const[a,r]=o.useState("code"),[i,s]=o.useState(!1),l=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(n=>e.jsx("button",{onClick:()=>r(n),className:gt("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",a===n?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:n},n))})]}),e.jsx("div",{className:"relative",children:a==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:l,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:i?e.jsx(p,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(P,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function ft(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(G,{size:14,className:"animate-spin-slow"})," GIT RESET PROTOCOL"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["New ",e.jsx("span",{className:"text-orange-600",children:"Repo"})," Launch"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Step-by-step guide to purging local Git history and migrating your MERN project to a fresh GitHub repository."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:ut,className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["Create New Repo ",e.jsx(S,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(de,{size:18})," WINDOWS CLI"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(me,{size:18})," MERN STACK"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:ht.map(t=>e.jsx(bt,{item:t},t.id))})]})}function vt(){return e.jsx("div",{children:e.jsx(ft,{})})}const wt=[{id:"step-1",step:"01",name:"Locate Hidden Git Folder",filename:"powershell",language:"bash",description:`Before deleting, you must verify the existence of the .git directory. Since it is a hidden system folder, a standard "ls" won't show it. Using "-Force" reveals all hidden items in the current path.`,code:"ls -Force"},{id:"step-2",step:"02",name:"Remove Repository Link",filename:"powershell",language:"bash",description:'This command forcefully and recursively removes the .git directory. "-Recurse" ensures all sub-files are deleted, and "-Force" bypasses read-only restrictions. Your project is now a regular local folder.',code:"Remove-Item -Recurse -Force .git"},{id:"step-3",step:"03",name:"Initialize Fresh Project",filename:"powershell",language:"bash",description:"Restart your version control from scratch. This creates a brand new .git folder. We then stage all current files (npm install, src, etc.) for a clean initial commit.",code:`git init
git add .`},{id:"step-4",step:"04",name:"Connect New GitHub Remote",filename:"powershell",language:"bash",description:'Create a new repo on GitHub, then link it here. We rename the branch to "main" for modern compatibility and push the code to the new destination.',code:`git commit -m "Initial commit for new project"
git branch -M main
git remote add origin <YOUR_NEW_URL>
git push -u origin main`}],Nt="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME";function jt(...t){return w(N(t))}const yt=({item:t})=>{const[a,r]=o.useState("code"),[i,s]=o.useState(!1),l=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(n=>e.jsx("button",{onClick:()=>r(n),className:jt("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",a===n?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:n},n))})]}),e.jsx("div",{className:"relative",children:a==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:l,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:i?e.jsx(p,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(P,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function kt(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(G,{size:14,className:"animate-spin-slow"})," WINDOWS GIT MIGRATION"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Unlink ",e.jsx("span",{className:"text-orange-600",children:"&"})," Rebuild"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Purge existing version history and re-initialize your MERN project for a new GitHub destination using PowerShell."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:Nt,className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["Create New Repo ",e.jsx(S,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(_e,{size:18})," LS -FORCE"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(De,{size:18})," RM -RECURSE"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:wt.map(t=>e.jsx(yt,{item:t},t.id))})]})}function St(){return e.jsx("div",{children:e.jsx(kt,{})})}const Ct=[{id:"step-1",step:"01",name:"Inject Deploy Tool",filename:"terminal",language:"bash",description:'First, we need to install the "gh-pages" utility. This package acts as a bridge, allowing us to publish our "dist" build folder directly to a specific branch on GitHub.',code:"npm install gh-pages --save-dev"},{id:"step-2",step:"02",name:"Configure Base Path",filename:"vite.config.js",language:"javascript",description:'Vite needs to know it is running in a sub-folder. We add the "base" property matching your repository name exactly. This ensures assets like CSS and images load correctly.',code:`import { defineConfig } from 'vite'
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
npm run deploy`}],zt="https://github.com/theaymanian2803/caseit";function Rt(...t){return w(N(t))}const Tt=({item:t})=>{const[a,r]=o.useState("code"),[i,s]=o.useState(!1),l=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(n=>e.jsx("button",{onClick:()=>r(n),className:Rt("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",a===n?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:n},n))})]}),e.jsx("div",{className:"relative",children:a==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:l,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:i?e.jsx(p,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(P,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function Pt(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(Be,{size:14,className:"animate-pulse"})," GITHUB PAGES DEPLOYMENT"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Build ",e.jsx("span",{className:"text-orange-600",children:"&"})," Broadcast"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Compile your local React environment and ship it to the edge using GitHub Pages and Vite."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("a",{href:zt,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20",children:["View Live Repo ",e.jsx(S,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(F,{size:18})," NPM RUN DEPLOY"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(he,{size:18})," GH-PAGES"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:Ct.map(t=>e.jsx(Tt,{item:t},t.id))})]})}function It(){return e.jsx("div",{children:e.jsx(Pt,{})})}const Et=[{id:"step-1",step:"01",name:"Engine Core & Drivers",filename:"terminal",language:"bash",description:"In Prisma v7, the Rust engine is removed for better performance and smaller builds. We must install the Prisma Client, the PG adapter for communication, and the PG driver itself.",code:`npm install @prisma/client @prisma/adapter-pg pg
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
}`}];function Mt(...t){return w(N(t))}const At=({item:t})=>{const[a,r]=o.useState("code"),[i,s]=o.useState(!1),l=()=>{navigator.clipboard.writeText(t.code),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start",children:[e.jsxs("div",{className:"lg:col-span-3 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[e.jsx("span",{className:"text-5xl font-black text-orange-600/20 italic",children:t.step}),e.jsx("div",{className:"h-px flex-1 bg-white/10"})]}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase tracking-tight",children:t.name})]}),e.jsxs("div",{className:"lg:col-span-9 bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-orange-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-[#222]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#333]"})]}),e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2",children:t.filename})]}),e.jsx("div",{className:"flex gap-2",children:["code","info"].map(n=>e.jsx("button",{onClick:()=>r(n),className:Mt("px-3 py-1 text-[10px] font-bold rounded transition-all uppercase",a===n?"bg-orange-600 text-white":"bg-[#222] text-gray-500 hover:text-white"),children:n},n))})]}),e.jsx("div",{className:"relative",children:a==="code"?e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:l,className:"absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all",children:i?e.jsx(p,{size:16,className:"text-green-500"}):e.jsx(h,{size:16})}),e.jsx(u,{language:t.language,style:g,showLineNumbers:!0,customStyle:{margin:0,padding:"30px",fontSize:"14px",lineHeight:"1.7",background:"#0D0D0D"},lineNumberStyle:{color:"#333",minWidth:"2.5em"},children:t.code})]}):e.jsx("div",{className:"p-10 min-h-50 flex flex-col justify-center",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"p-4 bg-orange-600/10 rounded-2xl",children:e.jsx(P,{className:"text-orange-500",size:32})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold text-lg mb-3",children:"Technical Breakdown"}),e.jsx("p",{className:"text-gray-400 leading-relaxed text-base max-w-2xl",children:t.description})]})]})})})]})]})};function Lt(){return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600 selection:text-white",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-24 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-xs font-bold mb-8",children:[e.jsx(ce,{size:14,className:"animate-pulse"})," PRISMA V7 STACK SETUP"]}),e.jsxs("h1",{className:"text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]",children:["Schema ",e.jsx("span",{className:"text-orange-600",children:"&"})," Seed"]}),e.jsx("p",{className:"text-gray-400 text-xl max-w-2xl mx-auto mb-12",children:"Configure a Rust-free Prisma v7 environment with local generation and automated seeding for Next.js."}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 px-8 py-4 bg-orange-600 rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-lg shadow-orange-600/20 cursor-default",children:["Ready for Production ",e.jsx(L,{size:18})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(F,{size:18})," NPM RUN DB:SEED"]}),e.jsx("div",{className:"w-px h-6 bg-white/10 hidden md:block"}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest",children:[e.jsx(he,{size:18})," NEON DB"]})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-6 pb-32",children:Et.map(t=>e.jsx(At,{item:t},t.id))})]})}function Ot(){return e.jsx("div",{children:e.jsx(Lt,{})})}const _t=()=>{const t=Fe();return e.jsx("div",{className:"flex min-h-screen w-full flex-col items-center justify-center bg-black text-white p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600",children:"404"}),e.jsx("div",{className:"bg-[#FF6A00] px-2 text-sm rounded rotate-12 absolute inline-block text-black font-bold",children:"Page Not Found"}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-2xl font-bold md:text-3xl text-gray-200",children:"Lost in Space?"}),e.jsx("p",{className:"mt-4 text-gray-400 max-w-md mx-auto",children:"The page you are looking for doesn't exist or has been moved."}),e.jsx("div",{className:"mt-2 text-xs font-mono text-gray-600",children:t?.statusText||t?.message}),e.jsx(x,{to:"/",className:"mt-8 inline-block rounded-full border border-orange-500 px-8 py-3 text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-black focus:outline-none focus:ring active:text-orange-500 transition-all duration-300",children:"Back to Home"})]})]})})},te=`import { motion, useInView } from 'framer-motion'
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
export default ProductShowcase`,ve=()=>{const[t,a]=o.useState(!1),[r,i]=o.useState(!1),s=()=>{navigator.clipboard.writeText(te),i(!0),setTimeout(()=>i(!1),2e3)};return t?e.jsx("div",{className:"relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center p-8",children:e.jsxs("div",{className:"w-full max-w-5xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("button",{onClick:()=>a(!1),className:"flex items-center gap-2 text-white hover:text-orange-500 transition-colors",children:[e.jsx(z,{size:20}),e.jsx("span",{className:"font-semibold",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold text-white transition-colors",children:[r?e.jsx(p,{size:16,className:"text-green-400"}):e.jsx(h,{size:16}),r?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 shadow-2xl",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",maxHeight:"80vh"},showLineNumbers:!0,children:te})})]})}):e.jsx(Dt,{onGetCode:()=>a(!0)})},Dt=({onGetCode:t})=>{const a=o.useRef(null),r=W(a,{once:!0,margin:"-10% 0px"}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2}}},s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}};return e.jsxs("section",{ref:a,className:"relative min-h-screen flex items-center bg-neutral-950 overflow-hidden py-24 text-white",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"}),e.jsx("div",{className:"w-full px-6 md:px-12 lg:px-24 relative z-10",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-24 items-center",children:[e.jsx(m.div,{initial:{opacity:0,scale:.9},animate:r?{opacity:1,scale:1}:{},transition:{duration:1},className:"relative order-last lg:order-first flex justify-center",children:e.jsxs(m.div,{animate:{y:[0,-15,0]},transition:{repeat:1/0,duration:6,ease:"easeInOut"},className:"relative z-10",children:[e.jsx("div",{className:"absolute inset-0 bg-orange-500/20 blur-[50px] rounded-full scale-75"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1742&auto=format&fit=crop",alt:"Camera",className:"relative z-10 w-full max-w-[500px] drop-shadow-2xl"})]})}),e.jsxs(m.div,{variants:i,initial:"hidden",animate:r?"visible":"hidden",className:"text-center lg:text-left",children:[e.jsx(m.div,{variants:s,className:"mb-6",children:e.jsx("span",{className:"text-orange-500 font-bold tracking-[0.2em] text-xs uppercase bg-orange-500/10 px-3 py-1 rounded",children:"New Arrival"})}),e.jsxs(m.h2,{variants:s,className:"text-5xl md:text-7xl font-bold tracking-tight mb-6",children:["PURE ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600",children:"PRECISION"})]}),e.jsx(m.p,{variants:s,className:"text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10",children:"Experience the perfect balance of performance and portability. Designed for creators who demand excellence in every shot."}),e.jsxs(m.div,{variants:s,className:"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",children:[e.jsx("button",{className:"bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/25",children:"Pre-Order Now"}),e.jsx("button",{onClick:t,className:"px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold tracking-wide",children:"Get Code"})]})]})]})})]})},se=`import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Code } from 'lucide-react'

const slides = [
  {
    id: 1,
    headline: 'Furnish Your Dreams Timeless Pieces for Inspired Living',
    description:
      'Transform your living spaces with our exquisite collection of handcrafted furniture, meticulously designed to blend style with functionality.',
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop',
    price: '$367',
  },
  {
    id: 2,
    headline: 'Modern Elegance for Your Daily Sanctuary',
    description:
      'Discover the perfect balance of comfort and aesthetics. Our latest collection brings warmth and sophistication to every corner of your home.',
    image:
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop',
    price: '$450',
  },
  {
    id: 3,
    headline: 'Crafted for Comfort, Designed for Style',
    description:
      'Elevate your interior with pieces that tell a story. Sustainable materials meet contemporary design in our newest arrival.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    price: '$299',
  },
]

const FurnitureHero = ({ onShowCode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[800px] w-full overflow-hidden bg-[#f4f6f8] flex flex-col justify-center rounded-xl font-sans">
      
      {/* --- Navigation Arrows --- */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/50 md:bg-transparent rounded-full md:rounded-none backdrop-blur-sm md:backdrop-blur-none text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
        <ChevronLeft size={24} className="md:w-10 md:h-10" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/50 md:bg-transparent rounded-full md:rounded-none backdrop-blur-sm md:backdrop-blur-none text-gray-600 hover:text-gray-900 transition-all hover:scale-110">
        <ChevronRight size={24} className="md:w-10 md:h-10" />
      </button>

      {/* --- Sliding Container --- */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: \`translateX(-\${currentSlide * 100}%)\` }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12 lg:py-0">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">
              
              {/* Text Content */}
              <div className="space-y-6 md:space-y-8 pl-0 lg:pl-8 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] text-[#1a1a1a] tracking-tight">
                  {slide.headline}
                </h1>

                <p className="max-w-lg mx-auto lg:mx-0 text-base sm:text-lg text-gray-500 font-light leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-3 md:px-10 md:py-4 border border-gray-800 rounded-md text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent text-sm md:text-base">
                    Shop Now
                  </button>
                  
                  <button 
                    onClick={onShowCode}
                    className="px-6 py-3 md:px-6 md:py-4 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base"
                  >
                    <Code size={18} className="md:w-5 md:h-5" /> View Source
                  </button>
                </div>
              </div>

              {/* Image / Product Section */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[70%] bg-gradient-to-l from-[#e3e8eb] to-transparent -z-10 rounded-l-full opacity-80" />

                <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] aspect-square">
                  <img
                    src={slide.image}
                    alt="Furniture"
                    className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply hover:scale-105 transition-transform duration-500"
                  />

                  {/* Price Tag */}
                  <div className="absolute top-[15%] right-[10%] lg:right-[20%] z-20">
                    <div className="hidden sm:block absolute top-3 right-3 w-16 h-[1px] bg-white/50 rotate-[-45deg]" />
                    <div className="relative group cursor-pointer animate-pulse-slow">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-md" />
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white px-3 py-1 shadow-sm border border-gray-100 rounded text-xs md:text-sm font-semibold text-orange-400 whitespace-nowrap">
                        {slide.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Pagination Indicators --- */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={\`h-1 rounded-full transition-all duration-500 \${
              currentSlide === index ? 'w-6 md:w-8 bg-gray-800' : 'w-3 md:w-4 bg-gray-300'
            }\`}
          />
        ))}
      </div>
    </section>
  )
}

export default FurnitureHero`,we=()=>{const[t,a]=o.useState(!1),[r,i]=o.useState(!1),s=()=>{navigator.clipboard.writeText(se),i(!0),setTimeout(()=>i(!1),2e3)};return t?e.jsxs("div",{className:"w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-slate-800 shadow-2xl overflow-hidden h-auto min-h-[800px]",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6 flex-shrink-0 z-10",children:[e.jsxs("button",{onClick:()=>a(!1),className:"flex items-center gap-2 text-white hover:text-orange-400 transition-colors group",children:[e.jsx("div",{className:"bg-white/10 p-2 rounded-lg group-hover:bg-orange-600 transition-colors",children:e.jsx(z,{size:20})}),e.jsx("span",{className:"font-semibold tracking-wide",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-orange-500/20",children:[r?e.jsx(p,{size:16,className:"text-white"}):e.jsx(h,{size:16}),r?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"relative flex-grow rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]",children:e.jsx("div",{className:"absolute inset-0 overflow-auto custom-scrollbar",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",minHeight:"100%",fontSize:"14px",lineHeight:"1.6",backgroundColor:"#0d0d0d"},showLineNumbers:!0,wrapLines:!0,children:se})})})]}):e.jsx(Bt,{onShowCode:()=>a(!0)})},E=[{id:1,headline:"Furnish Your Dreams Timeless Pieces for Inspired Living",description:"Transform your living spaces with our exquisite collection of handcrafted furniture, meticulously designed to blend style with functionality.",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",price:"$367"},{id:2,headline:"Modern Elegance for Your Daily Sanctuary",description:"Discover the perfect balance of comfort and aesthetics. Our latest collection brings warmth and sophistication to every corner of your home.",image:"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",price:"$450"},{id:3,headline:"Crafted for Comfort, Designed for Style",description:"Elevate your interior with pieces that tell a story. Sustainable materials meet contemporary design in our newest arrival.",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",price:"$299"}],Bt=({onShowCode:t})=>{const[a,r]=o.useState(0),i=()=>{r(l=>l===E.length-1?0:l+1)},s=()=>{r(l=>l===0?E.length-1:l-1)};return o.useEffect(()=>{const l=setInterval(i,7e3);return()=>clearInterval(l)},[]),e.jsxs("section",{className:"relative min-h-[600px] lg:min-h-[800px] w-full overflow-hidden bg-[#f4f6f8] flex flex-col justify-center rounded-xl font-sans",children:[e.jsx("button",{onClick:s,className:"absolute left-2 md:left-6 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/50 md:bg-transparent rounded-full md:rounded-none backdrop-blur-sm md:backdrop-blur-none text-gray-600 hover:text-gray-900 transition-all hover:scale-110",children:e.jsx(ue,{size:24,className:"md:w-10 md:h-10"})}),e.jsx("button",{onClick:i,className:"absolute right-2 md:right-6 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/50 md:bg-transparent rounded-full md:rounded-none backdrop-blur-sm md:backdrop-blur-none text-gray-600 hover:text-gray-900 transition-all hover:scale-110",children:e.jsx(v,{size:24,className:"md:w-10 md:h-10"})}),e.jsx("div",{className:"flex w-full h-full transition-transform duration-700 ease-in-out",style:{transform:`translateX(-${a*100}%)`},children:E.map(l=>e.jsx("div",{className:"min-w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12 lg:py-0",children:e.jsxs("div",{className:"container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl",children:[e.jsxs("div",{className:"space-y-6 md:space-y-8 pl-0 lg:pl-8 text-center lg:text-left order-2 lg:order-1",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] text-[#1a1a1a] tracking-tight",children:l.headline}),e.jsx("p",{className:"max-w-lg mx-auto lg:mx-0 text-base sm:text-lg text-gray-500 font-light leading-relaxed",children:l.description}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center lg:justify-start",children:[e.jsx("button",{className:"px-8 py-3 md:px-10 md:py-4 border border-gray-800 rounded-md text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent text-sm md:text-base",children:"Shop Now"}),e.jsxs("button",{onClick:t,className:"px-6 py-3 md:px-6 md:py-4 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base",children:[e.jsx(C,{size:18,className:"md:w-5 md:h-5"})," View Source"]})]})]}),e.jsxs("div",{className:"relative h-[300px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2",children:[e.jsx("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[70%] bg-gradient-to-l from-[#e3e8eb] to-transparent -z-10 rounded-l-full opacity-80"}),e.jsxs("div",{className:"relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] aspect-square",children:[e.jsx("img",{src:l.image,alt:"Furniture",className:"w-full h-full object-contain drop-shadow-2xl mix-blend-multiply hover:scale-105 transition-transform duration-500"}),e.jsxs("div",{className:"absolute top-[15%] right-[10%] lg:right-[20%] z-20",children:[e.jsx("div",{className:"hidden sm:block absolute top-3 right-3 w-16 h-[1px] bg-white/50 rotate-[-45deg]"}),e.jsxs("div",{className:"relative group cursor-pointer animate-pulse-slow",children:[e.jsx("div",{className:"w-6 h-6 md:w-8 md:h-8 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm",children:e.jsx("div",{className:"w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-md"})}),e.jsx("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white px-3 py-1 shadow-sm border border-gray-100 rounded text-xs md:text-sm font-semibold text-orange-400 whitespace-nowrap",children:l.price})]})]})]})]})]})},l.id))}),e.jsx("div",{className:"absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30",children:E.map((l,n)=>e.jsx("button",{onClick:()=>r(n),className:`h-1 rounded-full transition-all duration-500 ${a===n?"w-6 md:w-8 bg-gray-800":"w-3 md:w-4 bg-gray-300"}`},n))})]})},ae=`import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Cpu, Wifi } from 'lucide-react'

const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-[#05050a] overflow-hidden py-24 text-white font-sans">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div variants={slideUpVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Gen 5 Available Now</span>
            </motion.div>

            <motion.h1 variants={slideUpVariants} className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                REALITY
              </span>
            </motion.h1>

            <motion.p variants={slideUpVariants} className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
              Forged in titanium. Powered by neural engines. The new Horizon X1 
              redefines what a handheld device can do.
            </motion.p>

            {/* Specs Grid */}
            <motion.div variants={slideUpVariants} className="grid grid-cols-3 gap-4 w-full max-w-md mb-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                    <Cpu className="text-cyan-400" size={24} />
                    <span className="text-xs text-slate-400 uppercase font-bold">A18 Pro</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                    <Smartphone className="text-indigo-400" size={24} />
                    <span className="text-xs text-slate-400 uppercase font-bold">OLED 120Hz</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2">
                    <Wifi className="text-emerald-400" size={24} />
                    <span className="text-xs text-slate-400 uppercase font-bold">Wifi 7</span>
                </div>
            </motion.div>

            <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold tracking-tight hover:scale-105 transition-transform">
                Buy Horizon X1
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold tracking-wide text-white">
                View Specs
              </button>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
             {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 blur-[60px] rounded-full" />
              
              <img
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1681&auto=format&fit=crop"
                alt="Smartphone"
                className="relative z-10 w-full max-w-[400px] lg:max-w-[450px] drop-shadow-2xl rounded-[3rem] border-[8px] border-slate-900/50"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-20 -left-12 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-xl z-20"
              >
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-mono text-white">5G Connected</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
export default ProductShowcase`,Ne=()=>{const[t,a]=o.useState(!1),[r,i]=o.useState(!1),s=()=>{navigator.clipboard.writeText(ae),i(!0),setTimeout(()=>i(!1),2e3)};return t?e.jsx("div",{className:"relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center p-8",children:e.jsxs("div",{className:"w-full max-w-5xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("button",{onClick:()=>a(!1),className:"flex items-center gap-2 text-white hover:text-cyan-500 transition-colors",children:[e.jsx(z,{size:20}),e.jsx("span",{className:"font-semibold",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold text-white transition-colors",children:[r?e.jsx(p,{size:16,className:"text-green-400"}):e.jsx(h,{size:16}),r?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 shadow-2xl",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",maxHeight:"80vh"},showLineNumbers:!0,children:ae})})]})}):e.jsx(Ft,{onGetCode:()=>a(!0)})},Ft=({onGetCode:t})=>{const a=o.useRef(null),r=W(a,{once:!0,margin:"-10% 0px"}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},s={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}};return e.jsxs("section",{ref:a,className:"relative min-h-screen flex items-center bg-[#05050a] overflow-hidden py-24 text-white font-sans",children:[e.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"}),e.jsx("div",{className:"absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"}),e.jsx("div",{className:"w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 lg:gap-8 items-center",children:[e.jsxs(m.div,{variants:i,initial:"hidden",animate:r?"visible":"hidden",className:"flex flex-col items-center lg:items-start text-center lg:text-left",children:[e.jsxs(m.div,{variants:s,className:"mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),e.jsx("span",{className:"text-cyan-400 text-xs font-bold tracking-widest uppercase",children:"Gen 5 Available Now"})]}),e.jsxs(m.h1,{variants:s,className:"text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]",children:["BEYOND ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400",children:"REALITY"})]}),e.jsx(m.p,{variants:s,className:"text-slate-400 text-lg leading-relaxed max-w-lg mb-10",children:"Forged in titanium. Powered by neural engines. The new Horizon X1 redefines what a handheld device can do."}),e.jsxs(m.div,{variants:s,className:"grid grid-cols-3 gap-4 w-full max-w-md mb-10",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 transition-colors hover:bg-white/10",children:[e.jsx(oe,{className:"text-cyan-400",size:24}),e.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"A18 Pro"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 transition-colors hover:bg-white/10",children:[e.jsx(Ge,{className:"text-indigo-400",size:24}),e.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"OLED 120Hz"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 transition-colors hover:bg-white/10",children:[e.jsx(He,{className:"text-emerald-400",size:24}),e.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold",children:"Wifi 7"})]})]}),e.jsxs(m.div,{variants:s,className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto",children:[e.jsx("button",{className:"bg-white text-black px-8 py-4 rounded-full font-bold tracking-tight hover:scale-105 transition-transform",children:"Buy Horizon X1"}),e.jsx("button",{onClick:t,className:"px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold tracking-wide text-white",children:"Get Code"})]})]}),e.jsx(m.div,{initial:{opacity:0,x:50,rotate:10},animate:r?{opacity:1,x:0,rotate:0}:{},transition:{duration:1.2,ease:"easeOut"},className:"relative flex justify-center lg:justify-end",children:e.jsxs(m.div,{animate:{y:[-10,10,-10]},transition:{repeat:1/0,duration:5,ease:"easeInOut"},className:"relative z-10",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 blur-[60px] rounded-full"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1681&auto=format&fit=crop",alt:"Smartphone",className:"relative z-10 w-full max-w-[400px] lg:max-w-[450px] drop-shadow-2xl rounded-[3rem] border-[8px] border-slate-900/50"}),e.jsxs(m.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.8},className:"absolute top-20 -left-12 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-xl z-20",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 animate-pulse"}),e.jsx("span",{className:"text-xs font-mono text-white",children:"5G Connected"})]})]})})]})})]})},ie=`import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Command } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1742&auto=format&fit=crop",
    title: "Phantom 65",
    subtitle: "Custom Series",
    desc: "Gasket-mounted for deep acoustics."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2000&auto=format&fit=crop",
    title: "Cyber Board",
    subtitle: "Neon Edition",
    desc: "RGB per-key illumination."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=2065&auto=format&fit=crop",
    title: "Vapor TKL",
    subtitle: "Retro Wave",
    desc: "Retro aesthetics, modern feel."
  }
]

const KeyboardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] text-white p-8 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-700/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
           <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-bold text-purple-400 uppercase tracking-widest">
                  {slides[currentIndex].subtitle}
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-4">
                THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {slides[currentIndex].title.toUpperCase()}
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {slides[currentIndex].desc}
              </p>
            </motion.div>
           </AnimatePresence>

           <div className="flex gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform">
                Buy Now
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium flex items-center gap-2">
                <Command size={16} /> Get Code
              </button>
           </div>
        </div>

        {/* Right: Carousel Image */}
        <div className="relative">
           <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#101015]">
             <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={slides[currentIndex].image}
                  initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction < 0 ? 100 : -100, opacity: 0 }}
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </AnimatePresence>
             
             {/* Navigation Buttons */}
             <div className="absolute bottom-4 right-4 flex gap-2">
                <button onClick={prevSlide} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition">
                  <ChevronRight size={20} />
                </button>
             </div>
           </div>
        </div>

      </div>
    </section>
  )
}
export default KeyboardCarousel`,je=()=>{const[t,a]=o.useState(!1),[r,i]=o.useState(!1),s=()=>{navigator.clipboard.writeText(ie),i(!0),setTimeout(()=>i(!1),2e3)};return t?e.jsx("div",{className:"relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center p-8",children:e.jsxs("div",{className:"w-full max-w-5xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("button",{onClick:()=>a(!1),className:"flex items-center gap-2 text-white hover:text-purple-500 transition-colors",children:[e.jsx(z,{size:20}),e.jsx("span",{className:"font-semibold",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold text-white transition-colors",children:[r?e.jsx(p,{size:16,className:"text-green-400"}):e.jsx(h,{size:16}),r?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 shadow-2xl",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",maxHeight:"80vh"},showLineNumbers:!0,children:ie})})]})}):e.jsx(Gt,{onGetCode:()=>a(!0)})},f=[{id:1,image:"https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1742&auto=format&fit=crop",title:"Phantom 65",subtitle:"Custom Series",desc:"Gasket-mounted for deep acoustics."},{id:2,image:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2000&auto=format&fit=crop",title:"Cyber Board",subtitle:"Neon Edition",desc:"RGB per-key illumination."},{id:3,image:"https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=2065&auto=format&fit=crop",title:"Vapor TKL",subtitle:"Retro Wave",desc:"Retro aesthetics, modern feel."}],Gt=({onGetCode:t})=>{const[a,r]=o.useState(0),[i,s]=o.useState(0),l=o.useRef(null),n=W(l,{once:!0,margin:"-10% 0px"}),d=()=>{s(1),r(c=>(c+1)%f.length)},j=()=>{s(-1),r(c=>(c-1+f.length)%f.length)};return e.jsxs("section",{ref:l,className:"relative min-h-screen flex items-center bg-[#050505] text-white p-6 md:p-12 overflow-hidden font-sans",children:[e.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-700/20 blur-[120px] rounded-full pointer-events-none"}),e.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none"}),e.jsxs("div",{className:"w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10",children:[e.jsxs(m.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.8},className:"space-y-8 order-2 lg:order-1",children:[e.jsx(q,{mode:"wait",children:e.jsxs(m.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},children:[e.jsx("div",{className:"mb-6",children:e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-bold text-purple-400 uppercase tracking-widest",children:f[a].subtitle})}),e.jsxs("h1",{className:"text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6",children:["THE ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",children:f[a].title.toUpperCase()})]}),e.jsx("p",{className:"text-gray-400 text-lg leading-relaxed max-w-md",children:f[a].desc})]},a)}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-4",children:[e.jsx("button",{className:"bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform text-white",children:"Buy Now"}),e.jsxs("button",{onClick:t,className:"px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium flex items-center gap-2 text-white",children:[e.jsx(We,{size:16})," Get Code"]})]})]}),e.jsx("div",{className:"relative order-1 lg:order-2",children:e.jsxs("div",{className:"relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#101015]",children:[e.jsx(q,{initial:!1,custom:i,children:e.jsx(m.img,{src:f[a].image,initial:{x:i>0?100:-100,opacity:0},animate:{x:0,opacity:1},exit:{x:i<0?100:-100,opacity:0},transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},className:"absolute inset-0 w-full h-full object-cover"},a)}),e.jsxs("div",{className:"absolute bottom-4 right-4 flex gap-2 z-20",children:[e.jsx("button",{onClick:j,className:"p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition hover:scale-110",children:e.jsx(ue,{size:20})}),e.jsx("button",{onClick:d,className:"p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition hover:scale-110",children:e.jsx(v,{size:20})})]})]})})]})]})};function Ht(){return e.jsxs("div",{className:"flex flex-wrap gap-8 p-8",children:[e.jsxs("div",{className:"group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(ve,{})}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"}),e.jsx(x,{to:"/sections/sectionone",className:"absolute inset-0 z-20","aria-label":"View Product Showcase"})]}),e.jsxs("div",{className:"group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(we,{})}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"}),e.jsx(x,{to:"/sections/sectiontwo",className:"absolute inset-0 z-20","aria-label":"View Product Showcase"})]}),e.jsxs("div",{className:"group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(Ne,{})}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"}),e.jsx(x,{to:"/sections/sectionthree",className:"absolute inset-0 z-20","aria-label":"View Product Showcase"})]}),e.jsxs("div",{className:"group relative block w-100 h-75 rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-7xl origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(je,{})}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"}),e.jsx(x,{to:"/sections/sectionfour",className:"absolute inset-0 z-20","aria-label":"View Product Showcase"})]})]})}function Wt(){return e.jsx("div",{children:e.jsx(H,{})})}const re=`import React, { useState, useEffect } from 'react';
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
export default CarCleaningLanding;`,ye=()=>{const[t,a]=o.useState(!1),[r,i]=o.useState(!1),s=()=>{navigator.clipboard.writeText(re),i(!0),setTimeout(()=>i(!1),2e3)};return t?e.jsxs("div",{className:"w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-slate-800 shadow-2xl overflow-hidden h-auto min-h-[800px]",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6 flex-shrink-0 z-10",children:[e.jsxs("button",{onClick:()=>a(!1),className:"flex items-center gap-2 text-white hover:text-blue-400 transition-colors group",children:[e.jsx("div",{className:"bg-white/10 p-2 rounded-lg group-hover:bg-blue-600 transition-colors",children:e.jsx(z,{size:20})}),e.jsx("span",{className:"font-semibold tracking-wide",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-blue-500/20",children:[r?e.jsx(p,{size:16,className:"text-white"}):e.jsx(h,{size:16}),r?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"relative flex-grow rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]",children:e.jsx("div",{className:"absolute inset-0 overflow-auto custom-scrollbar",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",minHeight:"100%",fontSize:"14px",lineHeight:"1.6",backgroundColor:"#0d0d0d"},showLineNumbers:!0,wrapLines:!0,children:re})})})]}):e.jsx(Vt,{onShowCode:()=>a(!0)})},Vt=({onShowCode:t})=>{const[a,r]=o.useState(!1),[i,s]=o.useState(!1);o.useEffect(()=>{const n=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]);const l=[{title:"Exterior Detailing",price:"From $50",description:"Complete hand wash, clay bar treatment, and premium wax application for a mirror-like finish.",image:"https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800"},{title:"Interior Deep Clean",price:"From $80",description:"Steam cleaning, leather conditioning, and deep vacuuming to restore that new car smell.",image:"https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800"},{title:"Ceramic Coating",price:"From $300",description:"Long-lasting paint protection that repels water, dirt, and UV rays for years.",image:"https://images.unsplash.com/photo-1632823471419-f45a053183aa?auto=format&fit=crop&q=80&w=800"}];return e.jsxs("div",{className:"w-full relative bg-white font-sans text-slate-800 overflow-x-hidden rounded-xl border border-slate-100 shadow-sm",children:[e.jsxs("header",{className:`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${a?"bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3":"bg-transparent py-5"}`,children:[e.jsxs("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[e.jsxs("a",{href:"#",className:"flex items-center gap-2 group",children:[e.jsx("div",{className:"bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200",children:e.jsx(_,{size:20})}),e.jsxs("span",{className:"text-xl font-bold tracking-tight text-slate-900",children:["Pristine",e.jsx("span",{className:"text-blue-600",children:"Auto"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[e.jsxs("nav",{className:"flex items-center gap-6 text-sm font-medium text-slate-600",children:[e.jsx("a",{href:"#",className:"hover:text-blue-600 transition-colors",children:"Home"}),e.jsx("a",{href:"#services",className:"hover:text-blue-600 transition-colors",children:"Services"}),e.jsx("a",{href:"#contact",className:"hover:text-blue-600 transition-colors",children:"Contact"})]}),e.jsx("div",{className:"h-6 w-px bg-slate-200"}),e.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors",children:[e.jsx(C,{size:16})," View Source"]}),e.jsx("a",{href:"#contact",className:"px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20",children:"Book Now"})]}),e.jsx("button",{className:"md:hidden text-slate-900 p-2",onClick:()=>s(!i),children:i?e.jsx(M,{size:24}):e.jsx(A,{size:24})})]}),i&&e.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-5",children:e.jsxs("nav",{className:"flex flex-col gap-4 text-center",children:[e.jsx("a",{href:"#",className:"text-slate-600 py-2 hover:text-blue-600 font-medium",onClick:()=>s(!1),children:"Home"}),e.jsx("a",{href:"#services",className:"text-slate-600 py-2 hover:text-blue-600 font-medium",onClick:()=>s(!1),children:"Services"}),e.jsx("a",{href:"#contact",className:"text-slate-600 py-2 hover:text-blue-600 font-medium",onClick:()=>s(!1),children:"Contact"}),e.jsxs("button",{onClick:()=>{t(),s(!1)},className:"text-slate-600 py-2 hover:text-blue-600 font-medium flex items-center justify-center gap-2",children:[e.jsx(C,{size:16})," View Source"]}),e.jsx("a",{href:"#contact",className:"bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-200",onClick:()=>s(!1),children:"Book Appointment"})]})})]}),e.jsx("section",{className:"relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",children:e.jsxs("div",{className:"container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center",children:[e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6",children:[e.jsx(Ve,{size:14})," Premium Auto Care"]}),e.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6",children:["Showroom shine, ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500",children:"delivered to you."})]}),e.jsx("p",{className:"text-lg text-slate-500 mb-8 leading-relaxed",children:"Experience the ultimate car care service. We use eco-friendly products and advanced techniques to make your vehicle look brand new again."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs("a",{href:"#contact",className:"px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group",children:["Get a Quote"," ",e.jsx(Ue,{size:18,className:"group-hover:translate-x-1 transition-transform"})]}),e.jsxs("a",{href:"tel:+15551234567",className:"px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2",children:[e.jsx(T,{size:18})," (555) 123-4567"]})]})]}),e.jsxs("div",{className:"relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000",alt:"Luxury Car Washing",className:"h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"})]})]})}),e.jsx("section",{id:"services",className:"py-24 bg-slate-50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs("div",{className:"text-center max-w-xl mx-auto mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Our Services"}),e.jsx("p",{className:"text-slate-500 text-lg",children:"Choose from our range of premium cleaning packages designed to protect and enhance your vehicle."})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:l.map((n,d)=>e.jsxs("div",{className:"group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col",children:[e.jsxs("div",{className:"h-48 overflow-hidden relative bg-slate-100",children:[e.jsx("div",{className:"absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"}),e.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})]}),e.jsxs("div",{className:"p-8 flex flex-col flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-slate-900",children:n.title}),e.jsx("span",{className:"text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm",children:n.price})]}),e.jsx("p",{className:"text-slate-500 mb-6 text-sm leading-relaxed flex-grow",children:n.description}),e.jsx("button",{className:"w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-center",children:"Learn More"})]})]},d))})]})}),e.jsx("section",{className:"py-24 bg-white",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[e.jsxs("div",{className:"relative order-last lg:order-first",children:[e.jsx("div",{className:"aspect-square rounded-3xl overflow-hidden relative z-10 shadow-2xl bg-slate-100",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&fit=crop&q=80&w=1000",alt:"Detailing worker",className:"w-full h-full object-cover"})}),e.jsx("div",{className:"absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-slate-900 mb-6",children:"Why choose Pristine?"}),e.jsx("div",{className:"space-y-8",children:[{title:"Eco-Friendly Products",desc:"We use only biodegradable soaps and water-saving techniques."},{title:"Certified Professionals",desc:"Our team is trained in the latest detailing technologies."},{title:"Satisfaction Guaranteed",desc:"If you aren't happy, we'll re-clean it for free."}].map((n,d)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"mt-1 flex-shrink-0",children:e.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600",children:e.jsx(ge,{size:24})})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-slate-900",children:n.title}),e.jsx("p",{className:"text-slate-500 mt-2 leading-relaxed",children:n.desc})]})]},d))})]})]})})}),e.jsx("section",{id:"contact",className:"py-24 bg-slate-50 relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-6 relative z-10",children:e.jsx("div",{className:"max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden",children:e.jsxs("div",{className:"grid md:grid-cols-2",children:[e.jsxs("div",{className:"p-12 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:"text-3xl font-bold mb-4",children:"Book Appointment"}),e.jsx("p",{className:"text-slate-400 mb-8 text-lg",children:"Fill out the form and we'll get back to you within 24 hours to confirm your slot."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",children:e.jsx(T,{size:20,className:"text-blue-400"})}),e.jsx("span",{className:"font-medium",children:"+1 (555) 123-4567"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",children:e.jsx(be,{size:20,className:"text-blue-400"})}),e.jsx("span",{className:"font-medium",children:"123 Detailing Blvd, NY"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",children:e.jsx(qe,{size:20,className:"text-blue-400"})}),e.jsx("span",{className:"font-medium",children:"Mon-Sat, 8am - 6pm"})]})]})]}),e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"})]}),e.jsx("div",{className:"p-12",children:e.jsxs("form",{action:"https://formspree.io/f/YOUR_FORM_ID",method:"POST",className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-bold text-slate-700 mb-2",children:"Full Name"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(V,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"John Doe"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-bold text-slate-700 mb-2",children:"Email Address"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(D,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"john@example.com"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-bold text-slate-700 mb-2",children:"Phone Number"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(T,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0,className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"+1 (555) 123-4567"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"neighborhood",className:"block text-sm font-bold text-slate-700 mb-2",children:"Neighborhood"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx($e,{size:18,className:"text-slate-400"})}),e.jsx("input",{type:"text",id:"neighborhood",name:"neighborhood",className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all",placeholder:"Downtown, Westside, etc."})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-bold text-slate-700 mb-2",children:"Message"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-3 left-3 flex items-center pointer-events-none",children:e.jsx(Ye,{size:18,className:"text-slate-400"})}),e.jsx("textarea",{id:"message",name:"message",rows:"4",className:"w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none",placeholder:"How can we help you?"})]})]}),e.jsxs("button",{type:"submit",className:"w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2",children:["Send Request ",e.jsx(fe,{size:18})]})]})})]})})})}),e.jsx("footer",{className:"bg-slate-950 text-slate-400 py-12 border-t border-slate-900",children:e.jsxs("div",{className:"container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{size:18,className:"text-blue-600"}),e.jsx("span",{className:"font-bold text-white text-lg",children:"PristineAuto"})]}),e.jsx("p",{className:"text-sm",children:"© 2024 Pristine Auto Spa. All rights reserved."}),e.jsxs("div",{className:"flex gap-6 text-sm font-medium",children:[e.jsx(x,{to:"/privacy",className:"hover:text-white transition-colors",children:"Privacy"}),e.jsx(x,{to:"/terms",className:"hover:text-white transition-colors",children:"Terms"})]})]})})]})},le=`import React, { useState, useEffect } from 'react';
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
export default CoffeeRepairLanding;`,ke=()=>{const[t,a]=o.useState(!1),[r,i]=o.useState(!1),s=()=>{navigator.clipboard.writeText(le),i(!0),setTimeout(()=>i(!1),2e3)};return t?e.jsxs("div",{className:"w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-stone-800 shadow-2xl overflow-hidden h-auto min-h-[800px]",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6 flex-shrink-0 z-10",children:[e.jsxs("button",{onClick:()=>a(!1),className:"flex items-center gap-2 text-white hover:text-amber-400 transition-colors group",children:[e.jsx("div",{className:"bg-white/10 p-2 rounded-lg group-hover:bg-amber-600 transition-colors",children:e.jsx(z,{size:20})}),e.jsx("span",{className:"font-semibold tracking-wide",children:"Back to Preview"})]}),e.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-amber-500/20",children:[r?e.jsx(p,{size:16,className:"text-white"}):e.jsx(h,{size:16}),r?"Copied!":"Copy Code"]})]}),e.jsx("div",{className:"relative flex-grow rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]",children:e.jsx("div",{className:"absolute inset-0 overflow-auto custom-scrollbar",children:e.jsx(u,{language:"javascript",style:g,customStyle:{margin:0,padding:"2rem",minHeight:"100%",fontSize:"14px",lineHeight:"1.6",backgroundColor:"#0d0d0d"},showLineNumbers:!0,wrapLines:!0,children:le})})})]}):e.jsx(Ut,{onShowCode:()=>a(!0)})},Ut=({onShowCode:t})=>{const[a,r]=o.useState(!1),[i,s]=o.useState(!1),[l,n]=o.useState("idle");o.useEffect(()=>{const c=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const d=c=>{const b=document.getElementById(c);b&&(b.scrollIntoView({behavior:"smooth"}),s(!1))},j=async c=>{c.preventDefault(),n("submitting");const b=new FormData(c.target);try{(await fetch("https://formspree.io/f/xlgndygr",{method:"POST",body:b,headers:{Accept:"application/json"}})).ok?(n("success"),c.target.reset(),setTimeout(()=>n("idle"),5e3)):n("error")}catch{n("error")}};return e.jsxs("div",{className:"w-full relative bg-[#0f0b0a] text-stone-100 font-sans selection:bg-amber-600 selection:text-white overflow-hidden rounded-xl border border-stone-800 shadow-2xl",children:[e.jsxs("nav",{className:`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${a?"bg-[#0f0b0a]/90 backdrop-blur-md border-b border-stone-800 py-3":"bg-transparent py-6"}`,children:[e.jsxs("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20",children:e.jsx(I,{className:"text-white h-6 w-6"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-xl font-bold tracking-tight text-white leading-none",children:["ATLAS ",e.jsx("span",{className:"text-amber-500",children:"ESPRESSO"})]}),e.jsx("p",{className:"text-[10px] text-stone-400 uppercase tracking-widest",children:"Repair & Sales • Marrakech"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[e.jsx("button",{onClick:()=>d("services"),className:"text-sm font-medium text-stone-300 hover:text-white transition",children:"Services"}),e.jsx("button",{onClick:()=>d("sales"),className:"text-sm font-medium text-stone-300 hover:text-white transition",children:"Shop Machines"}),e.jsx("button",{onClick:()=>d("contact"),className:"text-sm font-medium text-stone-300 hover:text-white transition",children:"Contact"}),e.jsx("div",{className:"h-6 w-px bg-stone-800"}),e.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-stone-800",children:[e.jsx(C,{size:16})," Source"]}),e.jsx("button",{onClick:()=>d("contact"),className:"bg-white text-[#0f0b0a] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-stone-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-200",children:"Book Repair"})]}),e.jsx("button",{onClick:()=>s(!i),className:"md:hidden text-white p-2",children:i?e.jsx(M,{}):e.jsx(A,{})})]}),i&&e.jsxs("div",{className:"absolute top-full left-0 right-0 bg-[#1c1412] border-b border-stone-800 p-6 md:hidden shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-5 z-40",children:[e.jsx("button",{onClick:()=>d("services"),className:"text-left text-lg font-medium text-stone-300",children:"Services"}),e.jsx("button",{onClick:()=>d("sales"),className:"text-left text-lg font-medium text-stone-300",children:"Buy Machines"}),e.jsxs("button",{onClick:()=>{t(),s(!1)},className:"flex items-center gap-2 text-stone-400 font-medium py-2",children:[e.jsx(C,{size:18})," View Source Code"]}),e.jsx("button",{onClick:()=>d("contact"),className:"bg-amber-600 text-white py-3 rounded-lg font-bold text-center mt-2",children:"Book Appointment"})]})]}),e.jsxs("section",{className:"relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"}),e.jsxs("div",{className:"container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-900/50 bg-amber-950/30 text-amber-400 text-xs font-semibold tracking-wide uppercase",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500 animate-pulse"}),"Serving All of Marrakech"]}),e.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold leading-[1.1] text-white",children:["Don't Let a ",e.jsx("br",{}),"Broken Machine ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600",children:"Stop the Brew."})]}),e.jsx("p",{className:"text-lg text-stone-400 max-w-xl leading-relaxed",children:"We repair, service, and sell professional espresso machines. Whether you need a quick fix or a brand new setup, Atlas Espresso is Marrakech's trusted partner."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 pt-2",children:[e.jsxs("button",{onClick:()=>d("contact"),className:"group flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 transition shadow-lg shadow-amber-900/40",children:[e.jsx($,{className:"h-5 w-5 group-hover:rotate-12 transition-transform"}),"Schedule Repair"]}),e.jsxs("button",{onClick:()=>d("sales"),className:"flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-stone-300 border border-stone-800 hover:border-stone-600 hover:bg-stone-900 transition",children:[e.jsx(Xe,{className:"h-5 w-5"})," Shop Machines"]})]})]}),e.jsxs("div",{className:"relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#1c1412] border border-stone-800 group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent opacity-50 blur-2xl"}),e.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center text-center p-8",children:[e.jsx("div",{className:"w-32 h-32 rounded-full bg-stone-900 border-4 border-amber-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",children:e.jsx(I,{className:"h-16 w-16 text-amber-600"})}),e.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Expert Diagnostics"}),e.jsx("p",{className:"text-stone-500",children:"Sales & Repair in Marrakech"}),e.jsxs("div",{className:"absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4",children:[e.jsx("div",{className:"bg-green-500/20 p-2 rounded-lg",children:e.jsx(ge,{className:"h-6 w-6 text-green-500"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Certified Technicians"}),e.jsx("p",{className:"text-xs text-stone-400",children:"Available Today"})]})]})]})]})]})]}),e.jsx("section",{id:"services",className:"py-24 px-6 relative bg-[#16100e]",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 gap-4",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-white mb-6",children:"Services We Offer"}),e.jsx("div",{className:"h-1 w-20 bg-amber-600 rounded-full"})]})}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:e.jsx(L,{className:"h-6 w-6 text-amber-400"}),title:"Electrical Repair",desc:"Heating elements, sensors, and circuit boards."},{icon:e.jsx($,{className:"h-6 w-6 text-amber-400"}),title:"Hydraulic Repair",desc:"Pressure leaks, flow issues, and steam wands."},{icon:e.jsx(Ke,{className:"h-6 w-6 text-amber-400"}),title:"Deep Cleaning",desc:"Descaling and maintenance for longevity."},{icon:e.jsx(Y,{className:"h-6 w-6 text-amber-400"}),title:"We Come To You",desc:"Pickup, delivery, and on-site repair in Marrakech."}].map((c,b)=>e.jsxs("div",{className:"group bg-[#1c1412] border border-stone-800 p-8 rounded-2xl hover:border-amber-900/50 hover:bg-stone-900 transition duration-300",children:[e.jsx("div",{className:"w-12 h-12 bg-stone-950 rounded-lg flex items-center justify-center mb-6 border border-stone-800 group-hover:border-amber-600/30 transition-colors",children:c.icon}),e.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:c.title}),e.jsx("p",{className:"text-stone-400 leading-relaxed text-sm",children:c.desc})]},b))})]})}),e.jsx("section",{className:"py-20 px-6 bg-gradient-to-r from-amber-900/20 to-stone-900 border-y border-stone-800",children:e.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{className:"bg-amber-600 p-4 rounded-2xl shadow-lg shadow-amber-900/20 hidden md:block",children:e.jsx(Y,{className:"h-10 w-10 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Mobile Repair Service"}),e.jsx("p",{className:"text-stone-400 max-w-lg",children:"Can't bring your machine to us? We offer pickup and delivery services across Marrakech, or on-site diagnosis for commercial cafes."})]})]}),e.jsx("button",{onClick:()=>d("contact"),className:"bg-white text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition whitespace-nowrap shadow-lg",children:"Schedule Pickup"})]})}),e.jsx("section",{id:"sales",className:"py-24 px-6 relative bg-[#0f0b0a]",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[e.jsx("span",{className:"text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block",children:"Store"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Machines for Sale"}),e.jsx("p",{className:"text-stone-400",children:"We sell certified refurbished machines and brand new units. All come with a warranty."})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{tag:"Refurbished",name:"Breville Barista Express",price:"4,500 DH",desc:"Fully serviced, new gaskets, 6-month warranty. Perfect for home use."},{tag:"Brand New",name:"Rocket Appartamento",price:"16,000 DH",desc:"Compact commercial grade machine. Heat exchanger with E61 group head."},{tag:"Used - Good",name:"Nuova Simonelli Appia",price:"Contact for Price",desc:"2-Group commercial machine. Ideal for starting a small coffee shop."}].map((c,b)=>e.jsxs("div",{className:"bg-[#1c1412] rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-600 transition group",children:[e.jsxs("div",{className:"h-48 bg-stone-800 flex items-center justify-center relative",children:[e.jsx(I,{className:"h-16 w-16 text-stone-600 group-hover:scale-110 transition duration-500"}),e.jsx("span",{className:`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${c.tag==="Brand New"?"bg-amber-600 text-white":"bg-stone-700 text-stone-300"}`,children:c.tag})]}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:c.name}),e.jsx("p",{className:"text-amber-500 font-bold text-lg mb-4",children:c.price}),e.jsx("p",{className:"text-stone-400 text-sm mb-6",children:c.desc}),e.jsx("button",{onClick:()=>d("contact"),className:"w-full py-3 rounded-lg border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition font-bold",children:"Inquire Now"})]})]},b))})]})}),e.jsx("section",{id:"contact",className:"py-24 px-6 relative bg-[#16100e]",children:e.jsx("div",{className:"container mx-auto relative z-10",children:e.jsx("div",{className:"bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800",children:e.jsxs("div",{className:"grid lg:grid-cols-2",children:[e.jsx("div",{className:"p-10 lg:p-16 bg-gradient-to-br from-amber-900/20 to-[#1c1412] flex flex-col relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Visit Our Workshop"}),e.jsx("p",{className:"text-stone-400 mb-8",children:"Located in Marrakech. Call us for mobile service or drop by."}),e.jsxs("div",{className:"space-y-6 mb-10",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-amber-600/10 p-3 rounded-lg text-amber-500",children:e.jsx(T,{className:"h-5 w-5"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-stone-500 uppercase font-bold tracking-wider",children:"Phone / WhatsApp"}),e.jsx("a",{href:"tel:0613591929",className:"text-xl font-bold text-white hover:text-amber-500 transition",children:"0613 59 19 29"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-amber-600/10 p-3 rounded-lg text-amber-500",children:e.jsx(D,{className:"h-5 w-5"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-stone-500 uppercase font-bold tracking-wider",children:"Email"}),e.jsx("a",{href:"mailto:sberechou@gmail.com",className:"text-lg font-bold text-white hover:text-amber-500 transition",children:"sberechou@gmail.com"})]})]})]}),e.jsxs("div",{className:"w-full h-64 bg-stone-800 rounded-2xl border border-stone-700 relative overflow-hidden group",children:[e.jsx("div",{className:"absolute inset-0 opacity-30 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsx(be,{className:"h-10 w-10 text-amber-600 drop-shadow-lg animate-bounce"})}),e.jsx("div",{className:"absolute bottom-4 left-4 bg-stone-900/90 px-4 py-2 rounded-lg text-xs font-bold text-stone-300 border border-stone-700",children:"Marrakech, Morocco"}),e.jsx("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center",children:e.jsx("a",{href:"https://maps.google.com/?q=Marrakech",target:"_blank",rel:"noopener noreferrer",className:"bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition",children:"Open in Google Maps"})})]})]})}),e.jsxs("div",{className:"p-10 lg:p-16 bg-white",children:[e.jsx("h3",{className:"text-2xl font-bold text-stone-900 mb-2",children:"Request Service / Buy"}),e.jsx("p",{className:"text-stone-500 mb-8 text-sm",children:"Tell us if you need a repair or want to buy a machine."}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Name"}),e.jsxs("div",{className:"relative",children:[e.jsx(V,{className:"absolute left-3 top-3.5 text-stone-400 h-4 w-4"}),e.jsx("input",{name:"name",type:"text",required:!0,className:"w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",placeholder:"Your Name"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Phone"}),e.jsxs("div",{className:"relative",children:[e.jsx(T,{className:"absolute left-3 top-3.5 text-stone-400 h-4 w-4"}),e.jsx("input",{name:"phone",type:"tel",required:!0,className:"w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",placeholder:"06..."})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Email (Optional)"}),e.jsxs("div",{className:"relative",children:[e.jsx(D,{className:"absolute left-3 top-3.5 text-stone-400 h-4 w-4"}),e.jsx("input",{name:"email",type:"email",className:"w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",placeholder:"Optional"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Service Type"}),e.jsxs("select",{name:"serviceType",className:"w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm",children:[e.jsx("option",{value:"Workshop Repair",children:"Repair at Workshop"}),e.jsx("option",{value:"Mobile Repair",children:"Mobile Repair (Come to me)"}),e.jsx("option",{value:"Buying",children:"Buy a Machine"}),e.jsx("option",{value:"Inquiry",children:"General Inquiry"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-stone-600 uppercase mb-1 block",children:"Details"}),e.jsx("textarea",{name:"message",className:"w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition h-24 resize-none outline-none text-sm",placeholder:"Machine model, issue, or request..."})]}),e.jsxs("button",{type:"submit",disabled:l==="submitting"||l==="success",className:`w-full font-bold py-4 rounded-xl transition duration-300 shadow-xl flex items-center justify-center gap-2 ${l==="success"?"bg-green-600 text-white":l==="error"?"bg-red-600 text-white":"bg-stone-900 text-white hover:bg-amber-600"}`,children:[l==="submitting"&&e.jsx(Je,{className:"h-5 w-5 animate-spin"}),l==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(p,{className:"h-5 w-5"})," Message Sent!"]}),l==="error"&&"Error - Try Again",l==="idle"&&e.jsxs(e.Fragment,{children:["Send Request ",e.jsx(fe,{size:18})]})]})]})]})]})})})}),e.jsx("footer",{className:"bg-stone-950 text-stone-400 py-12 border-t border-stone-900",children:e.jsxs("div",{className:"container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{size:18,className:"text-amber-600"}),e.jsx("span",{className:"font-bold text-white text-lg",children:"AtlasEspresso"})]}),e.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," Atlas Espresso. Marrakech, Morocco."]})]})})]})};function qt(){return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-8 p-8",children:[e.jsxs("div",{className:"group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(ye,{})}),e.jsx(x,{to:"/sectionpages/pageone",className:"absolute inset-0 z-20"})]}),e.jsxs("div",{className:"group relative block w-[400px] h-[300px] rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500",children:[e.jsx("div",{className:"absolute top-0 left-0 w-[1280px] origin-top-left scale-[0.3125] pointer-events-none select-none bg-black h-screen",children:e.jsx(ke,{})}),e.jsx(x,{to:"/sectionpages/pagetwo",className:"absolute inset-0 z-20"})]}),e.jsx("div",{className:"relative w-[400px] h-[300px] rounded-2xl border border-dashed border-white/10 bg-white/5 overflow-hidden flex items-center justify-center group",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-xl text-white/40 font-display uppercase tracking-widest mb-4 group-hover:text-white transition-colors",children:"page three"}),e.jsx(x,{to:"/sections/sectionstwo",className:"px-6 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white hover:text-black transition-colors",children:"Coming Soon"})]})})]})})}function $t(){return e.jsxs("div",{className:"p-5",children:[e.jsx("h1",{className:"text-orange-500 font-bold text-4xl tracking-wide uppercase mb-4",children:"landing pages"}),e.jsx(H,{})]})}const Yt=()=>{const[t,a]=o.useState({tip:!1,bmi:!1}),[r,i]=o.useState({tip:"simple",bmi:"simple"}),s=(b,y)=>{navigator.clipboard.writeText(b),a(R=>({...R,[y]:!0})),setTimeout(()=>a(R=>({...R,[y]:!1})),2e3)},l=(b,y)=>{i(R=>({...R,[b]:y}))},n=`# Simple Version: No Functions
print("Welcome to the Tip Calculator! 💰")

# 1. Inputs
bill = float(input("What was the total bill? $"))
tip = int(input("What percentage tip? 10, 12, or 15? "))
people = int(input("How many people to split the bill? "))

# 2. Calculations
tip_as_percent = tip / 100
total_tip_amount = bill * tip_as_percent

# Update bill variable
bill += total_tip_amount

# Split
bill_per_person = bill / people

# 3. Output
final_amount = "{:.2f}".format(bill_per_person)
print(f"Each person should pay: \${final_amount}")`,d=`# Function Version: Best Practice
def tip_calculator():
    print("Welcome to the Tip Calculator! 💰")
    
    # Inputs
    bill = float(input("What was the total bill? $"))
    tip = int(input("What percentage tip? 10, 12, or 15? "))
    people = int(input("How many people to split the bill? "))
    
    # Calculations
    tip_as_percent = tip / 100
    total_tip_amount = bill * tip_as_percent
    
    # Add tip to bill using +=
    total_bill = bill
    total_bill += total_tip_amount
    
    # Split
    bill_per_person = total_bill / people
    
    # Return formatted string (or print it)
    final_amount = "{:.2f}".format(bill_per_person)
    print(f"Each person should pay: \${final_amount}")

# Call the function to run it
tip_calculator()`,j=`# Simple Version: Direct Execution
print("Welcome to the BMI Calculator! 🏥")

# 1. Inputs
weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))

# 2. Logic
bmi = weight / (height ** 2)

# 3. Conditionals
if bmi < 18.5:
    print(f"BMI: {bmi:.2f} -> Underweight")
elif bmi < 25:
    print(f"BMI: {bmi:.2f} -> Normal")
elif bmi < 30:
    print(f"BMI: {bmi:.2f} -> Overweight")
else:
    print(f"BMI: {bmi:.2f} -> Obese")`,c=`# Function Version: Reusable Logic
def calculate_bmi(weight, height):
    # Calculate and return the raw number
    return weight / (height ** 2)

def interpret_bmi(bmi_value):
    # Logic to interpret the result
    if bmi_value < 18.5:
        return "Underweight"
    elif bmi_value < 25:
        return "Normal Weight"
    elif bmi_value < 30:
        return "Overweight"
    else:
        return "Obese"

# Main execution block
print("Welcome to the BMI Calculator! 🏥")
w = float(input("Enter weight (kg): "))
h = float(input("Enter height (m): "))

my_bmi = calculate_bmi(w, h)
status = interpret_bmi(my_bmi)

print(f"Your BMI is {my_bmi:.2f}. You are: {status}")`;return e.jsx("div",{className:"min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-500/30",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-20 space-y-32",children:[e.jsxs("section",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-6 text-center md:text-left",children:[e.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-800/50 text-blue-400 text-sm font-medium",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-blue-500"})]}),"Python Project 01"]}),e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white tracking-tight",children:"Tip Calculator"}),e.jsx("p",{className:"text-lg text-slate-400 max-w-2xl leading-relaxed",children:"A classic beginner project to master data types, input handling, and the augmented assignment operator."})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsx(k,{icon:e.jsx(C,{className:"w-5 h-5 text-blue-400"}),title:"Input Conversion",text:e.jsxs("span",{children:["Inputs are strings by default. Wrap them in"," ",e.jsx("code",{className:"text-blue-300 bg-blue-900/30 px-1 rounded",children:"float()"})," or"," ",e.jsx("code",{className:"text-blue-300 bg-blue-900/30 px-1 rounded",children:"int()"})," to do math."]})}),e.jsx(k,{icon:e.jsx(Ze,{className:"w-5 h-5 text-purple-400"}),title:"The += Operator",text:e.jsxs("span",{children:["A cleaner way to write"," ",e.jsx("code",{className:"text-purple-300 bg-purple-900/30 px-1 rounded",children:"x = x + y"}),". It adds to the variable in place."]})}),e.jsx(k,{icon:e.jsx(V,{className:"w-5 h-5 text-emerald-400"}),title:"Logic Flow",text:"The program follows a linear path: Gather Data → Process Math → Output Result. Simple and effective."})]}),e.jsxs("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-[#0F0F0F] shadow-2xl shadow-black/50 ring-1 ring-white/5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#161616] border-b border-slate-800 gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 bg-slate-900/50 p-1 rounded-lg",children:[e.jsxs("button",{onClick:()=>l("tip","simple"),className:`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${r.tip==="simple"?"bg-blue-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[e.jsx(X,{className:"w-3.5 h-3.5"}),"Simple Script"]}),e.jsxs("button",{onClick:()=>l("tip","function"),className:`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${r.tip==="function"?"bg-blue-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[e.jsx(K,{className:"w-3.5 h-3.5"}),"With Function"]})]}),e.jsxs("button",{onClick:()=>s(r.tip==="simple"?n:d,"tip"),className:"flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ml-auto sm:ml-0",children:[t.tip?e.jsx(p,{className:"w-3.5 h-3.5 text-green-400"}):e.jsx(h,{className:"w-3.5 h-3.5"}),t.tip?"Copied!":"Copy"]})]}),e.jsx(u,{language:"python",style:g,customStyle:{margin:0,padding:"1.5rem",background:"transparent",fontSize:"0.9rem"},showLineNumbers:!0,wrapLines:!0,children:r.tip==="simple"?n:d})]})]}),e.jsx("div",{className:"w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"}),e.jsxs("section",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-6 text-center md:text-left",children:[e.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-900/20 border border-indigo-800/50 text-indigo-400 text-sm font-medium",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-indigo-500"})]}),"Python Project 02"]}),e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white tracking-tight",children:"BMI Calculator"}),e.jsxs("p",{className:"text-lg text-slate-400 max-w-2xl leading-relaxed",children:["Take it a step further by introducing conditional logic (",e.jsx("code",{className:"text-indigo-400",children:"if/elif/else"}),"). This teaches your program how to make decisions."]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsx(k,{icon:e.jsx(Qe,{className:"w-5 h-5 text-indigo-400"}),title:"Mathematical Logic",text:e.jsxs("span",{children:["We use ",e.jsx("code",{className:"text-indigo-300 bg-indigo-900/30 px-1 rounded",children:"**"})," ","to square the height."," ",e.jsx("code",{className:"text-xs opacity-70 block mt-1",children:"Example: 1.75 ** 2 = 3.0625"})]})}),e.jsx(k,{icon:e.jsx(pe,{className:"w-5 h-5 text-rose-400"}),title:"Control Flow",text:"The heart of this program. It checks ranges (e.g., 'Is BMI less than 18.5?') to deliver a specific health verdict."}),e.jsx(k,{icon:e.jsx(v,{className:"w-5 h-5 text-orange-400"}),title:"Return Values",text:e.jsxs("span",{children:["In the function version, we"," ",e.jsx("code",{className:"text-orange-300 bg-orange-900/30 px-1 rounded",children:"return"})," data instead of just printing it. This makes the logic reusable."]})})]}),e.jsxs("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-[#0F0F0F] shadow-2xl shadow-black/50 ring-1 ring-white/5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#161616] border-b border-slate-800 gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 bg-slate-900/50 p-1 rounded-lg",children:[e.jsxs("button",{onClick:()=>l("bmi","simple"),className:`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${r.bmi==="simple"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[e.jsx(X,{className:"w-3.5 h-3.5"}),"Simple Script"]}),e.jsxs("button",{onClick:()=>l("bmi","function"),className:`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${r.bmi==="function"?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[e.jsx(K,{className:"w-3.5 h-3.5"}),"With Function"]})]}),e.jsxs("button",{onClick:()=>s(r.bmi==="simple"?j:c,"bmi"),className:"flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ml-auto sm:ml-0",children:[t.bmi?e.jsx(p,{className:"w-3.5 h-3.5 text-green-400"}):e.jsx(h,{className:"w-3.5 h-3.5"}),t.bmi?"Copied!":"Copy"]})]}),e.jsx(u,{language:"python",style:g,customStyle:{margin:0,padding:"1.5rem",background:"transparent",fontSize:"0.9rem"},showLineNumbers:!0,wrapLines:!0,children:r.bmi==="simple"?j:c})]})]})]})})},k=({icon:t,title:a,text:r})=>e.jsx("div",{className:"group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all duration-300",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all shrink-0",children:t}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors",children:a}),e.jsx("p",{className:"text-slate-400 leading-relaxed text-sm",children:r})]})]})}),Xt=et([{path:"/",element:e.jsx(lt,{}),errorElement:e.jsx(_t,{}),children:[{path:"setup",element:e.jsx(mt,{})},{path:"libraries",element:e.jsx(pt,{})},{path:"git",element:e.jsx(vt,{})},{path:"git/reset",element:e.jsx(St,{})},{path:"git/hosting",element:e.jsx(It,{})},{path:"prisma",element:e.jsx(Ot,{})},{path:"components",element:e.jsx(Ht,{})},{path:"fullpages",element:e.jsx(qt,{})},{path:"frontend",element:e.jsx("frontComp",{})},{path:"py",element:e.jsx(Yt,{})},{path:"/sections",element:e.jsx(Wt,{}),children:[{path:"/sections/sectionone",element:e.jsx(ve,{})},{path:"/sections/sectiontwo",element:e.jsx(we,{})},{path:"/sections/sectionthree",element:e.jsx(Ne,{})},{path:"/sections/sectionfour",element:e.jsx(je,{})}]},{path:"/sectionpages",element:e.jsx($t,{}),children:[{path:"/sectionpages/pageone",element:e.jsx(ye,{})},{path:"/sectionpages/pagetwo",element:e.jsx(ke,{})}]}]}],{basename:"/course-content"});tt.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(st,{router:Xt})}));
