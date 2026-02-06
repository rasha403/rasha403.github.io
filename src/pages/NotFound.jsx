// src/pages/NotFound.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "../components/ui";

export default function NotFound() {
  return (
    <Card>
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-sm text-zinc-400">The page you’re looking for doesn’t exist.</p>
      <NavLink
        to="/"
        className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#6b0f1a]/40 px-5 py-3 text-sm font-semibold text-white ring-1 ring-[#b01b2e]/45 hover:bg-[#6b0f1a]/55"
      >
        Back home <ArrowRight className="h-4 w-4" />
      </NavLink>
    </Card>
  );
}
