import type { Job } from "@/types/job";

const normalise = (value: string) => value.trim().toLowerCase();

const sortByPublishedAtDesc = (jobs: Job[]): Job[] => {
  return [...jobs].sort((a, b) => {
    const aTime = new Date(a.publishedAt).getTime();
    const bTime = new Date(b.publishedAt).getTime();

    return bTime - aTime;
  });
};

export const filterJobsByQuery = (jobs: Job[], query: string): Job[] => {
  const trimmedQuery = normalise(query);

  if (!trimmedQuery) {
    return sortByPublishedAtDesc(jobs);
  }

  return sortByPublishedAtDesc(
    jobs.filter((job) => {
      const haystacks = [job.title, job.company, job.description]
        .filter((value): value is string => Boolean(value))
        .map((value) => value.toLowerCase());

      return haystacks.some((haystack) => haystack.includes(trimmedQuery));
    }),
  );
};
