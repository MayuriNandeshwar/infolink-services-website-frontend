export const CONTACT = {
  phone: '+91 87671 09652',
  phoneRaw: '+91 87671 09652',
  whatsapp: '+91 86249 07636',
  whatsappMessage:
    "Hello Infolink Services, I'd like to know more about your software solutions.",

  email: 'info@infolinkservices.com',

  address: 'Nagpur, Maharashtra, India',

  fullAddress:
    'Office 301, 3rd Floor, Infolink Enclave, Behind MSEB Office, Chatrapati Square, Narendra Nagar, Nagpur, Maharashtra 440015',

  mapUrl:
    'https://maps.google.com/?q=INFOLINK+SERVICES+Nagpur',

  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1134879161395!2d79.07830557503365!3d21.108041180561234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf71bf8a7803%3A0x7cb660196d5ac23d!2sINFOLINK%20SERVICES!5e0!3m2!1sen!2sin!4v1788167103785!5m2!1sen!2sin',
};

// Context-specific WhatsApp opening messages. Using the right message for
// the right entry point means the visitor doesn't have to type anything,
// and the Infolink Services team gets immediate context on intent.
export const WHATSAPP_MESSAGES = {
  general: "Hello Infolink Services, I'd like to know more about your software solutions.",
  hero: "Hi Infolink Services, I'd like to discuss a software project for my business.",
  faq: "Hi Infolink Services, I have a question I couldn't find an answer to.",
  readyToGo: "Hi Infolink Services, I'm ready to start a project. Can you share more details and next steps?",
  consultation: "Hi Infolink Services, I'd like to book a free consultation.",
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' },
];

export const SERVICES = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    icon: 'Code2',
    short: 'Bespoke software engineered around how your business actually operates.',
    description: 'We design and build software from the ground up around your specific processes, not the other way around. Every engagement starts with a structured discovery phase to map your real workflows, then moves through architecture, development, and rigorous testing — delivering a system that fits your organization precisely, scales with it, and is fully owned by you.',
    benefits: [
      'Solutions engineered to your exact workflows',
      'Full ownership of source code and architecture',
      'Scalable architecture built for future growth',
      'Dedicated technical account management',
      'Enterprise-grade security and compliance practices',
      'Comprehensive documentation and knowledge transfer',
    ],
    image: '/services/service_1.png',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'Globe',
    short: 'High-performance web platforms built for scale, speed, and conversion.',
    description: 'From corporate websites to complex web applications, we build fast, secure, and SEO-ready platforms using modern frameworks. Our web development practice covers everything from front-end experience design to back-end architecture, API integrations, and ongoing performance optimization — engineered to represent your brand and convert visitors reliably.',
    benefits: [
      'Modern, responsive design across all devices',
      'Optimized for search engines and page speed',
      'Secure architecture with regular vulnerability audits',
      'Seamless third-party and payment integrations',
      'Content management systems your team can operate',
      'Ongoing performance monitoring post-launch',
    ],
    image: '/services/service_2.png',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'Smartphone',
    short: 'Native and cross-platform apps engineered for real-world usage at scale.',
    description: 'We build iOS and Android applications — native or cross-platform — engineered for performance, reliability, and long-term maintainability. Our mobile development process covers UX design, development, QA across device fragmentation, app store submission, and post-launch support, so your app performs consistently for every user.',
    benefits: [
      'Native iOS and Android, or cross-platform delivery',
      'UX design grounded in real user research',
      'Rigorous QA across devices and OS versions',
      'App Store and Play Store submission handled end-to-end',
      'Push notifications, analytics, and crash reporting built in',
      'Post-launch maintenance and version update support',
    ],
    image: '/services/service_3.png',
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    icon: 'Database',
    short: 'Unified enterprise resource planning systems that replace fragmented tools.',
    description: 'We design ERP systems that bring finance, inventory, procurement, HR, and operations into a single connected platform — replacing disconnected spreadsheets and manual handoffs between departments. Every ERP engagement includes a detailed process audit so the system we build reflects how your organization actually runs, not a generic template.',
    benefits: [
      'Unified view across finance, inventory, and operations',
      'Custom modules built around your department structure',
      'Role-based access control and audit trails',
      'Real-time reporting and executive dashboards',
      'Migration support from legacy systems and spreadsheets',
      'Phased rollout to minimize operational disruption',
    ],
    image: '/services/service_4.png',
  },
  {
    slug: 'crm-solutions',
    title: 'CRM Solutions',
    icon: 'Users',
    short: 'Customer relationship systems that turn scattered data into a sales advantage.',
    description: 'A well-built CRM gives your sales and support teams a complete, current view of every customer relationship. We design CRM systems tailored to your sales process and customer lifecycle — from lead capture and pipeline tracking to support ticketing and customer analytics — so your team spends less time on data entry and more time on relationships.',
    benefits: [
      'Pipeline and lead tracking built around your sales process',
      'Automated follow-ups and task reminders',
      'Complete customer interaction history in one place',
      'Integration with email, WhatsApp, and telephony',
      'Sales and support performance analytics',
      'Team-based permissions and activity tracking',
    ],
    image: '/services/service_5.png',
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    icon: 'Sparkles',
    short: 'Practical AI integration that automates real work, not just a demo.',
    description: 'We help businesses apply AI where it delivers measurable value — document processing, intelligent automation, predictive analytics, customer support copilots, and custom model integrations. Every AI engagement begins with a feasibility assessment of your data and use case, so what we build is dependable in production, not just impressive in a demo.',
    benefits: [
      'Use-case feasibility assessment before development begins',
      'Integration with leading AI and LLM providers',
      'Intelligent process automation for repetitive workflows',
      'Custom copilots trained on your own data and documents',
      'Predictive analytics for operations and forecasting',
      'Clear guardrails around data privacy and model behavior',
    ],
    image: '/services/service_8.png',
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: 'Cloud',
    short: 'Scalable, secure cloud infrastructure engineered for uptime and cost control.',
    description: 'We architect, migrate, and manage cloud infrastructure on AWS, Azure, and Google Cloud — built to scale with demand and priced to match actual usage rather than fixed hardware costs. Our cloud practice covers infrastructure design, migration from on-premise systems, containerization, and ongoing monitoring for performance and security.',
    benefits: [
      'Infrastructure architecture across AWS, Azure, and GCP',
      'Auto-scaling to match real-time demand',
      'Migration planning from on-premise or legacy hosting',
      'Continuous monitoring, alerting, and uptime management',
      'Cost optimization reviews to control cloud spend',
      'Disaster recovery and backup strategy included',
    ],
    image: '/services/service_6.png',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'Palette',
    short: 'Interface and experience design grounded in how your users actually work.',
    description: 'Great software fails without a great interface. We design user experiences and interfaces around real user research and workflow analysis — wireframes, prototypes, and design systems that hold up across web and mobile — so every product we build is as intuitive to use as it is powerful underneath.',
    benefits: [
      'User research and journey mapping before design begins',
      'Wireframing and interactive prototyping for early validation',
      'Scalable design systems and component libraries',
      'Accessibility and usability best practices built in',
      'Consistent experience across web and mobile platforms',
      'Design handoff with full specs for engineering teams',
    ],
    image: '/services/service_7.png',
  },
];

export const SUPPORT_SERVICES = [
  {
    icon: 'Wrench',
    title: 'Custom Software Delivery',
    description:
      'End-to-end planning, development, and deployment for complete software projects with single-point accountability.',
  },
  {
    icon: 'PanelTop',
    title: 'Professional Implementation',
    description:
      'Certified engineering teams ensuring secure setup, optimal configuration, and long-term performance.',
  },
  {
    icon: 'Gauge',
    title: 'Systems Integration',
    description:
      'Complete support for integrations, data migration, and coordination with your existing tools and platforms.',
  },
  {
    icon: 'BadgePercent',
    title: 'Project Scoping Assistance',
    description:
      'Help with requirements gathering, documentation, and project planning from day one.',
  },
  {
    icon: 'Settings',
    title: 'Maintenance & Support Contracts',
    description:
      'Preventive maintenance, system health checks, updates, and performance monitoring services.',
  },
  {
    icon: 'Lightbulb',
    title: 'Technology Consultation',
    description:
      'Expert guidance on architecture, technology selection, and project planning.',
  },
];
export const FAQ_CATEGORIES = ['General', 'Pricing & Engagement', 'Technical', 'Delivery & Support'] as const;

export const FAQS = [
  {
    category: 'Pricing & Engagement',
    question: 'How much does a custom software project cost?',
    answer: 'A typical small to mid-sized web or mobile application ranges from ₹1.8 to ₹2.5 lakhs for an initial build, depending on scope. Larger enterprise ERP or CRM projects are quoted based on modules and integrations required. The exact price depends on feature scope, platform complexity, and timeline. Contact us for a free, customized quote.',
  },
  {
    category: 'Pricing & Engagement',
    question: 'What engagement models do you offer?',
    answer: 'We offer fixed-scope project engagements as well as ongoing dedicated-team arrangements, depending on what fits your organization best. We handle the entire process — from requirements gathering to documentation and delivery tracking. Reach out with your project details and we will recommend the right model for you.',
  },
  {
    category: 'Delivery & Support',
    question: 'How long does a typical software project take?',
    answer: 'A typical web or mobile application build takes 3-5 weeks after requirements and design approval. The complete process — including integrations, testing, and deployment — usually takes 6-10 weeks. Enterprise and industrial projects may take longer depending on scope and complexity.',
  },
  {
    category: 'Technical',
    question: 'What is cloud deployment and how does it benefit me?',
    answer: 'Cloud deployment lets your application run on scalable infrastructure that grows with demand and reduces the cost of running your own servers. When usage increases, additional capacity is provisioned automatically. During quieter periods, costs scale back down. This can reduce your infrastructure bill significantly.',
  },
  {
    category: 'Pricing & Engagement',
    question: 'What is the typical ROI timeline for a software investment?',
    answer: 'Based on typical project outcomes, most small to mid-sized software investments pay back their cost through efficiency gains within approximately 3-3.5 years, while larger enterprise systems typically pay back in 4-5 years due to the scale of process automation involved. Actual payback depends on your organization, process complexity, and adoption. Contact us for an estimate based on your own requirements.',
  },
  {
    category: 'Delivery & Support',
    question: 'Do you provide warranty or support after launch?',
    answer: 'Support terms may vary depending on the engagement selected. Typically, our builds come with a post-launch bug-fix warranty period, and we offer comprehensive Annual Maintenance Contracts (AMC) to ensure your software continues to perform efficiently and reliably as your needs evolve.',
  },
  {
    category: 'Technical',
    question: 'Can my application handle downtime and peak load?',
    answer: 'Standard deployments include monitoring and alerting to catch issues quickly. If you need high availability, we offer redundant, load-balanced architectures with automatic failover. Applications are load-tested ahead of major launches, though real-world traffic spikes can vary (30-50% above projections). Auto-scaling policies help absorb these seasonal or event-driven surges.',
  },
  {
    category: 'General',
    question: 'What areas does Infolink Services serve?',
    answer: 'We currently serve customers across Maharashtra with our headquarters in Nagpur. For enterprise and remote projects, we work with clients across India. Contact us with your location and we\'ll confirm service availability for your area.',
  },
  {
    category: 'Pricing & Engagement',
    question: 'Can I finance my software project with a loan or EMI?',
    answer: 'Yes. Several banks and NBFCs in India offer dedicated business loans for technology investment, typically in the 9-14% per annum interest range, often with minimal collateral requirements for smaller projects. Infolink Services does not provide financing directly, but we can share information on lenders active in your area. Contact us to estimate monthly payments at different loan amounts and tenures before you commit.',
  },
  {
    category: 'General',
    question: 'Can housing societies (RWAs) or associations get custom software built?',
    answer: 'Yes, and it is one of the most cost-effective ways to reduce a society\'s administrative overhead (billing, visitor management, communication). Society and association projects typically require committee approval and coordination on requirements — we guide the organization through each of these steps as part of the consultation.',
  },
  {
    category: 'Technical',
    question: 'Can I monitor my application\'s performance remotely?',
    answer: 'Most modern deployments include a companion monitoring dashboard, letting you track uptime, usage, and alerts from your phone or browser. The specific monitoring platform depends on which cloud provider is specified for your system — this is confirmed as part of your written proposal.',
  },
  {
    category: 'Technical',
    question: 'Will a new system disrupt my existing tools or data?',
    answer: 'A professionally engineered migration plan should not disrupt a structurally sound existing setup, and our discovery phase specifically checks data integrity and integration points before we recommend a system. That said, migration considerations vary by platform and data volume — we recommend reviewing your specific systems documentation, and we\'re happy to review the migration approach with you or your IT team before implementation begins.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'Our engineers review your requirements, existing systems, and technical constraints. We analyze your current workflows and pain points.',
  },
  {
    step: '02',
    title: 'System Design',
    description: 'We engineer a custom solution optimized for your requirements and goals. You receive a detailed proposal with scope, timeline, and ROI analysis.',
  },
  {
    step: '03',
    title: 'Planning & Approvals',
    description: 'We handle all documentation — technical specifications, integration approvals, and project sign-off — so you don\'t have to navigate the bureaucracy.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'We build using proven frameworks, certified cloud infrastructure, and quality engineering practices. All components meet industry standards and come with support agreements.',
  },
  {
    step: '05',
    title: 'Implementation',
    description: 'Our certified engineers deploy your system with precision — optimal configuration, secure setup, and thorough testing, typically in 3-5 days.',
  },
  {
    step: '06',
    title: 'Launch & Handover',
    description: 'We test, launch, and integrate your system with your existing tools. You receive a performance report, support documentation, and training on system monitoring.',
  },
];

export const CORE_VALUES = [
  {
    icon: 'Wrench',
    title: 'Engineering Excellence',
    description: 'We approach every project with engineering rigor, ensuring each system is designed and built to perform reliably for years.',
  },
  {
    icon: 'Eye',
    title: 'Transparency',
    description: 'Honest communication, clear pricing, and no hidden costs. We tell you exactly what you\'re getting and why.',
  },
  {
    icon: 'Leaf',
    title: 'Sustainability',
    description: 'We are committed to building software that reduces waste and inefficiency for the businesses we work with.',
  },
  {
    icon: 'Users',
    title: 'Customer First',
    description: 'Your needs drive our recommendations. We design systems for your actual requirements, not our sales targets.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Quality Without Compromise',
    description: 'We never cut corners on components or workmanship. Quality is non-negotiable at Infolink Services.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    description: 'We stay current with technology advancements to bring you the most efficient, reliable solutions.',
  },
];

export const GLOSSARY = [
  {
    term: 'MVP (Minimum Viable Product)',
    definition: 'A first working version of your product built with just enough features to be usable and testable in the real world. Launching an MVP lets you validate demand and gather feedback before investing in the full feature set.',
  },
  {
    term: 'API (Application Programming Interface)',
    definition: 'A defined way for two software systems to talk to each other — for example, letting your website pull live data from a payment gateway or a third-party service. Well-designed APIs are what make integrations possible.',
  },
  {
    term: 'Cloud Hosting',
    definition: 'Running your application on shared, on-demand infrastructure (like AWS, Azure, or GCP) instead of your own physical servers. Capacity scales up automatically with traffic and scales back down when demand drops, which usually reduces cost versus fixed, self-owned hardware.',
  },
  {
    term: 'Sprint',
    definition: 'A fixed, short time-box (commonly 1-2 weeks) in Agile development during which a specific set of features or fixes is built, tested, and reviewed. Working in sprints gives you visible progress and a chance to redirect priorities regularly, rather than waiting months for a single big release.',
  },
  {
    term: 'SLA (Service Level Agreement)',
    definition: 'A written commitment on measurable service standards — such as uptime percentage, response time for support tickets, or bug-fix turnaround — that a support or maintenance contract guarantees.',
  },
  {
    term: 'Uptime',
    definition: 'The percentage of time a system is up and available to users. 99.9% uptime allows for a little under 9 hours of downtime a year; higher-availability architectures target 99.99% or better.',
  },
  {
    term: 'Tech Stack',
    definition: 'The combination of programming languages, frameworks, databases, and infrastructure used to build and run an application (e.g. React for the frontend, Node.js for the backend, PostgreSQL for the database).',
  },
  {
    term: 'ERP (Enterprise Resource Planning)',
    definition: 'Software that unifies core business processes — inventory, finance, HR, procurement — into a single connected system, replacing disconnected spreadsheets and manual handoffs between departments.',
  },
  {
    term: 'CRM (Customer Relationship Management)',
    definition: 'Software that tracks leads, customer interactions, and sales pipeline in one place, so a team can follow up consistently and see the full history of a relationship at a glance.',
  },
  {
    term: 'AMC (Annual Maintenance Contract)',
    definition: 'A support agreement covering ongoing bug fixes, security patches, performance monitoring, and minor updates after launch, so a system keeps running reliably without needing a new project every time something needs attention.',
  },
];

export const SERVICE_AREAS = {
  primary: {
    label: 'Primary Service Area',
    description: 'Enterprise, startup, and institutional projects across Nagpur and the surrounding Maharashtra region, where our engineering and delivery teams are based.',
    cities: ['Nagpur', 'Wardha', 'Amravati', 'Chandrapur', 'Nashik'],
  },
  extended: {
    label: 'Extended Maharashtra Coverage',
    description: 'We take on enterprise and startup projects across Maharashtra on a project-by-project basis — reach out with your details/queries and we will confirm feasibility and timelines.',
  },
};

// Options for the lead form's "Project Type" select (components/LeadForm.tsx).
// NOTE: these are bound to the existing `property_type` column in the
// `contact_inquiries` Supabase table — the field name is unchanged so no
// backend/API/schema migration is required, only the label and options.
export const PROJECT_TYPES = [
  'Custom Software',
  'Web Development',
  'Mobile Apps',
  'ERP',
  'CRM',
  'AI Solutions',
  'Cloud Solutions',
  'Other',
];

// Options for the lead form's "Budget Range" select (components/LeadForm.tsx).
// NOTE: these are bound to the existing `monthly_bill` column in the
// `contact_inquiries` Supabase table — the field name is unchanged so no
// backend/API/schema migration is required, only the label and options.
export const BUDGET_RANGES = [
  'Under ₹1,00,000',
  '₹1,00,000 - ₹3,00,000',
  '₹3,00,000 - ₹5,00,000',
  '₹5,00,000 - ₹10,00,000',
  '₹10,00,000 - ₹25,00,000',
  'Above ₹25,00,000',
  'Not sure yet',
];
