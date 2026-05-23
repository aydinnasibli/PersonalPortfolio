import type { Project, StackItem } from '@/types'

export const PROJECTS: Project[] = [
  {
    n: '01',
    year: '2026',
    title: 'The Living Manuscript',
    subtitle: 'A living map of Western philosophical thought.',
    description:
      'An interactive network of philosophers — drag nodes to reposition thinkers, hover a portrait to surface their ideas, click to read the full entry. Built as a quiet reading room around the history of ideas: lineage, schools, and the threads that connect them across centuries.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'MongoDB'],
    role: 'Solo build',
    client: 'Self-initiated',
    accent: 'oklch(0.55 0.18 268)',
    accent2: 'oklch(0.92 0.02 80)',
    live: 'https://philoproj.vercel.app',
    visual: 'manuscript',
  },
  {
    n: '02',
    year: '2025',
    title: 'Project Two',
    subtitle: 'A short italic subtitle that hints at the work.',
    description:
      'Two or three sentences describing the constraint, the approach, and the outcome. Replace this paragraph with the real story — what you built, what was hard, what you\'d defend in a meeting.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    role: 'Solo build',
    client: 'Placeholder Co.',
    accent: 'oklch(0.66 0.14 215)',
    accent2: 'oklch(0.86 0.07 220)',
    visual: 'atelier',
  },
  {
    n: '03',
    year: '2025',
    title: 'Project Three',
    subtitle: 'A second placeholder, ready for you to fill in.',
    description:
      'Drop the real description here. Keep it specific — the kind of detail that makes someone want to open the case study rather than scroll past it.',
    tags: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    role: 'Lead Engineer',
    client: 'Placeholder Co.',
    accent: 'oklch(0.72 0.13 50)',
    accent2: 'oklch(0.86 0.06 80)',
    visual: 'northbound',
  },
  {
    n: '04',
    year: '2024',
    title: 'Project Four',
    subtitle: 'A third placeholder card waiting on its real story.',
    description:
      'Replace this with the real one when you\'re ready. You can swap the tags, the role, the visual mock — the layout will hold.',
    tags: ['Next.js', 'shadcn/ui', 'Tailwind', 'Vercel'],
    role: 'Engineer & Designer',
    client: 'Placeholder Co.',
    accent: 'oklch(0.62 0.16 30)',
    accent2: 'oklch(0.80 0.10 50)',
    visual: 'halftone',
  },
]

export const STACK: StackItem[] = [
  { name: 'Next.js',        note: 'App router, RSC',       x: 8,  y: 22, size: 1.15 },
  { name: 'React',          note: 'The default canvas',    x: 28, y: 8,  size: 1.1  },
  { name: 'TypeScript',     note: 'End-to-end types',      x: 56, y: 16, size: 1.2  },
  { name: 'Tailwind CSS',   note: 'Design tokens',         x: 78, y: 32, size: 1.05 },
  { name: 'shadcn/ui',      note: 'Composable primitives', x: 18, y: 58, size: 1.0  },
  { name: 'Framer Motion',  note: 'Choreography',          x: 42, y: 70, size: 0.95 },
  { name: 'Node.js',        note: 'API runtime',           x: 64, y: 60, size: 1.05 },
  { name: 'MongoDB',        note: 'Document store',        x: 6,  y: 80, size: 1.0  },
  { name: 'PostgreSQL',     note: 'Source of truth',       x: 84, y: 78, size: 1.1  },
  { name: 'Vercel',         note: 'Where it lives',        x: 36, y: 36, size: 0.95 },
]
