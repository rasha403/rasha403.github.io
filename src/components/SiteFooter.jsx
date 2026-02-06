// src/components/SiteFooter.jsx
import React from "react";
import { Laptop, Smartphone } from "lucide-react";
import { BRAND } from "../data/portfolioData";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0b0b0d]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <span className="text-zinc-200">{BRAND.name}</span> • {new Date().getFullYear()}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
            <Laptop className="h-4 w-4 text-[#b01b2e]" /> Websites
          </span>
          <span className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
            <Smartphone className="h-4 w-4 text-[#b01b2e]" /> Mobile Apps
          </span>
        </div>
      </div>
    </footer>
  );
}
