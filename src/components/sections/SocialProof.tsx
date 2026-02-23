import React from "react";

const partners = [
  "STS Institution",
  "Ramakrishna Mission",
  "RKM Villupuram",
  "Zoho Partner",
  "500+ Institutions Served",
  "STS Institution",
  "Ramakrishna Mission",
  "RKM Villupuram",
  "Zoho Partner",
  "500+ Institutions Served",
];

const quotes = [
  '"EduFlow cut our admin time by 60%." — College Principal',
  '"From admissions to alumni, everything flows." — Academic Director',
  '"Zoho Creator done right for education." — IT Head',
  '"EduFlow cut our admin time by 60%." — College Principal',
  '"From admissions to alumni, everything flows." — Academic Director',
  '"Zoho Creator done right for education." — IT Head',
];

export function SocialProof() {
  return (
    <section className="relative py-14 bg-neutral-50 border-y border-neutral-200 overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-50 to-transparent" />

      {/* Row 1 — partners, left scroll */}
      <div className="overflow-hidden mb-5">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {partners.concat(partners).map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-8 text-sm font-semibold text-neutral-500 uppercase tracking-widest shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — testimonials, right scroll */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-0">
          {quotes.concat(quotes).map((quote, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-10 text-sm text-neutral-400 italic shrink-0"
            >
              {quote}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
