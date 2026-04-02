import localFont from 'next/font/local';

export const nunitoSans = localFont({
    src: [
        { path: '../nunito-sans/nunito-sans-200.woff2', weight: '200', style: 'normal' },
        { path: '../nunito-sans/nunito-sans-200-italic.woff2', weight: '200', style: 'italic' },

        { path: '../nunito-sans/nunito-sans-300.woff2', weight: '300', style: 'normal' },
        { path: '../nunito-sans/nunito-sans-300-italic.woff2', weight: '300', style: 'italic' },

        { path: '../nunito-sans/nunito-sans-400.woff2', weight: '400', style: 'normal' }, // Regular
        { path: '../nunito-sans/nunito-sans-400-italic.woff2', weight: '400', style: 'italic' },

        { path: '../nunito-sans/nunito-sans-500.woff2', weight: '500', style: 'normal' },
        { path: '../nunito-sans/nunito-sans-500-italic.woff2', weight: '500', style: 'italic' },

        { path: '../nunito-sans/nunito-sans-600.woff2', weight: '600', style: 'normal' }, // SemiBold
        { path: '../nunito-sans/nunito-sans-600-italic.woff2', weight: '600', style: 'italic' },

        { path: '../nunito-sans/nunito-sans-700.woff2', weight: '700', style: 'normal' }, // Bold
        { path: '../nunito-sans/nunito-sans-700-italic.woff2', weight: '700', style: 'italic' },

        { path: '../nunito-sans/nunito-sans-800.woff2', weight: '800', style: 'normal' },
        { path: '../nunito-sans/nunito-sans-800-italic.woff2', weight: '800', style: 'italic' },
    ],
    variable: '--font-body',
});
