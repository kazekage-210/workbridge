import { JobCard } from "@/components/JobCard";
import { Filters } from "@/components/jobs/Filters";
import { JOBS } from "@/lib/jobs";

const filterJobs = (query: string) => {
  if (!query.trim()) {
    return JOBS;
  }

  const normalisedQuery = query.trim().toLowerCase();
  return JOBS.filter((job) => {
    return [job.title, job.company, job.description].some((field) =>
      field.toLowerCase().includes(normalisedQuery),
    );
  });
};

type JobsPageProps = {
  searchParams?: {
    q?: string | string[];
  };
};

const JobsPage = ({ searchParams }: JobsPageProps) => {
  const queryParam = searchParams?.q;
  const query = typeof queryParam === "string" ? queryParam : "";
  const jobs = filterJobs(query);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Open Roles
        </span>
        <h1 className="text-3xl font-bold text-slate-900">Join the Workbridge team</h1>
        <p className="text-base text-slate-600">
          Explore the latest roles across product, engineering, and community. Each listing includes a direct link to apply.
        </p>
      </header>

      <Filters query={query} />

      <section className="grid gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600">
            条件に一致する求人が見つかりませんでした。
          </p>
        )}
      </section>
    </main>
  );
};

export default JobsPage;
