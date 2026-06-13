import React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Zap, Globe2, ShieldCheck, Cpu, GitBranch, Clock } from "lucide-react";
import { SoundWaveAnimation } from "@/components/ServiceAnimations";

export default function VoicePage() {
  return (
    <div className="min-h-screen text-white bg-black">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
            <Phone className="w-6 h-6 text-white mr-4" />
            <SoundWaveAnimation />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              The End of Missed Calls.<br />The Beginning of Infinite Scale.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Deploy autonomous voice agents that handle tier-1 support, qualify inbound leads, and book appointments 24/7. They sound indistinguishable from humans, but never sleep, never take breaks, and never have a bad day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
                Deploy Voice Agent
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Deep Dive Features */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Engineered for Human Connection</h2>
            <p className="text-lg text-gray-400">Forget robotic IVRs. Our voice models are trained on thousands of hours of premium sales and support calls to navigate complex conversations with empathy and precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Ultra-Low Latency",
                desc: "Sub-300ms response times ensure natural conversation flow without awkward pauses or talking over the customer."
              },
              {
                icon: Globe2,
                title: "Hyper-Polyglot",
                desc: "Fluent in over 40 languages and regional dialects. Instantly switch languages based on customer preference."
              },
              {
                icon: GitBranch,
                title: "Dynamic Branching",
                desc: "No rigid decision trees. The AI adapts to interruptions, tangent questions, and context switching dynamically."
              },
              {
                icon: Cpu,
                title: "CRM Syncing",
                desc: "Updates Salesforce, HubSpot, or your custom CRM in real-time. Logs transcripts, summaries, and sentiment instantly."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Scale from 1 to 10,000 concurrent calls instantly during peak hours. Zero dropped calls. Zero wait times."
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                desc: "SOC2 compliant, end-to-end encryption, and strict PII redaction protocols protect your sensitive customer data."
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

      {/* ROI / Stats Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transforming the Unit Economics of Voice</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Traditional call centers scale linearly. For every hundred calls, you need another human. Our AI infrastructure scales exponentially, allowing you to handle massive volume spikes at a fraction of the cost, while actually improving the customer satisfaction score.
              </p>
              <ul className="space-y-4">
                {[
                  "80% reduction in average handle time",
                  "100% lead follow-up within 5 minutes",
                  "Zero infrastructure overhead required"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent text-center">
                <div className="text-5xl font-black text-white mb-2">3x</div>
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Increase in Booking Rate</div>
              </div>
              <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent text-center">
                <div className="text-5xl font-black text-white mb-2">99%</div>
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Resolution Accuracy</div>
              </div>
              <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent text-center col-span-2">
                <div className="text-5xl font-black text-white mb-2">&lt; 1s</div>
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Average Answer Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Hear the Difference.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Book a live demo to call our AI agent yourself. Try to interrupt it, ask it complex questions, and experience the future of voice.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Schedule Voice Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
