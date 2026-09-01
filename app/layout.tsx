import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/david-libre/400.css";
import "@fontsource/david-libre/500.css";
import "@fontsource/david-libre/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://omrinetanel22.github.io/omri-legal-tech/",
  ),
  title: "עומרי נתנאל | משפטנות ומחשוב",
  description:
    "סיוע אישי ומקצועי במסמכים, במערכות מקוונות, ב־Word, ב־PDF ובכלים דיגיטליים.",
  openGraph: {
    title: "עומרי נתנאל – משפטנות ומחשוב",
    description:
      "מסתבכים עם מסמכים, מערכות מקוונות או קבצים? יש מי שיעזור.",
    type: "website",
    locale: "he_IL",
    images: [
      {
        url: "og-card.svg",
        width: 1200,
        height: 630,
        alt: "עומרי נתנאל – משפטנות ומחשוב",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "עומרי נתנאל – משפטנות ומחשוב",
    description:
      "מסתבכים עם מסמכים, מערכות מקוונות או קבצים? יש מי שיעזור.",
    images: ["og-card.svg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "site-owner": "עומרי נתנאל",
  },
  icons: {
    icon: "/omri-legal-tech/favicon.svg",
    shortcut: "/omri-legal-tech/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V69WVDVRPP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V69WVDVRPP');
          `}
        </Script>
      </body>
    </html>
  );
}
