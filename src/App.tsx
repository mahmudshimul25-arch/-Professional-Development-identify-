import { Bot, LineChart, Code2, Send, Zap, Shield, ChevronRight, MessageSquareCode } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">TraderX</span>
          </div>
          <a 
            href="https://t.me/traderx009" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-all px-4 py-2 rounded-full text-sm font-medium"
          >
            <Send className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </a>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Professional Developer
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-400 max-w-4xl mb-6 leading-tight"
          >
            Premium Trading Bots & Indicators
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-400 max-w-2xl mb-10"
          >
            I develop API-connected premium bots for binary trading and other brokers. From custom indicators to fully automated strategies—powered by my proprietary development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="https://t.me/traderxtradingbot1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] w-full sm:w-auto justify-center group"
            >
              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Join Telegram Channel
            </a>
            <a 
              href="https://t.me/traderx009" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white px-8 py-4 rounded-xl font-medium transition-all w-full sm:w-auto justify-center"
            >
              <MessageSquareCode className="w-5 h-5 text-slate-400" />
              Direct Message (@traderx009)
            </a>
          </motion.div>
        </section>

        {/* Services / Features Grid */}
        <section className="container mx-auto px-6 py-20 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">My Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Elevate your trading with professional-grade automation and analytical tools.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Projects Promo */}
        <section className="container mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-800 to-slate-900"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
            <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">Need a Custom Project?</h2>
                <p className="text-slate-300 text-lg mb-0">
                  Have a unique strategy in mind? I can design and develop any custom trading bot, indicator, or API integration exactly as per your requirements. Let's build your edge.
                </p>
              </div>
              <a 
                href="https://t.me/traderx009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-colors shadow-xl"
              >
                Discuss Project <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-10 mt-10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} TraderX. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="https://t.me/traderxtradingbot1" className="hover:text-emerald-400 transition-colors">Telegram Channel</a>
              <a href="https://t.me/traderx009" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Bot,
    title: "Binary Trading Bots",
    description: "Premium automated bots specifically designed for binary options trading, featuring advanced risk management and high-accuracy algorithms."
  },
  {
    icon: LineChart,
    title: "Custom Indicators",
    description: "Proprietary technical indicators built to identify precise entry and exit points, filtering out market noise for better decision making."
  },
  {
    icon: Zap,
    title: "Multi-Broker Support",
    description: "Bots and tools developed to work seamlessly across various popular trading brokers through secure API integrations."
  },
  {
    icon: Code2,
    title: "API Integration",
    description: "100% API-connected solutions ensuring lightning-fast execution speeds, minimal latency, and secure data handling."
  },
  {
    icon: MessageSquareCode,
    title: "Bespoke Development",
    description: "Turn your manual trading strategy into a fully automated system. I design custom projects tailored exactly to your specifications."
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Built with best practices in mind, my bots prioritize the security of your accounts and stability during volatile market conditions."
  }
];
