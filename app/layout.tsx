import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "wexel | AI Automation & Infrastructure",
  description: "Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.",
  metadataBase: new URL("https://wexel.ai"),
  openGraph: {
    title: "wexel | AI Automation & Infrastructure",
    description: "Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.",
    siteName: "wexel.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wexel | AI Automation & Infrastructure",
    description: "Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className={`${GeistSans.className} antialiased relative overflow-x-hidden`}>
        {/* Luminous Background Effect */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_70%)] rounded-full animate-pulse pointer-events-none z-0" />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
