import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionConfig } from "framer-motion";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#F8F5F2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://frostandflour.com"),
  title: "Frost & Flour | Premium Homemade Cakes in Gadag",
  description: "Premium handcrafted homemade cakes designed with love for birthdays, anniversaries, weddings, and every special moment. Pickup only in Gadag, Karnataka.",
  keywords: ["Homemade Cakes Gadag", "Birthday Cakes Gadag", "Custom Cakes Gadag", "Bento Cakes Gadag", "Bakery Gadag"],
  openGraph: {
    title: "Frost & Flour | Premium Homemade Cakes",
    description: "Premium handcrafted homemade cakes designed with love.",
    url: "https://frostandflour.com",
    siteName: "Frost & Flour",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Frost & Flour Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Frost & Flour",
    image: "https://frostandflour.com/icon.png",
    description: "Premium handcrafted homemade cakes designed with love.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gadag",
      addressRegion: "Karnataka",
      addressCountry: "IN"
    },
    url: "https://frostandflour.com",
    telephone: "+919999999999",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Birthday Cakes"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Custom Cakes"
        }
      }
    ],
    sameAs: [
      "https://instagram.com/frostandflour.luv"
    ],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://wa.me/919999999999",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} font-sans h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileCTA />
          </SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
