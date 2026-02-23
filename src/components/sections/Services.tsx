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

const services = [
  {
    title: "Education-Focused Consulting",
    description:
      "Structured requirement collection with a lifecycle-based approach tailored for institutions.",
    icon: Briefcase,
    featured: true,
  },
  {
    title: "Modernization & Digital Transformation",
    description:
      "Migration from legacy systems to cloud-based Zoho Creator platforms.",
    icon: CloudUpload,
    featured: false,
  },
  {
    title: "Workflow Automation",
    description:
      "Admissions, approvals, academic processes, certifications — all automated.",
    icon: Workflow,
    featured: false,
  },
  {
    title: "Data Migration",
    description:
      "Secure, phased migration with minimal disruption to ongoing operations.",
    icon: Database,
    featured: true,
  },
  {
    title: "Training & Support",
    description:
      "Post-go-live support, staff training, and continuous improvement cycles.",
    icon: Headphones,
    featured: false,
  },
  {
    title: "Reports & Dashboards",
    description:
      "Visual dashboards and compliance reporting for every stakeholder.",
    icon: BarChart2,
    featured: false,
  },
  {
    title: "Integrations",
    description:
      "LMS, Zoom, Zoho ecosystem, and custom institutional system connectors.",
    icon: Link,
    featured: false,
  },
  {
    title: "Payment Integrations",
    description:
      "Fee collection, online gateways, and automated reconciliation.",
    icon: CreditCard,
    featured: false,
  },
  {
    title: "Data Analytics",
    description:
      "Student trends, attendance patterns, and performance intelligence.",
    icon: BarChart,
    featured: false,
  },
  {
    title: "AI-Driven Features",
    description:
      "Smart automation and prediction tools built on your institutional data.",
    icon: BrainCircuit,
    featured: false,
  },
  {
    title: "IoT Implementations",
    description:
      "Attendance monitoring and real-time facility insights via IoT.",
    icon: Wifi,
    featured: false,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display font-extrabold text-foreground mt-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Everything your institution needs to flow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-500 mt-4"
          >
            From consulting to AI — a complete digital transformation stack
            built for education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={service.featured ? "lg:col-span-1" : ""}
            >
              <div
                className={`card-clean h-full p-6 group ${
                  service.featured
                    ? "bg-primary-light/40 border-primary/20 hover:border-primary/40"
                    : ""
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
                    service.featured
                      ? "bg-primary text-white group-hover:bg-primary-hover"
                      : "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <service.icon className="h-5 w-5" />
                </div>
                <h3
                  className={`font-display font-bold text-base mb-1.5 group-hover:text-primary transition-colors ${
                    service.featured ? "text-primary" : "text-neutral-800"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
