import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NotificationCard {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'success' | 'warning' | 'info';
  route: string;
}

const notificationCards: NotificationCard[] = [
  {
    id: 1,
    title: 'Intelligent AI CRM',
    description: 'Lead scoring, automated follow-ups, and pipeline visibility. Your CRM works while your team sells.',
    category: 'Customer Experience',
    type: 'success',
    route: '/aicrm',
  },
  {
    id: 2,
    title: 'AI Voice Solutions',
    description: 'AI picks up the phone, qualifies leads, books appointments, handles support. Sounds human. Works 24/7.',
    category: 'Conversational AI',
    type: 'info',
    route: '/voice',
  },
  {
    id: 3,
    title: 'Mass Outreach Automation',
    description: 'Thousands of personalized emails sent at scale. Each one tailored per prospect. High deliverability. Real replies.',
    category: 'Digital Marketing',
    type: 'success',
    route: '/outreach',
  },
  {
    id: 4,
    title: 'E-Commerce Intelligence',
    description: 'Smart product recs, dynamic pricing, and cart recovery. Built to increase AOV and cut abandoned checkouts.',
    category: 'Commerce Solutions',
    type: 'warning',
    route: '/ecommerce',
  },
  {
    id: 5,
    title: 'Autonomous Social Media',
    description: 'Content scheduling, engagement automation, and analytics across every platform. Your social runs itself.',
    category: 'Social Intelligence',
    type: 'info',
    route: '/social',
  },
  {
    id: 6,
    title: 'Next-Gen Web Experiences',
    description: 'Fast, responsive, conversion-focused websites. SEO-optimized. Built to load in under 2 seconds and turn visitors into customers.',
    category: 'Digital Presence',
    type: 'success',
    route: '/website',
  },
];

function getNotificationStyles(type: 'success' | 'warning' | 'info') {
  const styles = {
    success: {
      borderColor: 'rgba(34, 197, 94, 0.3)',
      backgroundColor: 'rgba(34, 197, 94, 0.05)',
      iconBg: 'rgba(34, 197, 94, 0.2)',
      iconColor: '#22c55e',
      accentBg: 'rgba(34, 197, 94, 0.1)',
      icon: CheckCircle2,
    },
    warning: {
      borderColor: 'rgba(234, 179, 8, 0.3)',
      backgroundColor: 'rgba(234, 179, 8, 0.05)',
      iconBg: 'rgba(234, 179, 8, 0.2)',
      iconColor: '#eab308',
      accentBg: 'rgba(234, 179, 8, 0.1)',
      icon: AlertCircle,
    },
    info: {
      borderColor: 'rgba(59, 130, 246, 0.3)',
      backgroundColor: 'rgba(59, 130, 246, 0.05)',
      iconBg: 'rgba(59, 130, 246, 0.2)',
      iconColor: '#3b82f6',
      accentBg: 'rgba(59, 130, 246, 0.1)',
      icon: Info,
    },
  };
  return styles[type];
}

function NotificationCard({ card }: { card: NotificationCard }) {
  const navigate = useNavigate();
  const styles = getNotificationStyles(card.type);
  const IconComponent = styles.icon;

  const handleClick = () => {
    navigate(card.route);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    navigate(card.route);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <div
        onClick={handleClick}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
        className="relative p-6 md:p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
        style={{
          backgroundColor: styles.backgroundColor,
          borderColor: styles.borderColor,
        }}
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-40 -z-10"
          style={{ backgroundColor: styles.iconColor }}
        />

        {/* Icon and Category */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: styles.iconBg }}
          >
            <IconComponent size={24} style={{ color: styles.iconColor }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {card.category}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-snug">
          {card.title}
        </h3>

        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
          {card.description}
        </p>

        {/* Footer with CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            Learn more
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
            style={{ backgroundColor: styles.accentBg }}
          >
            <ArrowRight size={16} style={{ color: styles.iconColor }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function NotificationCardsSection() {
  return (
    <div className="mt-32 max-w-7xl mx-auto px-4 md:px-8">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white leading-[0.9] mb-4"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2.5rem, 10vw, 4rem)',
          }}
        >
          Solutions
        </motion.h2>
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/70 mt-3"
          >
            Your Vision, Our Algorithm
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {notificationCards.map((card) => (
          <NotificationCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
