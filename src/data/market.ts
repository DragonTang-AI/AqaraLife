import type { MarketPlugin } from '../lib/types';

export const marketPlugins: MarketPlugin[] = [
  { id: '1', title: '夜归守护', author: 'Aqara Official', category: '安防', tags: ['官方', '自动化'], description: '夜间门锁、玄关灯、摄像头协同值守。', likes: 4621, installs: 28400, price: '免费', isOfficial: true, cover: '🛡️' },
  { id: '2', title: '鱼缸日程管家', author: 'OceanLab', category: '宠物', tags: ['传感器', '联动'], description: '基于水位与光照自动补水与补光。', likes: 3890, installs: 17100, price: '¥19', isOfficial: false, cover: '🐠' },
  { id: '3', title: '晚安全屋', author: 'Aqara Official', category: '睡眠', tags: ['官方', '高复用'], description: '灯光渐暗、窗帘闭合、空调入眠曲线。', likes: 6221, installs: 52000, price: '免费', isOfficial: true, cover: '🌙' },
  { id: '4', title: '情侣心跳灯', author: 'TwoNodes', category: '互动', tags: ['情绪', '社交'], description: '轻触即可给对方房间发送闪烁心跳。', likes: 5172, installs: 31900, price: '¥9', isOfficial: false, cover: '💗' },
  { id: '5', title: '晨起效率流', author: 'FlowCraft', category: '效率', tags: ['主动提醒', '日程'], description: '根据日历与天气自动编排晨间流程。', likes: 3304, installs: 14400, price: '¥29', isOfficial: false, cover: '☀️' },
  { id: '6', title: '长辈守护模式', author: 'Aqara Official', category: '关怀', tags: ['官方', '主动智能'], description: '异常停留、夜间活动与跌倒风险提醒。', likes: 7920, installs: 60120, price: '免费', isOfficial: true, cover: '👴' },
  { id: '7', title: '儿童专注岛', author: 'FocusLab', category: '教育', tags: ['场景', '番茄钟'], description: '学习时自动屏蔽干扰设备和噪音。', likes: 2689, installs: 9800, price: '¥15', isOfficial: false, cover: '🧠' },
  { id: '8', title: '节能雷达', author: 'GreenPulse', category: '节能', tags: ['能耗', '推荐'], description: '识别异常耗电并一键推荐设备升级。', likes: 4102, installs: 22000, price: '¥12', isOfficial: false, cover: '⚡' },
  { id: '9', title: '派对氛围导演', author: 'VibeScript', category: '娱乐', tags: ['灯光', '音乐'], description: '随音乐节奏驱动灯带和窗帘舞台模式。', likes: 5011, installs: 30040, price: '¥25', isOfficial: false, cover: '🎉' },
  { id: '10', title: '设备体检中心', author: 'Aqara Official', category: '维护', tags: ['官方', '诊断'], description: '周期检测网关状态并推送维护建议。', likes: 3502, installs: 26800, price: '免费', isOfficial: true, cover: '🔧' }
];
