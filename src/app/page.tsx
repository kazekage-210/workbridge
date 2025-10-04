import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-5xl flex-col justify-center gap-10 px-6 py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
          チームに最適な人材をつなぐ採用プラットフォーム
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          Workbridgeは候補者検索から応募管理までをシンプルにし、
          成長スタートアップの採用を加速させます。
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/jobs"
          className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          募集中の求人を見る
        </Link>
        <Link
          href="/post"
          className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
        >
          求人を掲載する
        </Link>
      </div>
    </section>
  );
}
