export interface Project {
  n: string
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  role: string
  client: string
  accent: string
  accent2: string
  live?: string
  visual: 'manuscript' | 'lumen' | 'atelier' | 'northbound' | 'halftone'
}

export interface StackItem {
  name: string
  note: string
  x: number
  y: number
  size: number
}
