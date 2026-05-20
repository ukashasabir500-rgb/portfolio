import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps extends HTMLMotionProps<"section"> {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  id: string;
  className?: string;
}

export default function Section({ title, subtitle, children, id, className = '', ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`py-16 px-6 md:px-12 lg:px-24 scroll-mt-20 ${className}`}
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && (
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-3 text-slate-500 dark:text-slate-400">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="w-8 h-1 bg-brand-teal mt-6 rounded-full opacity-50" />
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}
