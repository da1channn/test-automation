import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">
          AI Test Automation & Auto-fix Tool
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Webアプリケーションのテスト実行から失敗検知、原因クラスタリング、
          AI（Anthropic Claude Code API）を用いた自動バグ修正パッチ生成・適用、
          Pull Request自動生成までを一気通貫で行う開発支援ツールです。
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              主な機能
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>pytest/Playwrightテストの自動実行</li>
              <li>エラーの自動クラスタリング</li>
              <li>AI による修正パッチ生成</li>
              <li>GitHub PR 自動作成</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              メリット
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>テスト失敗の分析時間削減</li>
              <li>バグ修正の自動化</li>
              <li>開発サイクルの高速化</li>
              <li>コスト効率の最適化</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/dashboard" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            ダッシュボードへ
          </Link>
          <Link 
            href="/docs" 
            className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors"
          >
            ドキュメント
          </Link>
        </div>
      </div>
    </Layout>
  );
}