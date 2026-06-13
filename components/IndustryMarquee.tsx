import { Building2, ShoppingBag, PieChart, CreditCard, Scale } from "lucide-react";

const industries = [
  { name: "RealEstate Enterprise", icon: <Building2 className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Luxury E-Commerce", icon: <ShoppingBag className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Private Equity", icon: <PieChart className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Fintech  Architecture", icon: <CreditCard className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Legal Infrastructure", icon: <Scale className="w-5 h-5" strokeWidth={1.5} /> },
];

export function IndustryMarquee() {
  return (
    <section className="border-t border-white/5 overflow-hidden relative" style={{ paddingTop: "55px", paddingBottom: "55px" }}>
      <div className="container mx-auto px-4 mb-12 text-center">
        <p className="text-xs font-sans text-white tracking-[0.3em] uppercase">EXPERTISE DEFINING INDUSTRIES</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
            will-change: transform;
          }
        `}</style>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              {industries.map((item, j) => (
                <div
                  key={j}
                  className="flex items-center gap-3 transition-all duration-500 cursor-default group scale-95 hover:scale-105"
                >
                  <div className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                    {item.icon}
                  </div>
                  <span className="text-lg font-bold tracking-widest text-white uppercase font-sans">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
