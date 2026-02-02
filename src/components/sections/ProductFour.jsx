import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Check, Copy, ArrowLeft, ChevronLeft, ChevronRight, Command } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// -----------------------------------------------------------------------------
// 1. THE SOURCE CODE STRING (Copyable Content)
// -----------------------------------------------------------------------------
const sourceCode = `import { useState } from 'react'
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
export default KeyboardCarousel`

// -----------------------------------------------------------------------------
// 2. THE WRAPPER (Handles Code View State)
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
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowCode(false)}
              className="flex items-center gap-2 text-white hover:text-purple-500 transition-colors">
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
const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1742&auto=format&fit=crop',
    title: 'Phantom 65',
    subtitle: 'Custom Series',
    desc: 'Gasket-mounted for deep acoustics.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2000&auto=format&fit=crop',
    title: 'Cyber Board',
    subtitle: 'Neon Edition',
    desc: 'RGB per-key illumination.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=2065&auto=format&fit=crop',
    title: 'Vapor TKL',
    subtitle: 'Retro Wave',
    desc: 'Retro aesthetics, modern feel.',
  },
]

const ActualProductShowcase = ({ onGetCode }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Ref strictly for initial fade-in logic
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-[#050505] text-white p-6 md:p-12 overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-700/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}>
              <div className="mb-6">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-bold text-purple-400 uppercase tracking-widest">
                  {slides[currentIndex].subtitle}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
                THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {slides[currentIndex].title.toUpperCase()}
                </span>
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {slides[currentIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform text-white">
              Buy Now
            </button>

            <button
              onClick={onGetCode}
              className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium flex items-center gap-2 text-white">
              <Command size={16} /> Get Code
            </button>
          </div>
        </motion.div>

        {/* Right: Carousel Image */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#101015]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={slides[currentIndex].image}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction < 0 ? 100 : -100, opacity: 0 }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-20">
              <button
                onClick={prevSlide}
                className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition hover:scale-110">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white/20 transition hover:scale-110">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcaseWrapper
