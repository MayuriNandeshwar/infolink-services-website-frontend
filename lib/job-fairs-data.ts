// Job Fair Gallery — event data.
// File lists here are generated directly from public/job-fairs/* so every
// image on disk is accounted for. Purely additive: does not touch any
// existing constants, Supabase table, or form data.

export interface JobFairEvent {
  id: string;
  category: string;
  location: string;
  year?: string;
  description: string;
  photos: string[];
}

const p = (path: string) => `/job-fairs/${path}`;

export const JOB_FAIR_EVENTS: JobFairEvent[] = [
  {
    id: 'amravati-2023',
    category: 'Amravati 2023',
    location: 'Amravati, Maharashtra',
    year: '2023',
    description: 'A large-scale recruitment drive connecting local candidates with employer partners across Amravati.',
    photos: [
      'amravati-2023/photo-1.png', 'amravati-2023/photo-2.png', 'amravati-2023/photo-3.png',
      'amravati-2023/photo-4.png', 'amravati-2023/photo-5.png', 'amravati-2023/photo-6.png',
      'amravati-2023/photo-7.png', 'amravati-2023/photo-8.png', 'amravati-2023/photo-9.png',
      'amravati-2023/photo-10.png', 'amravati-2023/photo-11.png', 'amravati-2023/photo-12.png',
    ].map(p),
  },
  {
    id: 'chandrapur',
    category: 'Chandrapur',
    location: 'Chandrapur, Maharashtra',
    description: 'Recruitment and placement drive organized in partnership with local businesses in Chandrapur.',
    photos: [
      'chandrapur/photo-1.png', 'chandrapur/photo-2.png', 'chandrapur/photo-3.png',
      'chandrapur/photo-4.png', 'chandrapur/photo-5.png', 'chandrapur/photo-6.png',
      'chandrapur/photo-7.jpg', 'chandrapur/photo-8.jpg',
    ].map(p),
  },
  {
    id: 'east-nagpur',
    category: 'East Nagpur',
    location: 'East Nagpur, Maharashtra',
    description: 'Job fair connecting East Nagpur candidates with hiring partners across multiple industries.',
    photos: [
      'east-nagpur/photo-1.png', 'east-nagpur/photo-2.png', 'east-nagpur/photo-3.png',
      'east-nagpur/photo-4.png', 'east-nagpur/photo-5.jpg',
    ].map(p),
  },
  {
    id: 'umred',
    category: 'Umred',
    location: 'Umred, Maharashtra',
    description: 'On-ground recruitment drive bringing employment opportunities directly to Umred candidates.',
    photos: ['umred/photo-1.png', 'umred/photo-2.png', 'umred/photo-3.png', 'umred/photo-4.png'].map(p),
  },
  {
    id: 'wani-yavatmal',
    category: 'Wani Yavatmal',
    location: 'Wani, Yavatmal District',
    description: 'Recruitment drive expanding job access to candidates in the Wani, Yavatmal region.',
    photos: [
      'wani-yavatmal/photo-1.jpg', 'wani-yavatmal/photo-2.jpg', 'wani-yavatmal/photo-3.png',
      'wani-yavatmal/photo-4.jpg', 'wani-yavatmal/photo-5.jpg', 'wani-yavatmal/photo-6.png',
    ].map(p),
  },
  {
    id: 'girish-pandav',
    category: 'Girish Pandav',
    location: 'Maharashtra',
    description: 'Community-focused job fair organized as part of the Girish Pandav initiative.',
    photos: ['girish-pandav/photo-1.png', 'girish-pandav/photo-2.png', 'girish-pandav/photo-3.png'].map(p),
  },
  {
    id: 'campus-drives',
    category: 'Campus Drives',
    location: 'Multiple Campuses, Maharashtra',
    description: 'On-campus recruitment drives conducted across colleges and institutes to connect students directly with employers.',
    photos: [
      'campus-drive/photo-1.png', 'campus-drive/photo-2.png', 'campus-drive/photo-3.png',
      'campus-drive/photo-4.png', 'campus-drive/photo-5.png', 'campus-drive/photo-6.png',
      'campus-drive/photo-7.png',
      'campus-drive-2020/photo-1.png', 'campus-drive-2020/photo-2.png',
      'campus-drive-2015/photo-1.png',
    ].map(p),
  },
  {
    id: 'rural-campus-drives',
    category: 'Rural Campus Drives',
    location: 'Rural Maharashtra',
    description: 'Recruitment drives extended into rural campuses, bringing job fair access beyond major cities.',
    photos: [
      'rural-campus-drive/photo-1.png', 'rural-campus-drive/photo-2.png', 'rural-campus-drive/photo-3.png',
    ].map(p),
  },
  {
    id: 'training-image-building',
    category: 'Training & Image Building',
    location: 'Maharashtra',
    description: 'Candidate training and personality development sessions run alongside our recruitment drives.',
    photos: [
      'training-image-building/photo-1.png', 'training-image-building/photo-2.png',
      'training-image-building/photo-3.png', 'training-image-building/photo-4.png',
      'training-image-building/photo-5.png',
    ].map(p),
  },
  {
    id: 'rojgar-melava',
    category: 'Rojgar Melava',
    location: 'Maharashtra',
    description: 'Additional Rojgar Melava (job fair) drives organized as part of our ongoing recruitment work.',
    photos: [
      'rojgar-medava/photo-1.png', 'rojgar-medava/photo-2.png', 'rojgar-medava/photo-3.png',
      'rojgar-medava/photo-4.png', 'rojgar-medava/photo-5.png', 'rojgar-medava/photo-6.png',
      'rojgar-medava/photo-7.png',
    ].map(p),
  },
];

export const JOB_FAIR_CATEGORIES = JOB_FAIR_EVENTS.map((e) => e.category);

export const JOB_FAIR_TOTAL_PHOTOS = JOB_FAIR_EVENTS.reduce((sum, e) => sum + e.photos.length, 0);
