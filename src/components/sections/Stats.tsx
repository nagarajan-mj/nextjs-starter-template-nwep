"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 10000,
    suffix: "+",
    label: "Students Managed",
    description: "Across active EduFlow deployments",
  },
  {
    value: 500,
    suffix: "+",
    label: "Institutions Served",
    description: "Schools, colleges & academies",
  },
  {
    value: 3,
    suffix: "",
    label: "Flagship Partnerships",
    description: "Incl. Ramakrishna Mission & STS",
  },
  {
    value: 100,
    suffix: "%",
    label: "Zoho Certified",
    description: "Certified Zoho Creator professionals",
  },
];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  const formatted =
    count >= 1000 ? `${(count / 1000).toFixed(0)}k` : count.toString();
  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 bg-neutral-900 overflow-hidden"
    >
      {/* Subtle inner glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-white/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(255,255,255,0.07),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div
                className="font-display font-extrabold text-white leading-none mb-1"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  active={inView}
                />
              </div>
              <div className="text-white font-semibold text-base mt-2 mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-sm leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
