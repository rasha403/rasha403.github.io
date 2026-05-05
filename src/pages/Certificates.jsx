import React, { useEffect, useState } from "react";
import { getCertificates } from "../data/portfolioApi";
import { Card, PageHeader } from "../components/ui";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      const data = await getCertificates();
      setCertificates(data);
      setLoading(false);
    }

    fetchCertificates();
  }, []);

  return (
    <div className="grid gap-6">
      <PageHeader
        title="Certificates"
        subtitle="Courses, trainings, and certifications I completed."
      />

      {loading ? (
        <Card>
          <p className="text-sm text-zinc-300">Loading certificates...</p>
        </Card>
      ) : certificates.length === 0 ? (
        <Card>
          <p className="text-sm text-zinc-300">No certificates found.</p>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card key={cert.id}>
              {cert.image_url && (
                <img
                  src={cert.image_url}
                  alt={cert.name}
                  className="mb-4 h-56 w-full rounded-2xl object-cover ring-1 ring-white/10"
                />
              )}

              <h2 className="text-lg font-semibold text-white">
                {cert.name}
              </h2>

              {cert.description && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {cert.description}
                </p>
              )}

              {cert.comment && (
                <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold text-[#d05a6a]">
                    My comment
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    {cert.comment}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}