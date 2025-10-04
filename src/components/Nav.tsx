import Link from "next/link";

import { Container } from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/post", label: "Post" },
];

export default function Nav() {
  return (
    <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-sm transition-colors dark:border-slate-700/70 dark:bg-slate-900/80">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-200"
          >
            Workbridge
          </Link>
          <div className="flex items-center gap-5">
            <ul className="hidden items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-200 sm:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
