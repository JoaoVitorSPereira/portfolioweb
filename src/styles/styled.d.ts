import 'styled-components';

import type { Theme } from '../themes/default';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
