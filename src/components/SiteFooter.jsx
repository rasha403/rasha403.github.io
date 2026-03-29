// src/components/SiteFooter.jsx
import React from "react";
import { Laptop, Smartphone } from "lucide-react";
import { BRAND } from "../data/portfolioData";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        
        <div>
          <span className="font-medium text-black">
            {BRAND.name}
          </span>{" "}
          • {new Date().getFullYear()}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 ring-1 ring-gray-200">
            <Laptop className="h-4 w-4 text-black" /> Websites
          </span>

          <span className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 ring-1 ring-gray-200">
            <Smartphone className="h-4 w-4 text-black" /> Mobile Apps
          </span>
        </div>

      </div>
    </footer>
  );
}
