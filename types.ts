export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  images: string[];
  title: string;
  instagramLink: string;
}

export interface HealthStat {
  name: string;
  count: number;
  unit: string;
  color: string;
}