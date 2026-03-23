export type NavItem = { id: string; label: string };

export type PluginItem = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
};

export type MarketPlugin = {
  id: string;
  title: string;
  author: string;
  category: string;
  tags: string[];
  description: string;
  likes: number;
  installs: number;
  price: string;
  isOfficial: boolean;
  cover: string;
};

export type ShortVideo = {
  id: string;
  title: string;
  creator: string;
  likes: number;
  comments: number;
  description: string;
  pluginName: string;
  reuseMode: string;
  cover: string;
};

export type CaseData = {
  title: string;
  description: string;
  involvedDevices: string[];
  scenario: string;
  benefits: string[];
};
