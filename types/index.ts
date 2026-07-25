export type ProjectVisual =
  | 'dataviz'
  | 'manuscript'
  | 'diagnostic'
  | 'curriculum'
  | 'agency'
  | 'school'
  | 'consultancy'
  | 'gallery'

export interface ProjectMetric {
  /** Short figure, e.g. "19" or "98%" */
  value: string
  /** What the figure counts, e.g. "chart types" */
  label: string
}

export interface Project {
  n: string
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  role: string
  client: string
  /** Primary accent, used for highlights inside the mock. */
  accent: string
  /** Wash tone behind the mock frame. */
  accent2: string
  live: string
  /** Optional public repository. */
  repo?: string
  metrics: ProjectMetric[]
  visual: ProjectVisual
  /** Hostname shown in the mock browser chrome. */
  host: string
}

export interface StackItem {
  name: string
  note: string
  x: number
  y: number
  size: number
}

export interface SocialLink {
  label: string
  handle: string
  href: string
}
