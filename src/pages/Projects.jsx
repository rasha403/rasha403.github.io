import React, { useEffect, useState } from "react";
import { getProjects } from "../data/portfolioApi";
import { PageHeader } from "../components/ui";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <PageHeader
        title="Projects"
        subtitle="A selection of projects with their goals, architecture, and technology."
      />

      {projects.map((p) => (
        <section key={p.id} className="space-y-6 border-b border-gray-200 pb-12">
          <h2 className="text-2xl font-bold text-black">{p.title}</h2>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {p.summary}
          </p>

          <div className="grid gap-6 sm:grid-cols-[1fr_300px]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-black">Frontend</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {p.stack?.filter((t) =>
                    ["React", "Flutter", "React Native", "HTML", "CSS"].includes(t)
                  ).join(", ") || "—"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black">Backend</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {p.stack?.filter((t) =>
                    ["Node.js", ".NET", "Firebase", "SQL", "API"].includes(t)
                  ).join(", ") || "—"}
                </p>
              </div>
            </div>

            {p.gallery?.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {p.gallery.map((img, i) => (
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