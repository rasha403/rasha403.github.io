// src/components/TopBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { BRAND } from "../data/portfolioData";
import { cx } from "./ui";

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          "rounded-xl px-3 py-2 text-sm font-medium transition",
          isActive ? "bg-black/5 text-black" : "text-gray-500 hover:bg-black/5 hover:text-black"
        )
      }
    >
      {label}
    </NavLink>
  );
}

const mobileLink = ({ isActive }) =>
  cx(
    "rounded-xl px-3 py-2 text-sm font-semibold transition",
    isActive ? "bg-black/5 text-black" : "text-gray-500 hover:bg-black/5 hover:text-black"
  );

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl bg-black/5 px-3 py-2 text-xs font-semibold text-black ring-1 ring-black/10"
      >
        Menu
        <ArrowRight className={cx("h-4 w-4 transition", open ? "rotate-90" : "rotate-0")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-[62px] border-b border-black/10 bg-white/95 backdrop-blur"
          >
            <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6 lg:px-8">
              <NavLink onClick={() => setOpen(false)} className={mobileLink} to="/">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} className={mobileLink} to="/projects">Projects</NavLink>
              <NavLink onClick={() => setOpen(false)} className={mobileLink} to="/experience">Experience</NavLink>
              <NavLink onClick={() => setOpen(false)} className={mobileLink} to="/about">About</NavLink>
              <NavLink onClick={() => setOpen(false)} className={mobileLink} to="/contact">Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/5 ring-1 ring-black/10">
            <Sparkles className="h-5 w-5 text-black" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-black">{BRAND.name}</div>
            <div className="text-xs text-gray-500">Portfolio</div>
          </div>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <NavItem to="/" label="Home" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/experience" label="Experience" />
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />
          <NavItem to="/certificates" label="Certificates" />
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}