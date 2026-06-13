import React from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, TrendingUp, Package, RefreshCw, DollarSign, LineChart, Users } from "lucide-react";
import { CartPriceAnimation } from "@/components/ServiceAnimations";

export default function EcomPage() {
  return (
    <div className="min-h-screen text-white bg-black">


      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
            <ShoppingCart className="w-6 h-6 text-white mr-4" />
            <CartPriceAnimation />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Predictive Commerce.<br />Maximum Yield.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Stop leaving revenue on the table. Deploy AI that dynamically optimizes pricing, predicts inventory needs, and automatically recovers abandoned carts with tailored incentives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300">
                Optimize My Store
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Algorithmic Retail Dominance</h2>
            <p className="text-lg text-gray-400">We integrate deep learning directly into your storefront. From Shopify to custom headless builds, our AI turns every visitor interaction into optimized conversion data.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Dynamic Pricing",
                desc: "Adjusts prices in real-time based on competitor stock levels, demand velocity, and user purchasing power."
              },
              {
                icon: RefreshCw,
                title: "Smart Cart Recovery",
                desc: "Analyzes why a cart was abandoned and sends highly-specific, personalized incentives to close the sale."
              },
              {
                icon: Package,
                title: "Inventory Prediction",
                desc: "Forecasts demand down to the SKU level, preventing stockouts and reducing holding costs on dead inventory."
              },
              {
                icon: Users,
                title: "Hyper-Personalization",
                desc: "Restructures the storefront layout and product recommendations in real-time based on the visitor's browsing behavior."
              },
              {
                icon: TrendingUp,
                title: "LTV Maximization",
                desc: "Automatically identifies and nurtures high-value customers with exclusive offers to increase lifetime value."
              },
              {
                icon: LineChart,
                title: "Margin Protection",
                desc: "Calculates true profit margins including shipping and CAC, ensuring discounts never eat into your bottom line."
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Scale Profitably.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the top 1% of e-commerce brands utilizing algorithmic optimization. Let us analyze your store and uncover the hidden revenue.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              Request Store Audit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
