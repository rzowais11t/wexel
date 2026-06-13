"use client";

import React from "react";
import { Check } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const leadData = [
  { month: "Jan", leadLeakage: 100, appointments: 20 },
  { month: "Feb", leadLeakage: 85, appointments: 35 },
  { month: "Mar", leadLeakage: 60, appointments: 55 },
  { month: "Apr", leadLeakage: 30, appointments: 80 },
  { month: "May", leadLeakage: 10, appointments: 110 },
  { month: "Jun", leadLeakage: 2, appointments: 145 },
];

const originationData = [
  { category: "Before AI", diligenceDays: 45, originationCost: 120 },
  { category: "After AI", diligenceDays: 12, originationCost: 48 },
];

const revenueData = [
  { quarter: "Q1 2025", aov: 650, revenue: 2.1 },
  { quarter: "Q2 2025", aov: 680, revenue: 2.5 },
  { quarter: "Q3 2025", aov: 750, revenue: 3.2 },
  { quarter: "Q4 2025", aov: 890, revenue: 4.8 },
  { quarter: "Q1 2026", aov: 950, revenue: 5.6 },
];

export function CaseStudiesSection() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section id="case-studies" className="py-20 border-t border-white/5 scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(107,114,128,0.1)_0%,transparent_70%)] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest uppercase">( Proven Impact )</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 text-balance">
              Measurable Outcomes.
              <br />
              Definitive Proof.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We do not just deploy technology; we engineer business transformation. Explore deep-dives into how our bespoke AI infrastructure delivers compounding ROI for enterprise clients.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-sans tracking-widest uppercase bg-white/[0.03]">Real Estate</span>
              <span className="text-gray-500">RealEstate Enterprise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Scaling High-Touch Brokerage with Autonomous Voice & CRM</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">01.</span> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  For a leading RealEstate Enterprise, missed calls and stalled follow-ups were costing millions in lost commissions. Relying on human agents for initial intake meant leads leaked out of the funnel during off-hours, and high-value clients were left waiting. Their existing systems couldn't intelligently categorize or prioritize inquiries at scale.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-white">02.</span> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  We deployed a bespoke AI Voice Agent capable of answering 100% of inbound inquiries 24/7, fielding complex property questions, and directly booking showings. Integrated with an Intelligent AI CRM, the system automatically scores leads based on urgency and budget, triggering hyper-personalized follow-ups without manual intervention.
                </p>
                <ul className="space-y-3">
                  {["24/7 Autonomous Voice Intake", "Predictive Lead Scoring CRM", "Hyper-personalized Automated Follow-ups"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-gray-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">03.</span> The Impact
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mb-2 uppercase break-words">Appointments Booked</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white truncate">+400%</p>
                  </div>
                  <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mb-2 uppercase break-words">Recovered Commissions</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white truncate">$5.2M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] -z-10 rounded-full" />
              <div className="p-8 rounded-2xl border border-white/10 bg-black/50">
                <h4 className="text-xl font-bold mb-6 text-center">Lead Leakage vs. Appointments (6 Months)</h4>
                <div className="h-[400px] w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={leadData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorLeakage" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="month" stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <YAxis stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#111", borderColor: "#333", color: "#fff", borderRadius: "8px" }} itemStyle={{ color: "#fff" }} />
                        <Line type="monotone" dataKey="leadLeakage" name="Lead Leakage (%)" stroke="#ef4444" fill="url(#colorLeakage)" />
                        <Line type="monotone" dataKey="appointments" name="Appointments (Monthly)" stroke="#3b82f6" fill="url(#colorAppointments)" />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(107,114,128,0.1)_0%,transparent_70%)] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-16 text-right">
            <div className="flex items-center justify-end gap-4 mb-4">
              <span className="text-gray-500">Global Capital Partners</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-sans tracking-widest uppercase bg-white/[0.03]">Private Equity</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Accelerating Deal Flow via Next-Gen Web & Social Intelligence</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)] -z-10 rounded-full" />
              <div className="p-8 rounded-2xl border border-white/10 bg-black/50">
                <h4 className="text-xl font-bold mb-6 text-center">Origination Metrics Comparison</h4>
                <div className="h-[400px] w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={originationData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="category" stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <YAxis stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#111", borderColor: "#333", color: "#fff", borderRadius: "8px" }} cursor={{ fill: "rgba(255, 255, 255, 0.05)" }} />
                        <Bar dataKey="diligenceDays" name="Due Diligence Time (Days)" fill="#a855f7" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="originationCost" name="Origination Cost Index" fill="#6b7280" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">01.</span> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Operating within complex Fintech Architecture, the firm needed a secure, intelligent mechanism to streamline deal origination. Manual tracking of market sentiment across social platforms and outdated web infrastructure slowed down the due diligence pipeline drastically, increasing origination costs and causing missed investment opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-white">02.</span> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  We transformed their digital presence with a Next-Gen Web Experience, built for extreme speed and frictionless investor conversion. Behind the scenes, an Autonomous Social Media framework actively tracked market sentiment, summarizing critical developments for instant deal analysis and automated origination workflows.
                </p>
                <ul className="space-y-3">
                  {["Next-Gen High-Performance Web Architecture", "Autonomous Market Sentiment Tracking", "Automated Deal Origination Workflows"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-gray-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">03.</span> The Impact
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mb-2 uppercase break-words">Due Diligence Speed</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white truncate">+73%</p>
                  </div>
                  <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mb-2 uppercase break-words">Origination Costs</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white truncate">-60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(107,114,128,0.1)_0%,transparent_70%)] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-sans tracking-widest uppercase bg-white/[0.03]">Luxury Retail</span>
              <span className="text-gray-500">Luxury E-Commerce Brand</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Shattering Revenue Ceilings with E-Commerce Intelligence</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">01.</span> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Despite steady traffic growth, a premier Luxury E-Commerce brand hit a plateau. Their conversion rates were stagnant, and their Average Order Value (AOV) had not grown. Relying on static pricing models and generic recommendations failed to engage high-net-worth buyers, leading to inefficient inventory movement and high cart abandonment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-white">02.</span> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  We architected a deep E-Commerce Intelligence layer that processes millions of behavioral data points to dynamically adjust pricing and surface hyper-relevant product recommendations. Coupled with Mass Outreach Automation, the system autonomously generated individualized, high-converting email sequences to recover abandoned carts without aggressive discounting.
                </p>
                <ul className="space-y-3">
                  {["Predictive E-Commerce Intelligence", "Dynamic Pricing & Inventory Sync", "Hyper-personalized Mass Outreach"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-gray-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">03.</span> The Impact
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mb-2 uppercase break-words">AOV Surge</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white truncate">45%</p>
                  </div>
                  <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-500 font-sans mb-2 uppercase break-words">New Revenue (Q1)</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white truncate">$3.5M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] -z-10 rounded-full" />
              <div className="p-8 rounded-2xl border border-white/10 bg-black/50">
                <h4 className="text-xl font-bold mb-6 text-center">Revenue & AOV Trajectory</h4>
                <div className="h-[400px] w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height={400}>
                      <ComposedChart data={revenueData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="quarter" stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <YAxis yAxisId="left" stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <YAxis yAxisId="right" orientation="right" stroke="#888" tick={{ fill: "#888" }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#111", borderColor: "#333", color: "#fff", borderRadius: "8px" }} itemStyle={{ color: "#fff" }} />
                        <Line yAxisId="left" type="monotone" dataKey="aov" name="AOV ($)" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: "#10b981" }} activeDot={{ r: 6 }} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" name="Revenue ($M)" stroke="#eab308" strokeWidth={3} dot={{ r: 4, fill: "#eab308" }} activeDot={{ r: 6 }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest">( OUR PROCESS )</p>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "40px", fontWeight: "600", lineHeight: "1em" }}
            >
              3 Step Rapid Deployment
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors duration-300"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">1. DISCOVER</h3>
              <p className="text-gray-400 leading-relaxed">
                We analyze your data ecosystem to find the fertile ground where AI can take root and drive value.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors duration-300"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">2. BUILD</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom AI systems engineered to your specifications, integrating seamlessly with your existing infrastructure and workflows.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors duration-300"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">3. LAUNCH</h3>
              <p className="text-gray-400 leading-relaxed">
                We implement continuous learning loops, allowing your system to evolve and improve as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-white px-4 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-balance">Enterprise Security & Total Anonymity</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                The case studies above reflect real production metrics. However, due to the highly sensitive nature of the operational infrastructure we architect, we enforce strict non-disclosure agreements. We never disclose client identities, ensuring your strategic advantage remains entirely confidential.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-10">
              <div>
                <p className="text-4xl sm:text-5xl font-black mb-1 truncate">SOC 2</p>
                <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider break-words">Compliant</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-black mb-1 truncate">100%</p>
                <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider break-words">Data Ownership</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-black mb-1 truncate">E2E</p>
                <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider break-words">Encryption</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-black mb-1 truncate">Private</p>
                <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider break-words">Deployments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
