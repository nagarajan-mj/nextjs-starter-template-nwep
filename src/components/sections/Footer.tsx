"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-display font-bold text-base group-hover:bg-primary-hover transition-colors">
                E
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                EduFlow
              </span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Modernizing educational institutions with seamless digital
              workflows — powered by Zoho Creator.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2 bg-neutral-800 rounded-full hover:bg-primary hover:text-white transition-all text-neutral-400"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm">Solution</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Digital Campus",
                "Learning Management",
                "Admissions",
                "Student Success",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Documentation",
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© {currentYear} Zitraar Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-neutral-300 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
