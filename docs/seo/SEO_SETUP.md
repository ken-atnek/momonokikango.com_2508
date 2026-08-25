# SEO初期設定メモ

このファイルは、ももの木訪問看護ステーションサイトのSEO設計メモです。  
古い既存案件のため、まずは必要項目の枠を整理します。

---

## サイト基本情報

- サイト名: ももの木訪問看護ステーション
- 事業所名: ももの木訪問看護ステーション
- 現行サイトURL: `https://momonokikango.com/`
- ドメイン: `momonokikango.com`
- デモURL: `https://demo-momonokikango.tuna-pic.co.jp/`
- 公開URL: `https://momonokikango.com/`
- 公開ステータス:
- 案件種別: 既存サイト調整
- 現行トップ title 参考: `ももの木訪問看護ステーション`
- 現行トップ description 参考: `芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。`

---

## 確認項目

- 現行ページの `title` / `description` の確認
- 現行URL一覧の取得
- 引き継ぐURLと変更するURLの整理
- リダイレクト要否の確認
- 指名検索で使われている事業所名・地域名表記の確認
- `芦北` `水俣` `津奈木` `訪問看護` など主要キーワードの扱い確認
- 医療・介護系表現として不適切な断定や過度な訴求がないか確認

---

## ページ別メタ情報

### トップページ `/`

- title: `ももの木訪問看護ステーション`
- description: `芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。`
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 提供サービス `/service/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### お知らせ `/news/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 災害・感染症対策 `/case-study/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 会社概要 `/company/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### お問い合わせ `/contact/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### プライバシーポリシー `/privacy/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

### 利用規約 `/terms/`

- title:
- description:
- canonical:
- og:title:
- og:description:
- og:image:
- robots:

---

## 初期実装で必要なSEO項目

- `metadata`
- `robots.ts`
- `sitemap.ts`
- OGP画像の管理方針
- canonical設計
- 事業所名の表記ゆれ整理
- 地域キーワード整理

---

## デモ公開 / 本番公開の切り替え方針

- デモ公開時と本番公開時で、SEO系の出力を切り替える
- 判定は `NEXT_PUBLIC_IS_REAL_PROD` を使う
- `true` の時だけ本番SEOを有効にする
- `false` の時はデモ公開扱いにして `noindex` 系にする

### 基本方針

- `src/lib/env.ts` に `isRealProduction` を用意する
- `src/app/layout.tsx` の `metadata` は `isRealProduction` で分岐する
- 本番時だけ `metadataBase` / `openGraph` / `twitter` を有効にする
- デモ時は `robots: 'noindex, nofollow'` を返す
- `src/app/robots.ts` はデモ時に `disallow: '/'` を返す
- `src/app/sitemap.ts` はデモ時に空配列を返す

### 想定ファイル

- `src/lib/env.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### `src/lib/env.ts` 例

```ts
export const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';
```

### `layout.tsx` 側の考え方

- `metadataBase` は本番時だけ設定する
- OGP URL や canonical の基準URLも本番時だけ有効にする
- デモURLを検索エンジンに正規URLとして認識させない

### 注意点

- `NEXT_PUBLIC_METADATA_BASE` は `build:demo` / `build:prod` で切り替える
  - demo: `https://demo-momonokikango.tuna-pic.co.jp/`
  - prod: `https://momonokikango.com/`
- `NEXT_PUBLIC_METADATA_BASE` は末尾 `/` の有無に依存しないように扱う
- `robots.ts` と `sitemap.ts` のURL生成は文字列連結ではなく `new URL()` を使う
- デモ時に `metadataBase` を常時出すと、意図しないURLで canonical / OGP が生成されやすい
- `robots.ts` と `sitemap.ts` は `force-static` を付けた上で、本番判定を合わせる
- GA4 などの計測タグは本番時だけ読み込む
- この切り替えは他案件でも再利用する前提で残す

---

## 注意点

- 仮公開中は `noindex` を検討
- 本番URL確定前に canonical を仮置きしすぎない
- title / description は後から差し替え前提でOK
- 地域名やサービス名を含む主要キーワードは早めに整理する
- 医療・介護に関わる内容は、表現の正確性を優先する
