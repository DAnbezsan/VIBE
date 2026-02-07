
import React from 'react';

export interface Ministry {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  type: string;
}

export interface SocialLink {
  label: string;
  platform: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
