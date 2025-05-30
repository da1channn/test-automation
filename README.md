# Test Automation Fullstack App

A fullstack application with Next.js frontend, Express backend, and PostgreSQL database.

## Tech Stack
- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Development**: Docker Compose for database

## Getting Started

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- npm

### Installation

1. Install all dependencies:
```bash
npm run install:all
```

2. Start PostgreSQL database:
```bash
npm run db:start
```

3. Run database migrations:
```bash
npm run db:migrate
```

4. Generate Prisma client:
```bash
npm run db:generate
```

### Development

Run both frontend and backend in development mode:
```bash
npm run dev
```

Or run them separately:
- Frontend only: `npm run dev:frontend` (http://localhost:3000)
- Backend only: `npm run dev:backend` (http://localhost:5000)

### Production Build

Build both applications:
```bash
npm run build
```

Run production builds:
```bash
npm run start
```

### Database Management

- Start database: `npm run db:start`
- Stop database: `npm run db:stop`
- Run migrations: `npm run db:migrate`
- Open Prisma Studio: `npm run db:studio`

## Project Structure

```
test-automation/
├── frontend/          # Next.js application
├── backend/           # Express API server
│   ├── src/          # TypeScript source files
│   └── prisma/       # Database schema and migrations
├── docker-compose.yml # PostgreSQL configuration
└── package.json      # Root package with scripts
```

## API Endpoints

- `GET /api/health` - Health check endpoint

## Environment Variables

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL` - Backend API URL

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `DATABASE_URL` - PostgreSQL connection string

# AI Test Automation & Auto-fix Tool

## 📖 プロジェクト概要
「AI Test Automation & Auto-fix Tool」は、Web アプリケーションのテスト実行から失敗検知、原因クラスタリング、AI（Anthropic Claude Code API）を用いた自動バグ修正パッチ生成・適用、Pull Request 自動生成までを一気通貫で行う開発支援ツールです。  
本プロジェクト単体で導入でき、Windows 環境上で動作します。CI/CD（GitHub Actions）や Prometheus/Grafana を活用した可観測性、リソース・コスト管理機能も備えています。

## 🎯 対象ユーザー
- Windows 上で Web アプリケーション開発を行うソフトウェアエンジニア  
- テスト自動化（pytest／Playwright）と AI を組み合わせて開発ループを高速化したい開発チーム  
- Claude Max プランを活用してコスト内で自動修正を完結させたい組織  

## 🛠 解決する課題
1. **テスト失敗の手動分析時間**  
   - 大量のテスト失敗レポートを手動で解析するコストを削減し、AI による自動クラスタリング＆原因特定で工数を大幅カット  
2. **バグ修正パッチ作成の属人化**  
   - 修正パッチ生成を自動化し、経験やスキルに依存しない一貫した品質の修正を実現  
3. **開発–テスト–デプロイのフィードバック遅延**  
   - 失敗検知→修正→PR作成→CI 再実行 のサイクルを自動化し、フィードバックループを短縮  
4. **AI 利用のコスト・リソース管理の手間**  
   - Prometheus/Grafana によるトークン使用量・残時間監視とアラートで、Claude Max プラン枠内の安定運用をサポート  

---
