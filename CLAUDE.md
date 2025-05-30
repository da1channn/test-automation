# 技術スタック

本プロジェクトで採用する主要技術スタックを記載します。

* **フロントエンド**: Next.js (v13+) + React (18+) + Tailwind CSS
* **バックエンド API**: Express (v4+) + TypeScript (v4.5+)
* **ORM / データベース**: Prisma (v4+) + PostgreSQL
* **言語**: TypeScript を全体で統一
* **テスト**:

  * ユニットテスト: Jest
  * E2E テスト: Playwright
* **CI/CD**: GitHub Actions
* **コンテナ / インフラ**: Docker / Kubernetes（必要に応じて）
* **可観測性**: Prometheus + Grafana
* **AI クライアント**: Claude Code API (Anthropic)

---

# コード規約

一貫した品質を保つため、以下のルールをプロジェクト全体で遵守します。

* **リンター**: ESLint

  * ベース: `eslint:recommended` + `plugin:@typescript-eslint/recommended`
  * カスタムルール: セミコロン必須、no-console は警告
* **フォーマッター**: Prettier

  * 設定ファイル: `.prettierrc` にて統一（シングルクォート、セミコロンあり等）
* **型チェック**: TypeScript (`strict` モード)
* **コミットメッセージ**: Conventional Commits 準拠
* **ブランチ戦略**: GitHub Flow

  * `main` ブランチ保護: PR マージには必須レビュアー 1 名以上
* **Pull Request テンプレート**: `/.github/PULL_REQUEST_TEMPLATE.md`

---

# ディレクトリ構成規則

プロジェクトルートおよび主要モジュールのディレクトリ構造と命名規則を定義します。

```
project-root/
├─ src/                  # アプリケーションコード
│  ├─ pages/             # Next.js ページコンポーネント
│  ├─ api/               # Next.js API Routes
│  ├─ components/        # 再利用可能な UI コンポーネント
│  ├─ lib/               # ユーティリティ関数・ヘルパー
│  ├─ prisma/            # Prisma スキーマ・マイグレーション
│  └─ tests/             # 単体/E2E テスト
├─ cli/                  # ai-fix CLI 実装
├─ core/                 # メイン FSM, エンジンロジック
├─ llm_clients/          # LLM クライアントラッパー
├─ runners/              # テストランナー実装(pytest, playwright)
├─ config/               # YAML 設定ファイル
├─ scripts/              # ビルド・デプロイ補助スクリプト
├─ .eslintrc.js          # ESLint 設定
├─ .prettierrc           # Prettier 設定
├─ tsconfig.json         # TypeScript 設定
└─ README.md             # プロジェクト概要
```

* **ファイル命名**

  * コンポーネント / クラス: `PascalCase.tsx`
  * 関数 / 変数: `camelCase.ts` / `.ts`
  * 定数ファイル: `UPPER_SNAKE_CASE.ts`
* **ディレクトリ命名**: `kebab-case` を基本とし、機能単位でグルーピング
* **テストファイル**: 同階層に `*.spec.ts` または `*.test.ts` として配置
