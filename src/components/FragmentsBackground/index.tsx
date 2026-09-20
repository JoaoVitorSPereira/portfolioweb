import React from 'react';
import { Backdrop, Fragment } from './styles';

const FRAGMENT_COUNT = 110;

// Seeded so server and client render identical markup (no hydration mismatch).
let seed = 7;
const random = () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};
const rand = (min: number, max: number) => random() * (max - min) + min;

const fragments = Array.from({ length: FRAGMENT_COUNT }, () => {
  const dur = rand(18, 45);
  return {
    '--x': `${rand(0, 100).toFixed(1)}%`,
    '--y': `${rand(0, 100).toFixed(1)}%`,
    '--size': `${rand(2, 8).toFixed(0)}px`,
    '--dur': `${dur.toFixed(1)}s`,
    '--delay': `-${rand(0, dur).toFixed(1)}s`,
    '--drift': `${rand(-80, 80).toFixed(0)}px`,
    '--o': rand(0.25, 0.6).toFixed(2),
  } as React.CSSProperties;
});

// PS3 XMB-style drifting dark-blue particles over a bright blue sweep, pure CSS.
const FragmentsBackground = () => (
  <Backdrop aria-hidden>
    {fragments.map((style, i) => (
      <Fragment key={i} style={style} />
    ))}
  </Backdrop>
);

export default FragmentsBackground;
