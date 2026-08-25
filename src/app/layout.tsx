/* =======================================
 * ももの木訪問看護ステーション Layout
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2025-07-14
 * Last updated: 2026-08-25
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Zen_Old_Mincho } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { metadataBase, siteDescription, siteName, siteTitle } from '@/lib/env';

const zenOldMincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  ...(metadataBase
    ? {
        metadataBase,
        alternates: {
          canonical: '/',
        },
        openGraph: {
          title: siteTitle,
          description: siteDescription,
          url: metadataBase.toString(),
          siteName,
          locale: 'ja_JP',
          type: 'website',
          images: [
            {
              url: '/ogp.png',
              width: 1200,
              height: 630,
              alt: 'ももの木訪問看護ステーションのOGP画像',
            },
          ],
        },
      }
    : {
        robots: 'noindex, nofollow',
      }),
  icons: {
    icon: [
      // { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    // other: [
    //   {
    //     rel: 'icon',
    //     url: '/favicon/android-chrome-192x192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenOldMincho.className} `}>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
