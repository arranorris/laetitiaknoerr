export type BlogCategory = 'TDAH' | 'HPI' | 'Apprentissage';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  date: string;
  imageUrl: string;
  readTime: number;
}