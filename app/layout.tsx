import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flower Bunny — Luxury Floral Design",
  description:
    "Flower Bunny is a bespoke floral design studio by Melody Liu, creating extraordinary installations for luxury brands, fashion events, and private commissions.",
  keywords: ["luxury floral design", "floral installations", "brand activations", "fashion shows", "window displays", "Melody Liu"],
  openGraph: {
    title: "Flower Bunny — Luxury Floral Design",
    description: "Bespoke floral installations for luxury brands and extraordinary events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
