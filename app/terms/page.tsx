import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl sm:text-7xl font-black mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-400 text-center mb-12">Last Updated: April 26, 2026</p>
          
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by wexel.ai, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. These terms apply to all visitors, 
                users, and others who access or use our AI infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                wexel.ai provides premium AI automation services, including bespoke infrastructure deployment, 
                intelligent workflow automation, and AI-driven business intelligence. We reserve the right to modify, 
                suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when required.</li>
                <li>Maintain the confidentiality of any access credentials provided.</li>
                <li>Use our services only for lawful purposes and in accordance with these terms.</li>
                <li>Refrain from any activity that could damage or disrupt our AI infrastructure.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services, including but not limited to AI models, 
                proprietary algorithms, and design elements, are the exclusive property of wexel.ai and are protected 
                by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall wexel.ai be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, or other intangible losses, 
                resulting from your access to or use of our AI services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact our legal team at:
              </p>
              <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <p className="text-white font-bold mb-1">wexel.ai Legal Department</p>
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
