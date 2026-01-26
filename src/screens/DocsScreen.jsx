import React from 'react'
import { ExternalLink, Zap, MousePointer, Activity, Play, Layers } from 'lucide-react'

const LIBRARIES = [
  {
    name: 'Framer Motion',
    url: 'https://www.framer.com/motion/',
    icon: Zap,
    description:
      'The standard for React animations. It uses a declarative syntax that feels incredibly "React-like".',
    bestFor: 'Complex layout transitions, gestures (drag/hover), and shared element animations.',
    install: 'npm install framer-motion',
  },
  {
    name: 'GSAP',
    url: 'https://gsap.com/resources/React/',
    icon: Activity,
    description:
      'The heavy lifter. A robust JavaScript toolset that creates high-performance, complex timeline animations.',
    bestFor: 'Scroll-triggered effects (ScrollTrigger) and orchestrating multi-step sequences.',
    install: 'npm install @gsap/react gsap',
  },
  {
    name: 'React Spring',
    url: 'https://www.react-spring.dev/',
    icon: MousePointer,
    description:
      'Physics-based animation library. It calculates motion based on spring dynamics (tension, friction) rather than duration.',
    bestFor: 'Natural, fluid, organic feeling UI elements that react to user input.',
    install: 'npm install @react-spring/web',
  },
  {
    name: 'AutoAnimate',
    url: 'https://auto-animate.formkit.com/',
    icon: Play,
    description:
      'Zero-config. A single line of code that automatically animates mounting, unmounting, and list reordering.',
    bestFor: 'Drop-in smooth transitions for lists, dropdowns, and accordions with zero effort.',
    install: 'npm install @formkit/auto-animate',
  },
  {
    name: 'Lottie React',
    url: 'https://lottiereact.com/',
    icon: Layers,
    description:
      'Renders Adobe After Effects animations as JSON. Perfect for vector-based, high-fidelity illustrations.',
    bestFor: 'Displaying complex brand animations, loading spinners, or detailed illustrations.',
    install: 'npm install lottie-react',
  },
]

const Docs = () => {
  return (
    <div className="w-full animate-in fade-in duration-700">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Animation <span className="text-orange-500">Toolkit</span>
        </h2>
        <p className="mt-2 text-gray-400">
          The top 5 libraries standardizing motion in the React ecosystem.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {LIBRARIES.map((lib) => (
          <div
            key={lib.name}
            className="group relative flex flex-col rounded-xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] transition-all duration-300">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                  <lib.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{lib.name}</h3>
              </div>
              <a
                href={lib.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                title="View Documentation">
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Content */}
            <p className="mb-4 text-sm text-gray-400 leading-relaxed">{lib.description}</p>

            {/* Best For Section */}
            <div className="mb-6 rounded bg-white/5 p-3">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-orange-400">
                Best For
              </span>
              <p className="text-xs text-gray-300">{lib.bestFor}</p>
            </div>

            {/* Footer / Install Command */}
            <div className="mt-auto pt-4 border-t border-white/5">
              <code className="flex items-center justify-between rounded bg-black px-3 py-2 text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                <span>{lib.install}</span>
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Docs
