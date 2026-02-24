"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CloudUpload,
  Workflow,
  Database,
  Headphones,
  BarChart2,
  Link,
  CreditCard,
  BarChart,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const phases = [
  {
    num: "01",
    title: "Build & Migrate",
    summary:
      "Move from fragmented legacy systems to a stable, cloud-native operating core.",
    items: [
      {
        title: "Modernization",
        description:
          "Migration from legacy systems to cloud-based Zoho Creator.",
        icon: CloudUpload,
      },
      {
        title: "Data Migration",
        description: "Secure, phased migration with minimal disruption.",
        icon: Database,
      },
      {
        title: "Integrations",
        description: "LMS, Zoom, and Zoho ecosystem connectors.",
        icon: Link,
      },
    ],
  },
  {
    num: "02",
    title: "Automate Operations",
    summary:
      "Turn repetitive workflows into connected, auditable digital processes.",
    items: [
      {
        title: "Workflow Automation",
        description: "Automate admissions, approvals, and academic processes.",
        icon: Workflow,
      },
      {
        title: "Payment Systems",
        description: "Fee collection & automated reconciliation.",
        icon: CreditCard,
      },
      {
        title: "Reports & Dashboards",
        description: "Visual dashboards for every stakeholder.",
        icon: BarChart2,
      },
    ],
  },
  {
    num: "03",
    title: "Improve Outcomes",
    summary:
      "Use data and intelligence to guide decisions across your institution.",
    items: [
      {
        title: "Analytics",
        description: "Student trends & performance intelligence.",
        icon: BarChart,
      },
      {
        title: "AI & IoT Features",
        description: "Smart prediction tools and attendance monitoring.",
        icon: BrainCircuit,
        highlight: true,
      },
      {
        title: "Training & Support",
        description: "Post-go-live support and staff training.",
        icon: Headphones,
      },
    ],
  },
];

const deliveryOutcomes = [
  "Single source of academic operations",
  "Minimal disruption during rollout",
  "Role-based dashboards for every team",
  "Continuous support after go-live",
];

export function Services() {
  return (
    <section className="py-28 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#0a1525_0%,#0f1e36_55%,#111c2e_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(15,76,129,0.18),transparent)]" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Section header ── */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary-light mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
            What we deliver
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="font-display font-bold text-white leading-[1.1] mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Everything you need to{" "}
            <span className="text-secondary italic">flow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.13 }}
            className="text-lg text-neutral-400 leading-relaxed"
          >
            A complete digital transformation stack built for education — from
            consulting to AI.
          </motion.p>
        </div>

        {/* ── Foundation banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 rounded-3xl border border-white/10 bg-white/4 overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_1px_1fr]">
            {/* Left */}
            <div className="p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
                  Foundation
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/40 border border-white/10 text-white flex items-center justify-center">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight">
                    Education-Focused Consulting
                  </h3>
                </div>
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base max-w-sm">
                  Deep-dive requirement collection with a lifecycle-based
                  approach tailored specifically for educational institutions.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors w-fit"
              >
                Talk to a consultant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-white/10" />

            {/* Right — outcomes grid */}
            <div className="p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-3 content-center">
              {deliveryOutcomes.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/3 px-4 py-3.5"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                  <span className="text-sm text-neutral-300 leading-snug">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Phase strips ── */}
        <div className="space-y-3">
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: phaseIdx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-3xl border border-white/10 bg-white/3 hover:bg-white/5.5 transition-colors duration-300 overflow-hidden min-h-52"
            >
              <div className="grid lg:grid-cols-[260px_1px_1fr] items-stretch h-full">
                {/* Phase label column */}
                <div className="relative p-8 flex flex-col justify-between overflow-hidden">
                  {/* Giant decorative number */}
                  <span
                    className="absolute -top-4 -left-2 font-display font-bold text-white/5 select-none leading-none pointer-events-none"
                    style={{ fontSize: "clamp(6rem, 12vw, 9rem)" }}
                    aria-hidden="true"
                  >
                    {phase.num}
                  </span>
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary mb-3">
                      Phase {phase.num}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {phase.summary}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block bg-white/8 group-hover:bg-white/14 transition-colors duration-300" />

                {/* Items row */}
                <div className="p-6 grid sm:grid-cols-3 gap-3 items-stretch content-center">
                  {phase.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: phaseIdx * 0.1 + itemIdx * 0.06 + 0.15,
                      }}
                      className={`rounded-2xl border px-4 py-4 flex flex-col gap-3 h-full ${
                        item.highlight
                          ? "border-secondary/25 bg-secondary/[0.07]"
                          : "border-white/8 bg-white/3"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          item.highlight
                            ? "bg-secondary/20 text-secondary"
                            : "bg-primary/30 text-primary-mid"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-white leading-tight mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Closing tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-5 flex items-center justify-center gap-3 text-sm text-neutral-500"
        >
          <span className="h-px flex-1 bg-white/8 max-w-30" />
          <span>
            From migration to AI —{" "}
            <span className="text-secondary font-medium">
              one partner, one platform.
            </span>
          </span>
          <span className="h-px flex-1 bg-white/8 max-w-30" />
        </motion.div>
      </div>
    </section>
  );
}
