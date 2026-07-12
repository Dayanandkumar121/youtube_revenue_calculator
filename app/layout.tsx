import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Creator Toolkit | Free YouTube Creator Tools",
    template: "%s | Creator Toolkit",
  },

  description:
    "Free YouTube Revenue Calculator, Keyword Research Tool, YouTube Shorts Money Calculator, Channel Analytics and SEO tools.",

  keywords: [
    "YouTube Revenue Calculator",
    "YouTube Money Calculator",
    "YouTube Income Calculator",
    "YouTube RPM Calculator",
    "YouTube CPM Calculator",
    "YouTube Shorts Money Calculator",
    "YouTube Keyword Research",
    "YouTube SEO",
    "Creator Toolkit",
  ],

  authors: [
    {
      name: "Dayanand Kumar",
    },
  ],

  creator: "Dayanand Kumar",

  publisher: "Creator Toolkit",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Creator Toolkit",
    description:
      "Free YouTube Creator Tools including Revenue Calculator, Keyword Research, Shorts Calculator and more.",
    url: "https://yourdomain.com",
    siteName: "Creator Toolkit",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Toolkit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Creator Toolkit",
    description:
      "Free YouTube Creator Tools including Revenue Calculator and Keyword Research.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Creator Toolkit",
              url: "https://yourdomain.com",
              description:
                "Professional YouTube Revenue Calculator, Channel Analytics, Creator Tools and Blog.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://yourdomain.com/channel?handle={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Creator Toolkit",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
              sameAs: [],
            }),
          }}
        />

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}