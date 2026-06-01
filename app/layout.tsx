import { Metadata } from "next";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { Header, SidebarInset, SidebarProvider } from "@/shared/layout";
import { AppSidebarClient } from "@/app/app-sidebar-client";
import { ThemeProvider } from "@/shared/providers/theme-provider";

const interHeading = Inter({subsets:['latin'],variable:'--font-heading'});

const montserrat = Montserrat({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Optiguide - Tu guía práctica en óptica",
    template: "%s | Optiguide",
  },
  description:
    "Conceptos claros, ejemplos reales y explicaciones simples para aprender más rápido el trabajo diario en óptica. Simulador interactivo de espesor de lentes.",
  keywords: [
    "óptica",
    "lentes",
    "optometría",
    "graduación",
    "espesor de lentes",
    "simulador",
    "guía óptica",
  ],
  authors: [{ name: "Optiguide" }],
  creator: "Optiguide",
  publisher: "Optiguide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://optiguide.vercel.app"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Optiguide - Tu guía práctica en óptica",
    description:
      "Conceptos claros, ejemplos reales y explicaciones simples para aprender más rápido el trabajo diario en óptica.",
    url: "https://optiguide.vercel.app",
    siteName: "Optiguide",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optiguide - Tu guía práctica en óptica",
    description:
      "Conceptos claros, ejemplos reales y explicaciones simples para aprender más rápido el trabajo diario en óptica.",
    creator: "@optiguide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={cn("font-sans", montserrat.variable, interHeading.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/**page */}
          <SidebarProvider>
            <AppSidebarClient />
            <SidebarInset>
              <Header />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
