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
const socialImageUrl = `${siteUrl}/og-v3.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Airplay Speaker 3.0 — Let the room become the album",
  description:
    "A cinematic AirPlay music receiver for Android TV with lossless ALAC audio, feathered full-screen motion artwork, synchronized lyrics, and optional on-device vocal separation.",
  openGraph: {
    title: "Airplay Speaker 3.0",
    description: "Let the room become the album.",
    type: "website",
    locale: "en_US",
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: "Airplay Speaker 3.0 in a cinematic listening room" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airplay Speaker 3.0",
    description: "Let the room become the album.",
    images: [socialImageUrl],
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
