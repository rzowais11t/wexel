import React from "react";
import Link from "next/link";
import { ArrowLeft, Share2, MessageSquare, Layout, Activity, Clock, Zap, Target } from "lucide-react";
import { PostsAnimation } from "@/components/ServiceAnimations";

export default function SocialPage() {
  return (
    <div className="min-h-screen text-white bg-black">


      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
            <Share2 className="w-6 h-6 text-white mr-4" />
            <PostsAnimation />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Omnipresence,<br />Fully Automated.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Command attention across every platform without lifting a finger. Our AI generates viral content, schedules at peak times, and engages with your audience 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
                Automate Socials
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Command the Algorithm</h2>
            <p className="text-lg text-gray-400">Social media is a volume game. We replace armies of social media managers with a centralized intelligence that never stops posting, engaging, and optimizing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layout,
                title: "Content Generation",
                desc: "AI writes high-converting copy tailored to the unique formatting and culture of Twitter, LinkedIn, Instagram, and TikTok."
              },
              {
                icon: Clock,
                title: "Predictive Scheduling",
                desc: "Analyzes historical data to determine the exact minute your audience is most active and schedules posts for maximum reach."
              },
              {
                icon: MessageSquare,
                title: "Auto-Engagement",
                desc: "Automatically replies to comments, DMs, and mentions using your brand voice, turning followers into loyal advocates."
              },
              {
                icon: Target,
                title: "Trend Surfing",
                desc: "Monitors global trends and breaking news in real-time, instantly generating relevant content to capture the cultural zeitgeist."
              },
              {
                icon: Zap,
                title: "Competitor Tracking",
                desc: "Quietly analyzes competitor strategies, identifying content gaps and outperforming their best-performing posts."
              },
              {
                icon: Activity,
                title: "Unified Analytics",
                desc: "One central dashboard distilling complex cross-platform metrics into actionable growth and conversion data."
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Dominate Your Niche.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop worrying about what to post. Let us build the engine that makes your brand unignorable.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Build Your Engine
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
