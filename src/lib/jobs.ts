import type { Job } from "@/types/job";
import { JOB_SOURCE } from "@/lib/jobs-source";

export const getStaticJobs = (): Job[] => JOB_SOURCE;

export const findStaticJobById = (id: string): Job | undefined => {
  return JOB_SOURCE.find((job) => job.id === id);
};

export const getStaticJobIds = (): string[] => JOB_SOURCE.map((job) => job.id);
