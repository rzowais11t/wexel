import React from "react";
import Link from "next/link";
import { ArrowLeft, Globe, Code2, Search, Smartphone, Shield, Zap, MousePointerClick } from "lucide-react";
import { WebsiteLoadAnimation } from "@/components/ServiceAnimations";

export default function WebPage() {
  return (
    <div className="min-h-screen text-white bg-black">


      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
            <Globe className="w-6 h-6 text-white mr-4" />
            <WebsiteLoadAnimation />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Blistering Speed.<br />Relentless Conversion.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            We engineer digital experiences that load instantly, rank at the top of search results, and are scientifically designed to turn casual visitors into high-value customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
                Upgrade Your Web Presence
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Architected for Performance</h2>
            <p className="text-lg text-gray-400">Your website is your best salesperson. We build it using modern frameworks like Next.js and React, ensuring it outperforms the competition in every measurable metric.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Edge Delivery",
                desc: "Assets are served from edge nodes closest to your users, guaranteeing sub-second load times globally."
              },
              {
                icon: Search,
                title: "Technical SEO",
                desc: "Perfect Core Web Vitals, dynamic sitemaps, and server-side rendering ensure Google loves your site."
              },
              {
                icon: MousePointerClick,
                title: "CRO Masterclass",
                desc: "Every button, gradient, and layout is strategically placed based on millions of data points to maximize conversions."
              },
              {
                icon: Smartphone,
                title: "Flawless Responsive",
                desc: "Pixel-perfect rendering across every device. We prioritize the mobile experience because your customers do."
              },
              {
                icon: Code2,
                title: "Headless Architecture",
                desc: "Decoupled front-ends allow for ultimate flexibility, connecting seamlessly to your preferred CMS or inventory system."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade encryption, DDOS mitigation, and secure authentication flows protect your business and users."
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Stop Losing to Slow Sites.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            A one-second delay in page response can result in a 7% reduction in conversions. Let us build you the fastest site in your industry.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Start Web Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
