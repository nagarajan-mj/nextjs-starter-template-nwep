"use client";

import { motion } from "framer-motion";
import { Heart, Building2, GraduationCap, Code2 } from "lucide-react";

const pillars = [
  {
    title: "A Shared Passion for Education",
    description:
      "Education is not just a vertical — it's a long-term commitment. Solutions designed with empathy for educators and administrators.",
    icon: Heart,
  },
  {
    title: "Real Experience Inside Institutions",
    description:
      "Worked closely with STS, Ramakrishna Mission Students Home, RKM Villupuram, and more. First-hand exposure, not assumptions.",
    icon: Building2,
  },
  {
    title: "In-House Academy & Partnerships",
    description:
      "Running an in-house academy with active MoUs and tie-ups with colleges. Continuous feedback loop between education and system design.",
    icon: GraduationCap,
  },
  {
    title: "Passion for Zoho Creator",
    description:
      "Team of Zoho Creator Certified Professionals. Platform-led thinking with scalable, role-based, multi-year education systems.",
    icon: Code2,
  },
];

export function WhyZitraar() {
  return (
    <section className="py-24 bg-neutral-50" id="why">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Why Zitraar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display font-extrabold text-foreground mt-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Experience, empathy, and a deep love for education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-500 mt-4 leading-relaxed"
          >
            Our strength comes from real institutional experience, genuine
            partnerships, and a Zoho-certified team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="card-clean h-full p-7 group">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
