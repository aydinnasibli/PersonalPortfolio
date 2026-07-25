import type { CSSProperties, ReactNode } from 'react'

/**
 * Shared anatomy for the project mocks.
 *
 * Every mock is a stylised drawing of a real interface, not a screenshot. They
 * all share one composition — a wide canvas on the left, a narrow reading panel
 * on the right — which is what makes eight different products read as one set.
 *
 * Mocks are laid out on a fixed 420px-wide canvas and scaled to the frame by
 * ScrollProgress, so these pixel sizes are stable at every viewport. The whole
 * subtree is aria-hidden by ProjectVisuals, so nothing here needs an
 * accessible name.
 */

export interface MockProps {
  accent: string
}

/** Micro uppercase mono label — the recurring editorial tick of the design. */
export function Label({
  children,
  size = 8.5,
  color = 'var(--muted)',
  style,
}: {
  children: ReactNode
  size?: number
  color?: string
  style?: CSSProperties
}) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: size,
        letterSpacing: '.2em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

/** Faint ruled-paper texture, masked to fade at the edges. */
export function RuledPaper({ step = 22 }: { step?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: `repeating-linear-gradient(180deg, transparent 0 ${step}px, rgba(20,19,15,0.045) ${step}px ${step + 1}px)`,
        maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
      }}
    />
  )
}

/** Canvas on the left, reading panel on the right. */
export function TwoZone({
  canvas,
  panel,
  canvasBg = '#FCFBF9',
  panelBg = 'linear-gradient(180deg, #FCFBF9 0%, #f7f3ec 100%)',
  divider = 'var(--line)',
}: {
  canvas: ReactNode
  panel: ReactNode
  canvasBg?: string
  panelBg?: string
  divider?: string
}) {
  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1.55fr 1fr',
        overflow: 'hidden',
        minWidth: 0,
        background: canvasBg,
      }}
    >
      <div
        style={{
          position: 'relative',
          borderRight: `1px solid ${divider}`,
          overflow: 'hidden',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {canvas}
      </div>
      <div
        style={{
          position: 'relative',
          padding: '15px 13px 12px',
          display: 'flex',
          flexDirection: 'column',
          background: panelBg,
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        {panel}
      </div>
    </div>
  )
}

/**
 * List container that expands to fill whatever height the zone has left and
 * spreads its rows evenly. The stage height varies with the frame's aspect
 * ratio, so lists that only pin to the top leave an obvious void beneath them.
 */
export function FillStack({
  children,
  padding = '10px 16px',
  spread = 'space-evenly',
}: {
  children: ReactNode
  padding?: string
  spread?: 'space-evenly' | 'center' | 'space-between'
}) {
  return (
    <div
      style={{
        position: 'relative',
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: spread,
        gap: 8,
        padding,
      }}
    >
      {children}
    </div>
  )
}

/** The short-rule + label pair that heads each reading panel. */
export function PanelHead({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
      <span style={{ width: 13, height: 1, background: 'var(--ink)', flexShrink: 0 }} />
      <Label size={8}>{children}</Label>
    </div>
  )
}

/** Closing metadata row, pinned to the base of a panel. */
export function FootRow({
  left,
  right,
  accent,
}: {
  left: ReactNode
  right: ReactNode
  accent?: string
}) {
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 9,
        borderTop: '1px solid var(--line)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
      }}
    >
      <Label
        size={7.5}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minWidth: 0,
        }}
      >
        {left}
      </Label>
      <Label
        size={7.5}
        color={accent ?? 'var(--ink)'}
        style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
      >
        {right}
      </Label>
    </div>
  )
}

/** A named row with a trailing value and an optional progress track. */
export function DataRow({
  name,
  value,
  progress,
  accent,
  active = false,
}: {
  name: string
  value: string
  progress?: number
  accent: string
  active?: boolean
}) {
  return (
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 10.5,
            letterSpacing: '-0.01em',
            color: active ? 'var(--ink)' : 'var(--ink-2)',
            fontWeight: active ? 500 : 400,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minWidth: 0,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 8.5,
            letterSpacing: '.08em',
            color: active ? accent : 'var(--muted)',
            flexShrink: 0,
          }}
        >
          {value}
        </span>
      </div>
      {progress !== undefined && (
        <div
          style={{
            marginTop: 5,
            height: 2.5,
            borderRadius: 999,
            background: 'var(--line-2)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${Math.round(progress * 100)}%`,
              height: '100%',
              background: active ? accent : 'var(--ink-2)',
              opacity: active ? 1 : 0.45,
            }}
          />
        </div>
      )}
    </div>
  )
}

/** Big editorial figure used as the focal point of a reading panel. */
export function Figure({
  value,
  suffix,
  caption,
  accent,
}: {
  value: string
  suffix?: string
  caption: string
  accent: string
}) {
  return (
    <div style={{ flexShrink: 0 }}>
      <div
        className="h-display"
        style={{
          fontSize: 34,
          lineHeight: 0.9,
          letterSpacing: '-0.045em',
          color: 'var(--ink)',
          marginTop: 9,
        }}
      >
        {value}
        {suffix && <span style={{ fontSize: 15, color: accent }}>{suffix}</span>}
      </div>
      <Label size={7.5} style={{ display: 'block', marginTop: 6, letterSpacing: '.14em' }}>
        {caption}
      </Label>
    </div>
  )
}
