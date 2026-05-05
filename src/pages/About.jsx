// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { getAboutPageData } from "../data/portfolioApi";
import { Card, PageHeader } from "../components/ui";

const iconMap = {
  University: GraduationCap,
  "Current role": Briefcase,
  "Based in": MapPin,
};

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAbout() {
      const data = await getAboutPageData();
      setAbout(data);
      setLoading(false);
    }

    fetchAbout();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6">
        <PageHeader title="About" subtitle="Loading about information..." />
        <Card>
          <p className="text-sm text-zinc-300">Loading...</p>
        </Card>
      </div>
    );
  }

  if (!about) {
    return (
      <div className="grid gap-6">
        <PageHeader title="About" subtitle="University, companies, skills, and a short introduction." />
        <Card>
          <p className="text-sm text-zinc-300">No about data found.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <PageHeader
        title="About"
        subtitle="University, companies, skills, and a short introduction."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-white">{about.headline}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {about.bio}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {about.highlights?.map((h, i) => {
              const Icon = iconMap[h.title] || MapPin;

              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <Icon className="h-4 w-4 text-[#d05a6a]" />
                  <div className="mt-2 text-xs font-semibold text-zinc-400">
                    {h.title}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {h.value}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="grid gap-6">
          <Card>
            <h2 className="text-base font-semibold text-white">
              Companies / Trainings
            </h2>

            <div className="mt-4 grid gap-3">
              {about.companies?.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <div className="text-sm font-semibold text-white">
                    {c.name}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {c.role} • {c.period}
                  </div>
                  <div className="mt-2 text-sm text-zinc-300">{c.notes}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-white">Skills</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {about.skills?.map((s, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b01b2e]" />
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}