import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Copy, ArrowLeft } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// -----------------------------------------------------------------------------
// 1. THE SOURCE CODE STRING (What the user copies)
// -----------------------------------------------------------------------------
const sourceCode = `import { motion, useInView } from 'framer-motion'
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
export default ProductShowcase`

// -----------------------------------------------------------------------------
// 2. THE WRAPPER (Handles State)
// -----------------------------------------------------------------------------
const ProductShowcaseWrapper = () => {
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
              className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden py-24 text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative order-last lg:order-first flex justify-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative z-10">
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
            className="text-center lg:text-left">
            <motion.div variants={fadeUpVariants} className="mb-6">
              <span className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase bg-orange-500/10 px-3 py-1 rounded">
                New Arrival
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              PURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                PRECISION
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Experience the perfect balance of performance and portability. Designed for creators
              who demand excellence in every shot.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition-transform shadow-lg shadow-orange-500/25">
                Pre-Order Now
              </button>

              {/* BUTTON UPDATE: Calls the toggle function passed from wrapper */}
              <button
                onClick={onGetCode}
                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold tracking-wide">
                Get Code
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcaseWrapper
