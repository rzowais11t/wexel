import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl sm:text-7xl font-black mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-400 text-center mb-12">Last Updated: April 26, 2026</p>
          
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                At wexel.ai, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our AI automation services. 
                We operate as a premium AI infrastructure provider, and the security of your data is our highest priority.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect information that identifies you or relates to an identifiable individual, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (e.g., name, email address, phone number).</li>
                <li>Business data necessary for AI infrastructure deployment.</li>
                <li>Usage data and technical information (e.g., IP address, browser type).</li>
                <li>Communication preferences and records of interactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our AI services.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>Communicate with you regarding service updates or inquiries.</li>
                <li>Detect and prevent fraudulent or unauthorized activity.</li>
                <li>Ensure compliance with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement industry-leading security measures to protect your information. Our infrastructure is 
                designed with encryption and advanced access controls to ensure that your business intelligence remains 
                private and secure at all times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Data Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. If you wish to exercise 
                any of these rights or have questions about how we handle your data, please contact our privacy 
                team at the email address provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <p className="text-white font-bold mb-1">wexel.ai Privacy Team</p>
                <a href="mailto:privacy@wexel.ai" className="text-gray-400 hover:text-white transition-colors">
                  privacy@wexel.ai
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link href="/">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-6 text-base rounded-full transition-all hover:scale-105">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
