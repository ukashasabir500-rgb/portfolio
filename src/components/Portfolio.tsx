import { motion } from 'motion/react';
import Section from './Section';
import { PROJECTS } from '../constants';

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Selected Projects"
      subtitle="Brief case studies showcasing my design process from research to high-fidelity prototyping."
      className="bg-white dark:bg-slate-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-border dark:bg-slate-900 dark:border-slate-800 group rounded-xl p-4 flex flex-col h-full hover:shadow-md transition-all"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 mb-5 border border-slate-100 dark:border-slate-700">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:accent-text transition-colors">{project.title}</h4>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{project.timeSpent}</span>
              </div>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                {project.problem}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                <div className="flex gap-1.5">
                  {project.tools.slice(0, 2).map(tool => (
                    <span key={tool} className="text-[9px] bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded-full font-bold uppercase">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
