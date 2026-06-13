import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-y-10 mb-12 text-left">
          <div className="max-w-sm">
            <p className="text-gray-300 text-sm font-semibold tracking-tight">AI Automation & Infrastructure</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <Link href="/vision" className="hover:text-white transition">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/#case-studies" className="hover:text-white transition">
                    Case studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Legal</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2026 wexel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
              Twitter
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
