import { useEffect, useState } from 'react';
import type { NavItem } from '../lib/types';

const items: NavItem[] = [
  { id: 'hero', label: '首页' },
  { id: 'analogy', label: '类比' },
  { id: 'plugins', label: '插件形态' },
  { id: 'ai', label: 'AI 工作流' },
  { id: 'market', label: 'UGC 市场' },
  { id: 'studio', label: 'Studio 关系' },
  { id: 'flywheel', label: '生态飞轮' }
];

export function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handler = () => {
      const top = window.scrollY + 140;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && top >= el.offsetTop) setActive(item.id);
      }
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-10">
        <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-cyan-200">AQARA LIFE</a>
        <div className="hidden gap-2 md:flex">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`rounded-full px-3 py-1 text-xs transition ${active === item.id ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300 hover:text-white'}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
