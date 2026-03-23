import type { CaseData } from '../lib/types';

export const caseStudies: CaseData[] = [
  {
    title: '台灯插件：从控制到玩法',
    description: '支持点按开关、滑块调亮度、摇一摇变色，并记录偏好。',
    involvedDevices: ['智能台灯', '人体传感器', '无线按钮'],
    scenario: '办公与夜读双场景快速切换。',
    benefits: ['交互更轻量', '体验更有趣', '形成习惯学习']
  },
  {
    title: '鱼缸插件：主动养护流',
    description: '融合水位、温度与照明逻辑，在异常时主动建议。',
    involvedDevices: ['水位传感器', '补水器', '氛围灯'],
    scenario: '宠物主人可视化管理日常养护。',
    benefits: ['降低维护负担', '减少风险', '可分享模板']
  },
  {
    title: '睡眠插件：全屋入眠编排',
    description: '灯、窗帘、空调协同，按周内行为自动微调。',
    involvedDevices: ['卧室主灯', '窗帘电机', '空调网关'],
    scenario: '工作日与周末作息差异化策略。',
    benefits: ['提升入睡效率', '节能', '全自动运行']
  },
  {
    title: '主动提醒插件：家庭健康摘要',
    description: '设备异常、行为偏离与环境变化形成每日摘要。',
    involvedDevices: ['门磁', '空气质量传感器', '网关'],
    scenario: '关注老人、儿童、宠物与能源使用。',
    benefits: ['减少故障漏报', '提升安全感', '支持一键处理']
  }
];
