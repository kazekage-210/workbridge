import { notFound } from "next/navigation";

const jobs: Record<
  string,
  {
    title: string;
    location: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
  }
> = {
  "senior-frontend-engineer": {
    title: "シニアフロントエンドエンジニア",
    location: "東京 / フルリモート可",
    description:
      "迅速にプロダクト価値を届けるため、Design System とフロントエンド基盤づくりを推進します。",
    responsibilities: [
      "Next.js / TypeScript を用いた新機能開発・改善",
      "デザイナーやバックエンドとの協業による仕様策定",
      "UX 向上のための計測・検証サイクルの構築",
    ],
    requirements: [
      "React / Next.js を用いた3年以上の開発経験",
      "Tailwind CSS などのモダンCSSツールの実務経験",
      "プロダクト視点で意思決定できるコミュニケーション力",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(jobs).map((id) => ({ id }));
}

type JobDetailPageProps = {
  params: { id: string };
};

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobs[params.id];

  if (!job) {
    notFound();
  }

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col gap-10 px-6 py-16 md:py-24">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">
          {job.title}
        </h1>
        <p className="text-sm font-medium text-gray-500">{job.location}</p>
        <p className="text-lg text-gray-600">{job.description}</p>
      </header>

      <div className="grid gap-12 md:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">主な業務内容</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">必須要件</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
