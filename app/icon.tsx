import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/** Replaces the favicon.ico that used to 404 on every page load. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#14130f',
          color: '#f4f1ec',
          fontSize: 19,
          fontWeight: 600,
          letterSpacing: '-0.06em',
          borderRadius: 7,
        }}
      >
        AN
      </div>
    ),
    { ...size }
  )
}
