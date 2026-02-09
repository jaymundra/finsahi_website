import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import { 
  Shield, TrendingUp, DollarSign, CreditCard, Users, 
  MessageSquare, Menu, X, ChevronRight, BarChart3, 
  PieChart as PieIcon, Activity, Lock, Smartphone, 
  Globe, Zap, ArrowRight, CheckCircle2, Phone, Mail,
  GraduationCap, Briefcase
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

import HERO_BG from "figma:asset/3d37c9fafb138c6b46f97ec16cc97cc0538f1bbd.png";

// --- Images ---
const WEALTH_IMG = "https://images.unsplash.com/photo-1640451859877-1374a1155215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBtYW5hZ2VtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBkYXNoYm9hcmQlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NzAxOTc5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const TAX_IMG = "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBwbGFubmluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHMlMjBkYXJrfGVufDF8fHx8MTc3MDE5Nzk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const INSURANCE_IMG = "https://images.unsplash.com/photo-1713542893896-751aa1ebceb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwdW1icmVsbGElMjBzaGllbGQlMjBkYXJrfGVufDF8fHx8MTc3MDE5Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// --- Mock Data ---
const performanceData = [
  { name: 'Jan', value: 4000, market: 2400 },
  { name: 'Feb', value: 3000, market: 1398 },
  { name: 'Mar', value: 9800, market: 3800 },
  { name: 'Apr', value: 6780, market: 3908 },
  { name: 'May', value: 8890, market: 4800 },
  { name: 'Jun', value: 12390, market: 5800 },
  { name: 'Jul', value: 15490, market: 6300 },
];

const allocationData = [
  { name: 'Stocks', value: 45 },
  { name: 'Mutual Funds', value: 25 },
  { name: 'Gold/Silver', value: 10 },
  { name: 'Real Estate', value: 15 },
  { name: 'Liquid', value: 5 },
];

const COLORS = ['#059669', '#2563eb', '#d97706', '#7c3aed', '#db2777'];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center">
            <span className="font-serif font-bold text-[#FDFCF8] text-xl">F</span>
          </div>
          <span className="text-xl font-bold text-stone-900 tracking-tight">Finsahi AI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <a href="#wealth" className="hover:text-emerald-600 transition-colors">Wealth</a>
          <a href="#tax" className="hover:text-blue-600 transition-colors">Tax</a>
          <a href="#credit" className="hover:text-purple-600 transition-colors">Credit</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About Us</a>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})} className="px-5 py-2 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-800 transition-colors">
            Join Waitlist
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-900">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#FDFCF8] border-b border-stone-200 p-6 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            <a href="#wealth" className="text-stone-700 py-2 font-medium" onClick={() => setIsOpen(false)}>Wealth</a>
            <a href="#tax" className="text-stone-700 py-2 font-medium" onClick={() => setIsOpen(false)}>Tax</a>
            <a href="#credit" className="text-stone-700 py-2 font-medium" onClick={() => setIsOpen(false)}>Credit</a>
            <a href="#about" className="text-stone-700 py-2 font-medium" onClick={() => setIsOpen(false)}>About Us</a>
            <button onClick={() => {document.getElementById('waitlist')?.scrollIntoView(); setIsOpen(false)}} className="w-full py-3 bg-stone-900 text-white rounded-lg font-bold">Join Waitlist</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WaitlistForm = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      toast.success("You've been added to the waitlist!");
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center text-emerald-700 bg-emerald-50 px-6 py-3 rounded-xl border border-emerald-100"
      >
        <CheckCircle2 className="w-5 h-5 mr-2" />
        <span className="font-medium">You're on the list! We'll be in touch soon.</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? 'flex-row' : 'flex-col sm:flex-row'} gap-3 w-full max-w-md`}>
      <input 
        type="email" 
        placeholder="Enter your email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3 rounded-xl border border-stone-200 bg-white/90 backdrop-blur-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all shadow-sm"
        required
      />
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl transition-all disabled:opacity-70 flex items-center justify-center whitespace-nowrap shadow-lg"
      >
        {status === 'loading' ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
        ) : (
          <>
            Join Waitlist <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#FDFCF8]">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Overlay to ensure text readability - Reduced for better visibility of background */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>
      
      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDFCF8] to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-stone-200 rounded-full px-4 py-1.5 shadow-sm mx-auto">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-stone-600 tracking-wide uppercase">Personal Finance Management AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-[1.05] tracking-tight drop-shadow-sm">
            India's own AI <br/>
            <span className="text-stone-600 font-serif italic">Personal Finance Manager</span>
          </h1>
          
          <p className="text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Finsahi AI combines institutional-grade algorithms with personal finance to manage your wealth, tax, and credit automatically.
          </p>
          
          <div className="pt-6 flex flex-col items-center">
            <p className="text-sm font-bold text-stone-600 mb-3 uppercase tracking-wider text-xs">Get early access</p>
            <WaitlistForm compact={false} />
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-8 border-t border-stone-200/60 max-w-md mx-auto">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] bg-stone-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] bg-stone-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                +2k
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-stone-900">Join 100+ others</p>
              <p className="text-xs text-stone-600">on the waitlist this week</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ badge, title, subtitle, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
    <span className="text-stone-500 font-bold tracking-widest uppercase text-xs mb-4 block">{badge}</span>
    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">{title}</h2>
    <p className="text-stone-600 text-lg leading-relaxed">{subtitle}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, color = "emerald" }) => {
  return (
    <div className="group p-6 bg-white hover:bg-stone-50 border border-stone-200 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 bg-stone-100 text-stone-900 group-hover:bg-stone-900 group-hover:text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-stone-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 font-serif">From High Frequency Trading to Personal Finance.</h2>
            
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed text-left md:text-center md:px-12">
              <p>
                We are two IIT Kanpur graduates who spent years in Private Equity and High-Frequency Trading. We were managing millions for institutions, using sophisticated algorithms and data strategies.
              </p>
              <p>
                Yet, our own personal finances were a mess. We had accounts scattered across five apps, missed tax harvesting deadlines, and held inefficient loans.
              </p>
              <p>
                We realized that the "wealth tech" available to retail investors was just a green or red flag. No real strategy. No holistic view.
              </p>
              <p className="font-medium text-stone-900 text-xl">
                So we quit our jobs to build Finsahi AI—bringing institutional-grade wealth management to your pocket.
              </p>
            </div>

            <div className="mt-12 flex justify-center items-center space-x-6">
               <div className="flex items-center space-x-2 px-4 py-2 bg-stone-50 rounded-full border border-stone-100">
                 <Briefcase className="w-5 h-5 text-stone-400" />
                 <span className="text-sm font-bold text-stone-500">Ex-Blackstone</span>
               </div>
               <div className="flex items-center space-x-2 px-4 py-2 bg-stone-50 rounded-full border border-stone-100">
                 <TrendingUp className="w-5 h-5 text-stone-400" />
                 <span className="text-sm font-bold text-stone-500">Ex-Tower Research</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
}

const WealthSection = () => {
  return (
    <section id="wealth" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          align="center"
          badge="Wealth Management"
          title="The Old Way vs. The Finsahi Way"
          subtitle="Most investors react emotionally. Finsahi acts mathematically."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: The "Old Way" */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-stone-200 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            
            <div className="mb-8">
              <span className="bg-black text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">The "Old Way"</span>
              <h3 className="text-3xl font-serif text-stone-900 mt-4">Rohan's Status Quo</h3>
            </div>

            <div className="space-y-6">
              {[
                { icon: "!", text: "I forgot to invest when the market dipped." },
                { icon: "!", text: "Everyone's talking about AI stocks. I missed the 40% rally. Am I too late to jump in now?" },
                { icon: "x", text: "I forgot I need liquid funds for my house down payment in 2 months and locked my money in illiquid MFs." },
                { icon: "?", text: "Reliance just dipped... should I buy more Reliance or wait for a bigger crash?" },
                { icon: "?", text: "Didn't know I can get 1% better rate on my home loan." },
                { icon: "!", text: "Got a bonus of ₹5L. Should I pay off my car loan or invest in Smallcaps? I have no idea." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-500 font-bold text-sm">
                    {item.icon}
                  </div>
                  <p className="text-stone-500 italic text-sm leading-relaxed">"{item.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Finsahi Shift */}
          <div className="bg-[#1c1917] rounded-3xl p-8 lg:p-10 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="mb-8 relative z-10">
              <span className="bg-[#3b82f6] text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">Finsahi Active Management</span>
              <h3 className="text-3xl font-serif text-white mt-4">The Finsahi Shift</h3>
            </div>

            <div className="grid gap-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-[#292524] p-5 rounded-2xl border border-stone-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Cycle Signal</span>
                  </div>
                  <p className="text-stone-300 text-xs mb-4 leading-relaxed">"Market drawdown of 12% detected. Valuations are at a 2-year low. Shift 20% debt to equity."</p>
                  <span className="text-[10px] font-bold text-[#3b82f6]">SMART ALPHA: BUY THE DIP</span>
                </div>

                {/* Card 2 */}
                <div className="bg-[#292524] p-5 rounded-2xl border border-stone-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Mistake Prevented</span>
                  </div>
                  <p className="text-stone-300 text-xs mb-4 leading-relaxed">"Don't invest this money in fund with lock-in. Your house down payment is due in 60 days"</p>
                  <span className="text-[10px] font-bold text-[#3b82f6]">SAFE PLAY: LIQUID ALLOCATION</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                 {/* Card 3 */}
                <div className="bg-[#292524] p-5 rounded-2xl border border-stone-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Tax Optimization</span>
                  </div>
                  <p className="text-stone-300 text-xs mb-4 leading-relaxed">"Found ₹42,000 in unrealized losses to offset your gains. Sell today and I will remind you to buy tomorrow."</p>
                  <span className="text-[10px] font-bold text-[#3b82f6]">ACTION: TAX LOSS HARVESTING</span>
                </div>

                 {/* Card 4 */}
                <div className="bg-[#292524] p-5 rounded-2xl border border-stone-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Loan Optimization</span>
                  </div>
                  <p className="text-stone-300 text-xs mb-4 leading-relaxed">"Found a 7.2% rate for your Home Loan. Your current 8.9% is costing you ₹12k extra/month."</p>
                  <span className="text-[10px] font-bold text-[#3b82f6]">ACTION: REFINANCE TRIGGERED</span>
                </div>
              </div>

              {/* Full Width Card */}
              <div className="bg-[#1e293b]/50 p-5 rounded-2xl border border-blue-900/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Dynamic Rebalancing</span>
                </div>
                <p className="text-stone-300 text-xs mb-4 leading-relaxed">"Your Portfolio exceeded 70% Equity due to the rally. Rebalance 10% to Debt to protect gains."</p>
                <span className="text-[10px] font-bold text-[#3b82f6]">STATUS: RISK PARITY MAINTAINED</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TaxSection = () => {
  return (
    <section id="tax" className="py-24 bg-stone-100 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeading 
              badge="Tax Optimization"
              title="Keep more of what you earn."
              subtitle="Our automated systems constantly look for opportunities to save you money on taxes through legal harvesting and smart planning."
            />
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Tax Loss Harvesting</h4>
                  <p className="text-stone-600 text-sm">We automatically offset gains with losses to lower your taxable income.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex items-start space-x-4">
                <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Audit-Proof Reports</h4>
                  <p className="text-stone-600 text-sm">Download comprehensive tax reports ready for filing with one click.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src={TAX_IMG} alt="Tax Planning" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md border border-stone-200 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-stone-500 text-sm font-medium">Est. Tax Saved YTD</p>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">+12% vs last year</span>
                </div>
                <p className="text-4xl font-serif font-bold text-stone-900 mb-2">₹1,24,000</p>
                <div className="w-full bg-stone-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-stone-900 h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreditSection = () => {
  return (
    <section id="credit" className="py-24 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          align="center"
          badge="Credit Management"
          title="Master your debt and credit."
          subtitle="Don't let interest rates eat your wealth. We aggregate all your loans and cards to find you better rates instantly."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-stone-900 text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-2">Credit Health</h3>
               <p className="text-stone-400 text-sm">Updated today</p>
            </div>
            
            <div className="relative w-48 h-48 mx-auto my-8 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-stone-800" />
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={552} strokeDashoffset={552 - (552 * 0.85)} className="text-[#FDFCF8]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-bold text-white">785</span>
                <span className="text-sm text-stone-300 font-medium mt-1">Excellent</span>
              </div>
            </div>
            
            <button className="w-full py-3 bg-white text-stone-900 rounded-xl font-semibold hover:bg-stone-200 transition-colors">
              View Report
            </button>
          </div>

          <div className="md:col-span-2 grid gap-6">
            <div className="bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Loan Rate Optimization</h4>
                  <p className="text-stone-500 max-w-md">We scan your active loans and alert you if another bank offers a lower interest rate, helping you switch seamlessly.</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <Smartphone className="w-8 h-8 text-stone-900 mb-4" />
                <h4 className="text-lg font-bold text-stone-900 mb-2">Prepay vs Invest</h4>
                <p className="text-stone-500 text-sm">AI analysis on whether you should close your loan early or invest the surplus.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm">
                <CreditCard className="w-8 h-8 text-stone-900 mb-4" />
                <h4 className="text-lg font-bold text-stone-900 mb-2">Best Card Finder</h4>
                <p className="text-stone-500 text-sm">Get credit card recommendations based on your spending habits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InsuranceSection = () => {
  return (
    <section id="insurance" className="py-24 bg-stone-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-10 -left-10 w-full h-full bg-stone-200 rounded-2xl"></div>
            <img src={INSURANCE_IMG} alt="Family Protection" className="relative z-10 rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="order-1 lg:order-2">
             <SectionHeading 
              badge="Insurance Analysis"
              title="Protection without the upsell."
              subtitle="We audit your existing policies to find gaps or redundancies. No sales agents, just unbiased data-backed advice."
            />
            
            <ul className="space-y-6 mb-10">
              {[
                "Policy Gap Analysis: Find out if you're underinsured.",
                "Claim Assistance: Expert help when you actually need to file.",
                "Redundancy Check: Stop paying for duplicate coverage.",
                "Family Floater Optimization: Best plans for your loved ones."
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Analyze My Policies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Join the waitlist.</h2>
          <p className="text-stone-400 text-lg mb-10">
            Secure your spot for early access to Finsahi AI. We are onboarding 100 new users every week to ensure the best experience.
          </p>
          
          <div className="flex justify-center">
            <WaitlistForm compact={false} />
          </div>
          
          <p className="mt-6 text-sm text-stone-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#FDFCF8] border-t border-stone-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center">
                <span className="font-serif font-bold text-white text-xl">F</span>
              </div>
              <span className="text-xl font-bold text-stone-900">Finsahi AI</span>
            </div>
            <p className="text-stone-500 text-sm max-w-sm leading-relaxed mb-6">
              The first AI-powered wealth manager that looks at your entire financial picture—assets, liabilities, tax, and insurance—in one place.
            </p>
          </div>
          
          <div>
            <h4 className="text-stone-900 font-bold mb-6">Offerings</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900 transition-colors">Wealth Management</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Tax Harvesting</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Credit Optimization</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Insurance Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#about" className="hover:text-stone-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">© 2026 Finsahi AI Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-stone-400">
            <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-900 selection:bg-emerald-200 selection:text-emerald-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WealthSection />
        <TaxSection />
        <CreditSection />
        <InsuranceSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
