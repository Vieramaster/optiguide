import { Geist_Mono } from "next/font/google";
import { Geist } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
