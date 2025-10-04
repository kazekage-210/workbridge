import Link from "next/link";

import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-16">
        <section className="space-y-6 text-center sm:text-left">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-600">
            Workbridge MVP
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            採用チームと候補者をつなぐ、シンプルで強力な求人プラットフォーム
          </h1>
          <p className="text-lg text-gray-600 sm:max-w-2xl">
            Workbridgeは求人の公開から応募管理までをまとめてサポートします。スタートアップのスピード感そのままに、最適な人材を素早く見つけましょう。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              求人を探す
            </Link>
            <Link
              href="/jobs/new"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
            >
              求人を投稿する
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:grid-cols-3">
          {[
            {
              title: "スピーディな掲載",
              description: "テンプレートに沿って入力するだけで、数分で求人を公開できます。",
            },
            {
              title: "候補者体験を最適化",
              description: "シンプルな応募導線で離脱を防ぎ、優秀な人材に確実にリーチします。",
            },
            {
              title: "チームで共有",
              description: "候補者情報をチームで確認し、意思決定を素早く進められます。",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
}
