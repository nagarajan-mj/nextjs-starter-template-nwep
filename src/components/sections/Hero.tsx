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
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Organic Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-secondary/10 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-[blob_7s_infinite]" />
      <div className="absolute top-[-10%] right-[-10%] w-140 h-140 bg-primary/10 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-[blob_7s_infinite_2s]" />
      <div className="absolute bottom-[-20%] left-[20%] w-180 h-180 bg-accent rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-[blob_7s_infinite_4s]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge - Organic Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-neutral-200 backdrop-blur-sm text-sm font-medium text-neutral-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Powered by Zoho Creator
            </span>
          </motion.div>

          {/* Headline — Staggered & Organic */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold tracking-tight text-foreground leading-[1.1] mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
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
              Flow.
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

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto max-w-xl text-lg sm:text-xl leading-relaxed text-neutral-600 mb-12"
          >
            EduFlow removes administrative bottlenecks in schools, colleges, and
            institutions — so you can focus on what matters: education.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-2xl bg-foreground hover:bg-neutral-800 text-white shadow-xl shadow-neutral-900/10 transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto font-bold"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-14 px-8 text-lg rounded-2xl text-foreground hover:text-primary hover:bg-white/50 w-full sm:w-auto font-medium"
            >
              <PlayCircle className="h-6 w-6 text-secondary mr-2" />
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
