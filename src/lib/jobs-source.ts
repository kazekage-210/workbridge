import type { Job } from "@/types/job";

export const JOB_SOURCE: Job[] = [
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    company: "Workbridge Inc.",
    location: "Remote (JP)",
    employmentType: "Full-time",
    description:
      "Lead the frontend architecture for our hiring platform with a focus on performance, accessibility, and UX quality.",
    tags: ["Next.js", "TypeScript", "Design Systems"],
    applyUrl: "https://example.com/jobs/senior-frontend-engineer",
    publishedAt: "2024-06-01",
    source: "static",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    company: "Workbridge Inc.",
    location: "Tokyo (Hybrid)",
    employmentType: "Contract",
    description:
      "Collaborate with product and engineering to craft delightful experiences and evolve our design system.",
    tags: ["UX", "Visual Design", "Design Systems"],
    applyUrl: "https://example.com/jobs/product-designer",
    publishedAt: "2024-05-24",
    source: "static",
  },
  {
    id: "devrel-manager",
    title: "DevRel Manager",
    company: "Workbridge Inc.",
    location: "Osaka (Hybrid)",
    employmentType: "Full-time",
    description:
      "Grow and energise our developer community through events, content, and partnerships that showcase our platform.",
    tags: ["Developer Relations", "Community", "Public Speaking"],
    applyUrl: "https://example.com/jobs/devrel-manager",
    publishedAt: "2024-05-15",
    source: "static",
  },
];
