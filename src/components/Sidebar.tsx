"use client";
import Link from "next/link";
import { List } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-gray-800 text-white p-4 flex-shrink-0">
      <nav className="space-y-2">
        <div className="flex justify-center mb-6">
          <Image src="/assets/innovar.png" width={40} height={40} alt="logo" />
        </div>
        <Link
          href="/dashboard"
          className={`flex items-center space-x-2 p-2 hover:bg-gray-700 rounded ${
            pathname === "/dashboard" && "bg-gray-700"
          }`}
        >
          <List size={20} />
          <span>Tasks</span>
        </Link>
      </nav>
    </aside>
  );
}
