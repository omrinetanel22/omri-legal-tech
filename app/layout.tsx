import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/david-libre/400.css";
import "@fontsource/david-libre/500.css";
import "@fontsource/david-libre/700.css";
import "./globals.css";

const shareTitle = "עומרי נתנאל | לא יודעים איך לטפל בעניין?";
const shareDescription =
  "לא יודעים איך לטפל בעניין? שלחו לי ואכוון אתכם. משפטן ואיש מחשבים שאינו עורך דין, המשלב ידע משפטי ויכולות מחשוב לסיוע במסמכים ובמערכות מקוונות. שירותים משפטיים באמצעות עורך דין בהתקשרות נפרדת.";
const shareImage =
  "https://omrinetanel22.github.io/omri-legal-tech/og-card-20261013.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://omrinetanel22.github.io/omri-legal-tech/",
  ),
  title: shareTitle,
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: "https://omrinetanel22.github.io/omri-legal-tech/",
    siteName: "עומרי נתנאל – משפטנות ומחשוב",
    type: "website",
    locale: "he_IL",
    images: [
      {
        url: shareImage,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "לא יודעים איך לטפל בעניין? שלחו לי ואכוון אתכם. עומרי נתנאל – משפטנות ומחשוב",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
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
