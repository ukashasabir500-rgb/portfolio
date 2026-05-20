import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center section-padding pt-32 lg:pt-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Biographic introduction */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xs font-bold accent-text tracking-[0.2em] uppercase">
                UI/UX Designer
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-slate-900 dark:text-white tracking-tight">
                Crafting clean, user-friendly <span className="accent-text">mobile interfaces</span> and practical prototypes.
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Beginner UI/UX designer focused on creating intuitive digital experiences. 
                I bridge the gap between aesthetics and functionality using human-centered design principles in Figma.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#portfolio"
                  className="bg-slate-900 dark:bg-brand-teal text-white px-8 py-3.5 rounded text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-slate-800 dark:hover:bg-teal-700 transition-all flex items-center justify-center gap-2 group"
                >
                  View Work
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-3.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Avatar / Headshot showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative group"
            >
              {/* Outer glow aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-teal to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000" />
              
              {/* Image Frame Card */}
              <div className="relative bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-[340px] sm:max-w-[380px] lg:max-w-full">
                <img
                  src="/profile.jpeg"
                  alt="Ukasha Sabir"
                  className="rounded-xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover shadow-inner hover:scale-[1.01] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Real-time Indicator Badge */}
              <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 leading-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Available For Projects
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
