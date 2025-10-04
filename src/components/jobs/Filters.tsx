"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type FiltersProps = {
  query?: string;
};

export function Filters({ query = "" }: FiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  const updateQueryParam = (nextValue: string) => {
    const params = new URLSearchParams(searchParams);

    if (nextValue.trim()) {
      params.set("q", nextValue);
    } else {
      params.delete("q");
    }

    const nextPath = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(nextPath, { scroll: false });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    updateQueryParam(nextValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="job-search" className="text-sm font-medium text-slate-700">
        キーワードで検索
      </label>
      <input
        id="job-search"
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="タイトル・会社名・説明を検索"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
      />
    </div>
  );
}
