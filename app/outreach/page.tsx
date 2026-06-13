import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Target, Send, Sparkles, Crosshair, BarChart, Unlock } from "lucide-react";
import { EmailPulseAnimation } from "@/components/ServiceAnimations";

export default function OutreachPage() {
  return (
    <div className="min-h-screen text-white bg-black">


      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
            <Mail className="w-6 h-6 text-white mr-4" />
            <EmailPulseAnimation />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Infinite Personalization.<br />Maximum Deliverability.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Stop sending generic blasts. Our AI researches every single prospect on your list and writes a unique, highly relevant email that demands a reply. Scale to tens of thousands of emails daily without hitting spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
                Start Campaign
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Precision Engineering for Inboxes</h2>
            <p className="text-lg text-gray-400">Cold email is a math problem combined with a psychology problem. We solved both. High volume capability meets unprecedented individual personalization.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Deep AI Research",
                desc: "Scrapes LinkedIn, recent news, and company blogs to reference specific, hyper-relevant facts in the opening line."
              },
              {
                icon: Unlock,
                title: "Inbox Placement",
                desc: "Automated domain warming, SPF/DKIM/DMARC optimization, and spintax ensure you land in the primary inbox."
              },
              {
                icon: Send,
                title: "Volume Scaling",
                desc: "Distributes sending across hundreds of optimized workspaces to safely scale to 50,000+ emails per day."
              },
              {
                icon: Target,
                title: "Smart Follow-ups",
                desc: "AI detects out-of-office replies, soft bounces, and positive sentiment to adjust the follow-up sequence dynamically."
              },
              {
                icon: Crosshair,
                title: "A/B Multivariate",
                desc: "Continuously tests subject lines, CTAs, and angles, automatically routing traffic to the highest converting variants."
              },
              {
                icon: BarChart,
                title: "Predictive Analytics",
                desc: "Forecasts campaign performance based on list quality and historical data before you even hit send."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <feature.icon className="w-8 h-8 text-white mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Flood Your Calendar.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Ready to turn your cold lists into booked meetings on autopilot? Let us show you the infrastructure that powers hyper-growth.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Get Your Audit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
