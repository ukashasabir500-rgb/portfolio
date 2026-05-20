import { motion } from 'motion/react';
import Section from './Section';
import { SKILLS } from '../constants';

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-slate-800 dark:text-slate-100">Professional Summary</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I am a passionate <span className="text-slate-900 dark:text-teal-400 font-semibold">Junior UI/UX Designer</span> with a strong foundation in visual storytelling 
              and user-centric methodologies. Having recently transitioned into the design space, I dedicate my time to 
              mastering industry-standard tools and building intuitive digital experiences that balance aesthetics with functionality.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-slate-800 dark:text-slate-100">Design Approach</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Understand</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Deep diving into user needs and business goals through research and empathy mapping.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Ideate & Prototype</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Translating insights into low-fi wireframes and iterating quickly with stakeholders.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Refine</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Polishing every pixel and transition to ensure a seamless and accessible final product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="card-border dark:bg-slate-900 dark:border-slate-800 rounded-xl p-8 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-slate-400 dark:text-slate-500">Toolkit & Expertise</h3>
          
          <div className="space-y-10">
            <div>
              <h4 className="text-[10px] font-black text-slate-900 dark:text-slate-400 uppercase tracking-widest mb-4">Core Software</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Illustrator', 'Photoshop'].map(tool => (
                  <div key={tool} className="skill-badge dark:bg-slate-800 dark:text-slate-300">
                     {tool}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-900 dark:text-slate-400 uppercase tracking-widest mb-4">Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['Wireframing', 'Prototyping', 'Auto Layout', 'Responsive Design', 'User Research'].map(skill => (
                  <div key={skill} className="skill-badge bg-white dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Education Milestone</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200">Intermediate (12th Grade)</p>
                    <p className="text-[11px] text-slate-500 uppercase font-semibold mt-1">Class of 2025</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
