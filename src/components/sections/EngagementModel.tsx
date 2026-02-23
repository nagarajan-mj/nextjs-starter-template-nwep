"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ScanSearch, Palette, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Understand",
    description: "Culture, structure, and constraints of the institution",
    icon: Search,
  },
  {
    id: "02",
    title: "Identify",
    description: "Where the flow breaks — bottlenecks and friction points",
    icon: ScanSearch,
  },
  {
    id: "03",
    title: "Design",
    description: "Education-first system architecture for seamless flow",
    icon: Palette,
  },
  {
    id: "04",
    title: "Build",
    description: "Flexible and scalable solutions on Zoho Creator",
    icon: Wrench,
  },
  {
    id: "05",
    title: "Evolve",
    description: "Continuous improvement as the institution grows",
    icon: Rocket,
  },
];

export function EngagementModel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-neutral-50 relative overflow-hidden"
      id="process"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display font-extrabold text-foreground mt-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            A proven five-step engagement model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-500 mt-4"
          >
            We don&apos;t just deliver software — we partner with your
            institution every step of the way.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated connector line */}
          <div
            ref={lineRef}
            className="absolute top-8 left-[calc(10%)] w-[80%] h-0.5 hidden md:block overflow-hidden"
          >
            <div className="h-full bg-neutral-200 w-full" />
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 relative">
                  {/* Ghost step number */}
                  <span className="absolute -top-4 -right-4 font-display font-extrabold text-5xl text-neutral-100 group-hover:text-primary/10 transition-colors select-none pointer-events-none leading-none">
                    {step.id}
                  </span>
                  {/* Icon circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary-light transition-all duration-300 shadow-sm">
                    <step.icon className="w-6 h-6 text-neutral-400 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-base mb-1.5 text-neutral-800 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
