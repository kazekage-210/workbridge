import { Container } from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/85 py-8 text-sm text-slate-600 backdrop-blur-sm transition dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-slate-700 dark:text-slate-200">Workbridge</p>
          <p className="text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} Workbridge Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
