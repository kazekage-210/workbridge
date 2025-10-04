"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Container } from "@/components/Container";
import { addStoredJob, loadStoredJobs } from "@/lib/local-storage";
import { getStaticJobIds } from "@/lib/jobs";
import { jobFormSchema, type JobFormValues } from "@/lib/schemas/job";

const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const generateJobId = (title: string, existingIds: Set<string>): string => {
  const base = slugify(title) || `job-${Date.now()}`;

  if (!existingIds.has(base)) {
    return base;
  }

  let index = 2;
  let candidate = `${base}-${index}`;

  while (existingIds.has(candidate)) {
    index += 1;
    candidate = `${base}-${index}`;
  }

  return candidate;
};

export default function NewJobPage() {
  const router = useRouter();
  const staticIds = useMemo(() => new Set(getStaticJobIds()), []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      company: "",
      description: "",
    },
  });

  const onSubmit = async (values: JobFormValues) => {
    const storedJobs = loadStoredJobs();
    const existingIds = new Set([
      ...staticIds,
      ...storedJobs.map((job) => job.id),
    ]);

    const id = generateJobId(values.title, existingIds);
    const now = new Date().toISOString();

    addStoredJob({
      id,
      title: values.title,
      company: values.company,
      description: values.description,
      publishedAt: now,
    });

    alert(`求人を保存しました: ${values.title}`);
    reset();
    router.push("/jobs");
  };

  return (
    <Container>
      <section className="mx-auto flex max-w-3xl flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900">求人を新規投稿</h1>
          <p className="text-sm text-gray-600">
            タイトル、会社名、募集内容を入力してください。送信するとローカルに保存され、求人一覧に表示されます。
          </p>
        </header>

        <form
          className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">
              タイトル
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              placeholder="例: シニアフロントエンドエンジニア"
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-700">
              会社名
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              placeholder="例: 株式会社ワークブリッジ"
            />
            {errors.company && (
              <p className="text-xs text-red-500">{errors.company.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">
              説明
            </label>
            <textarea
              id="description"
              rows={6}
              {...register("description")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              placeholder="募集背景や業務内容を記載してください"
            />
            {errors.description && (
              <p className="text-xs text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "送信中..." : "保存して一覧に反映"}
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
}
