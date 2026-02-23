"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is EduFlow and who is it for?",
    answer:
      "EduFlow is Zitraar's education-focused digital transformation initiative, built on Zoho Creator. It's designed for schools, colleges, and institutions that want to eliminate administrative bottlenecks and create seamless, end-to-end workflows — from admissions to alumni management.",
  },
  {
    question: "Do we need to already use Zoho products?",
    answer:
      "No prior Zoho experience is needed. Our team handles the full setup, configuration, and integration. If you already use Zoho tools, EduFlow integrates seamlessly with your existing ecosystem.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on institution size and scope. A focused module (e.g., admissions only) can go live in 4–6 weeks. A full digital transformation across departments typically takes 3–6 months, including training and support.",
  },
  {
    question: "Will our existing data be migrated safely?",
    answer:
      "Yes. We have a structured data migration process with validation checkpoints at every stage. Migration is phased to minimize disruption, and all data is verified before cutover. We have successfully migrated data from spreadsheets, legacy ERPs, and third-party tools.",
  },
  {
    question: "What kind of ongoing support do you provide?",
    answer:
      "We offer post-go-live support through a dedicated helpdesk, regular system health checks, staff training sessions, and a continuous improvement cycle. We stay engaged as the institution grows.",
  },
  {
    question: "Is EduFlow customizable for our specific workflows?",
    answer:
      "Absolutely. EduFlow is built on Zoho Creator, which is a low-code platform that allows deep customization. We design every solution around your institution's unique structure, processes, and reporting requirements — no one-size-fits-all approach.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is based on scope — the number of modules, users, and integration complexity. We offer fixed-scope project engagements and ongoing managed service plans. Book a free demo call and we'll provide a transparent quote based on your requirements.",
  },
  {
    question: "Can EduFlow scale as our institution grows?",
    answer:
      "Yes. The platform is built for scalability — whether you expand enrollments, add new departments, or open new campuses. Zoho Creator's architecture supports multi-campus, multi-role, and multi-year deployments.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          {/* Left: headline */}
          <div className="lg:col-span-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display font-extrabold text-foreground mt-4 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Answers to common questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-500 mt-4 leading-relaxed"
            >
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="#demo"
                className="text-primary font-semibold hover:underline"
              >
                Talk to us directly.
              </a>
            </motion.p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  openIndex === i
                    ? "border-primary/25 bg-primary-light/30"
                    : "border-neutral-200 bg-neutral-50 hover:border-neutral-300"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-neutral-800 text-sm leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === i
                        ? "bg-primary text-white"
                        : "bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-primary/10 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
