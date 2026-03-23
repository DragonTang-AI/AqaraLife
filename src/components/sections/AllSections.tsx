import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Bot, Cpu, CircleDollarSign, PlayCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { GlowCard } from '../ui/GlowCard';
import { pluginForms } from '../../data/plugins';
import { caseStudies } from '../../data/cases';
import { marketPlugins } from '../../data/market';
import { shortVideos } from '../../data/shortVideos';
import { roadmap } from '../../data/roadmap';

export function WhyNowSection() {
  const cards = ['设备越来越多，但交互复杂度持续提升', '用户不会写规则，不会调试自动化', '大模型让自然语言生成可用、可信', '空间智能从“控制设备”升级到“创造玩法”'];
  return <Section id="why" title="为什么是现在" subtitle="Aqara Life 抓住设备普及与 AI 能力成熟的交汇点。"><div className="grid gap-4 md:grid-cols-2">{cards.map((c) => <GlowCard key={c}>{c}</GlowCard>)}</div></Section>;
}

export function WhatIsLifeSection() {
  return <Section id="what" title="Aqara Life 是什么" subtitle="不是传统遥控器，不是自动化脚本工具，而是面向空间的应用生成与消费平台。"><div className="grid gap-4 md:grid-cols-3">{['传统控制 App：设备列表 + 手动操作', '自动化工具：规则复杂、门槛高', 'Aqara Life：自然语言生成 + UGC 分发 + 主动智能'].map((x, i) => <GlowCard key={i} className={i===2?'border-cyan-200/40':''}>{x}</GlowCard>)}</div></Section>;
}

export function AnalogySection() {
  const data = [['WordPress','让普通人创造网站'],['iOS','让开发者创造 App'],['Aqara Life','让每个人创造空间应用']];
  return <Section id="analogy" title="类比：平台范式跃迁" subtitle="从信息创作到移动应用，再到空间应用。"><div className="grid gap-5 md:grid-cols-3">{data.map(([t,d])=> <GlowCard key={t} className="min-h-48"><h3 className="text-2xl text-white">{t}</h3><p className="mt-4 text-slate-300">{d}</p></GlowCard>)}</div><p className="mt-10 text-center text-2xl font-semibold text-cyan-100 md:text-4xl">我们要做的是智能空间时代的 App Store</p></Section>;
}

export function VisionSection() {
  return <Section id="vision" title="产品愿景" subtitle="让空间像内容一样可以创作、传播、消费。"><div className="grid gap-4 md:grid-cols-3">{['每个人都能创造自己的空间应用', '设备从工具变成玩法载体和服务节点', '形成创作者、用户、设备厂商共同增长的生态'].map((x)=> <GlowCard key={x}>{x}</GlowCard>)}</div></Section>;
}

export function UserJourneySection() {
  const steps = ['连接 Aqara Studio / 家中设备','选择单设备或多设备模式','输入自然语言描述','AI 解析并生成插件 DSL','预览 UI 与行为','安装到空间','分享到市场','他人刷到并复用'];
  return <Section id="journey" title="用户怎么玩" subtitle="从一句话到可复用空间应用，完整创作与分发闭环。"><div className="grid gap-3 md:grid-cols-4">{steps.map((s,i)=><motion.div key={s} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"><span className="mr-2 text-cyan-200">0{i+1}</span>{s}</motion.div>)}</div></Section>;
}

export function PluginGridSection() {
  return <Section id="plugins" title="插件是什么" subtitle="八种插件形态，覆盖控制、自动化、游戏、情绪与主动智能。"><div className="grid gap-4 md:grid-cols-4">{pluginForms.map((p)=><GlowCard key={p.id} className="transition hover:-translate-y-1"><p className="text-3xl">◉</p><h3 className="mt-2 text-white">{p.title}</h3><p className="mt-2 text-sm text-slate-300">{p.subtitle}</p><div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t)=><span key={t} className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-xs text-cyan-100">{t}</span>)}</div></GlowCard>)}</div></Section>;
}

export function CaseStudySection() {
  return <Section id="cases" title="典型案例演示" subtitle="高表现力 Demo 模块，直观展示插件价值。"><div className="space-y-4">{caseStudies.map((c)=><GlowCard key={c.title}><div className="grid gap-4 md:grid-cols-2"><div><h3 className="text-xl text-white">{c.title}</h3><p className="mt-2 text-slate-300">{c.description}</p><p className="mt-2 text-sm text-cyan-100">场景：{c.scenario}</p><p className="mt-2 text-xs text-slate-400">设备：{c.involvedDevices.join(' · ')}</p></div><div className="rounded-xl border border-cyan-300/30 bg-black/40 p-4 text-sm text-slate-200">收益：{c.benefits.join(' / ')}</div></div></GlowCard>)}</div></Section>;
}

export function AIWorkflowSection() {
  const nodes = ['用户自然语言','Intent Agent','Plugin Planning Agent','Structured Plugin DSL/JSON','Workflow Orchestrator','Capability Matching','Aqara Device Command Library','Studio/Gateway/Device Execution'];
  return <Section id="ai" title="AI 如何工作" subtitle="AI 负责意图解析与结构化编排，不直接触达底层硬件指令。"><div className="grid gap-3 md:grid-cols-4">{nodes.map((n,i)=><motion.div key={n} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.06}} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 p-3 text-sm text-cyan-50">{n}</motion.div>)}</div><div className="mt-5 grid gap-4 md:grid-cols-2"><GlowCard>AI 做什么：意图识别、DSL 生成、流程编排、建议优化。</GlowCard><GlowCard>AI 不做什么：不直接调用硬件指令，不绕过权限，不跳过网关安全层。</GlowCard></div></Section>;
}

export function ProductArchitectureSection() {
  const layers = ['用户层','创作层','消费层','主动智能层','Studio 连接层','设备层','商业化层'];
  return <Section id="product-arch" title="产品架构全景" subtitle="统一产品层级，打通创作、执行与商业化。"><div className="space-y-2">{layers.map((l)=><div key={l} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">{l}</div>)}</div></Section>;
}

export function TechArchitectureSection() {
  const stack = ['Frontend App','Plugin Runtime','Agent Orchestration Layer','User Profile / Preference / Memory','Capability Service','Studio Connection Layer','Device Command Library','Gateway / Device Layer','Permission / Security Layer'];
  return <Section id="tech-arch" title="技术架构" subtitle="工程化能力层解耦，确保可扩展、可监管、可回溯。"><div className="grid gap-3 md:grid-cols-3">{stack.map((s)=><GlowCard key={s}>{s}</GlowCard>)}</div></Section>;
}

export function ActiveIntelligenceSection() {
  const caps = ['习惯学习','偏好记忆','主动提醒','家庭摘要','故障建议','节能建议','跨设备协同','老人/儿童/宠物模式'];
  return <Section id="active" title="主动智能" subtitle="从被动控制升级为主动服务。"><div className="grid gap-3 md:grid-cols-4">{caps.map((c)=><GlowCard key={c}>{c}</GlowCard>)}</div><div className="mt-5 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-sm text-cyan-50">流程：行为采集 → 模式识别 → 风险评估 → 主动建议 → 用户授权执行。</div></Section>;
}

export function StudioRelationSection() {
  return <Section id="studio" title="Aqara Studio 与 Life 的关系" subtitle="Studio 是底座，Life 是面向用户的创作与消费层。"><div className="grid gap-4 md:grid-cols-2"><GlowCard><h4 className="text-white">Aqara Studio</h4><p className="mt-2 text-slate-300">网关、设备、空间配置与命令执行底座。</p></GlowCard><GlowCard><h4 className="text-white">Aqara Life</h4><p className="mt-2 text-slate-300">AI 生成、UGC 市场、短视频分发、主动智能体验层。</p></GlowCard></div></Section>;
}

export function UGCMarketSection() {
  return <Section id="market" title="UGC 共创市场" subtitle="官方插件 + 用户插件 + 榜单 + 付费 + 复用授权。"><div className="grid gap-4 md:grid-cols-5">{marketPlugins.map((m)=><GlowCard key={m.id} className="min-h-48"><p className="text-2xl">{m.cover}</p><h4 className="mt-2 text-sm text-white">{m.title}</h4><p className="text-xs text-slate-400">{m.author}</p><p className="mt-2 text-xs text-slate-300">{m.description}</p><p className="mt-2 text-xs text-cyan-100">{m.price} · ❤ {m.likes} · 安装 {m.installs}</p></GlowCard>)}</div></Section>;
}

export function ShortVideoSection() {
  return <Section id="short-video" title="短视频式发现体验" subtitle="边刷边装边分享，沉浸式插件分发。"><div className="grid gap-4 md:grid-cols-2">{shortVideos.map((v)=><GlowCard key={v.id}><div className="flex items-start justify-between"><div><h4 className="text-white">{v.title}</h4><p className="text-xs text-slate-400">@{v.creator}</p></div><PlayCircle className="text-cyan-200" /></div><p className="mt-3 text-sm text-slate-300">{v.description}</p><p className="mt-3 text-xs text-cyan-100">{v.pluginName} · {v.reuseMode} · 👍 {v.likes} · 💬 {v.comments}</p></GlowCard>)}</div></Section>;
}

export function MonetizationSection() {
  const loops = ['AI 生成会员','积分系统','付费插件','平台分成','创作者收益','设备补齐购买','高级模板','主动智能高级服务'];
  return <Section id="monetization" title="商业化闭环" subtitle="创作者收益、用户价值与硬件增长形成正循环。"><div className="grid gap-3 md:grid-cols-4">{loops.map((x)=><GlowCard key={x}><CircleDollarSign className="mb-2 text-cyan-200" />{x}</GlowCard>)}</div></Section>;
}

export function SecuritySection() {
  const items = [
    { icon: ShieldCheck, text: '数据最小化与本地优先' },
    { icon: ShieldCheck, text: '摄像头/传感器权限分层控制' },
    { icon: ShieldCheck, text: 'AI 规划层与执行层隔离' },
    { icon: ShieldCheck, text: '可关闭主动智能，支持风险兜底降级' }
  ];
  return <Section id="security" title="安全与隐私" subtitle="可信任机制是平台化的前提。"><div className="grid gap-4 md:grid-cols-2">{items.map(({icon:Icon,text})=><GlowCard key={text}><Icon className="mb-2 text-cyan-200" />{text}</GlowCard>)}</div></Section>;
}

export function RoadmapSection() {
  return <Section id="roadmap" title="路线图" subtitle="三阶段推进产品力、智能力与生态力。"><div className="relative border-l border-cyan-300/30 pl-6">{roadmap.map((r)=><motion.div key={r.phase} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="mb-8"><p className="text-cyan-200">{r.phase} · {r.period}</p><h4 className="text-white">{r.title}</h4><ul className="mt-2 list-disc pl-5 text-sm text-slate-300">{r.points.map((p)=><li key={p}>{p}</li>)}</ul></motion.div>)}</div></Section>;
}

export function FlywheelSection() {
  const items = ['用户创作','市场分发','短视频传播','更多用户发现','复用/购买/设备补齐','创作者收益','更多创作','平台增长'];
  return <Section id="flywheel" title="生态飞轮" subtitle="创作、分发、消费、收益、再创作持续放大。"><div className="grid gap-3 md:grid-cols-4">{items.map((item,i)=><motion.div key={item} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.07}} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 p-4 text-center text-sm text-cyan-50">{item}</motion.div>)}</div></Section>;
}

export function FooterCTA() {
  return <section className="mx-auto max-w-6xl px-6 pb-24 text-center md:px-10"><div className="rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-10"><h3 className="text-3xl font-semibold text-white">Aqara Life 不是一个新的智能家居 App。<br/>它是智能空间时代的创造平台、内容平台与应用平台。</h3><div className="mt-6 flex justify-center gap-3"><button className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950">预约体验</button><button className="rounded-full border border-cyan-300/40 px-5 py-3 text-sm text-cyan-100">查看概念 Demo</button></div></div></section>;
}

export function ExtraSectionPack() {
  return <>
    <Section id="user-persona" title="目标用户画像 / 分类体系" subtitle="面向普通用户、家庭创作者、行业合作方，提供官方插件与用户插件双轨。"><div className="grid gap-4 md:grid-cols-3"><GlowCard><Bot className="mb-2 text-cyan-200"/>首次上手：三步接入 Studio，导入官方模板后再 AI 改写。</GlowCard><GlowCard><Sparkles className="mb-2 text-cyan-200"/>插件分类：控制、自动化、情绪、游戏、安防、关怀、节能。</GlowCard><GlowCard><Cpu className="mb-2 text-cyan-200"/>创作者激励：收益分成、流量倾斜、模板认证、品牌联名。</GlowCard></div></Section>
  </>;
}
