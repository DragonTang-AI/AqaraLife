import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = '' }: Props) {
  return <div className={`rounded-2xl border border-cyan-300/20 bg-slate-900/55 p-5 shadow-glow backdrop-blur ${className}`}>{children}</div>;
}
