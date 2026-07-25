import type { Project, ProjectVisual } from '@/types'
import type { MockProps } from './mocks/primitives'
import AgencyMock from './mocks/AgencyMock'
import ConsultancyMock from './mocks/ConsultancyMock'
import CurriculumMock from './mocks/CurriculumMock'
import DatavizMock from './mocks/DatavizMock'
import DiagnosticMock from './mocks/DiagnosticMock'
import GalleryMock from './mocks/GalleryMock'
import ManuscriptMock from './mocks/ManuscriptMock'
import SchoolMock from './mocks/SchoolMock'

const MOCKS: Record<ProjectVisual, (props: MockProps) => React.ReactElement> = {
  agency: AgencyMock,
  consultancy: ConsultancyMock,
  curriculum: CurriculumMock,
  dataviz: DatavizMock,
  diagnostic: DiagnosticMock,
  gallery: GalleryMock,
  manuscript: ManuscriptMock,
  school: SchoolMock,
}

/**
 * The framed mock for a project row.
 *
 * Entirely decorative: it is a drawing of the product, and every meaningful
 * fact it depicts is also stated in the adjacent text column. So the whole
 * subtree is aria-hidden — otherwise a screen reader reads out invented
 * interface chrome as if it were content.
 *
 * Scroll parallax is driven by the `--p` custom property that ProjectRow
 * writes (0 → 1), so nothing here re-renders on scroll.
 */
export default function ProjectVisuals({ project }: { project: Project }) {
  const { accent, accent2, visual, host } = project
  const Mock = MOCKS[visual]

  return (
    <div
      aria-hidden="true"
      className="pv"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${accent2} 0%, var(--paper) 60%)`,
      }}
    >
      {/* Blueprint grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(20,19,15,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,19,15,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Accent bloom */}
      <div
        className="pv-bloom"
        style={{
          position: 'absolute',
          width: 380,
          height: 380,
          borderRadius: 999,
          background: `radial-gradient(circle, ${accent} 0%, transparent 65%)`,
          filter: 'blur(40px)',
          opacity: 0.55,
          top: -40,
          right: -60,
        }}
      />

      {/* Mock browser window */}
      <div className="pv-window">
        <div className="pv-titlebar">
          <span className="pv-dot" />
          <span className="pv-dot" />
          <span className="pv-dot" />
          <span className="pv-host">{host}</span>
        </div>
        <div className="pv-viewport">
          {/* Fixed design canvas, scaled to the frame by ScrollProgress. */}
          <div className="pv-stage">
            <Mock accent={accent} />
          </div>
        </div>
      </div>
    </div>
  )
}
