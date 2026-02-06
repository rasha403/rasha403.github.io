// src/components/ui.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export function Card({ children, className }) {
  return (
    <div className={cx("rounded-3xl border border-black/10 bg-white p-6 ring-1 ring-black/10 shadow-sm", className)}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle, right }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-gray-500 sm:text-base">{subtitle}</p>}
      </div>
      {right ? <div className="sm:pb-1">{right}</div> : null}
    </div>
  );
}

export function Pill({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-black/5 px-3 py-2 text-xs font-semibold text-black ring-1 ring-black/10">
      <Icon className="h-4 w-4 text-black" />
      {text}
    </span>
  );
}

export function MiniCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-black/5 p-4 ring-1 ring-black/10">
      <div className="text-xs font-semibold text-gray-500">{title}</div>
      <div className="mt-1 text-sm font-semibold text-black">{value}</div>
    </div>
  );
}

export function StatCard({ title, value, desc, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 ring-1 ring-black/10 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold text-gray-500">{title}</div>
          <div className="mt-1 text-xl font-bold text-black">{value}</div>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/5 ring-1 ring-black/10">
          <Icon className="h-5 w-5 text-black" />
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500">{desc}</p>
    </div>
  );
}

export function ContactRow({ icon: Icon, label, value, href }) {
  const isPlaceholder =
    !href ||
    href === "https://wa.me/" ||
    href.endsWith("/in/") ||
    href.endsWith("github.com/") ||
    href === "https://github.com/" ||
    href === "https://www.linkedin.com/in/";

  const clickable = href && (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel"));

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={cx(
        "group flex items-center justify-between rounded-2xl bg-black/5 px-4 py-3 ring-1 ring-black/10 transition",
        !isPlaceholder ? "hover:bg-black/10" : "cursor-default opacity-70"
      )}
      onClick={(e) => {
        if (isPlaceholder && clickable) {
          e.preventDefault();
          alert("Replace this placeholder link with your real one.");
        }
      }}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-black/5 ring-1 ring-black/10">
          <Icon className="h-4 w-4 text-black" />
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-500">{label}</div>
          <div className="text-sm font-semibold text-black">{value}</div>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-gray-400 transition group-hover:text-black" />
    </a>
  );
}