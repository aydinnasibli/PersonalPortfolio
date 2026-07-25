import {
  DataRow,
  FillStack,
  FootRow,
  Label,
  type MockProps,
  PanelHead,
  RuledPaper,
  TwoZone,
} from './primitives'

const TRACKS = [
  { name: 'IELTS',  value: '7.5 target', progress: 0.88, active: true },
  { name: 'SAT',    value: '1400', progress: 0.71 },
  { name: 'TOEFL',  value: '100', progress: 0.64 },
  { name: 'GMAT',   value: '680', progress: 0.52 },
]

const DESTINATIONS = [
  { place: 'United States', count: '18' },
  { place: 'United Kingdom', count: '12' },
  { place: 'Canada', count: '9' },
  { place: 'Türkiye', count: '7' },
]

export default function ConsultancyMock({ accent }: MockProps) {
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
            <Label size={8.5}>Exam tracks</Label>
            {/* Bilingual toggle — the site ships in two languages. */}
            <span
              style={{
                display: 'flex',
                border: '1px solid var(--line-2)',
                borderRadius: 999,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {['EN', 'AZ'].map((l, i) => (
                <span
                  key={l}
                  style={{
                    padding: '2px 7px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 6.5,
                    letterSpacing: '.12em',
                    background: i === 0 ? accent : 'transparent',
                    color: i === 0 ? 'var(--paper)' : 'var(--muted)',
                  }}
                >
                  {l}
                </span>
              ))}
            </span>
          </div>

          <FillStack>
            {TRACKS.map((t) => (
              <DataRow
                key={t.name}
                name={t.name}
                value={t.value}
                progress={t.progress}
                accent={accent}
                active={t.active}
              />
            ))}
          </FillStack>

          <div
            style={{
              position: 'relative',
              padding: '0 16px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 8,
              flexShrink: 0,
            }}
          >
            <Label size={7}>8 tracks · 6 destinations</Label>
            <Label size={7} color={accent}>
              free consult
            </Label>
          </div>
        </>
      }
      panel={
        <>
          <PanelHead>Placements</PanelHead>

          <div
            className="h-serif"
            style={{
              marginTop: 9,
              fontSize: 25,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
            }}
          >
            46 offers<span style={{ color: accent }}>.</span>
          </div>
          <Label size={7.5} style={{ display: 'block', marginTop: 5, letterSpacing: '.14em' }}>
            2025 intake
          </Label>

          <div style={{ height: 1, background: 'var(--line)', margin: '12px 0 0' }} />

          <FillStack padding="10px 0" spread="center">
            {DESTINATIONS.map((d, i) => (
              <div
                key={d.place}
                style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 999,
                    background: i === 0 ? accent : 'var(--line-2)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 9.5,
                    color: i === 0 ? 'var(--ink)' : 'var(--ink-2)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {d.place}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 8,
                    color: i === 0 ? accent : 'var(--muted)',
                    flexShrink: 0,
                  }}
                >
                  {d.count}
                </span>
              </div>
            ))}
          </FillStack>

          <FootRow left="30 min · free" right="Book →" accent={accent} />
        </>
      }
    />
  )
}
