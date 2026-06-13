"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary based on complexity and your existing infrastructure. Most solutions launch within 2-3 weeks from discovery to deployment. We break the process into phases so you can see results early while we build out more sophisticated capabilities.",
    },
    {
      question: "Do you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in seamless integration with your current tech stack—CRMs, databases, APIs, and custom applications. Our solutions are built to complement and enhance what you already have, not replace it entirely.",
    },
    {
      question: "What level of support do we get after launch?",
      answer:
        "We provide ongoing support through dedicated channels, monthly performance reviews, and continuous optimization. Your AI system learns and improves over time, and we're here to adjust, refine, and expand capabilities as your business evolves.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "Data security is non-negotiable. We implement enterprise-grade encryption, follow industry compliance standards (GDPR, CCPA, SOC 2), and maintain strict access controls. Your data remains in your infrastructure or certified cloud providers you trust.",
    },
    {
      question: "Can we customize the AI behavior for our specific workflows?",
      answer:
        "Yes. Every solution is custom-built for your unique workflows and business logic. We don't use generic templates—we analyze your specific needs and train the AI system to operate exactly how your team needs it to work.",
    },
    {
      question: "What's the pricing model?",
      answer:
        "We offer flexible pricing based on complexity, scale, and the specific services you need. We typically discuss this during discovery to understand your requirements, budget, and expected ROI. No hidden costs—just transparent pricing.",
    },
  ];

  return (
    <section id="faq" className="pb-32 pt-16 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest">( QUESTIONS )</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className="rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />
                      <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <Link href="/contact" className="text-white hover:underline underline-offset-4 decoration-white/30">
              Get in touch with our team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
