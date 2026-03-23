import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-20" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-cyan-200">Aqara Life</p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">让用户用自然语言<br />创造智能空间应用</h1>
          <p className="mt-5 max-w-xl text-slate-300">主动智能 + AI 生成 + UGC 共创 + 短视频发现 + Studio 空间连接。Aqara Life 正在定义空间智能时代的 App Store。</p>
          <div className="mt-8 flex gap-4">
            <a href="#what" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950">了解产品</a>
            <a href="#product-arch" className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-5 py-3 text-sm text-cyan-100">查看架构 <ArrowRight size={16} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="rounded-[2rem] border border-cyan-300/25 bg-slate-900/70 p-5 shadow-glow backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
            <p className="text-xs text-cyan-200">Plugin Generator / Live Preview</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div className="rounded-xl bg-white/5 p-3">用户输入："回家后自动亮起玄关灯并播报天气"</div>
              <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-100">Intent Agent：识别到回家场景 + 灯光 + 语音播报</div>
              <div className="rounded-xl bg-blue-300/10 p-3 text-blue-100">生成插件：回家欢迎插件（可编辑）</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
