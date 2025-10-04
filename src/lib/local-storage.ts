import type { StoredJob } from "@/types/job";

const STORAGE_KEY = "workbridge.jobs";
const UPDATE_EVENT = "workbridge:jobs-updated";

const isBrowser = typeof window !== "undefined";

const parseJobs = (rawValue: string | null): StoredJob[] => {
  if (!rawValue) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawValue) as StoredJob[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch (error) {
    console.warn("Failed to parse stored jobs", error);
    return [];
  }
};

const ensureLocalSource = (jobs: StoredJob[]): StoredJob[] => {
  return jobs
    .filter((job) => job && typeof job === "object")
    .map((job) => ({ ...job, source: "local" as const }));
};

const persistJobs = (jobs: StoredJob[]): void => {
  if (!isBrowser) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  window.dispatchEvent(new Event(UPDATE_EVENT));
};

export const loadStoredJobs = (): StoredJob[] => {
  if (!isBrowser) {
    return [];
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  return ensureLocalSource(parseJobs(rawValue));
};

export const addStoredJob = (
  job: Omit<StoredJob, "source">,
): StoredJob => {
  const storedJobs = loadStoredJobs();
  const nextJob: StoredJob = { ...job, source: "local" };
  const deduped = [nextJob, ...storedJobs.filter((item) => item.id !== nextJob.id)];

  persistJobs(deduped);
  return nextJob;
};

export const subscribeToStoredJobs = (
  callback: (jobs: StoredJob[]) => void,
): (() => void) => {
  if (!isBrowser) {
    return () => undefined;
  }

  const handleUpdate = () => {
    callback(loadStoredJobs());
  };

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      handleUpdate();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(UPDATE_EVENT, handleUpdate);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(UPDATE_EVENT, handleUpdate);
  };
};
