## チェックリスト

作業開始前に確認:

- [ ] `next.config.ts` に `output: 'export'` がある
- [ ] page.tsx の params に `Promise` 型を使っていない
- [ ] `generateMetadata` / `generateStaticParams` が同期関数
- [ ] `force-dynamic` を使っていない
- [ ] マスターJSONの型は `src/types/master.ts` からインポートしている
- [ ] コンテンツJSON取得は生 `fetch` + `cache: 'no-store'` + `isError` パターン

## 確認コマンドの使い分け

- 軽微なTSX / SCSS修正では、毎回 `npm run build` まで実行しない
- TSX / TSの構文確認は基本 `npm run lint` までにする
- SCSS単体修正は、対象ファイルへの `stylelint` 単体確認を優先する
- `npm run build` は、ページ追加、ルーティング変更、metadata変更、静的生成に影響する変更、または明示依頼がある時に実行する
