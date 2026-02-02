import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Copy, ArrowLeft, Smartphone, Cpu, Wifi } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// -----------------------------------------------------------------------------
// 1. THE SOURCE CODE STRING (Updated to match the new design)
// -----------------------------------------------------------------------------
const sourceCode = `import { motion, useInView } from 'framer-motion'
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
export default ProductShowcase`

// -----------------------------------------------------------------------------
// 2. THE WRAPPER (Handles State) - KEPT EXACTLY THE SAME LOGIC
// -----------------------------------------------------------------------------
const ProductThree = () => {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // If showing code, render the Syntax Highlighter
  if (showCode) {
    return (
      <div className="relative w-full min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-5xl">
          {/* Code View Header */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowCode(false)}
              className="flex items-center gap-2 text-white hover:text-cyan-500 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Preview</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold text-white transition-colors">
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          {/* Code Block */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{ margin: 0, padding: '2rem', maxHeight: '80vh' }}
              showLineNumbers={true}>
              {sourceCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }

  // Otherwise, render the component (passing the toggle function)
  return <ActualProductShowcase onGetCode={() => setShowCode(true)} />
}

// -----------------------------------------------------------------------------
// 3. THE ACTUAL COMPONENT (Accepts onGetCode prop)
// -----------------------------------------------------------------------------
const ActualProductShowcase = ({ onGetCode }) => {
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
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-[#05050a] overflow-hidden py-24 text-white font-sans">
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
            className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              variants={slideUpVariants}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Gen 5 Available Now
              </span>
            </motion.div>

            <motion.h1
              variants={slideUpVariants}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                REALITY
              </span>
            </motion.h1>

            <motion.p
              variants={slideUpVariants}
              className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
              Forged in titanium. Powered by neural engines. The new Horizon X1 redefines what a
              handheld device can do.
            </motion.p>

            {/* Specs Grid */}
            <motion.div
              variants={slideUpVariants}
              className="grid grid-cols-3 gap-4 w-full max-w-md mb-10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 transition-colors hover:bg-white/10">
                <Cpu className="text-cyan-400" size={24} />
                <span className="text-xs text-slate-400 uppercase font-bold">A18 Pro</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 transition-colors hover:bg-white/10">
                <Smartphone className="text-indigo-400" size={24} />
                <span className="text-xs text-slate-400 uppercase font-bold">OLED 120Hz</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 transition-colors hover:bg-white/10">
                <Wifi className="text-emerald-400" size={24} />
                <span className="text-xs text-slate-400 uppercase font-bold">Wifi 7</span>
              </div>
            </motion.div>

            <motion.div
              variants={slideUpVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold tracking-tight hover:scale-105 transition-transform">
                Buy Horizon X1
              </button>

              {/* BUTTON UPDATE: Calls the toggle function passed from wrapper */}
              <button
                onClick={onGetCode}
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold tracking-wide text-white">
                Get Code
              </button>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end">
            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative z-10">
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
                className="absolute top-20 -left-12 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-xl z-20">
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

export default ProductThree
