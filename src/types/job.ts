export type JobSource = "static" | "local";

export type Job = {
  id: string;
  title: string;
  company: string;
  description: string;
  publishedAt: string;
  source: JobSource;
  location?: string;
  employmentType?: string;
  tags?: string[];
  applyUrl?: string;
};

export type StoredJob = Omit<Job, "source"> & { source: "local" };
