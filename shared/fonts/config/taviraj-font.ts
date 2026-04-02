import localFont from 'next/font/local';


export const taviraj = localFont({
src: [
    { path: '../taviraj/taviraj-300.woff2', weight: '300', style: 'normal' },
    { path: '../taviraj/taviraj-300-italic.woff2', weight: '300', style: 'italic' },

    { path: '../taviraj/taviraj-400.woff2', weight: '400', style: 'normal' }, // Regular
    { path: '../taviraj/taviraj-400-italic.woff2', weight: '400', style: 'italic' },

    { path: '../taviraj/taviraj-500.woff2', weight: '500', style: 'normal' },
    { path: '../taviraj/taviraj-500-italic.woff2', weight: '500', style: 'italic' },

    { path: '../taviraj/taviraj-600.woff2', weight: '600', style: 'normal' }, // SemiBold
    { path: '../taviraj/taviraj-600-italic.woff2', weight: '600', style: 'italic' },

    { path: '../taviraj/taviraj-700.woff2', weight: '700', style: 'normal' }, // Bold
    { path: '../taviraj/taviraj-700-italic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-subHeading',
});