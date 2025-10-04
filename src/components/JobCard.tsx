import Link from "next/link";

import { formatDate } from "@/lib/format";
import type { Job } from "@/types/job";

type JobCardProps = {
  job: Job;
};

const sourceLabel: Record<Job["source"], string> = {
  local: "ローカル保存",
  static: "公開中",
};

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <header className="flex flex-col gap-1">
        <div className="flex items-center justify-between text-xs font-medium text-gray-500">
          <span>{job.company}</span>
          <span>{formatDate(job.publishedAt)}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
        {(job.location || job.employmentType) && (
          <p className="text-sm text-gray-600">
            {[job.location, job.employmentType].filter(Boolean).join(" ・ ")}
          </p>
        )}
      </header>

      <p className="text-sm text-gray-700">{job.description}</p>

      {job.tags && job.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
          {sourceLabel[job.source]}
        </span>
        <div className="flex flex-wrap gap-3">
          {job.source === "static" && (
            <Link
              href={`/jobs/${job.id}`}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
            >
              詳細を見る
            </Link>
          )}
          {job.applyUrl && (
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              応募ページ
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
