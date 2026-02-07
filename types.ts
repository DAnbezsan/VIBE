
export interface ScheduleItem {
  day: string;
  time: string;
  activity: string;
  description?: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'YouTube' | 'Facebook' | 'WhatsApp';
  url: string;
  label: string;
}

export interface ChurchInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  socials: SocialLink[];
  schedule: ScheduleItem[];
}
