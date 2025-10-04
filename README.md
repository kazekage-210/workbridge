# 🌉 WorkBridge (Prototype)

> **⚠️ 注意**: このリポジトリは **個人学習・試作用** のプロジェクトです。  
> 本番運用や商業利用を目的としたものではありません。  

WorkBridge は、Next.js と TypeScript の学習を目的に開発している **求人 × コミュニティの試作アプリ** です。  
「孤独な夜でも仲間や社会とつながれる」というコンセプトをテーマに、勉強しながら実装しています。  

---

## 🎯 学習テーマ
- Next.js 14 (App Router) の理解
- TypeScript と Tailwind CSS の実践
- フロントエンドでのフォーム処理（react-hook-form + zod）
- Supabase を使った簡単なバックエンド体験（今後予定）

---

## 🚀 現在できること（MVP）
- **ナビゲーション**: `/`, `/jobs`, `/post`
- **求人一覧**: `/jobs`  
  - モックデータから3件表示  
  - 検索 (`?q=`) で部分一致フィルタ
- **求人詳細**: `/jobs/[id]`  
  - 存在しないIDは404
- **新規投稿フォーム**: `/jobs/new`  
  - 現在は localStorage 保存 & alert 表示  
  - 将来的に Supabase へ接続予定
- **エラーページ**: `not-found.tsx`, `error.tsx`

---

## 🛠 技術スタック
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Lint/Format**: ESLint + Prettier
- **DB (予定)**: Supabase
- **Deploy (予定)**: Vercel

---

## 📦 セットアップ方法

```bash
# リポジトリをクローン
git clone https://github.com/kazekage-210/workbridge.git
cd workbridge

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
→ http://localhost:3000 で確認できます。

🗺 今後の学習ステップ
README整理 ✅

フォームを react-hook-form + zod でバリデーション強化

Supabase との接続（試験的に）

認証の導入（Auth）

shadcn/ui でUI改善

Vercelに試作デプロイ

📜 License
MIT License
※ 学習目的での利用・改変はご自由にどうぞ。