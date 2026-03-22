import { Geist_Mono } from "next/font/google";
import { Geist } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

import { AppSidebar } from "@/components/sidebar/components/app-sidebar";
import { Header } from "@/components/ui/layout/header";

import { SidebarInset, SidebarProvider } from "@/components/sidebar/components/sidebar";

// app/fonts.ts
import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    { path: './fonts/poppins-light.ttf', weight: '300' },
    { path: './fonts/poppins-regular.ttf', weight: '400' },
    { path: './fonts/poppins-bold.ttf', weight: '700' },
  ],
  variable: '--font-heading',
});

export const taviraj = localFont({
  src: [
    { path: './fonts/taviraj-light.ttf', weight: '300' },
    { path: './fonts/taviraj-regular.ttf', weight: '400' },
    { path: './fonts/taviraj-bold.ttf', weight: '700' },
  ],
  variable: '--font-body',
});

export const oxygen = localFont({
  src: [
    { path: './fonts/oxygen-light.ttf', weight: '300' },
    { path: './fonts/oxygen-regular.ttf', weight: '400' },
    { path: './fonts/oxygen-bold.ttf', weight: '700' },
  ],
  variable: '--font-alt',
});

export const metadata: Metadata = {
  title: {
    default: "Optiguide - Tu guía práctica en óptica",
    template: "%s | Optiguide"
  },
  description: "Conceptos claros, ejemplos reales y explicaciones simples para aprender más rápido el trabajo diario en óptica. Simulador interactivo de espesor de lentes.",
  keywords: ["óptica", "lentes", "optometría", "graduación", "espesor de lentes", "simulador", "guía óptica"],
  authors: [{ name: "Optiguide" }],
  creator: "Optiguide",
  publisher: "Optiguide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://optiguide.vercel.app'),
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: "Optiguide - Tu guía práctica en óptica",
    description: "Conceptos claros, ejemplos reales y explicaciones simples para aprender más rápido el trabajo diario en óptica.",
    url: "https://optiguide.vercel.app",
    siteName: "Optiguide",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optiguide - Tu guía práctica en óptica",
    description: "Conceptos claros, ejemplos reales y explicaciones simples para aprender más rápido el trabajo diario en óptica.",
    creator: "@optiguide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${taviraj.variable} ${oxygen.variable}`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
