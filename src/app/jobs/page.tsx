"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Container } from "@/components/Container";
import { JobCard } from "@/components/JobCard";
import { Filters } from "@/components/jobs/Filters";
import { loadStoredJobs, subscribeToStoredJobs } from "@/lib/local-storage";
import { filterJobsByQuery } from "@/lib/jobs-filter";
import { getStaticJobs } from "@/lib/jobs";
import type { Job, StoredJob } from "@/types/job";

const staticJobs = getStaticJobs();

const toJobList = (storedJobs: StoredJob[]): Job[] => {
  return storedJobs.map((job) => ({ ...job, source: "local" as const }));
};

const JobsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [storedJobs, setStoredJobs] = useState<StoredJob[]>([]);

  useEffect(() => {
    setStoredJobs(loadStoredJobs());
    const unsubscribe = subscribeToStoredJobs(setStoredJobs);

    return unsubscribe;
  }, []);

  const jobs = useMemo(() => {
    const combined: Job[] = [...toJobList(storedJobs), ...staticJobs];
    return filterJobsByQuery(combined, query);
  }, [storedJobs, query]);

  return (
    <Container>
      <main className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Open Roles
          </span>
          <h1 className="text-3xl font-bold text-gray-900">Join the Workbridge team</h1>
          <p className="text-base text-gray-600">
            Explore the latest roles across product, engineering, and community. Each listing includes a direct link to apply.
          </p>
        </header>

        <Filters query={query} />

        <section className="grid gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={`${job.source}-${job.id}`} job={job} />)
          ) : (
            <p className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-600">
              条件に一致する求人が見つかりませんでした。
            </p>
          )}
        </section>
      </main>
    </Container>
  );
};

export default JobsPage;
