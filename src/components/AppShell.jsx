// src/components/AppShell.jsx
import React from "react";
import TopBar from "./TopBar";
import SiteFooter from "./SiteFooter";

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* soft light glows (no red, no dark) */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-black/5 blur-3xl" />
      <div className="absolute left-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-black/5 blur-3xl" />

      {/* very subtle radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_55%)]" />

      {/* remove the dark bottom overlay completely (or keep super light) */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.06))]" /> */}

      {/* subtle grid (dark lines on white) */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(0,0,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}

export default function AppShell({ children }) {
  return (
<div className="min-h-screen bg-white text-black [&_*]:text-black">      <BackgroundGlow />
      <TopBar />
      <main className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
