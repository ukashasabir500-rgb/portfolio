import { motion } from 'motion/react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const journeyMilestones = [
  { year: '2024', event: 'Started UI/UX Journey', detail: 'Immersed in Figma and fundamental design principles.' },
  { year: '2024', event: 'First Mobile UI Projects', detail: 'Doctor App and FitTrack - focusing on healthcare and fitness.' },
  { year: '2025', event: 'UX Audit Practice', detail: 'Heuristic evaluation and accessibility audits of local apps.' },
  { year: 'Present', event: 'Building Portfolio', detail: 'Showcasing readiness for Junior UI/UX roles.' },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Journey" className="bg-white dark:bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Experience Column */}
        <div className="lg:col-span-12 xl:col-span-7">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-slate-400 dark:text-slate-500">Professional Journey</h3>
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="timeline-dot absolute top-1.5 -left-1" />
                {idx !== EXPERIENCES.length - 1 && <div className="timeline-line dark:bg-slate-800" />}
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-xs font-bold accent-text uppercase tracking-widest mb-4">{exp.company}</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Column */}
        <div className="lg:col-span-5">
           <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800">
             <h3 className="text-xl font-bold font-heading mb-8 flex items-center gap-3 text-slate-800 dark:text-slate-200">
               <Calendar className="text-brand-teal" size={20} />
               Design Journey
             </h3>

             <div className="space-y-8">
               {journeyMilestones.map((ms, idx) => (
                 <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="text-xs font-black text-slate-300 dark:text-slate-600 transform -rotate-90 origin-center whitespace-nowrap mb-4">
                            {ms.year}
                        </div>
                        <div className="w-1 h-full bg-slate-200 dark:bg-slate-800 rounded-full" />
                    </div>
                    <div className="pb-4">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{ms.event}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{ms.detail}</p>
                    </div>
                 </div>
               ))}
             </div>

             <div className="mt-10 p-6 bg-brand-indigo dark:bg-brand-teal rounded-3xl text-white text-center">
                <p className="font-bold mb-1">Ready for the next step</p>
                <p className="text-sm opacity-80">Looking for a place to grow and contribute.</p>
             </div>
           </div>
        </div>

      </div>
    </Section>
  );
}
