// src/pages/Contact.jsx
import React from "react";
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/portfolioData";
import { Card, PageHeader, ContactRow } from "../components/ui";

export default function Contact() {
  return (
    <div className="grid gap-6">
      <PageHeader title="Contact" subtitle="Links to reach me quickly." />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-base font-semibold text-white">Contact links</h2>
          <div className="mt-4 grid gap-2">
            <ContactRow icon={Mail} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactRow icon={Phone} label="Phone" value={CONTACT.phone} href={`tel:${CONTACT.phone}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat" href={CONTACT.whatsapp} />
            <ContactRow icon={Github} label="GitHub" value="Profile" href={CONTACT.github} />
            <ContactRow icon={Linkedin} label="LinkedIn" value="Profile" href={CONTACT.linkedin} />
          </div>
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
