
// Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
