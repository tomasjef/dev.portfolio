import type { Metadata, Viewport } from "next";
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

const title = "Tomas Jefanovas · Full-stack engineer";

// Link previews matter more than search here: the site is shared by URL, not found.
// The preview image and icons come from opengraph-image.png, icon.svg and favicon.ico here.
// icon.svg is the accent dot with the buttons' light sweep; browsers that animate
// SVG favicons play it, the rest show the plain dot.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile,
  openGraph: { title, description: profile, url: "/", siteName: "Tomas Jefanovas", type: "website" },
  twitter: { card: "summary_large_image" },
  // Keep the site out of search engines; public/_headers sends the same as X-Robots-Tag
  robots: { index: false, follow: false, nocache: true },
};

// Browser chrome (the address bar on phones) matches the page in either mode
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f10" },
  ],
};

// Runs before the first paint: the visitor's saved choice from the header
// toggle, otherwise the system setting, kept in step if that changes
const themeScript = `(function(){var d=document.documentElement,q=matchMedia("(prefers-color-scheme: dark)");function set(){var t=null;try{t=localStorage.getItem("theme")}catch(e){}d.dataset.theme=t||(q.matches?"dark":"light")}set();q.addEventListener("change",set)})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The script sets data-theme on <html> before React hydrates
    <html lang="en" className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans font-medium text-body">{children}</body>
    </html>
  );
}
