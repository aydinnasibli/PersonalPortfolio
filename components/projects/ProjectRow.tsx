import type { Project } from '@/types'
import ProjectVisuals from './ProjectVisuals'
import ScrollProgress from './ScrollProgress'

interface ProjectRowProps {
  project: Project
  flipped: boolean
}

/**
 * Server component — only the thin ScrollProgress wrapper is client-side, so
 * the mock trees are rendered on the server and never shipped as JS.
 */
export default function ProjectRow({ project, flipped }: ProjectRowProps) {
  return (
    <ScrollProgress className={`project-row${flipped ? ' is-flipped' : ''}`}>
      <div className="container project-grid">
        <div className="project-media-col">
          {/* The whole card is clickable for pointer users and drives the
              custom cursor's "view" state. Hidden from the accessibility tree
              and the tab order because the explicit link below does the same
              job — this would just be a duplicate stop. */}
          <a
            className="project-frame"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            data-cursor-label="Visit →"
            tabIndex={-1}
            aria-hidden="true"
          >
            <ProjectVisuals project={project} />
          </a>
        </div>

        <div className="project-body">
          <div className="project-meta">
            <span style={{ color: 'var(--ink)' }}>—{project.n}</span>
            <span className="project-meta-rule" />
            <span>{project.year}</span>
            <span className="project-meta-rule" />
            <span>{project.role}</span>
          </div>

          <h3 className="h-display project-title">{project.title}</h3>

          <p className="h-serif project-subtitle">{project.subtitle}</p>

          <p className="project-desc">{project.description}</p>

          <ul className="project-metrics">
            {project.metrics.map((m) => (
              <li key={m.label}>
                <span className="project-metric-value h-display">{m.value}</span>
                <span className="project-metric-label">{m.label}</span>
              </li>
            ))}
          </ul>

          <ul className="project-tags">
            {project.tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="project-actions">
            <a
              className="btn-primary"
              data-cursor="hover"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site
              <span aria-hidden="true"> →</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {project.repo && (
              <a
                className="btn-quiet"
                data-cursor="hover"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollProgress>
  )
}
