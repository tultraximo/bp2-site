import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Blue Planet Building Panels | BP2 RIPS Structural Panels",
    template: "%s | Blue Planet Building Panels",
  },
  description:
    "Blue Planet Building Panels (BP2) manufactures RIPS — code-compliant structural concrete insulated panels for walls, roofs, and floors. Fire-resistant SCIP-class construction.",
  metadataBase: new URL("https://bp2-site.vercel.app"),
  openGraph: {
    title: "Blue Planet Building Panels | BP2 RIPS Structural Panels",
    description:
      "Code-compliant RIPS / SCIP structural panels. Fire-resistant, high-mass, airtight envelope systems for architects and engineers.",
    url: "https://bp2-site.vercel.app",
    siteName: "Blue Planet Building Panels",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer /><Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ContactButton />
      </body>
    </html>
  );
}
