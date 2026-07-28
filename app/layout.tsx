import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = siteBasePath
  ? `https://l3kza08.github.io${siteBasePath}`
  : "https://airplay-speaker-tv-0722.worapornkummarn.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Airplay Speaker 2.0 — Music, made visible",
  description:
    "A minimal AirPlay music receiver for Android TV with lossless ALAC audio, Smart Vocal Focus, motion artwork, and a rebuilt lyric engine.",
  openGraph: {
    title: "Airplay Speaker 2.0",
    description: "Music, made visible.",
    type: "website",
    locale: "en_US",
    images: [{ url: `${siteBasePath}/og-v2.png`, width: 1200, height: 630, alt: "Airplay Speaker 2.0 on Android TV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airplay Speaker 2.0",
    description: "Music, made visible.",
    images: [`${siteBasePath}/og-v2.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
