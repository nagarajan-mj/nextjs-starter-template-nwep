"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Fragmented legacy systems that don't talk to each other",
  "Manual processes & error-prone spreadsheets",
  "Disconnected departments causing information silos",
  "Reporting & compliance pressure with no visibility",
  "Limited real-time management oversight",
];

const solutionPoints = [
  "One unified platform for every academic workflow",
  "Automated admissions, fees, attendance & reporting",
  "Role-based access across departments in real time",
  "Instant dashboards for compliance and performance",
  "Built-in analytics for data-driven decisions",
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            The Challenge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display font-extrabold text-foreground mt-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Educational institutions struggle with the same problems
          </motion.h2>
        </div>

        {/* Two column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problem card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-red-100 bg-red-50/50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-800">
                The Problem
              </h3>
            </div>
            <ul className="space-y-3.5">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-400">
                    {i + 1}
                  </span>
                  <span className="text-neutral-600 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-primary/15 bg-primary-light/40 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-800">
                The EduFlow Solution
              </h3>
            </div>
            <ul className="space-y-3.5 relative">
              {solutionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0 text-primary" />
                  <span className="text-neutral-700 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 relative">
              {[
                ["100%", "Visibility"],
                ["Zero", "Friction"],
              ].map(([val, lbl]) => (
                <div
                  key={lbl}
                  className="rounded-xl bg-white border border-primary/15 p-4 text-center shadow-sm"
                >
                  <div className="font-display font-extrabold text-primary text-xl">
                    {val}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
