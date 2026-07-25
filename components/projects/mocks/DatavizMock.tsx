import { FootRow, Label, type MockProps, PanelHead, RuledPaper, TwoZone } from './primitives'

/** Grouped quarterly series across three regions. */
const GROUPS = [
  { q: 'Q1', bars: [38, 26, 18] },
  { q: 'Q2', bars: [61, 40, 27] },
  { q: 'Q3', bars: [72, 51, 33] },
  { q: 'Q4', bars: [94, 63, 44] },
]

const REGIONS = ['Americas', 'EMEA', 'APAC']

export default function DatavizMock({ accent }: MockProps) {
  const series = (i: number) =>
    i === 0 ? accent : i === 1 ? `color-mix(in oklab, ${accent} 52%, var(--bg-2))` : 'var(--line-2)'

  return (
    <TwoZone
      canvas={
        <>
          <RuledPaper step={24} />

          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              padding: '13px 16px 0',
            }}
          >
            <Label size={8.5}>Revenue · by quarter</Label>
            <Label size={7.5} color={accent}>
              grouped
            </Label>
          </div>

          {/* Plot */}
          <div style={{ position: 'relative', flex: 1, padding: '10px 16px 0', minHeight: 0 }}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 10,
                paddingBottom: 14,
              }}
            >
              {GROUPS.map((g, gi) => (
                <div
                  key={g.q}
                  style={{
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 2.5,
                    position: 'relative',
                  }}
                >
                  {g.bars.map((v, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${v}%`,
                        borderRadius: '2px 2px 0 0',
                        background: series(i),
                      }}
                    />
                  ))}
                  {/* Sits just above the peak bar rather than at the top of
                      the plot, where it collided with the header. */}
                  {gi === GROUPS.length - 1 && (
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: `${g.bars[0]}%`,
                        marginBottom: 3,
                        fontFamily: 'var(--font-mono)',
                        fontSize: 7.5,
                        color: accent,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      94.2k
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                position: 'absolute',
                left: 16,
                right: 16,
                bottom: 0,
                borderTop: '1px solid var(--line-2)',
                paddingTop: 4,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {GROUPS.map((g) => (
                <Label key={g.q} size={7}>
                  {g.q}
                </Label>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              gap: 11,
              padding: '9px 16px 12px',
              flexShrink: 0,
            }}
          >
            {REGIONS.map((r, i) => (
              <span key={r} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 1.5,
                    background: series(i),
                    flexShrink: 0,
                  }}
                />
                <Label size={7}>{r}</Label>
              </span>
            ))}
          </div>
        </>
      }
      panel={
        <>
          <PanelHead>Prompt</PanelHead>

          <div
            className="h-serif"
            style={{
              marginTop: 10,
              fontSize: 12.5,
              lineHeight: 1.35,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;Revenue by quarter, grouped — colour by region.&rdquo;
          </div>

          <div style={{ height: 1, background: 'var(--line)', margin: '12px 0 10px' }} />

          <Label size={7.5} style={{ display: 'block', marginBottom: 7 }}>
            Refined
          </Label>
          <div style={{ display: 'grid', gap: 6 }}>
            {['Sort descending', 'Label the peak', 'Brand palette'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 999,
                    display: 'grid',
                    placeItems: 'center',
                    background: accent,
                    color: 'var(--paper)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 6,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: 9.5,
                    color: 'var(--ink-2)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {step}
                </span>
                {i === 2 && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      width: 5,
                      height: 11,
                      background: accent,
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {['SVG', 'PNG', 'PDF', 'CSV'].map((f, i) => (
              <span
                key={f}
                style={{
                  padding: '2.5px 6px',
                  borderRadius: 3,
                  border: `1px solid ${i === 0 ? accent : 'var(--line-2)'}`,
                  background: i === 0 ? `color-mix(in oklab, ${accent} 12%, transparent)` : 'transparent',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 7,
                  letterSpacing: '.1em',
                  color: i === 0 ? accent : 'var(--muted)',
                }}
              >
                {f}
              </span>
            ))}
          </div>

          <FootRow left="Sheets · live" right="Export →" accent={accent} />
        </>
      }
    />
  )
}
