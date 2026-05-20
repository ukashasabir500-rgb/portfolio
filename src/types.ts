export interface Project {
  id: string;
  title: string;
  role: string;
  thumbnail: string;
  problem: string;
  process: {
    title: string;
    description: string;
    image?: string;
  }[];
  deliverables: string[];
  tools: string[];
  outcome: string;
  prototypeLink: string;
  timeSpent: string;
  learned: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0 to 100
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}
