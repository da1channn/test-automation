# プロジェクトタスクリスト

## タスク一覧

| ID | Task Name | Start Conditions | Completion Conditions |
|---|---|---|---|
| T-001 | Set up PostgreSQL database with Docker | Docker and Docker Compose installed | Database container running, accessible on port 5432 |
| T-002 | Create Prisma schema and migrations | Database running, Prisma installed | All models created, migrations applied successfully |
| T-003 | Implement User authentication model | Prisma schema defined, database connected | User model with email/password, CRUD operations working |
| T-004 | Create Plan subscription system | User model exists, database connected | Plan model linked to Users, subscription logic implemented |
| T-005 | Build test report collection endpoint | Backend API running, TypeScript configured | POST /api/reports endpoint accepting pytest/playwright JSON |
| T-006 | Implement failure detection service | Test reports stored in database | Service extracts failures from reports, creates Failure records |
| T-007 | Create BM25+TF-IDF clustering engine | Failure records exist in database | Failures grouped by similar root causes into clusters |
| T-008 | Build Claude API prompt generator | Failure clusters created, API key configured | Generates context-aware prompts for each cluster |
| T-009 | Implement patch generation service | Claude API integrated, prompts ready | Receives diff/full-patch from API, stores in database |
| T-010 | Create git patch application system | Patches stored in database | Applies patches using git apply, runs formatters |
| T-011 | Build PR auto-generation feature | Patches applied successfully, GitHub token set | Creates branch, commits changes, opens PR with comments |
| T-012 | Set up Prometheus metrics exporter | Backend API running | Exports token usage, success rates to Prometheus |
| T-013 | Create Grafana monitoring dashboard | Prometheus running, metrics exported | Dashboard visualizing usage, alerts configured |
| T-014 | Implement ai-fix CLI tool | Core services implemented | CLI with options for report path, model, dry-run, debug |
| T-015 | Create config management system | Project structure defined | Loads config from YAML and environment variables |
| T-016 | Build Express API health endpoint | Express server configured | GET /api/health returns server status |
| T-017 | Set up Next.js frontend structure | Node.js installed, npm configured | Pages, components, API routes directories created |
| T-018 | Implement primary color scheme | Tailwind CSS configured | Primary (#1E3A8A), secondary (#3B82F6) colors applied |
| T-019 | Create responsive grid layout | CSS framework set up | 12-column grid with mobile/tablet/desktop breakpoints |
| T-020 | Build typography system | Font files loaded | Font sizes (16px base) and line heights configured |
| T-021 | Implement test runner integration | pytest/Playwright installed | Executes tests and generates JSON reports |
| T-022 | Create usage tracking service | Database models ready | Records prompt/completion tokens per user |
| T-023 | Build cost management alerts | Usage metrics tracked, thresholds defined | Sends alerts when token limit approaching |
| T-024 | Set up ESLint configuration | TypeScript installed | ESLint with recommended rules, semicolon required |
| T-025 | Configure Prettier formatting | Project initialized | Code formatting with single quotes, semicolons |
| T-026 | Implement TypeScript strict mode | TypeScript installed | tsconfig.json with strict mode enabled |
| T-027 | Create PR comment automation | GitHub API integrated | Adds modification reasons to PR descriptions |
| T-028 | Build screenshot capture for failures | Playwright configured | Captures and stores screenshots on test failures |
| T-029 | Implement parallel processing | CLI tool created | Supports concurrent patch generation with --parallel flag |
| T-030 | Create dry-run mode | CLI tool implemented | Preview changes without applying patches |

## タスクの進捗管理

各タスクの進捗は以下の状態で管理します：
- 🔴 未着手 (Not Started)
- 🟡 進行中 (In Progress)
- 🟢 完了 (Completed)
- ⚫ ブロック中 (Blocked)

## 優先順位

### Phase 1: 基盤構築
- T-001, T-002, T-016, T-017

### Phase 2: データモデル実装
- T-003, T-004

### Phase 3: コア機能実装
- T-005, T-006, T-007, T-008, T-009, T-010

### Phase 4: 統合・自動化
- T-011, T-014, T-021

### Phase 5: 監視・運用
- T-012, T-013, T-022, T-023

### Phase 6: UI/UX
- T-018, T-019, T-020

### Phase 7: 品質・保守
- T-024, T-025, T-026, T-027, T-028, T-029, T-030