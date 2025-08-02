/* =======================================
 *ももの木訪問看護ステーション Layout
 * URL:src/app/layout.tsx
 * Created: 2025-07-14
 * Last updated: 2025-07-14
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Zen_Old_Mincho } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const zenOldMincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});
// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE ||
        'https://www.shirakawa-chuo-cc.com/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
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
  }),
  title: 'ももの木訪問看護ステーション',
  description: isRealProduction
    ? '芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
