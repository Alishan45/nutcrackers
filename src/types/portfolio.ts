export interface ProjectMetric {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  serviceCategory: string;
  isRealClient: boolean;
  clientBadge: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  imageDesktop: string;
  imageMobile?: string;
  liveUrl?: string;
  videoUrl?: string;
  secondaryVideoUrl?: string;
  techStack: string[];
  keyFeatures: string[];
  verifiedMetrics: ProjectMetric[];
}
