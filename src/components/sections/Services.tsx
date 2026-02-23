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
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Education-Focused Consulting",
    description:
      "Deep-dive requirement collection with a lifecycle-based approach tailored specifically for educational institutions.",
    icon: Briefcase,
    className: "md:col-span-2 md:row-span-2 bg-primary text-white", // Highlight
    iconClass: "bg-white/20 text-white",
  },
  {
    title: "Modernization",
    description: "Migration from legacy systems to cloud-based Zoho Creator.",
    icon: CloudUpload,
    className: "md:col-span-1 bg-white",
    iconClass: "bg-orange-100 text-orange-600",
  },
  {
    title: "Workflow Automation",
    description: "Automate admissions, approvals, and academic processes.",
    icon: Workflow,
    className: "md:col-span-1 bg-white",
    iconClass: "bg-teal-100 text-teal-600",
  },
  {
    title: "Data Migration",
    description: "Secure, phased migration with minimal disruption.",
    icon: Database,
    className: "md:col-span-2 bg-white", // Wide
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    title: "Training & Support",
    description: "Post-go-live support and staff training.",
    icon: Headphones,
    className: "md:col-span-1 bg-white",
    iconClass: "bg-purple-100 text-purple-600",
  },
  {
    title: "Reports & Dashboards",
    description: "Visual dashboards for every stakeholder.",
    icon: BarChart2,
    className: "md:col-span-1 bg-white",
    iconClass: "bg-pink-100 text-pink-600",
  },
  {
    title: "Integrations",
    description: "LMS, Zoom, Zoho ecosystem connectors.",
    icon: Link,
    className: "md:col-span-2 bg-neutral-100", // Muted wide
    iconClass: "bg-neutral-200 text-neutral-700",
  },
  {
    title: "Payment Systems",
    description: "Fee collection & automated reconciliation.",
    icon: CreditCard,
    className: "md:col-span-1 bg-white",
    iconClass: "bg-green-100 text-green-600",
  },
  {
    title: "Analytics",
    description: "Student trends & performance intelligence.",
    icon: BarChart,
    className: "md:col-span-1 bg-white",
    iconClass: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "AI & IoT Features",
    description: "Smart prediction tools and attendance monitoring.",
    icon: BrainCircuit,
    className: "md:col-span-2 bg-secondary/10", // Highlight
    iconClass: "bg-secondary/20 text-secondary",
  },
];

export function Services() {
  return (
    <section
      className="py-24 bg-neutral-50 relative overflow-hidden"
      id="services"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-100/50 -skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-foreground text-4xl sm:text-5xl mb-6"
          >
            Everything you need to{" "}
            <span className="text-primary italic">flow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-neutral-600 max-w-xl mx-auto"
          >
            A complete digital transformation stack built for education, from
            consulting to AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "rounded-3xl p-6 relative group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-black/5",
                service.className,
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                  service.iconClass,
                )}
              >
                <service.icon className="w-6 h-6" />
              </div>

              <h3
                className={cn(
                  "font-display font-bold text-xl mb-2",
                  service.title === "Education-Focused Consulting"
                    ? "text-white"
                    : "text-foreground",
                )}
              >
                {service.title}
              </h3>

              <p
                className={cn(
                  "text-sm leading-relaxed",
                  service.title === "Education-Focused Consulting"
                    ? "text-primary-light"
                    : "text-neutral-500",
                )}
              >
                {service.description}
              </p>

              {/* Decorative hover effect */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-black/5 to-transparent rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
