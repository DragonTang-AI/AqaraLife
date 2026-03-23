import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import {
  ActiveIntelligenceSection,
  AIWorkflowSection,
  AnalogySection,
  CaseStudySection,
  ExtraSectionPack,
  FlywheelSection,
  FooterCTA,
  MonetizationSection,
  PluginGridSection,
  ProductArchitectureSection,
  RoadmapSection,
  SecuritySection,
  ShortVideoSection,
  StudioRelationSection,
  TechArchitectureSection,
  UGCMarketSection,
  UserJourneySection,
  VisionSection,
  WhatIsLifeSection,
  WhyNowSection
} from './components/sections/AllSections';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-slate-100">
      <Navbar />
      <HeroSection />
      <WhyNowSection />
      <WhatIsLifeSection />
      <AnalogySection />
      <VisionSection />
      <UserJourneySection />
      <PluginGridSection />
      <CaseStudySection />
      <AIWorkflowSection />
      <ProductArchitectureSection />
      <TechArchitectureSection />
      <ActiveIntelligenceSection />
      <StudioRelationSection />
      <UGCMarketSection />
      <ShortVideoSection />
      <MonetizationSection />
      <SecuritySection />
      <RoadmapSection />
      <FlywheelSection />
      <ExtraSectionPack />
      <FooterCTA />
    </div>
  );
}
