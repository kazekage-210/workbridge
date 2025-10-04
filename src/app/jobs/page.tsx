import { JobCard } from "@/components/JobCard";
import { JOBS } from "@/lib/jobs";

const JobsPage = () => {
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

      <section className="grid gap-6">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
};

export default JobsPage;
