import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { formatDate } from "@/lib/format";
import { findStaticJobById } from "@/lib/jobs";

type JobDetailPageProps = {
  params: { id: string };
};

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = findStaticJobById(params.id);

  if (!job) {
    notFound();
  }

  return (
    <Container>
      <section className="mx-auto flex max-w-3xl flex-col gap-10">
        <header className="space-y-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            {job.company}
          </span>
          <h1 className="text-4xl font-semibold text-gray-900">{job.title}</h1>
          {(job.location || job.employmentType) && (
            <p className="text-sm text-gray-600">
              {[job.location, job.employmentType].filter(Boolean).join(" ・ ")}
            </p>
          )}
          <p className="text-sm text-gray-500">掲載日: {formatDate(job.publishedAt)}</p>
          <p className="text-base text-gray-700">{job.description}</p>
        </header>

        {job.tags && job.tags.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">求めるスキル</h2>
            <ul className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        )}

        {job.applyUrl && (
          <div>
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              応募ページへ進む
            </a>
          </div>
        )}
      </section>
    </Container>
  );
}
