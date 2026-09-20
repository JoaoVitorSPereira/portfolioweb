import { css } from 'styled-components';

export const glass = css`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 8px 32px rgba(8, 40, 130, 0.25);
`;
