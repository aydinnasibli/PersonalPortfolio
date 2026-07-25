import {
  FillStack,
  FootRow,
  Label,
  type MockProps,
  PanelHead,
  RuledPaper,
  TwoZone,
} from './primitives'

const TOPICS = [
  { name: 'The cell',            done: 6 },
  { name: 'Cell division',       done: 4, active: true },
  { name: 'Photosynthesis',      done: 0 },
  { name: 'Genetics',            done: 0 },
]

const STEPS = ['Animation', 'Explanation', 'Questions', 'Quiz', 'Summary', 'Cards']

export default function CurriculumMock({ accent }: MockProps) {
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
            <Label size={8.5}>Unit 02 · biology</Label>
            <Label size={7.5}>14 / 28</Label>
          </div>

          {/* Topic outline, each with its six-step loop */}
          <FillStack>
            {TOPICS.map((t) => (
              <div key={t.name} style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: '-0.01em',
                      fontWeight: t.active ? 500 : 400,
                      color: t.active ? 'var(--ink)' : 'var(--ink-2)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minWidth: 0,
                    }}
                  >
                    {t.name}
                  </span>
                  <span style={{ flex: 1, height: 1, background: 'var(--line)', minWidth: 6 }} />
                  <Label size={7} color={t.active ? accent : 'var(--muted)'}>
                    {t.done}/6
                  </Label>
                </div>
                <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
                  {STEPS.map((_, i) => (
                    <span
                      key={i}
                      style={{
                        flex: 1,
                        height: 3,
                        borderRadius: 999,
                        background:
                          i < t.done ? accent : 'var(--line-2)',
                        opacity: i < t.done ? (t.active ? 1 : 0.45) : 1,
                      }}
                    />
                  ))}
                </div>
              </div>
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
            <Label size={7}>{STEPS[0]} → {STEPS[STEPS.length - 1]}</Label>
            <Label size={7} color={accent}>
              spaced repetition
            </Label>
          </div>
        </>
      }
      panel={
        <>
          <PanelHead>Due today</PanelHead>

          <div
            className="h-serif"
            style={{
              marginTop: 10,
              fontSize: 13,
              lineHeight: 1.35,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            At which stage of mitosis do sister chromatids separate?
          </div>

          <div style={{ height: 1, background: 'var(--line)', margin: '12px 0 10px' }} />

          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { k: 'Again', d: '10m' },
              { k: 'Hard', d: '1d' },
              { k: 'Good', d: '4d', on: true },
            ].map((b) => (
              <div
                key={b.k}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '5px 2px',
                  borderRadius: 4,
                  border: `1px solid ${b.on ? accent : 'var(--line-2)'}`,
                  background: b.on ? `color-mix(in oklab, ${accent} 12%, transparent)` : 'transparent',
                  minWidth: 0,
                }}
              >
                <Label size={6.5} color={b.on ? accent : 'var(--muted)'} style={{ display: 'block' }}>
                  {b.k}
                </Label>
                <Label
                  size={6.5}
                  color={b.on ? accent : 'var(--ink-2)'}
                  style={{ display: 'block', marginTop: 2, letterSpacing: '.08em' }}
                >
                  {b.d}
                </Label>
              </div>
            ))}
          </div>

          <Label size={7.5} style={{ display: 'block', marginTop: 12, marginBottom: 5 }}>
            This week
          </Label>
          <div style={{ display: 'flex', gap: 2.5 }}>
            {[1, 1, 1, 1, 1, 0, 0].map((on, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 14,
                  borderRadius: 1.5,
                  background: on ? accent : 'var(--line-2)',
                  opacity: on ? 0.4 + i * 0.12 : 1,
                }}
              />
            ))}
          </div>

          <FootRow left="SM-2 · 42 cards" right="Review →" accent={accent} />
        </>
      }
    />
  )
}
