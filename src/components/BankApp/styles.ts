import styled, { css, keyframes } from 'styled-components';

// Clean, flat, system-font UI: one accent, thin borders, small consistent radii.
const surface = css`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceBorder};
  border-radius: 1.6rem;
`;

export const Root = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  font-family:
    -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', 'Segoe UI',
    Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
`;

/* ---------- home header ---------- */

export const Bar = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: calc(var(--top) + 1.2rem) 2rem 0.4rem;
`;

export const Avatar = styled.div<{ $large?: boolean }>`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $large }) => ($large ? '7.2rem' : '4rem')};
  height: ${({ $large }) => ($large ? '7.2rem' : '4rem')};
  border-radius: 50%;
  font-size: ${({ $large }) => ($large ? '2.4rem' : '1.4rem')};
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.colors.accent};
`;

export const Greeting = styled.div`
  flex: 1;
  min-width: 0;

  strong {
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
  }
  span {
    display: block;
    margin-top: 0.1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.muted};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LangSwitch = styled.div`
  display: flex;
  padding: 0.2rem;
  border-radius: 0.9rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceBorder};
`;

export const LangButton = styled.button<{ $active: boolean }>`
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  font: inherit;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.muted)};
  background: ${({ $active }) =>
    $active ? 'rgba(255, 255, 255, 0.14)' : 'none'};
  transition: 0.2s ease;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 2.3rem;
  color: rgba(255, 255, 255, 0.78);
`;

/* ---------- home ---------- */

export const Hero = styled.div`
  padding: 2rem;
  border-radius: 1.8rem;
  background: #123273;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const HeroTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Eye = styled.button`
  display: flex;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
`;

export const HeroValue = styled.div`
  margin: 0.8rem 0 0.4rem;
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
`;

export const HeroRole = styled.div`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.78);
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.6rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Chip = styled.span<{ $solid?: boolean }>`
  padding: 0.4rem 0.9rem;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ $solid }) => ($solid ? '#fff' : 'rgba(255, 255, 255, 0.75)')};
  background: ${({ $solid, theme }) =>
    $solid ? theme.colors.accent : 'rgba(255, 255, 255, 0.08)'};
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const Action = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    color: #fff;
    background: rgba(255, 255, 255, 0.09);
  }
`;

export const SectionLabel = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
`;

/* ---------- menu list ---------- */

const rowIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(1.6rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

export const Menu = styled.div`
  ${surface}
  overflow: hidden;
`;

export const MenuItem = styled.button<{ $i: number; $in: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  width: 100%;
  padding: 1.3rem 1.6rem;
  border: 0;
  background: none;
  font: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: background 0.2s ease;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.surfaceBorder};
  }
  span:nth-of-type(2) {
    flex: 1;
  }
  &:active {
    background: rgba(255, 255, 255, 0.08);
  }

  ${({ $in, $i }) =>
    $in &&
    css`
      animation: ${rowIn} 0.5s cubic-bezier(0.22, 1, 0.36, 1)
        ${0.2 + $i * 0.06}s both;
    `}
`;

export const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
`;

export const Chevron = styled.span`
  display: flex;
  color: rgba(255, 255, 255, 0.35);
`;

/* ---------- screens ---------- */

export const Project = styled.article`
  ${surface}
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;

  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const Role = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Label = styled.h4`
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
`;

export const BigCard = styled.div`
  ${surface}
  padding: 1.8rem;

  h3 {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    color: #fff;
  }
  h3 svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const BigChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.4rem;

  span {
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ProfileHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 0 0.4rem;
  text-align: center;

  strong {
    margin-top: 0.8rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
  }
  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const Card = styled.div`
  ${surface}
  padding: 1.6rem;
`;

export const Statement = styled.div`
  ${surface}
  padding: 0.2rem 1.6rem;
`;

export const StatementRow = styled.div`
  display: flex;
  gap: 1.4rem;
  padding: 1.4rem 0;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.surfaceBorder};
  }
  strong {
    flex: none;
    width: 4.6rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const ContactRow = styled.a`
  ${surface}
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 1.3rem 1.5rem;
  color: #fff;

  > span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 1.1rem;
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentSoft};
  }
  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
  }
  small {
    display: block;
    margin-top: 0.1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

/* ---------- navigation ---------- */

const layer = css`
  position: absolute;
  inset: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeLayer = styled.div<{ $pushed: boolean }>`
  ${layer}
  padding-bottom: calc(var(--bottom) + 2rem);
  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s ease;

  ${({ $pushed }) =>
    $pushed &&
    css`
      transform: translateX(-26%) scale(0.95);
      filter: brightness(0.55);
    `}
`;

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1.6rem 2rem;
`;

export const ScreenLayer = styled.div<{ $open: boolean }>`
  ${layer}
  z-index: 2;
  padding-bottom: calc(var(--bottom) + 2rem);
  background: #0a1a40;
  box-shadow: -1.6rem 0 3.2rem rgba(0, 0, 0, 0.4);
  transform: translateX(100%);
  visibility: hidden;
  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s 0.5s;

  ${({ $open }) =>
    $open &&
    css`
      transform: none;
      visibility: visible;
      transition:
        transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
        visibility 0s;
    `}
`;

export const ScreenBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: calc(var(--top) + 0.8rem) 1.2rem 1rem;
  background: rgba(10, 26, 64, 0.88);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceBorder};

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 0;
  border-radius: 50%;
  color: #fff;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:active {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ScreenBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem 2rem;
`;
