import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, Network, TrendingUp, UserCheck, Layers, Bot } from "lucide-react";
import { PipelineAnimation } from "@/components/ServiceAnimations";

export default function CRMPage() {
  return (
    <div className="min-h-screen text-white bg-black">


      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
            <Database className="w-6 h-6 text-white mr-4" />
            <PipelineAnimation />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              The CRM that Closes<br />Deals for You.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Traditional CRMs are just glorified spreadsheets. Our AI-native CRM actively manages your pipeline, scores leads predictively, and automates follow-ups so your sales team only focuses on closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
                Upgrade Your Pipeline
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pipeline Velocity, Weaponized</h2>
            <p className="text-lg text-gray-400">Eliminate manual data entry. Our intelligent architecture captures every touchpoint across email, phone, and web, organizing chaos into a predictable revenue engine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Predictive Lead Scoring",
                desc: "AI evaluates hundreds of signals to rank leads based on their likelihood to close, prioritizing your team's focus."
              },
              {
                icon: Bot,
                title: "Autonomous Nurturing",
                desc: "When a lead goes cold, the AI takes over, sending hyper-personalized re-engagement emails until they are ready to talk."
              },
              {
                icon: Layers,
                title: "Zero Data Entry",
                desc: "Automatically logs calls, transcribes meetings, and updates deal stages without a single click from your sales reps."
              },
              {
                icon: Network,
                title: "Omnichannel Sync",
                desc: "A unified view of the customer across every platform. See their last tweet, support ticket, and email in one view."
              },
              {
                icon: UserCheck,
                title: "Smart Routing",
                desc: "Instantly routes high-value inbound leads to the best-performing rep based on historical closing data."
              },
              {
                icon: Database,
                title: "Legacy Migration",
                desc: "Seamless, zero-downtime migration from Salesforce, HubSpot, or Pipedrive. We move the data, you get the upgrade."
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Stop Managing Data. Start Closing.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Give your sales team the unfair advantage of an AI assistant that handles the busywork. Book a demo to see the CRM of the future.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Book CRM Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
