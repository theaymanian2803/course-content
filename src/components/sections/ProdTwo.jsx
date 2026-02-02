import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Code, ArrowLeft, Copy, Check } from 'lucide-react'

// --- SYNTAX HIGHLIGHTER IMPORTS ---
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// -----------------------------------------------------------------------------
// 1. THE SOURCE CODE STRING
// -----------------------------------------------------------------------------
const sourceCode = `import React, { useState, useEffect } from 'react'
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

export default FurnitureHero`

// -----------------------------------------------------------------------------
// 2. THE WRAPPER (Handles State & Toggling)
// -----------------------------------------------------------------------------
const FurnitureWrapper = () => {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (showCode) {
    return (
      <div className="w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-slate-800 shadow-2xl overflow-hidden h-auto min-h-[800px]">
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-6 flex-shrink-0 z-10">
          <button
            onClick={() => setShowCode(false)}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-semibold tracking-wide">Back to Preview</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-orange-500/20">
            {copied ? <Check size={16} className="text-white" /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>

        {/* Code Content */}
        <div className="relative flex-grow rounded-xl overflow-hidden border border-white/10 bg-[#0d0d0d]">
          <div className="absolute inset-0 overflow-auto custom-scrollbar">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '2rem',
                minHeight: '100%',
                fontSize: '14px',
                lineHeight: '1.6',
                backgroundColor: '#0d0d0d',
              }}
              showLineNumbers={true}
              wrapLines={true}>
              {sourceCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }

  return <FurnitureHero onShowCode={() => setShowCode(true)} />
}

// -----------------------------------------------------------------------------
// 3. THE MAIN COMPONENT (FurnitureHero)
// -----------------------------------------------------------------------------
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

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    // Main Container: min-h to fit in Outlet, rounded corners for aesthetics
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
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12 lg:py-0">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">
              {/* Text Content */}
              <div className="space-y-6 md:space-y-8 pl-0 lg:pl-8 text-center lg:text-left order-2 lg:order-1">
                {/* Responsive Headline Sizing */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] text-[#1a1a1a] tracking-tight">
                  {slide.headline}
                </h1>

                {/* Responsive Description */}
                <p className="max-w-lg mx-auto lg:mx-0 text-base sm:text-lg text-gray-500 font-light leading-relaxed">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-3 md:px-10 md:py-4 border border-gray-800 rounded-md text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent text-sm md:text-base">
                    Shop Now
                  </button>

                  <button
                    onClick={onShowCode}
                    className="px-6 py-3 md:px-6 md:py-4 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base">
                    <Code size={18} className="md:w-5 md:h-5" /> View Source
                  </button>
                </div>
              </div>

              {/* Image / Product Section */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
                {/* Background Decorator */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[70%] bg-gradient-to-l from-[#e3e8eb] to-transparent -z-10 rounded-l-full opacity-80" />

                {/* Product Image */}
                <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] aspect-square">
                  <img
                    src={slide.image}
                    alt="Furniture"
                    className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply hover:scale-105 transition-transform duration-500"
                  />

                  {/* Price Tag (Hotspot) */}
                  <div className="absolute top-[15%] right-[10%] lg:right-[20%] z-20">
                    {/* Line - Hidden on very small screens */}
                    <div className="hidden sm:block absolute top-3 right-3 w-16 h-[1px] bg-white/50 rotate-[-45deg]" />

                    {/* The Price Bubble */}
                    <div className="relative group cursor-pointer animate-pulse-slow">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-md" />
                      </div>

                      {/* Tooltip */}
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
            className={`h-1 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'w-6 md:w-8 bg-gray-800' : 'w-3 md:w-4 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default FurnitureWrapper
