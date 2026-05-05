// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { getContact } from "../data/portfolioApi";
import { Card, PageHeader, ContactRow } from "../components/ui";

export default function Contact() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      const data = await getContact();
      setContact(data);
      setLoading(false);
    }

    fetchContact();
  }, []);

  return (
    <div className="grid gap-6">
      <PageHeader title="Contact" subtitle="Links to reach me quickly." />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-base font-semibold text-white">Contact links</h2>

          {loading ? (
            <p className="mt-4 text-sm text-zinc-300">Loading contact...</p>
          ) : !contact ? (
            <p className="mt-4 text-sm text-zinc-300">No contact data found.</p>
          ) : (
            <div className="mt-4 grid gap-2">
              <ContactRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactRow icon={Phone} label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat" href={contact.whatsapp} />
              <ContactRow icon={Github} label="GitHub" value="Profile" href={contact.github} />
              <ContactRow icon={Linkedin} label="LinkedIn" value="Profile" href={contact.linkedin} />
            </div>
          )}
        </Card>

        <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6">
          <img
            src="/images/contact/rasha.jpeg"
            alt="Your profile"
            className="h-64 w-64 rounded-2xl object-cover shadow-sm"
          />
        </div>
      </section>
    </div>
  );
}