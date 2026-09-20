import styled, { keyframes } from 'styled-components';

const rise = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  15%, 85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--drift), -120vh, 0);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: linear-gradient(160deg, #4aa8ff 0%, #1f6fff 55%, #63c6ff 100%);
`;

export const Fragment = styled.span`
  position: absolute;
  left: var(--x);
  bottom: -80px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(6, 28, 105, var(--o)) 30%,
    rgba(6, 28, 105, 0) 70%
  );
  will-change: transform, opacity;
  animation: ${rise} var(--dur) linear var(--delay) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.6;
    bottom: var(--y);
  }
`;
