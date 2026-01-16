import type { Metadata } from "next";
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
  title: "Flight Search Engine | Find & Compare Flights",
  description: "Modern flight search application with real-time filtering, dynamic price trends, and instant results. Search flights, compare prices, and find the best deals.",
  keywords: ["flights", "flight search", "cheap flights", "airline tickets", "travel", "flight comparison"],
  authors: [{ name: "Georges" }],
  openGraph: {
    title: "Flight Search Engine",
    description: "Find and compare flights with real-time filtering and price trends",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Search Engine",
    description: "Find and compare flights with real-time filtering and price trends",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
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
