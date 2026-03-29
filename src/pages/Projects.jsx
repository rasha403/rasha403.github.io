// src/pages/Projects.jsx
import React from "react";
import { PROJECTS } from "../data/portfolioData";
import { PageHeader } from "../components/ui";

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <PageHeader
        title="Projects"
        subtitle="A selection of projects with their goals, architecture, and technology."
      />

      {PROJECTS.map((p) => (
        <section
          key={p.id}
          className="space-y-6 border-b border-gray-200 pb-12"
        >
          {/* Project title */}
          <h2 className="text-2xl font-bold text-black">
            {p.title}
          </h2>

          {/* Project aim */}
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {p.summary}
          </p>

          {/* Components & Screenshots side by side */}
          <div className="grid gap-6 sm:grid-cols-[1fr_300px]">
            {/* Left: Frontend/Backend */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-black">
                  Frontend
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {p.stack
                    .filter((t) =>
                      ["React", "Flutter", "React Native", "HTML", "CSS"].includes(t)
                    )
                    .join(", ") || "—"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black">
                  Backend
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {p.stack
                    .filter((t) =>
                      ["Node.js", ".NET", "Firebase", "SQL", "API"].includes(t)
                    )
                    .join(", ") || "—"}
                </p>
              </div>
            </div>

            {/* Right: Scrollable Screenshots */}
            {p.media?.gallery?.length > 0 && (
              <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-2">
                {p.media.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${p.title} screenshot ${i + 1}`}
                    className="h-64 w-auto flex-shrink-0 rounded-lg border border-gray-200 object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}