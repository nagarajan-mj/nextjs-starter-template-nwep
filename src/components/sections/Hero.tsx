"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const headline = ["Let's", "Make", "Education", "Flow."];

const microStats = [
  { value: "500+", label: "Institutions" },
  { value: "Zoho", label: "Certified" },
  { value: "Zero", label: "Lock-in" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="absolute inset-0 bg-dot-grid opacity-25" />
      <div className="absolute top-[-14%] left-[-8%] w-120 h-120 bg-primary/15 rounded-full blur-[88px] opacity-70 animate-[blob_8s_infinite]" />
      <div className="absolute top-[6%] right-[-8%] w-100 h-100 bg-secondary/18 rounded-full blur-[80px] opacity-70 animate-[blob_9s_infinite_1.6s]" />
      <div className="absolute -bottom-16 left-[18%] w-120 h-120 bg-primary-light/90 rounded-full blur-[90px] opacity-55 animate-[blob_10s_infinite_2.2s]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl panel-shell p-8 sm:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-7 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-neutral-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Built for schools, colleges, and universities
            </span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="font-display font-semibold tracking-tight text-foreground leading-[1.04] mb-7"
                style={{ fontSize: "clamp(2.8rem, 6.2vw, 5.8rem)" }}
              >
                {headline.slice(0, 3).map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <br className="hidden sm:block" />
                <motion.span
                  variants={wordVariants}
                  className="relative inline-block text-primary mt-2 sm:mt-0"
                >
                  Flow
                  <svg
                    className="absolute w-full h-3 -bottom-2 left-0 text-secondary pointer-events-none"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="animate-[draw_1s_ease-out_forwards]"
                    />
                  </svg>
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="max-w-2xl text-lg sm:text-xl leading-relaxed text-neutral-700 mb-10"
              >
                EduFlow removes administrative bottlenecks in schools, colleges,
                and institutions so your team spends less time on operations and
                more time on outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.68 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <Button
                  size="lg"
                  className="h-13 px-8 text-base rounded-2xl bg-foreground hover:bg-primary text-white shadow-xl shadow-neutral-900/10 transition-transform hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 text-base rounded-2xl border-neutral-300 bg-white/70 text-foreground hover:text-primary hover:border-primary/30 hover:bg-white font-semibold"
                >
                  <PlayCircle className="h-5 w-5 text-secondary mr-2" />
                  See How It Works
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.75 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-4">
                Snapshot
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="space-y-4"
              >
                {microStats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-end justify-between rounded-2xl border border-neutral-100 px-4 py-3"
                  >
                    <div className="font-display font-semibold text-3xl leading-none text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500 font-semibold mt-0.5 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
              <p className="mt-5 text-sm text-neutral-500 leading-relaxed">
                Trusted by institutions that need admissions, academics, fees,
                and operations to work as one connected system.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
