import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
    >
      <div className="mb-10">
        <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-wider text-cyan-200">Aqara Life</p>
        <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
        {subtitle ? <p className="mt-4 max-w-3xl text-sm text-slate-300 md:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
