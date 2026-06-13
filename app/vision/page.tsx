import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const roadmapItems = [
  {
    title: "Continuous Learning Ecosystems",
    description: "Our vision relies on continuous learning pipelines where AI architectures adapt in real-time. By observing human interaction and analyzing thousands of operational variables, our systems dynamically rewrite their own logic to optimize for the best possible outcome.",
    bullets: ["Self-optimizing algorithms", "Real-time behavioral adaptation", "Zero-downtime intelligence upgrades"]
  },
  {
    title: "Unifying Data Silos",
    description: "We are building unified knowledge graphs that seamlessly connect disparate data sources—from CRMs and ERPs to unstructured communications—giving our AI models unprecedented context and unlocking insights previously hidden in the noise.",
    bullets: ["Unified Knowledge Graphs", "Cross-platform data synthesis", "Context-aware intelligence"]
  },
  {
    title: "Advanced Autonomous Agents",
    description: "Moving beyond basic automation to fully autonomous agents capable of complex reasoning, multi-step decision making, and self-correction within your ecosystem."
  },
  {
    title: "Innovative Custom Models",
    description: "Training specialized, highly context-aware models tailored for specific industries to guarantee unprecedented accuracy and efficiency in your workflows."
  },
  {
    title: "Global AI Infrastructure",
    description: "Expanding our computational infrastructure globally to reduce latency, ensure data sovereignty, and support enterprise deployments at a massive scale."
  },
  {
    title: "Predictive Enterprise Analytics",
    description: "Developing deep learning models that anticipate market shifts, operational bottlenecks, and customer needs before they occur, turning data into proactive strategy."
  },
  {
    title: "Edge AI Deployments",
    description: "Bringing extreme processing power closer to the data source. We are building decentralized AI infrastructure that operates with zero latency, even in disconnected environments."
  },
  {
    title: "Cognitive Process Automation",
    description: "Transitioning from rigid RPA to cognitive systems that understand nuance, process unstructured data, and dynamically adjust to changing business logic on the fly."
  }
];

export default function Vision() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-12 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(75,85,99,0.1)_0%,transparent_70%)] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(107,114,128,0.1)_0%,transparent_70%)] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-10 pb-20 flex flex-col items-center justify-center text-center" style={{ marginTop: "0px", marginBottom: "-56px" }}>
          <p className="text-sm font-sans text-gray-500 mb-6 tracking-widest uppercase">( OUR VISION )</p>
          <h1 className="text-5xl sm:text-7xl font-black mb-8 text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Shaping the Future<br />of Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed text-balance">
            We are on a mission to democratize enterprise-grade AI. Our roadmap focuses on aggressive expansion, relentless innovation, and redefining operational excellence through advanced autonomous solutions.
          </p>

        </div>
      </section>

      <section id="roadmap" className="py-32 bg-black scroll-mt-24" style={{ marginTop: "-67px", marginBottom: "-49px" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-24">
            <p className="text-sm font-sans text-gray-500 mb-6 tracking-widest uppercase">( OUR ROADMAP )</p>
            <h2 className="text-5xl sm:text-7xl font-black text-white text-balance leading-tight">
              The Blueprint for<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">Intelligent Expansion</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mt-8 max-w-2xl">
              We are actively building the next generation of autonomous solutions, stepping away from traditional formats to push the limits of what is possible.
            </p>
          </div>
          <div className="space-y-0">
            {roadmapItems.map((item, i) => (
              <div key={i} className="group relative border-t border-white/10 py-16 lg:py-20 transition-colors hover:border-white/30 flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="w-24 shrink-0">
                  <span className="text-4xl font-sans text-gray-700 group-hover:text-white transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 group-hover:text-gray-200 transition-colors">{item.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-3xl group-hover:text-gray-300 transition-colors">{item.description}</p>
                  {item.bullets && (
                    <ul className="mt-8 space-y-4">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-center text-lg text-gray-400">
                          <div className="w-1.5 h-1.5 bg-white/30 group-hover:bg-white rounded-full mr-4 transition-colors" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/5" style={{ paddingTop: "35px", paddingBottom: "35px" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">Ready to Join Our Vision?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to build cutting-edge solutions that transform your operational capabilities? We are ready to take the next step.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-6 text-base rounded-full">
              Let's Connect
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
