import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airplay-speaker-tv-0722.sites.openai.com"),
  title: "Airplay Speaker — AirPlay Receiver for Android TV",
  description:
    "เปลี่ยน Android TV ให้เป็นลำโพง AirPlay พร้อมเสียงระดับ CD Quality ปกเคลื่อนไหว และเนื้อเพลงแบบคำต่อคำ",
  openGraph: {
    title: "Airplay Speaker",
    description: "ทุกเพลง เต็มพื้นที่บนทีวี",
    type: "website",
    locale: "th_TH",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Airplay Speaker บน Android TV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airplay Speaker",
    description: "ทุกเพลง เต็มพื้นที่บนทีวี",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
