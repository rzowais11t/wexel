import React from "react";
import Link from "next/link";
import { Cpu, Cloud, Database, Zap, Network, Shield, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  { name: "OpenAI", category: "Foundation Models", description: "Leveraging state-of-the-art language models for advanced reasoning and complex problem-solving in enterprise operations.", icon: <Cpu className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" /> },
  { name: "Vercel", category: "Cloud Infrastructure", description: "The platform for high-performance frontend deployments and scalable AI-driven web experiences, optimized for speed and reliability.", icon: <Cloud className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" /> },
  { name: "Pinecone", category: "Vector Database", description: "High-performance vector search empowering our AI models with context-aware memory and unified knowledge graphs.", icon: <Database className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" /> },
  { name: "Anthropic", category: "Advanced LLMs", description: "Integrating constitutional AI models focused on safety, reliability, and nuanced understanding of complex tasks.", icon: <Zap className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" /> },
  { name: "Databricks", category: "Data Intelligence", description: "Unifying data silos and accelerating machine learning workflows to drive predictive analytics and deep insights.", icon: <Network className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" /> },
  { name: "Vanta", category: "Security & Compliance", description: "Ensuring our AI automation pipelines adhere to the strictest global security protocols and zero-trust frameworks.", icon: <Shield className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" /> },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(75,85,99,0.1)_0%,transparent_70%)] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(107,114,128,0.1)_0%,transparent_70%)] rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-sans text-gray-500 mb-6 tracking-widest uppercase">( ECOSYSTEM )</p>
          <h1 className="text-5xl sm:text-7xl font-black mb-8 text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Our Technology<br />Partners
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed text-balance">
            We collaborate with industry leaders in artificial intelligence, cloud computing, and data infrastructure to deliver robust, enterprise-grade autonomous solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {partner.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-sans text-gray-500 mb-2 uppercase">{partner.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">{partner.name}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-transparent via-gray-800/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Join the Alliance</h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed text-balance">
            Are you building next-generation AI infrastructure or specialized tools? We are constantly expanding our ecosystem to deliver the best solutions to our enterprise clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto">
                Apply as Partner
              </Button>
            </Link>
            <Link href="/vision">
              <Button variant="outline" size="lg" className="border-white/20 text-white font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto">
                Read Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
