# AGENTS.md

## 基本方針

このプロジェクトは、ももの木訪問看護ステーションサイトの既存Next.js案件です。  
昨年作成された古いプロジェクトのため、まずはページ構成・SEO・共通ルールの `md` を揃えた上で、必要な箇所だけ段階的に修正します。

参照元プロジェクト:

- `/Users/ken/site_data/xbaf8039.xbiz.jp/kounoyu.jp/public_html/kounoyu_2608`
- `/Users/ken/site_data/xbaf8039.xbiz.jp/fumotoryokan.com/public_html/fumoto_2606`

---

## 新規スレッド開始時の必須確認

- 新しいスレッドを開いたら、実装や提案の前に必ずこの `AGENTS.md` を読む
- 続けて `docs/PAGE_STRUCTURE.md` を確認し、今回の作業対象ページを把握する
- `tsx` を触る前は `docs/rules/tsx-comment-rules.md` を確認する
- `scss` を触る前は `docs/rules/scss-comment-rules.md` と `docs/rules/coding-style.md` を確認する
- 作業前に該当ルールmdの確認が済んでいない状態で、コード編集を始めない
- 不明点があっても、まずは参照順のmdを見てから判断する

---

## 技術方針

- 既存構成を大きく変えずに進める
- Next.js App Router前提
- TypeScript
- SCSS Modules / SCSS運用
- 静的書き出し前提
- 既存のPHPフォーム処理は、触る必要が出るまで維持する

---

## 作業方針

- いきなり大きく作り直さない
- まずは現状ページと導線を把握する
- トップページ、共通ナビ、問い合わせ導線を優先して確認する
- コンテンツ未確定の間は、既存文言を残しながら最小修正で進める
- 変更は最小単位で行う
- 医療・訪問看護サイトとして、誤解を招く表現や過度な訴求は避ける
- 現行情報と新しく直す情報を分けて扱う

---

## ドキュメント参照順

1. `AGENTS.md`
2. `docs/PAGE_STRUCTURE.md`
3. `docs/rules/tsx-comment-rules.md`（`tsx` 編集時）
4. `docs/rules/scss-comment-rules.md`（`scss` 編集時）
5. `docs/rules/project-setup.md`
6. `docs/rules/coding-style.md`
7. `docs/rules/nextjs-export.md`
8. `docs/rules/fetch-pattern.md`
9. `docs/rules/ui-interactions.md`
10. `docs/rules/checklist.md`
11. `docs/seo/SEO_SETUP.md`
12. `docs/seo/SEO_AUDIT_REQUEST_TEMPLATE.md`
13. `docs/seo/SEO_FIX_TRACKER_TEMPLATE.md`

---

## 注意点

- コンテンツが未確定でも、SEOの枠は先に用意する
- `title`、`description`、`canonical`、OGPの設計は初期段階で置いておく
- 依頼がない限り、大きな設計変更や全面リファクタはしない
- 既存ページを消す・統合する前に、現在の導線を確認する
- `ももの木訪問看護ステーション`、対象エリア、サービス名の表記を統一する
- 医療・介護系の表現は断定しすぎず、利用者と家族に伝わる自然な言葉を優先する
