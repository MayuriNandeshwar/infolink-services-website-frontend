// Data for the /careers page. Kept in its own module (rather than
// lib/constants.ts) so Phase 7A cannot accidentally touch the SERVICES /
// SUPPORT_SERVICES / NAV_LINKS data that other, already-completed pages
// (Homepage, Services, Footer) depend on.

export interface OpenPosition {
  slug: string;
  title: string;
  experience: string;
  location: string;
  employmentType: string;
  description: string;
}

export const OPEN_POSITIONS: OpenPosition[] = [
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    experience: '1-3 years',
    location: 'Nagpur, Maharashtra',
    employmentType: 'Full-time',
    description:
      'Build responsive, high-performance interfaces using React and modern frontend tooling, working closely with design and backend teams.',
  },
  {
    slug: 'backend-developer',
    title: 'Backend Developer',
    experience: '2-4 years',
    location: 'Nagpur, Maharashtra',
    employmentType: 'Full-time',
    description:
      'Design and maintain APIs, databases, and server-side logic that power our client applications, with a focus on reliability and scalability.',
  },
  {
    slug: 'full-stack-developer',
    title: 'Full Stack Developer',
    experience: '2-5 years',
    location: 'Nagpur, Maharashtra',
    employmentType: 'Full-time',
    description:
      'Work across the entire stack — from database design to polished UI — on custom software, ERP, and CRM projects for our clients.',
  },
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    experience: '1-3 years',
    location: 'Nagpur, Maharashtra',
    employmentType: 'Full-time',
    description:
      'Design intuitive, user-centered interfaces — from wireframes to polished prototypes — for web and mobile products.',
  },
  {
    slug: 'qa-engineer',
    title: 'QA Engineer',
    experience: '1-3 years',
    location: 'Nagpur, Maharashtra',
    employmentType: 'Full-time',
    description:
      'Own quality across our delivery pipeline — manual and automated testing, bug tracking, and release verification.',
  },
  {
    slug: 'business-analyst',
    title: 'Business Analyst',
    experience: '2-4 years',
    location: 'Nagpur, Maharashtra',
    employmentType: 'Full-time',
    description:
      'Bridge client requirements and engineering delivery — requirement gathering, documentation, and project scoping.',
  },
];

export interface WhyUsCard {
  icon: 'Lightbulb' | 'TrendingUp' | 'Clock' | 'GraduationCap';
  title: string;
  description: string;
}

export const WHY_WORK_WITH_US: WhyUsCard[] = [
  {
    icon: 'Lightbulb',
    title: 'Innovative Projects',
    description: 'Work on custom software, AI, and cloud projects across industries — no two engagements are the same.',
  },
  {
    icon: 'TrendingUp',
    title: 'Career Growth',
    description: 'Clear growth paths, mentorship, and the chance to take on real ownership early in your career.',
  },
  {
    icon: 'Clock',
    title: 'Flexible Environment',
    description: 'A supportive, output-focused environment that respects your time and how you work best.',
  },
  {
    icon: 'GraduationCap',
    title: 'Continuous Learning',
    description: 'Continuous learning through new technologies, internal knowledge sharing, and hands-on project variety.',
  },
];

// Options shown in the "Position Applying For" select on the resume form.
// Derived from OPEN_POSITIONS plus a general fallback for candidates who
// don't see an exact match.
export const APPLICATION_POSITIONS: string[] = [
  ...OPEN_POSITIONS.map((p) => p.title),
  'General Application',
];

export const EXPERIENCE_RANGES: string[] = [
  'Fresher (0 years)',
  '0-1 years',
  '1-3 years',
  '3-5 years',
  '5-8 years',
  '8+ years',
];
