export enum Page {
  HOME = 'HOME',
  PHILOSOPHY = 'PHILOSOPHY', // Sub 1
  SERVICES = 'SERVICES',     // Sub 2
  ABOUT = 'ABOUT',           // Sub 3
  CONTACT = 'CONTACT',       // Sub 4
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}