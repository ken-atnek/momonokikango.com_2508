export const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

export const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://momonokikango.com/')
  : null;

export const siteName = 'ももの木訪問看護ステーション';
export const siteTitle = 'ももの木訪問看護ステーション';
export const siteDescription =
  '芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。';
