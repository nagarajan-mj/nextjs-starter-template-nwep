"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Outcomes", href: "#problem-solution" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl border px-4 md:px-6 transition-all duration-300 ${
              isScrolled
                ? "border-neutral-200 bg-white/90 shadow-lg shadow-neutral-900/5 backdrop-blur-md"
                : "border-white/40 bg-white/70 backdrop-blur-sm"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group py-3">
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-primary transition-colors shadow-md shadow-neutral-900/20">
                E
              </div>
              <span className="font-display font-semibold text-2xl tracking-tight text-neutral-900">
                EduFlow
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-neutral-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-neutral-600 hover:text-primary hover:bg-primary-light font-semibold text-sm"
              >
                Sign In
              </Button>
              <Button
                className="bg-foreground hover:bg-primary text-white font-semibold text-sm rounded-full px-5 h-10 shadow-md shadow-neutral-900/20 transition-all hover:scale-[1.02]"
                onClick={() => {
                  document
                    .getElementById("demo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-neutral-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[74px] z-40 mx-4 rounded-2xl border border-neutral-200 bg-white/95 shadow-lg backdrop-blur-sm md:hidden"
          >
            <nav className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-neutral-700 hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-neutral-100">
                <Button variant="outline" className="w-full rounded-xl">
                  Sign In
                </Button>
                <Button
                  className="w-full bg-foreground hover:bg-primary text-white rounded-xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("demo")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book a Demo
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
