import {
  DataRow,
  Figure,
  FillStack,
  FootRow,
  Label,
  type MockProps,
  PanelHead,
  RuledPaper,
  TwoZone,
} from './primitives'

const PROGRAMMES = [
  { name: 'Language & IELTS', value: 'A1 – C1', progress: 0.92, active: true },
  { name: 'Study abroad',     value: '50+ unis', progress: 0.74 },
  { name: 'Preschool',        value: 'Ages 3–6', progress: 0.61 },
  { name: 'Training centre',  value: 'Corporate', progress: 0.48 },
]

/** Band distribution of IELTS results, 5.5 → 8.0. */
const BANDS = [8, 17, 34, 52, 41, 22]

export default function SchoolMock({ accent }: MockProps) {
  const peak = Math.max(...BANDS)

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
            <Label size={8.5}>Programmes</Label>
            <Label size={7.5} color={accent}>
              enrolling
            </Label>
          </div>

          <FillStack>
            {PROGRAMMES.map((p) => (
              <DataRow
                key={p.name}
                name={p.name}
                value={p.value}
                progress={p.progress}
                accent={accent}
                active={p.active}
              />
            ))}
          </FillStack>

          {/* Band distribution */}
          <div style={{ position: 'relative', padding: '0 16px 12px', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 28 }}>
              {BANDS.map((v, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${(v / peak) * 100}%`,
                    borderRadius: '1.5px 1.5px 0 0',
                    background: v === peak ? accent : 'var(--line-2)',
                  }}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4,
                borderTop: '1px solid var(--line)',
                paddingTop: 4,
              }}
            >
              <Label size={7}>Band 5.5</Label>
              <Label size={7}>8.0</Label>
            </div>
          </div>
        </>
      }
      panel={
        <>
          <PanelHead>Results</PanelHead>

          <Figure value="98" suffix="%" caption="hit their target" accent={accent} />

          <div style={{ height: 1, background: 'var(--line)', margin: '12px 0 0' }} />

          <FillStack padding="10px 0" spread="center">
            {[
              { k: 'Active students', v: '750+' },
              { k: 'Satisfaction', v: '4.9 / 5' },
              { k: 'Intake', v: 'Monthly' },
            ].map((s) => (
              <div
                key={s.k}
                style={{ display: 'flex', justifyContent: 'space-between', gap: 8, minWidth: 0 }}
              >
                <Label size={7.5} style={{ letterSpacing: '.12em' }}>
                  {s.k}
                </Label>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: 'var(--ink)',
                    flexShrink: 0,
                  }}
                >
                  {s.v}
                </span>
              </div>
            ))}
          </FillStack>

          <FootRow left="Baku" right="Enrol →" accent={accent} />
        </>
      }
    />
  )
}
