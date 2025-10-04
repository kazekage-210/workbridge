import Link from "next/link";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/post", label: "Post" },
];

export default function Nav() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Workbridge
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-gray-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
