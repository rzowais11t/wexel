import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative pt-16">

      {/* Background glows — same as homepage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[radial-gradient(circle,rgba(17,24,39,0.2)_0%,transparent_70%)] rounded-full animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[radial-gradient(circle,rgba(17,24,39,0.2)_0%,transparent_70%)] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">

        {/* Label */}
        <p className="text-sm font-sans text-gray-500 mb-6 tracking-widest uppercase">(404)</p>

        {/* Heading — matches homepage hero style */}
        <h1
          className="font-black tracking-tight text-balance mb-6 bg-clip-text text-transparent drop-shadow-lg"
          style={{
            backgroundImage: "linear-gradient(180deg, rgb(245, 245, 245) 0%, rgb(128, 128, 128) 100%)",
            fontSize: "clamp(56px, 10vw, 120px)",
            lineHeight: 1,
          }}
        >
          Page Not Found.
        </h1>

        {/* Body */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed text-balance mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA — matches homepage button */}
        <Link href="/">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

      </div>
    </div>
  );
}
