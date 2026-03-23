import type { ShortVideo } from '../lib/types';

export const shortVideos: ShortVideo[] = [
  { id: 'v1', title: '一句话生成晚安插件', creator: 'Mina Home', likes: 9280, comments: 612, description: '“我说晚安后，灯光渐暗到20%，空调切睡眠模式。”', pluginName: '晚安全屋', reuseMode: '授权复用', cover: '🌌' },
  { id: 'v2', title: '鱼缸状态可视化插件演示', creator: 'OceanLab', likes: 6340, comments: 320, description: '传感器异常时自动推送加水与净化提醒。', pluginName: '鱼缸日程管家', reuseMode: '付费导入', cover: '🐟' },
  { id: 'v3', title: '情侣互动一键闪灯', creator: 'TwoNodes', likes: 12380, comments: 1002, description: '异地情侣同频互动，支持自定义灯光语言。', pluginName: '情侣心跳灯', reuseMode: '授权复用', cover: '💞' },
  { id: 'v4', title: '按钮挑战：30秒灯光闯关', creator: 'VibeScript', likes: 7210, comments: 455, description: '游戏化插件让家庭设备变成交互玩法。', pluginName: '按钮挑战', reuseMode: '免费复用', cover: '🎮' }
];
