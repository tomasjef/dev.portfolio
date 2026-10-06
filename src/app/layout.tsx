import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { profile, siteUrl } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = "Tomas Jefanovas — Development and design";

// Link previews matter more than search here: the site is shared by URL, not found.
// The preview image and icons come from opengraph-image.png and icon.png in this folder.
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
