"use client";

import React from "react";
import { Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import PrismaticBurst from "@/components/PrismaticBurst";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#808080', '#808080', '#808080']}
        />
      </div>
      <div className="relative z-10">
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-sans text-muted-foreground mb-6 tracking-widest uppercase">
              (Contact)
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground text-balance leading-none mb-8">
              Let&apos;s Build Something Intelligent.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ready to automate your operations? Book a call and we&apos;ll craft a custom AI solution designed for your exact needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Calendly booking panel */}
            <div className="lg:col-span-3" id="book-meeting">
              <div className="relative w-full rounded-3xl border border-white/10 bg-zinc-950/50 p-8 sm:p-10 backdrop-blur-md flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-zinc-900 flex items-center justify-center mb-8 flex-shrink-0 shadow-inner">
                  <Calendar className="w-8 h-8 text-white" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  Book a Free Strategy Call
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed max-w-md mb-10">
                  Choose a time that works for you. We&apos;ll spend 20 minutes understanding your business and mapping out the right AI strategy.
                </p>

                {/* Meeting details */}
                <div className="w-full max-w-md space-y-3 mb-10">
                  {[
                    { icon: Clock, label: "Duration", value: "20 minutes" },
                    { icon: Calendar, label: "Format", value: "Video call (Google Meet / Zoom)" },
                    { icon: Mail, label: "Confirmation", value: "Instant email confirmation" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] text-left hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                          {label}
                        </p>
                        <p className="text-sm text-zinc-200 font-medium truncate">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calendly CTA */}
                <a
                  href="https://calendly.com/rzowais11/wexel"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="calendly-book-btn"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-zinc-200 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Meeting</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10">
              {/* Direct contact */}
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href="mailto:owais@wexel.ai"
                    className="group flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">owais@wexel.ai</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">
                  Response Time
                </h3>
                <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <p className="text-foreground font-semibold mb-1">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We respond to every inquiry within one business day. For urgent projects, mention it when booking.
                  </p>
                </div>
              </div>

              {/* What happens next */}
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Book Your Call", description: "Pick a time directly in your calendar — takes less than 30 seconds." },
                    { step: "02", title: "Discovery Session", description: "We spend 20 minutes learning about your business goals and challenges." },
                    { step: "03", title: "Custom Proposal", description: "You receive a tailored AI plan with scope, timeline, and transparent pricing." },
                    { step: "04", title: "Build & Launch", description: "Our team builds your solution and deploys it within weeks, not months." },
                  ].map((e) => (
                    <div className="flex gap-4" key={e.step}>
                      <span className="text-xs font-sans text-muted-foreground/50 mt-1 flex-shrink-0">
                        {e.step}
                      </span>
                      <div>
                        <p className="text-foreground font-semibold text-sm mb-1">{e.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
