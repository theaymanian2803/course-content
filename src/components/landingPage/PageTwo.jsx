import React, { useState, useEffect } from 'react'
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
  Coffee,
  Wrench,
  Zap,
  ShieldCheck,
  Clock,
  Truck,
  ShoppingBag,
  Map as MapIcon,
  Loader2,
} from 'lucide-react'

// --- SYNTAX HIGHLIGHTER IMPORTS ---
// npm install react-syntax-highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// -----------------------------------------------------------------------------
// 1. THE SOURCE CODE STRING (UPDATED WITH FORM LOGIC)
// -----------------------------------------------------------------------------
const sourceCode = `import React, { useState, useEffect } from 'react';
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
export default CoffeeRepairLanding;`

// -----------------------------------------------------------------------------
// 2. THE WRAPPER (Handles State & Toggling)
// -----------------------------------------------------------------------------
const CoffeeRepairWrapper = () => {
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
      <div className="w-full relative bg-[#1e1e1e] flex flex-col p-6 rounded-xl border border-stone-800 shadow-2xl overflow-hidden h-auto min-h-[800px]">
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-6 flex-shrink-0 z-10">
          <button
            onClick={() => setShowCode(false)}
            className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-amber-600 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-semibold tracking-wide">Back to Preview</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-lg text-sm font-bold text-white transition-all shadow-lg hover:shadow-amber-500/20">
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

  // --- VIEW 2: THE LANDING PAGE ---
  return <CoffeeRepairLanding onShowCode={() => setShowCode(true)} />
}

// -----------------------------------------------------------------------------
// 3. MAIN LANDING PAGE COMPONENT
// -----------------------------------------------------------------------------
const CoffeeRepairLanding = ({ onShowCode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  // --- FORMSPREE SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://formspree.io/f/xlgndygr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        e.target.reset() // Clear form
        setTimeout(() => setFormStatus('idle'), 5000) // Reset button after 5s
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    // MAIN CONTAINER
    <div className="w-full relative bg-[#0f0b0a] text-stone-100 font-sans selection:bg-amber-600 selection:text-white overflow-hidden rounded-xl border border-stone-800 shadow-2xl">
      {/* --- NAVIGATION --- */}
      <nav
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0b0a]/90 backdrop-blur-md border-b border-stone-800 py-3'
            : 'bg-transparent py-6'
        }`}>
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
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                Repair & Sales • Marrakech
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollTo('services')}
              className="text-sm font-medium text-stone-300 hover:text-white transition">
              Services
            </button>
            <button
              onClick={() => scrollTo('sales')}
              className="text-sm font-medium text-stone-300 hover:text-white transition">
              Shop Machines
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-sm font-medium text-stone-300 hover:text-white transition">
              Contact
            </button>

            <div className="h-6 w-px bg-stone-800"></div>

            {/* View Source Button */}
            <button
              onClick={onShowCode}
              className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-stone-800">
              <Code size={16} /> Source
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="bg-white text-[#0f0b0a] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-stone-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-200">
              Book Repair
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1c1412] border-b border-stone-800 p-6 md:hidden shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-5 z-40">
            <button
              onClick={() => scrollTo('services')}
              className="text-left text-lg font-medium text-stone-300">
              Services
            </button>
            <button
              onClick={() => scrollTo('sales')}
              className="text-left text-lg font-medium text-stone-300">
              Buy Machines
            </button>
            <button
              onClick={() => {
                onShowCode()
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 text-stone-400 font-medium py-2">
              <Code size={18} /> View Source Code
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-amber-600 text-white py-3 rounded-lg font-bold text-center mt-2">
              Book Appointment
            </button>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Stop the Brew.
              </span>
            </h1>

            <p className="text-lg text-stone-400 max-w-xl leading-relaxed">
              We repair, service, and sell professional espresso machines. Whether you need a quick
              fix or a brand new setup, Atlas Espresso is Marrakech's trusted partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 transition shadow-lg shadow-amber-900/40">
                <Wrench className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Schedule Repair
              </button>
              <button
                onClick={() => scrollTo('sales')}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-stone-300 border border-stone-800 hover:border-stone-600 hover:bg-stone-900 transition">
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
                title: 'Electrical Repair',
                desc: 'Heating elements, sensors, and circuit boards.',
              },
              {
                icon: <Wrench className="h-6 w-6 text-amber-400" />,
                title: 'Hydraulic Repair',
                desc: 'Pressure leaks, flow issues, and steam wands.',
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-amber-400" />,
                title: 'Deep Cleaning',
                desc: 'Descaling and maintenance for longevity.',
              },
              {
                icon: <Truck className="h-6 w-6 text-amber-400" />,
                title: 'We Come To You',
                desc: 'Pickup, delivery, and on-site repair in Marrakech.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-[#1c1412] border border-stone-800 p-8 rounded-2xl hover:border-amber-900/50 hover:bg-stone-900 transition duration-300">
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
              <p className="text-stone-400 max-w-lg">
                Can't bring your machine to us? We offer pickup and delivery services across
                Marrakech, or on-site diagnosis for commercial cafes.
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-white text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition whitespace-nowrap shadow-lg">
            Schedule Pickup
          </button>
        </div>
      </section>

      {/* --- SALES SECTION --- */}
      <section id="sales" className="py-24 px-6 relative bg-[#0f0b0a]">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              Store
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Machines for Sale</h2>
            <p className="text-stone-400">
              We sell certified refurbished machines and brand new units. All come with a warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: 'Refurbished',
                name: 'Breville Barista Express',
                price: '4,500 DH',
                desc: 'Fully serviced, new gaskets, 6-month warranty. Perfect for home use.',
              },
              {
                tag: 'Brand New',
                name: 'Rocket Appartamento',
                price: '16,000 DH',
                desc: 'Compact commercial grade machine. Heat exchanger with E61 group head.',
              },
              {
                tag: 'Used - Good',
                name: 'Nuova Simonelli Appia',
                price: 'Contact for Price',
                desc: '2-Group commercial machine. Ideal for starting a small coffee shop.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1c1412] rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-600 transition group">
                <div className="h-48 bg-stone-800 flex items-center justify-center relative">
                  <Coffee className="h-16 w-16 text-stone-600 group-hover:scale-110 transition duration-500" />
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${item.tag === 'Brand New' ? 'bg-amber-600 text-white' : 'bg-stone-700 text-stone-300'}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-amber-500 font-bold text-lg mb-4">{item.price}</p>
                  <p className="text-stone-400 text-sm mb-6">{item.desc}</p>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full py-3 rounded-lg border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition font-bold">
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
                  <p className="text-stone-400 mb-8">
                    Located in Marrakech. Call us for mobile service or drop by.
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-600/10 p-3 rounded-lg text-amber-500">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">
                          Phone / WhatsApp
                        </p>
                        <a
                          href="tel:0613591929"
                          className="text-xl font-bold text-white hover:text-amber-500 transition">
                          0613 59 19 29
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-amber-600/10 p-3 rounded-lg text-amber-500">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">
                          Email
                        </p>
                        <a
                          href="mailto:sberechou@gmail.com"
                          className="text-lg font-bold text-white hover:text-amber-500 transition">
                          sberechou@gmail.com
                        </a>
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
                      <a
                        href="https://maps.google.com/?q=Marrakech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition">
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-10 lg:p-16 bg-white">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Request Service / Buy</h3>
                <p className="text-stone-500 mb-8 text-sm">
                  Tell us if you need a repair or want to buy a machine.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-stone-400 h-4 w-4" />
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone (Required) */}
                    <div>
                      <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 text-stone-400 h-4 w-4" />
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm"
                          placeholder="06..."
                        />
                      </div>
                    </div>
                    {/* Email (Optional) */}
                    <div>
                      <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">
                        Email (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-stone-400 h-4 w-4" />
                        <input
                          name="email"
                          type="email"
                          className="w-full bg-stone-100 border-none rounded-lg pl-10 pr-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm"
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      className="w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition outline-none text-sm">
                      <option value="Workshop Repair">Repair at Workshop</option>
                      <option value="Mobile Repair">Mobile Repair (Come to me)</option>
                      <option value="Buying">Buy a Machine</option>
                      <option value="Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="text-xs font-bold text-stone-600 uppercase mb-1 block">
                      Details
                    </label>
                    <textarea
                      name="message"
                      className="w-full bg-stone-100 border-none rounded-lg px-4 py-3 text-stone-900 focus:ring-2 focus:ring-amber-500 transition h-24 resize-none outline-none text-sm"
                      placeholder="Machine model, issue, or request..."></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full font-bold py-4 rounded-xl transition duration-300 shadow-xl flex items-center justify-center gap-2 ${
                      formStatus === 'success'
                        ? 'bg-green-600 text-white'
                        : formStatus === 'error'
                          ? 'bg-red-600 text-white'
                          : 'bg-stone-900 text-white hover:bg-amber-600'
                    }`}>
                    {formStatus === 'submitting' && <Loader2 className="h-5 w-5 animate-spin" />}
                    {formStatus === 'success' && (
                      <>
                        <Check className="h-5 w-5" /> Message Sent!
                      </>
                    )}
                    {formStatus === 'error' && 'Error - Try Again'}
                    {formStatus === 'idle' && (
                      <>
                        Send Request <Send size={18} />
                      </>
                    )}
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
          <p className="text-sm">
            © {new Date().getFullYear()} Atlas Espresso. Marrakech, Morocco.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default CoffeeRepairWrapper
