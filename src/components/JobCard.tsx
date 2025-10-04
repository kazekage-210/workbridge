import Link from "next/link";

import type { Job } from "@/lib/jobs";

const formatDate = (isoDate: string): string => {
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
  }).format(new Date(isoDate));
};

type JobCardProps = {
  job: Job;
};

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <header className="flex flex-col gap-1">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{job.company}</span>
          <span>{formatDate(job.publishedAt)}</span>
        </div>
        <h2 className="text-xl font-semibold text-slate-900">{job.title}</h2>
        <div className="text-sm text-slate-600">
          {job.location} | {job.employmentType}
        </div>
      </header>

      <p className="text-sm text-slate-700">{job.description}</p>

      <ul className="flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex justify-end">
        <Link
          href={job.applyUrl}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Apply Now
        </Link>
      </div>
    </article>
  );
};
