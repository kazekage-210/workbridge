export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Contract";
  description: string;
  tags: string[];
  applyUrl: string;
  publishedAt: string;
};

export const JOBS: Job[] = [
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    company: "Workbridge Inc.",
    location: "Remote (JP)",
    employmentType: "Full-time",
    description:
      "Lead the frontend architecture for our hiring platform with a focus on performance, accessibility, and UX quality.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    applyUrl: "https://example.com/jobs/senior-frontend-engineer",
    publishedAt: "2024-06-01",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    company: "Workbridge Inc.",
    location: "Tokyo (Hybrid)",
    employmentType: "Contract",
    description:
      "Conduct discovery, craft flows, and own the design system to deliver delightful experiences for hiring teams and candidates.",
    tags: ["UX", "UI", "Design Systems"],
    applyUrl: "https://example.com/jobs/product-designer",
    publishedAt: "2024-05-24",
  },
  {
    id: "devrel-manager",
    title: "DevRel Manager",
    company: "Workbridge Inc.",
    location: "Osaka (Hybrid)",
    employmentType: "Full-time",
    description:
      "Scale our developer community program through events, content, and partnerships that highlight our platform's capabilities.",
    tags: ["Developer Relations", "Community", "Public Speaking"],
    applyUrl: "https://example.com/jobs/devrel-manager",
    publishedAt: "2024-05-15",
  },
];
