import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kairoshomerealty.com"),
  title: {
    default: "Kairos Home Realty | Property & Financial Advisory",
    template: "%s | Kairos Home Realty",
  },
  description:
    "Kairos Home Realty helps you discover the right property and secure the best home loan through trusted builder and banking partnerships.",
  keywords: [
    "Kairos Home Realty",
    "property advisory",
    "home loan assistance",
    "Hyderabad real estate",
    "builder partners",
    "home financing",
  ],
  openGraph: {
    title: "Kairos Home Realty | Property & Financial Advisory",
    description:
      "Discover the right property and secure the best home loan through trusted builder and banking partnerships.",
    url: "https://www.kairoshomerealty.com",
    siteName: "Kairos Home Realty",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairos Home Realty | Property & Financial Advisory",
    description:
      "Discover the right property and secure the best home loan through trusted builder and banking partnerships.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}