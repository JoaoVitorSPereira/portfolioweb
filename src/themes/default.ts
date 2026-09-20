const theme = {
  colors: {
    primary1: '#f2f5f7',
    background1: '#181818',
    accent1: '#fec576',
    button: '#003E6B',
    background2: '#2c304d)',
    accent: '#ff8a24',
    accentSoft: 'rgba(255, 138, 36, 0.14)',
    surface: 'rgba(255, 255, 255, 0.05)',
    surfaceBorder: 'rgba(255, 255, 255, 0.08)',
    muted: 'rgba(255, 255, 255, 0.62)',
    positive: '#3ddc97',
  },
  // Container-query conditions: the layout responds to the phone screen width,
  // not the browser window. Only `phone` is a media query (frame vs. fullscreen).
  breakpoints: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    mdlg: '(max-width: 1023px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    phone: '(max-width: 500px)',
  },
};

export type Theme = typeof theme;

export default theme;
