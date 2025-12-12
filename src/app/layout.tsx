import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Health Experts | Tu Equipo Médico Personal con IA",
  description: "Medicina de precisión impulsada por inteligencia artificial. Tu equipo de expertos disponible 24/7 para monitorear y optimizar tu salud.",
  icons: {
    icon: "/icon.svg", 
  },
  openGraph: {
    title: "Health Experts | Tu Equipo Médico Personal con IA",
    description: "Medicina de precisión impulsada por inteligencia artificial. Tu equipo de expertos disponible 24/7.",
    url: "https://health-experts.vercel.app", // Replace with actual URL if known or keep placeholder
    siteName: "Health Experts",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Experts | Tu Equipo Médico Personal con IA",
    description: "Medicina de precisión impulsada por inteligencia artificial.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
