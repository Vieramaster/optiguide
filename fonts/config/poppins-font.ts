import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    
    { path: '../poppins/poppins-400.woff2', weight: '400' },
    { path: '../poppins/poppins-500.woff2', weight: '500' },
    { path: '../poppins/poppins-600.woff2', weight: '600' },
    { path: '../poppins/poppins-700.woff2', weight: '700' },
  ],
  variable: '--font-heading',
});