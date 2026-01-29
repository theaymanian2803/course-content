import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Calendar,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  X,
  Send,
  User,
  Mail,
  MessageSquare,
  Home,
  Code,
  ArrowLeft,
  Copy,
  Check,
} from 'lucide-react'

// --- SYNTAX HIGHLIGHTER IMPORTS ---
// If you get an error here, ensure you ran: npm install react-syntax-highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// We use the standard import. If your bundler complains about 'esm', remove '/esm' from the path below.
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// -----------------------------------------------------------------------------
// 1. THE SOURCE CODE STRING
// -----------------------------------------------------------------------------
const sourceCode = `import React, { useState, useEffect } from 'react';
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
export default CarCleaningLanding;`

// -----------------------------------------------------------------------------
// 2. THE WRAPPER (Handles State & Toggling)
// -----------------------------------------------------------------------------
const CarCleaningWrapper = () => {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // --- VIEW 1: THE CODE PREVIEW ---
  if (showCode) {
    return (
      // Container: Matches Landing Page dimensions to fit in Outlet
      <div className="w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-slate-800 shadow-2xl overflow-hidden h-auto min-h-[800px]">
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-6 flex-shrink-0 z-10">
          <button
            onClick={() => setShowCode(false)}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-semibold tracking-wide">Back to Preview</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-blue-500/20">
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
              // We explicitly set background here to ensure it's not transparent
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

  // --- VIEW 2: THE LANDING PAGE ---
  return <CarCleaningLanding onShowCode={() => setShowCode(true)} />
}

// -----------------------------------------------------------------------------
// 3. MAIN LANDING PAGE COMPONENT
// -----------------------------------------------------------------------------
const CarCleaningLanding = ({ onShowCode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Hook to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Check window scroll, but inside an outlet sometimes we need to check the container.
      // For now we assume window scroll.
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Exterior Detailing',
      price: 'From $50',
      description:
        'Complete hand wash, clay bar treatment, and premium wax application for a mirror-like finish.',
      image:
        'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Interior Deep Clean',
      price: 'From $80',
      description:
        'Steam cleaning, leather conditioning, and deep vacuuming to restore that new car smell.',
      image:
        'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Ceramic Coating',
      price: 'From $300',
      description: 'Long-lasting paint protection that repels water, dirt, and UV rays for years.',
      image:
        'https://images.unsplash.com/photo-1632823471419-f45a053183aa?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    // MAIN CONTAINER: Relative to fit in Outlet
    <div className="w-full relative bg-white font-sans text-slate-800 overflow-x-hidden rounded-xl border border-slate-100 shadow-sm">
      {/* NAVBAR: Absolute to stay inside container */}
      <header
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-transparent py-5'
        }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Pristine<span className="text-blue-600">Auto</span>
            </span>
          </a>

          {/* Desktop Nav + Show Code Button */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>

            <div className="h-6 w-px bg-slate-200"></div>

            <button
              onClick={onShowCode}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors">
              <Code size={16} /> View Source
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4 text-center">
              <a
                href="#"
                className="text-slate-600 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
              <a
                href="#services"
                className="text-slate-600 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </a>
              <a
                href="#contact"
                className="text-slate-600 py-2 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
              <button
                onClick={() => {
                  onShowCode()
                  setIsMobileMenuOpen(false)
                }}
                className="text-slate-600 py-2 hover:text-blue-600 font-medium flex items-center justify-center gap-2">
                <Code size={16} /> View Source
              </button>
              <a
                href="#contact"
                className="bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-200"
                onClick={() => setIsMobileMenuOpen(false)}>
                Book Appointment
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
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
              Experience the ultimate car care service. We use eco-friendly products and advanced
              techniques to make your vehicle look brand new again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
                Get a Quote{' '}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Phone size={18} /> (555) 123-4567
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Car Washing"
              className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-500 text-lg">
              Choose from our range of premium cleaning packages designed to protect and enhance
              your vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative bg-slate-100">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-center">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-last lg:order-first">
              <div className="aspect-square rounded-3xl overflow-hidden relative z-10 shadow-2xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&fit=crop&q=80&w=1000"
                  alt="Detailing worker"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0"></div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Why choose Pristine?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Eco-Friendly Products',
                    desc: 'We use only biodegradable soaps and water-saving techniques.',
                  },
                  {
                    title: 'Certified Professionals',
                    desc: 'Our team is trained in the latest detailing technologies.',
                  },
                  {
                    title: 'Satisfaction Guaranteed',
                    desc: "If you aren't happy, we'll re-clean it for free.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <CheckCircle size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM SECTION (Updated with Neighborhood) --- */}
      <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Info Side */}
              <div className="p-12 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Book Appointment</h3>
                  <p className="text-slate-400 mb-8 text-lg">
                    Fill out the form and we'll get back to you within 24 hours to confirm your
                    slot.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone size={20} className="text-blue-400" />
                      </div>
                      <span className="font-medium">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <MapPin size={20} className="text-blue-400" />
                      </div>
                      <span className="font-medium">123 Detailing Blvd, NY</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Calendar size={20} className="text-blue-400" />
                      </div>
                      <span className="font-medium">Mon-Sat, 8am - 6pm</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Form Side */}
              <div className="p-12">
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Neighborhood (New Field) */}
                  <div>
                    <label
                      htmlFor="neighborhood"
                      className="block text-sm font-bold text-slate-700 mb-2">
                      Neighborhood
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Home size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="neighborhood"
                        name="neighborhood"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        placeholder="Downtown, Westside, etc."
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-slate-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                        <MessageSquare size={18} className="text-slate-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                        placeholder="How can we help you?"></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
                    Send Request <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-blue-600" />
            <span className="font-bold text-white text-lg">PristineAuto</span>
          </div>
          <p className="text-sm">© 2024 Pristine Auto Spa. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CarCleaningWrapper
