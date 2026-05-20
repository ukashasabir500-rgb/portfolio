import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Doctor App',
    role: 'UI/UX Designer',
    thumbnail: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop',
    problem: 'Patients faced difficulties in finding specialized doctors and booking instant appointments in a seamless way.',
    process: [
      { title: 'User Flows', description: 'Mapped out the journey from doctor search to appointment confirmation.' },
      { title: 'UI Design', description: 'Developed a calming, clean interface with accessible typography and clear actions.' },
      { title: 'Prototyping', description: 'Created an interactive prototype to test the booking flow efficiency.' }
    ],
    deliverables: ['Mobile App Design', 'Interactive Prototype', 'Design System'],
    tools: ['Figma'],
    outcome: 'Streamlined the booking process, reducing the time to schedule an appointment by 50%.',
    prototypeLink: 'https://www.figma.com/design/zs83S95dXaco6DpRpyaX1B/Doctor-App?node-id=128-500&t=HOovAYrWseXLadRQ-1',
    timeSpent: '4 Weeks',
    learned: 'Deepened understanding of healthcare accessibility and data visualization for patient records.'
  },
  {
    id: '2',
    title: 'FitTrack - Fitness Tracker',
    role: 'UI Designer',
    thumbnail: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop',
    problem: 'Fitness enthusiasts lacked a consolidated view of their daily activities, nutrition, and progress metrics.',
    process: [
      { title: 'Competitor Analysis', description: 'Analyzed existing fitness apps to identify common usability gaps.' },
      { title: 'Visual Direction', description: 'Chose a high-energy color palette to motivate users towards their goals.' }
    ],
    deliverables: ['App Interface', 'Iconography', 'Style Guide'],
    tools: ['Figma'],
    outcome: 'Created a centralized dashboard that provides a clear overview of fitness progress at a glance.',
    prototypeLink: 'https://www.figma.com/proto/VfJBbgIPIkUfkxnb1l7OYO/ukasha-fit-track?node-id=5-2106&t=5kukeoAPUJZujdWD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    timeSpent: '3 Weeks',
    learned: 'Adapted to designing for dark mode and high-contrast fitness environments.'
  },
  {
    id: '3',
    title: 'Secoola - Learning Platform',
    role: 'Product Designer',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    problem: 'Students found online learning platforms distracting and hard to navigate between different courses.',
    process: [
      { title: 'Information Architecture', description: 'Simplified course navigation and content hierarchy.' },
      { title: 'Component Library', description: 'Built a reusable set of UI components for consistency across modules.' }
    ],
    deliverables: ['LMS Design', 'Web Application', 'UX Audit'],
    tools: ['Figma'],
    outcome: 'Improved student focus time by narrowing down learning pathways into manageable chunks.',
    prototypeLink: 'https://www.figma.com/design/oDc9xMYYdqFeJR4Ja4vSZM/secoola?node-id=0-1&t=AYOl2Wy9SS8mPkcY-1',
    timeSpent: '5 Weeks',
    learned: 'Explored complex dashboard designs and user permissions for educational systems.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Junior UI/UX Designer',
    company: 'Learning & Practice Projects',
    period: '2025 – Present',
    bullets: [
      'Designing end-to-end mobile and web interfaces focusing on user-centered principles.',
      'Developing high-fidelity prototypes and design systems in Figma.',
      'Collaborating on open-source design audits and community feedback sessions.'
    ]
  },
  {
    role: 'Intermediate (12th Grade)',
    company: 'Education',
    period: '2023 – 2025',
    bullets: [
      'Completed secondary education with a focus on logical thinking and fundamentals.'
    ]
  }
];

export const SKILLS = [
  'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 
  'Wireframing', 'Prototyping', 'Auto Layout', 
  'Responsive Design', 'User Research', 'Design Systems'
];
