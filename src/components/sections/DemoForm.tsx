"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";

const trust = [
  "Free, no-obligation consultation call",
  "Response within 1 business day",
  "Zoho Creator Certified professionals",
];

export function DemoForm() {
  const [form, setForm] = useState({ name: "", institution: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.institution || !form.contact) return;
    setLoading(true);
    // Simulate a short delay, then "submit" via mailto
    setTimeout(() => {
      const subject = encodeURIComponent(
        `Demo Request from ${form.institution}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nInstitution: ${form.institution}\nContact: ${form.contact}`,
      );
      window.location.href = `mailto:hello@zitraar.com?subject=${subject}&body=${body}`;
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      className="py-24 bg-neutral-50 border-t border-neutral-100"
      id="demo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-label mb-4"
              >
                Request a Demo
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display font-extrabold text-foreground mt-4 leading-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                See EduFlow in action — built around your institution
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-neutral-500 mt-4 leading-relaxed"
              >
                Drop your details and our team will reach out to understand your
                requirements and schedule a personalized walkthrough.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-6 space-y-3"
              >
                {trust.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-8 flex items-center gap-3 p-4 bg-primary-light rounded-xl border border-primary/15"
              >
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-800">
                    Trusted by real institutions
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">
                    STS, Ramakrishna Mission, RKM Villupuram & more
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-neutral-800 mb-2">
                      We&apos;ll be in touch soon!
                    </h3>
                    <p className="text-neutral-500 text-sm">
                      Your request has been received. Our team will reach out
                      within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="e.g. Dr. Rajan Suresh"
                        className="w-full h-11 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Institution Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.institution}
                        onChange={(e) =>
                          setForm({ ...form, institution: e.target.value })
                        }
                        placeholder="e.g. St. Thomas College"
                        className="w-full h-11 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Email or WhatsApp{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.contact}
                        onChange={(e) =>
                          setForm({ ...form, contact: e.target.value })
                        }
                        placeholder="email@institution.edu or +91 98765 43210"
                        className="w-full h-11 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold transition-all hover:scale-[1.02] shadow-md shadow-primary/20 disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Book My Free Demo"}
                      {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                    <p className="text-xs text-center text-neutral-400">
                      No spam. No pressure. 100% free consultation.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
