'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

// next/dynamic with ssr:false must live inside a Client Component
const ColorBends = dynamic(() => import('./ColorBends'), {
  ssr: false,
  loading: () => <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#000' }} />,
});

type Props = ComponentProps<typeof ColorBends>;

export default function ColorBendsWrapper(props: Props) {
  return <ColorBends {...props} />;
}
