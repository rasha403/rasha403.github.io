// src/pages/Experience.jsx
import React from "react";
import { Plus } from "lucide-react";
import { EXPERIENCE } from "../data/portfolioData";
import { Card, PageHeader } from "../components/ui";

function ExperienceCard({ item }) {
  return (
    <Card>
      <div>
        <div className="text-lg font-semibold text-white">{item.title}</div>
        <div className="mt-1 text-sm text-zinc-400">
          {item.company} • {item.period}
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {item.bullets.map((b, idx) => (
          <div key={idx} className="flex gap-3 text-sm text-zinc-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b01b2e]" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      {item.tech?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t, idx) => (
            <span key={idx} className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b01b2e]" />
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export default function Experience() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Experience"
        subtitle="Roles, internships, trainings, and what you accomplished."
        right={null}
      />

      <div className="grid gap-4">
        {EXPERIENCE.map((item, idx) => (
          <ExperienceCard key={`${item.company}-${idx}`} item={item} />
        ))}
      </div>

      <Card>
        <h2 className="text-base font-semibold text-white">Tips</h2>
        <ul className="mt-2 grid gap-2 text-sm text-zinc-300">
          <li className="flex gap-3"><span className="mt-0.5 h-2 w-2 rounded-full bg-[#b01b2e]" /> Use action verbs: Built, Designed, Improved, Shipped.</li>
          <li className="flex gap-3"><span className="mt-0.5 h-2 w-2 rounded-full bg-[#b01b2e]" /> Add results: improved UX, faster loading, better workflow.</li>
          <li className="flex gap-3"><span className="mt-0.5 h-2 w-2 rounded-full bg-[#b01b2e]" /> Keep each bullet to one strong sentence.</li>
        </ul>
      </Card>
    </div>
  );
}
