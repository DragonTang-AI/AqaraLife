import type { PluginItem } from '../lib/types';

export const pluginForms: PluginItem[] = [
  { id: 'lamp', title: '单灯控制插件', subtitle: '点按、滑动、摇一摇实现情境灯效。', tags: ['控制', '轻交互'] },
  { id: 'aquarium', title: '鱼缸空间插件', subtitle: '水位感知、加水联动、观赏灯光节奏。', tags: ['自动化', '主动智能'] },
  { id: 'sleep', title: '睡眠模式插件', subtitle: '一键触发灯光、窗帘、空调协同。', tags: ['场景', '健康'] },
  { id: 'energy', title: '节能助手插件', subtitle: '按家庭习惯自动优化功耗策略。', tags: ['节能', '建议'] },
  { id: 'game', title: '游戏化按钮插件', subtitle: '按钮挑战、抽卡灯效、互动积分。', tags: ['游戏', 'UGC'] },
  { id: 'couple', title: '情侣互动插件', subtitle: '异地闪灯、心情传递、温度问候。', tags: ['情绪', '社交'] },
  { id: 'mood', title: '情绪灯光插件', subtitle: 'AI识别状态并推送氛围方案。', tags: ['情绪', '主动智能'] },
  { id: 'security', title: '安防中控插件', subtitle: '门磁、摄像头、警报联动中枢。', tags: ['安防', '中控'] }
];
