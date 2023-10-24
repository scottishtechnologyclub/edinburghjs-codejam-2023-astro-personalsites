// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
// 2. Define your collection(s)
const participantCollection = defineCollection({
  type: 'data'
});

export const collections = {
  'participants': participantCollection
};