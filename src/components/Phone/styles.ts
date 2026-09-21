import styled, { css, keyframes } from 'styled-components';

import { glass } from '@/styles/glass';

const load = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.45; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
`;

export const Stage = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0;

  @media ${({ theme }) => theme.breakpoints.phone} {
    display: block;
    padding: 0;
  }
`;

const sideButton = css`
  content: '';
  position: absolute;
  width: 0.3rem;
  border-radius: 0.2rem;
  background: #2a2a30;
`;

export const Frame = styled.div`
  position: relative;
  width: 39rem;
  height: min(84.4rem, calc(100dvh - 4.8rem));
  border-radius: 5.5rem;
  box-shadow:
    0 0 0 1px #5b5b63,
    0 0 0 0.9rem #0b0b0e,
    0 0 0 1.1rem #2a2a30,
    0 4rem 12rem rgba(0, 0, 0, 0.65);

  &::before {
    ${sideButton}
    left: -1.4rem;
    top: 16rem;
    height: 6rem;
    box-shadow: 0 8rem #2a2a30;
  }
  &::after {
    ${sideButton}
    right: -1.4rem;
    top: 20rem;
    height: 9rem;
  }

  @media ${({ theme }) => theme.breakpoints.phone} {
    width: 100%;
    height: 100dvh;
    border-radius: 0;
    box-shadow: none;

    &::before,
    &::after {
      display: none;
    }
  }
`;

export const Screen = styled.div`
  --top: 5.4rem;
  --bottom: 3.4rem;
  position: absolute;
  inset: 0;
  overflow: hidden;
  isolation: isolate;
  border-radius: inherit;
  background: #1f6fff;
  -webkit-tap-highlight-color: transparent;

  @media ${({ theme }) => theme.breakpoints.phone} {
    --top: env(safe-area-inset-top, 0px);
    --bottom: max(env(safe-area-inset-bottom, 0px), 2.4rem);
    background: transparent;
  }
`;

export const Island = styled.div`
  position: absolute;
  top: 1.1rem;
  left: 50%;
  z-index: 60;
  width: 12rem;
  height: 3.4rem;
  margin-left: -6rem;
  border-radius: 2rem;
  background: #000;
  pointer-events: none;

  @media ${({ theme }) => theme.breakpoints.phone} {
    display: none;
  }
`;

export const StatusBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  height: var(--top);
  padding: 1.7rem 3.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  pointer-events: none;

  @media ${({ theme }) => theme.breakpoints.phone} {
    display: none;
  }
`;

export const StatusIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.2rem;
`;

export const HomeScreen = styled.div<{ $open: boolean; $ready: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  padding: calc(var(--top) + 3.2rem) 2.4rem 0;
  background:
    radial-gradient(
      120% 60% at 15% 0%,
      rgba(255, 255, 255, 0.5),
      transparent 60%
    ),
    radial-gradient(
      90% 50% at 95% 40%,
      rgba(120, 225, 255, 0.55),
      transparent 60%
    ),
    radial-gradient(
      110% 60% at 30% 100%,
      rgba(170, 215, 255, 0.55),
      transparent 60%
    );
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.55s ease,
    opacity 0.55s ease;
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};

  ${({ $open }) =>
    $open &&
    css`
      transform: scale(0.92);
      filter: blur(8px) brightness(0.7);
    `}
`;

export const AppIcon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 7.4rem;
  border: 0;
  background: none;
  color: #fff;
  font: inherit;
  font-size: 1.15rem;
  font-weight: 500;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:active > span {
    transform: scale(0.9);
    filter: brightness(0.85);
  }
`;

export const AppGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem 1.6rem;
`;

export const IconTile = styled.span<{ $background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 22%;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
  background: ${({ $background }) =>
    $background ??
    'linear-gradient(145deg, #ff8a24 0%, #ff8a24 30%, #12306d 72%, #0a1a40 100%)'};
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.55),
    inset 0 -2px 6px rgba(0, 0, 0, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
`;

export const Hint = styled.div`
  ${glass}
  position: absolute;
  left: 50%;
  bottom: calc(var(--bottom) + 1.6rem);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.8rem;
  border-radius: 999px;
  font-size: 1.3rem;
  font-weight: 500;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.85);

  &::before {
    content: '';
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: #ff8a24;
    animation: ${pulse} 1.6s ease-in-out infinite;
  }
`;

export const AppWindow = styled.div<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 10;
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  container-type: inline-size;
  border-radius: 4.5rem;
  background: #0a1a40;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  opacity: 0;
  visibility: hidden;
  transform: scale(0.16);
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease,
    border-radius 0.55s ease,
    visibility 0s 0.55s;

  ${({ $open }) =>
    $open &&
    css`
      opacity: 1;
      visibility: visible;
      transform: none;
      border-radius: 0;
      transition:
        transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.25s ease,
        border-radius 0.55s ease,
        visibility 0s;
    `}
`;

export const HomeIndicator = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 35;
  width: 17rem;
  height: 3.2rem;
  margin-left: -8.5rem;
  border: 0;
  background: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.8rem;
    width: 13.4rem;
    height: 0.5rem;
    margin-left: -6.7rem;
    border-radius: 0.3rem;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  }
`;

export const Boot = styled.div<{ $done: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  background: linear-gradient(160deg, #4aa8ff 0%, #1f6fff 55%, #63c6ff 100%);
  transition:
    opacity 0.7s ease,
    visibility 0s 0.7s;

  ${({ $done }) =>
    $done &&
    css`
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    `}
`;

export const BootMark = styled.div`
  font-size: 7.2rem;
  font-weight: 900;
  letter-spacing: -0.2rem;
  /* background-clip: text stops at the box edge; padding keeps the P's bowl from being cut */
  line-height: 1.2;
  padding: 0.4rem 0.8rem;
  background: #fff;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 2.4rem rgba(255, 255, 255, 0.6));
`;

export const BootBar = styled.div`
  width: 16rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.18);

  &::after {
    content: '';
    display: block;
    height: 100%;
    background: #fff;
    transform-origin: left;
    animation: ${load} 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;
