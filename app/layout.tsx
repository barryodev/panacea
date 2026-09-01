import type { Metadata } from "next";
import { googleFontsHref } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World — 50 Languages",
  description:
    'A word cloud of "Hello World" in 50 languages, each set in a typeface that echoes its script or culture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={googleFontsHref()} />
      </head>
      <body>{children}</body>
    </html>
  );
}
