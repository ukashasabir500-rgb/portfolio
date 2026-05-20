import { Linkedin, Github, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-brand-slate-200 dark:border-slate-800 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="font-bold text-lg tracking-tight uppercase text-slate-900 dark:text-white mb-2 block">
            Ukasha Sabir
          </a>
          <div className="flex gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest justify-center md:justify-start">
            <a href="#" className="hover:accent-text transition-colors">LinkedIn / ukashasabir</a>
            <span>•</span>
            <a href="#" className="hover:accent-text transition-colors">Behance / ukashaui</a>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <span>&copy; {currentYear} Ukasha Sabir</span>
            <span className="opacity-30">•</span>
            <span>Accessibility Statement</span>
        </div>
      </div>
    </footer>
  );
}
