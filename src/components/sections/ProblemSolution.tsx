"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

// Problem & Solution side-by-side data
const comparisonData = [
  {
    problem: "Legacy systems creating data silos",
    solution: "Unified platform for all workflows",
  },
  {
    problem: "Manual processes & spreadsheets",
    solution: "Automated admission & fee management",
  },
  {
    problem: "Disconnected departments",
    solution: "Real-time role-based access",
  },
  {
    problem: "No visibility on compliance",
    solution: "Instant dashboards & reports",
  },
  {
    problem: "Slow decision making",
    solution: "Built-in analytics & insights",
  },
];

export function ProblemSolution() {
  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="problem-solution"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-foreground text-4xl sm:text-5xl mb-6"
          >
            Transform Chaos into <span className="text-primary">Clarity</span>
          </motion.h2>
          <p className="text-xl text-neutral-600">
            See the difference a unified operating system makes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-red-200 via-neutral-200 to-primary/50 -translate-x-1/2" />

          <div className="space-y-12">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center relative"
              >
                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-neutral-100 rounded-full z-10" />

                {/* Problem (Left) */}
                <div className="md:text-right">
                  <div className="inline-flex items-center gap-3 md:flex-row-reverse bg-red-50/50 border border-red-100 rounded-2xl p-4 md:pr-4 md:pl-6 hover:bg-red-50 transition-colors">
                    <X className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="font-medium text-neutral-600">
                      {item.problem}
                    </span>
                  </div>
                </div>

                {/* Solution (Right) */}
                <div>
                  <div className="inline-flex items-center gap-3 bg-primary-light/30 border border-primary/10 rounded-2xl p-4 md:pl-4 md:pr-6 hover:bg-primary-light/50 transition-colors shadow-sm cursor-default">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-bold text-foreground">
                      {item.solution}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
