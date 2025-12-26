"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/app/dashboard", label: "Dashboard" },
    { href: "/app/audit", label: "Audit" },
    { href: "/app/architecture", label: "Architecture" },
  ];

  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="text-lg font-semibold">Kasparro</h2>

      <nav className="mt-8 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded px-3 py-2 text-sm ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
