import { Cpu, BrainCircuit, Cloud, ChartColumn, TrendingUp, Globe, MessageSquare, Mic } from 'lucide-react'

// Tailwind needs the full class names written out, so keep gradient/border strings complete.
export const skillGroups = [
  {
    group: 'Embedded Systems',
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    color: 'text-emerald-400',
    gradient: 'group-hover:from-emerald-500/10 group-hover:to-transparent',
    border: 'group-hover:border-emerald-500/30',
    description: 'Hardware-level programming and system architecture for reliable edge execution.',
    items: ['Embedded C', 'Microcontrollers', 'RTOS', 'Communication Protocols', 'IoT', 'PCB', 'Telemetry systems'],
  },
  {
    group: 'AI & Data Science',
    icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
    color: 'text-violet-400',
    gradient: 'group-hover:from-violet-500/10 group-hover:to-transparent',
    border: 'group-hover:border-violet-500/30',
    description: 'Building intelligent models and deploying ML architectures for real-world automation.',
    items: ['Python', 'Deep Learning', 'Computer Vision', 'Machine Learning', 'Edge AI', 'Data Architecture'],
  },
  {
    group: 'Cloud & Interface',
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    color: 'text-sky-400',
    gradient: 'group-hover:from-sky-500/10 group-hover:to-transparent',
    border: 'group-hover:border-sky-500/30',
    description: 'Connecting edge devices to scalable backends and creating immersive user interfaces.',
    items: ['Cloud Deployment', 'React', 'Node.js', 'ROS', 'WebSockets', 'Docker'],
  },
  {
    group: 'Data Visualization',
    icon: <ChartColumn className="w-6 h-6 text-amber-400" />,
    color: 'text-amber-400',
    gradient: 'group-hover:from-amber-500/10 group-hover:to-transparent',
    border: 'group-hover:border-amber-500/30',
    description: 'Transforming complex data into clear, interactive visual insights for better decision-making.',
    items: ['Dashboards', 'Data Charts', 'Visual Analytics', 'Data Storytelling'],
  },
  {
    group: 'Business Intelligence',
    icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
    color: 'text-indigo-400',
    gradient: 'group-hover:from-indigo-500/10 group-hover:to-transparent',
    border: 'group-hover:border-indigo-500/30',
    description: 'Leveraging data-driven strategies and analytics tools to extract meaningful business insights.',
    items: ['BI Tools', 'Data Analytics', 'Reporting', 'Decision Systems'],
  },
]

export const languageGroups = [
  {
    group: 'Primary',
    icon: <Globe className="w-6 h-6 text-rose-400" />,
    color: 'text-rose-400',
    gradient: 'group-hover:from-rose-500/10 group-hover:to-transparent',
    border: 'group-hover:border-rose-500/30',
    description: 'Core proficiencies for daily and professional communication.',
    items: ['Tamil — Native', 'English — Fluent'],
  },
  {
    group: 'Secondary',
    icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
    color: 'text-teal-400',
    gradient: 'group-hover:from-teal-500/10 group-hover:to-transparent',
    border: 'group-hover:border-teal-500/30',
    description: 'Additional languages supporting broader operational execution.',
    items: ['Hindi — Professional Proficiency', 'German — A2 Level'],
  },
  {
    group: 'Conversational',
    icon: <Mic className="w-6 h-6 text-fuchsia-400" />,
    color: 'text-fuchsia-400',
    gradient: 'group-hover:from-fuchsia-500/10 group-hover:to-transparent',
    border: 'group-hover:border-fuchsia-500/30',
    description: 'Limited working and casual communicative proficiencies.',
    items: ['Malayalam — Conversational', 'Kannada — Limited Working'],
  },
]
