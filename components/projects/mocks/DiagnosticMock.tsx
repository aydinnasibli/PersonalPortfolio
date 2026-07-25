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

const SECTIONS = [
  { name: 'Reading',      value: '340', progress: 0.84 },
  { name: 'Writing',      value: '360', progress: 0.90 },
  { name: 'Algebra',      value: '290', progress: 0.72 },
  { name: 'Geometry',     value: '190', progress: 0.34, weak: true },
  { name: 'Data analysis', value: '310', progress: 0.78 },
]

/** Score trajectory across six sittings. */
const TREND = [42, 48, 46, 58, 67, 74]

export default function DiagnosticMock({ accent }: MockProps) {
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
            <Label size={8.5}>Diagnostic · 11 axes</Label>
            <Label size={7.5} color={accent}>
              SAT
            </Label>
          </div>

          <FillStack>
            {SECTIONS.map((s) => (
              <DataRow
                key={s.name}
                name={s.name}
                value={s.value}
                progress={s.progress}
                accent={accent}
                active={s.weak}
              />
            ))}
          </FillStack>

          {/* Trajectory */}
          <div
            style={{
              position: 'relative',
              padding: '0 16px 12px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: 8,
              flexShrink: 0,
            }}
          >
            <Label size={7} style={{ flexShrink: 0, paddingBottom: 2 }}>
              6 sittings
            </Label>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                gap: 3,
                height: 26,
                minWidth: 0,
              }}
            >
              {TREND.map((v, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${v}%`,
                    borderRadius: 1.5,
                    background: i === TREND.length - 1 ? accent : 'var(--line-2)',
                  }}
                />
              ))}
            </div>
            <Label size={7} color={accent} style={{ flexShrink: 0, paddingBottom: 2 }}>
              ↑ 80
            </Label>
          </div>
        </>
      }
      panel={
        <>
          <PanelHead>Today&rsquo;s plan</PanelHead>

          <Figure value="1340" caption="projected score" accent={accent} />

          <div style={{ height: 1, background: 'var(--line)', margin: '12px 0 0' }} />

          <FillStack padding="10px 0" spread="center">
            {[
              { t: 'Geometry drill', m: '12 min', on: true },
              { t: 'Video: circles', m: '8 min', on: false },
              { t: 'Mixed review', m: '10 min', on: false },
            ].map((task) => (
              <div key={task.t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                    background: task.on ? accent : 'var(--line-2)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 9.5,
                    color: task.on ? 'var(--ink)' : 'var(--ink-2)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {task.t}
                </span>
                <Label size={7} style={{ marginLeft: 'auto', flexShrink: 0 }}>
                  {task.m}
                </Label>
              </div>
            ))}
          </FillStack>

          <FootRow left="30 min · daily" right="Start →" accent={accent} />
        </>
      }
    />
  )
}
