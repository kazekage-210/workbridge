import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">404</p>
        <h1 className="text-3xl font-semibold text-gray-900">ページが見つかりませんでした</h1>
        <p className="max-w-md text-sm text-gray-600">
          お探しのページは移動または削除された可能性があります。ホームに戻るか、求人一覧から改めてお探しください。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            ホームに戻る
          </Link>
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
          >
            求人一覧を見る
          </Link>
        </div>
      </div>
    </Container>
  );
}
