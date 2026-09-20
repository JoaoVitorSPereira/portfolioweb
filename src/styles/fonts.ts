import localFont from 'next/font/local';

export const madeMirage = localFont({
  src: [
    {
      path: '../../public/fonts/MADE_Mirage_Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MADE_Mirage_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MADE_Mirage_Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MADE_Mirage_Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-made-mirage',
  display: 'swap',
});
