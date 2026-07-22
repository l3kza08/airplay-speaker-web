import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airplay-speaker-tv-0722.worapornkummarn.chatgpt.site"),
  title: "Airplay Speaker — AirPlay Receiver for Android TV",
  description:
    "Turn your Android TV into a beautiful AirPlay speaker with CD-quality audio, motion artwork, and word-by-word lyrics.",
  openGraph: {
    title: "Airplay Speaker",
    description: "Every song deserves a bigger stage.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Airplay Speaker on Android TV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airplay Speaker",
    description: "Every song deserves a bigger stage.",
    images: ["/og.png"],
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
