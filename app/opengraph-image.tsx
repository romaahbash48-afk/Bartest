import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bar Henrietta - Berlin Wedding';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0B0D',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 72, color: '#F5F0E6', marginBottom: 16 }}>
          Bar Henrietta
        </div>
        <div style={{ fontSize: 28, color: '#B8B0A3' }}>
          Natural wine • Beer • Cocktails
        </div>
        <div style={{ fontSize: 24, color: '#B8774E', marginTop: 24 }}>
          Wedding, Berlin
        </div>
      </div>
    ),
    { ...size }
  );
}
