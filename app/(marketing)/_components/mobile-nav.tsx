"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#081d3c] min-[992px]:hidden"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] bg-[#2739ff] p-[3rem_1.75rem]"
        >
          {" "}
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`reference-navlink w-full text-center ${item.active ? "reference-navlink-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
