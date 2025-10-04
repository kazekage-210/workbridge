"use client";

import Link from "next/link";

import { Container } from "@/components/Container";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <Container>
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-500">Error</p>
        <h1 className="text-3xl font-semibold text-gray-900">予期せぬエラーが発生しました</h1>
        <p className="max-w-md text-sm text-gray-600">
          {error.message || "ページの読み込み中に問題が発生しました。時間をおいて再度お試しください。"}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </Container>
  );
}
