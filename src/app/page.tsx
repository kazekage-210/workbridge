import Link from "next/link";

import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-16">
        <section className="space-y-8 text-center sm:text-left">
          <span className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm transition dark:border-slate-700/70 dark:bg-slate-800/70 dark:text-slate-300">
            Workbridge MVP
          </span>
          <h1 className="text-4xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
            夜の静けさに寄り添う、やわらかな採用プラットフォーム
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-lg dark:text-slate-200">
            Workbridgeは求人の公開から応募管理までをまとめてサポート。目に優しいインターフェースで、集中力を保ちながら最適な人材を迎え入れましょう。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-[#1c2743] px-7 py-3 text-sm font-semibold text-slate-100 shadow-sm transition hover:bg-[#233052] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 dark:focus-visible:ring-slate-300/70"
            >
              求人を探す
            </Link>
            <Link
              href="/jobs/new"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300/80 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/60 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800/70"
            >
              求人を投稿する
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.2)] transition dark:border-slate-700/80 dark:bg-slate-900/70 dark:shadow-[0_25px_60px_-30px_rgba(15,23,42,0.5)] sm:grid-cols-3">
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
            <div
              key={item.title}
              className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur transition dark:border-slate-700/70 dark:bg-slate-800/70"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-200">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
}
