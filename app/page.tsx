import React from "react";
import Link from "next/link";
import { Phone, Mail, ShoppingCart, Globe, Database, Share2, Plus } from "lucide-react";
import { SoundWaveAnimation, EmailPulseAnimation, CartPriceAnimation, PostsAnimation, WebsiteLoadAnimation, PipelineAnimation } from "@/components/ServiceAnimations";
import { Button } from "@/components/ui/button";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import dynamic from "next/dynamic";
import DitherWrapper from "@/components/DitherWrapper";

const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
const CaseStudiesSection = dynamic(() => import("@/components/CaseStudiesSection").then((mod) => mod.CaseStudiesSection));

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Dither animated background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <DitherWrapper
            waveColor={[0.6, 0.6, 0.6]}
            waveSpeed={0.04}
            waveFrequency={2.5}
            waveAmplitude={0.4}
            colorNum={6}
            pixelSize={2}
            enableMouseInteraction={false}
            mouseRadius={0.5}
          />
        </div>
        {/* Subtle overlay so hero text stays crisp */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
          <h1 className="hero-responsive-text mb-6 sm:mb-12 text-balance">
            <span
              className="bg-clip-text text-transparent drop-shadow-lg font-black leading-none tracking-tight"
              style={{
                backgroundImage: "linear-gradient(180deg, rgb(245, 245, 245) 0%, rgb(128, 128, 128) 100%)",
              }}
            >
              Accelerated Operations. Intelligent Growth.
            </span>
          </h1>
          <p className="text-base min-[375px]:text-lg sm:text-xl text-gray-400 max-w-3xl mb-8 sm:mb-12 leading-relaxed text-balance">
            Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7. Eradicate operational friction
            with autonomous systems built for infinite scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndustryMarquee />




      <section id="services" className="py-20 border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest uppercase">(DIGITAL FOUNDRY)</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 text-balance">
              Enterprise AI Services
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Specialized AI solutions engineered for enterprise-scale operations. From voice automation to intelligent commerce, we build the systems that power next-generation businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "AI Voice Solutions",
                description:
                  "AI voice agents that pick up the phone, qualify leads, book appointments, and handle support. They sound human, work 24/7, and never miss a call.",
                animation: SoundWaveAnimation,
                href: "/voice",
              },
              {
                icon: Mail,
                title: "Mass Outreach Automation",
                description:
                  "AI writes a unique email for every prospect. Actual personalization based on who they are and what they care about. Thousands go out. They land in inboxes, not spam.",
                animation: EmailPulseAnimation,
                href: "/outreach",
              },
              {
                icon: ShoppingCart,
                title: "E-Commerce Intelligence",
                description:
                  "AI that knows what your customers want before they do. Dynamic pricing adjusts in real time. Abandoned carts get recovered automatically.",
                animation: CartPriceAnimation,
                href: "/ecom",
              },
              {
                icon: Share2,
                title: "Autonomous Social Media",
                description:
                  "AI that schedules posts, responds to engagement, and tracks performance across every platform you use. One dashboard. No manual posting.",
                animation: PostsAnimation,
                href: "/social",
              },
              {
                icon: Globe,
                title: "Next-Gen Web Experiences",
                description:
                  "Websites that load fast, rank well, and convert visitors into customers. Clean code, strategic design, and SEO built into the foundation.",
                animation: WebsiteLoadAnimation,
                href: "/web",
              },
              {
                icon: Database,
                title: "Intelligent AI CRM",
                description:
                  "AI-powered CRM that drives engagement, scores leads, and automates follow-ups across every channel. Faster response times. A pipeline you can trust.",
                animation: PipelineAnimation,
                href: "/crm",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              const AnimationComponent = item.animation;
              return (
                <Link href={item.href} key={i}>
                  <div
                    className="group relative h-full p-6 rounded-lg border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                  >
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] group-hover:bg-white transition-all duration-300"
                      style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
                      aria-label="Learn more"
                    >
                      <Plus className="w-4 h-4 text-white absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                      <Plus className="w-4 h-4 text-black absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    {AnimationComponent && (
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <AnimationComponent />
                        </div>
                      </div>
                    )}
                    {!AnimationComponent && (
                      <div className="mb-4">
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    )}
                    <h3 className="text-base font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="pt-12 border-t border-white/5 text-center" style={{ marginTop: 0, marginBottom: "-55px" }}>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Each solution is engineered to scale with your enterprise, integrate seamlessly with your existing infrastructure, and deliver measurable ROI from day one.
            </p>
          </div>
        </div>
      </section>

      <CaseStudiesSection />



      <FAQ />

      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          {/* Glassmorphism CTA Card — full width */}
          <div className="relative w-full">
            {/* Wide ambient glow — white/gray only */}
            <div
              className="absolute inset-0 rounded-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute -inset-8 rounded-3xl opacity-15 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(200,200,200,0.2) 0%, transparent 70%)",
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 px-8 py-20 sm:py-28 sm:px-16 flex flex-col items-center text-center"
              style={{
                backgroundColor: "rgba(15, 15, 15, 0.9)",
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Top-edge shimmer */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                }}
              />

              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
                Get Started
              </p>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgb(245, 245, 245) 0%, rgb(128, 128, 128) 100%)",
                  }}
                >
                  Ready to Automate?
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
                Join the future of work. Let&apos;s transform your business together.
              </p>

              <Link href="/contact" className="w-full sm:w-auto">
                <button
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-black hover:bg-gray-100 font-semibold px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Book an Audit
                  <svg className="w-5 h-5 flex-shrink-0 opacity-60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
