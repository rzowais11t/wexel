import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Benefit {
  stat: string;
  label: string;
}

interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

interface HowItWorksStep {
  title: string;
  description: string;
}

export function BenefitsGrid({ benefits }: { benefits: Benefit[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <p
            className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.03em',
            }}
          >
            {benefit.stat}
          </p>
          <p className="text-white/70 text-sm sm:text-base">{benefit.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function FeatureSection({ features }: { features: Feature[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="mb-10 sm:mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
      >
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-500/20 rounded-lg w-fit">
                <IconComponent size={24} className="text-blue-400 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function HowItWorksSection({ steps }: { steps: HowItWorksStep[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="mb-10 sm:mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-12"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
      >
        How It Works
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 flex gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-sm sm:text-base">{index + 1}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function CTASection({ title, description, onCTA }: { title: string; description: string; onCTA?: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-8 sm:p-12 text-center hover:border-blue-500/50 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-6"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: '-0.03em',
        }}
      >
        {title}
      </h2>
      <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        {description}
      </p>
      <button 
        onClick={onCTA}
        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base"
      >
        Get Started
      </button>
    </motion.div>
  );
}
