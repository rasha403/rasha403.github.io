// src/pages/Projects.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Smartphone, ArrowRight, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import { Card, PageHeader, cx } from "../components/ui";

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-xl px-3 py-2 text-xs font-semibold ring-1 transition",
        active
          ? "bg-white/10 text-white ring-white/20"
          : "bg-white/5 text-zinc-300 ring-white/10 hover:bg-white/10 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

function ProjectCard({ p, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left ring-1 ring-white/10 transition hover:bg-white/10"
    >
      <div className="relative h-40">
        <img src={p.media.cover} alt={p.title} className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-2xl bg-[#0b0b0d]/70 px-3 py-1.5 text-[11px] font-semibold text-zinc-200 ring-1 ring-white/10">
          {p.type === "website" ? <Laptop className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
          {p.type === "website" ? "Website" : "Mobile"}
        </div>
        {p.featured && (
          <div className="absolute right-3 top-3 rounded-2xl bg-[#6b0f1a]/55 px-3 py-1.5 text-[11px] font-bold text-white ring-1 ring-[#b01b2e]/40">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">{p.title}</div>
            <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400">{p.summary}</div>
          </div>
          <ArrowRight className="mt-1 h-4 w-4 text-zinc-600 transition group-hover:text-zinc-300" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.slice(0, 3).map((t) => (
            <span key={t} className="rounded-2xl bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-200 ring-1 ring-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ p, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 grid place-items-center bg-black/70 px-4 py-8"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onMouseDown={(e) => e.stopPropagation()}
        className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0d] ring-1 ring-white/10"
      >
        <div className="relative h-56 sm:h-72">
          <img src={p.media.cover} alt={p.title} className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-2xl bg-[#0b0b0d]/75 px-3 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10 hover:bg-[#0b0b0d]/90"
          >
            Close
          </button>
        </div>

        <div className="grid gap-6 p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-bold text-white">{p.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{p.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className="rounded-2xl bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10">
                {t}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={p.links.live || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
              onClick={(e) => {
                if (!p.links.live) {
                  e.preventDefault();
                  alert("Add your live link in portfolioData.js");
                }
              }}
            >
              Live <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={p.links.github || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
              onClick={(e) => {
                if (!p.links.github) {
                  e.preventDefault();
                  alert("Add your GitHub link in portfolioData.js");
                }
              }}
            >
              GitHub <Github className="h-4 w-4" />
            </a>
          </div>

          {p.media.gallery?.length ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Gallery</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {p.media.gallery.slice(0, 6).map((g, i) => (
                  <img key={i} src={g} alt="" className="h-40 w-full rounded-2xl object-cover ring-1 ring-white/10" />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.type === filter);
  }, [filter]);

  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <div className="grid gap-6">
      <PageHeader
        title="Projects"
        subtitle="Websites and mobile apps — each with summary, stack, and media."
        right={
          <div className="flex flex-wrap items-center gap-2">
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>All</FilterButton>
            <FilterButton active={filter === "website"} onClick={() => setFilter("website")}>Websites</FilterButton>
            <FilterButton active={filter === "mobile"} onClick={() => setFilter("mobile")}>Mobile</FilterButton>
          </div>
        }
      />

      {featured.length > 0 && (
        <Card>
          <h2 className="text-base font-semibold text-white">Featured</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {featured.slice(0, 2).map((p) => (
              <ProjectCard key={p.id} p={p} onOpen={() => setActive(p)} />
            ))}
          </div>
        </Card>
      )}

      <Card>
        <h2 className="text-base font-semibold text-white">All projects</h2>
        <p className="mt-1 text-sm text-zinc-400">Click a project to view details.</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </Card>

      <AnimatePresence>
        {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}
