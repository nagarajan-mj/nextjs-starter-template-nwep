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
    <section className="relative overflow-hidden bg-background pt-36 pb-24 lg:pt-52 lg:pb-36">
      {/* Soft gradient glow */}
      <div className="hero-glow absolute inset-0 -z-10 pointer-events-none" />

      {/* Dot grid texture */}
      <div className="bg-dot-grid absolute inset-0 -z-20 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className="section-label">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Powered by Zoho Creator
            </span>
          </motion.div>

          {/* Headline — word by word */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold tracking-tight text-foreground leading-[1.05] mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            {headline.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`inline-block mr-[0.25em] ${
                  word === "Flow." ? "text-shimmer" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto max-w-xl text-lg leading-relaxed text-neutral-500 mb-10"
          >
            EduFlow removes administrative bottlenecks in schools, colleges, and
            institutions — so you can focus on what matters: education.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <Button
              size="lg"
              className="h-13 px-8 text-base rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto font-semibold"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-13 px-6 text-base rounded-full text-neutral-700 hover:text-primary hover:bg-primary-light w-full sm:w-auto font-medium gap-2"
            >
              <PlayCircle className="h-5 w-5 text-primary" />
              See How It Works
            </Button>
          </motion.div>

          {/* Micro-stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex items-center justify-center gap-8 sm:gap-12"
          >
            {microStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-bold text-2xl text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-0.5 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
