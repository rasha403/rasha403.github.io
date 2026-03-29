// src/pages/Home.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, GraduationCap, Laptop, Smartphone, ArrowRight, ExternalLink, Download, Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { BRAND, CONTACT, PROJECTS } from "../data/portfolioData";
import { Card, Pill, MiniCard, StatCard, ContactRow } from "../components/ui";

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(176,27,46,0.22),transparent_55%)]" />
      <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {BRAND.name}
          </motion.h1>
          <p className="mt-2 text-base font-semibold text-[#d05a6a]">{BRAND.role}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {BRAND.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill icon={Laptop} text="Websites" />
            <Pill icon={Smartphone} text="Mobile Apps" />
            <Pill icon={Briefcase} text="Business-oriented" />
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#6b0f1a]/40 px-5 py-3 text-sm font-semibold text-white ring-1 ring-[#b01b2e]/45 hover:bg-[#6b0f1a]/55"
            >
              See projects <ArrowRight className="h-4 w-4" />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
            >
              Contact <ExternalLink className="h-4 w-4" />
            </NavLink>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
  <div className="w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
    <img
      src="/images/contact/rashaComputer.png"
      alt="Developer working on laptop"
      className="h-full w-full object-cover"
      loading="lazy"
    />
  </div>
</div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="mt-4 grid gap-3">
      {featured.map((p) => (
        <div key={p.id} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <img src={p.media.cover} alt={p.title} className="h-14 w-20 rounded-xl object-cover ring-1 ring-white/10" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">{p.title}</div>
            <div className="mt-1 line-clamp-1 text-xs text-zinc-400">{p.summary}</div>
          </div>
          <NavLink
            to="/projects"
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-[#6b0f1a]/35 px-3 py-2 text-xs font-semibold text-white ring-1 ring-[#b01b2e]/40 hover:bg-[#6b0f1a]/45"
          >
            View <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid gap-8">
      <Hero />

      <section className="grid gap-6 md:grid-cols-3">
        <StatCard title="Focus" value="Web + Mobile" desc="React websites and Flutter apps built for real users." icon={Sparkles} />
        <StatCard title="Strength" value="Business + Tech" desc="I connect business goals to clean, reliable engineering." icon={Briefcase} />
        <StatCard title="Available" value="Projects / Internships" desc="Open to collaborate and grow with a strong team." icon={GraduationCap} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Featured projects</h2>
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
            >
              View all <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
          <FeaturedProjects />
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-white">Quick contact</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Want to collaborate? Send a message and I’ll reply as soon as possible.
          </p>
          <div className="mt-4 grid gap-2">
            <ContactRow icon={Mail} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat" href={CONTACT.whatsapp} />
            <ContactRow icon={Github} label="GitHub" value="Profile" href={CONTACT.github} />
            <ContactRow icon={Linkedin} label="LinkedIn" value="Profile" href={CONTACT.linkedin} />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6b0f1a]/35 px-4 py-2 text-sm font-semibold text-white ring-1 ring-[#b01b2e]/40 hover:bg-[#6b0f1a]/45"
            >
              Contact me <ArrowRight className="h-4 w-4" />
            </NavLink>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Replace this with your CV PDF link in the code (e.g. /cv.pdf in public folder).");
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
            >
              Download CV <Download className="h-4 w-4" />
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}
