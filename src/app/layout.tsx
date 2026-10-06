import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile, siteUrl } from "@/content";
import "./globals.css";

// Self-hosted Geist (SIL OFL, see fonts/OFL.txt), subset to Latin, punctuation
// and arrows. Google's Latin subset has no ↗, which phones then draw as an emoji.
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
});

const title = "Tomas Jefanovas — Development and design";

// Link previews matter more than search here: the site is shared by URL, not found.
// The preview image and icons come from opengraph-image.png, icon.svg and favicon.ico here.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile,
  openGraph: { title, description: profile, url: "/", siteName: "Tomas Jefanovas", type: "website" },
  twitter: { card: "summary_large_image" },
  // Keep the site out of search engines; public/_headers sends the same as X-Robots-Tag
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="font-sans font-medium text-body">{children}</body>
    </html>
  );
}
