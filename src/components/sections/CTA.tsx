"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(15,76,129,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(199,125,42,0.2),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Let&apos;s work together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display font-extrabold leading-tight text-white mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Ready to make education{" "}
            <span
              className="text-shimmer"
              style={{ WebkitTextFillColor: "initial" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                flow?
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Join institutions that have transformed their operations with
            EduFlow. Let&apos;s build your seamless digital ecosystem together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 group w-full sm:w-auto font-bold h-13 px-8 rounded-full border border-transparent transition-all shadow-lg shadow-black/20 hover:scale-[1.02]"
              onClick={() => {
                document
                  .getElementById("demo")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/20 text-white/80 hover:bg-white/10 hover:text-white w-full sm:w-auto h-13 px-8 bg-transparent rounded-full"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
