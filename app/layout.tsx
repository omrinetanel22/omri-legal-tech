import type { Metadata } from "next";
import "@fontsource/david-libre/400.css";
import "@fontsource/david-libre/500.css";
import "@fontsource/david-libre/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://omri-legal-tech.omri-netanel-1869.chatgpt.site",
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
        url: "/omri-legal-tech/og-card.svg",
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
    images: ["/omri-legal-tech/og-card.svg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "codex-preview": "development",
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
      <body>{children}</body>
    </html>
  );
}
