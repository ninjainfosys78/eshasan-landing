import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.VITE_PB_URL || 'https://cms.ninjainfosys.com/');

export interface Blog {
  id: string;
  Title: string;
  Slug: string;
  Kicker: string;
  Published_Date: string;
  Image: string;
  Content: string;
  created: string;
  updated: string;
}