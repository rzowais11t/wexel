import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white py-8 sm:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Brand section - full width */}
        <div className="mb-8 sm:mb-12 max-w-xs">
          <h3 
            className="text-xl mb-2 uppercase leading-[0.85]"
            style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', color: '#ffffff' }}
          >
            Wexel
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            AI automation systems built for businesses that want to scale without hiring.
          </p>
        </div>

        {/* Links grid - 3 columns on desktop, 2 on tablet, 2 on mobile (compact) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Solutions</h4>
            <ul className="space-y-1.5">
              <li><Link to="/aicrm" className="text-white/70 hover:text-white transition-colors text-xs">AI CRM</Link></li>
              <li><Link to="/voice" className="text-white/70 hover:text-white transition-colors text-xs">Voice Agent</Link></li>
              <li><Link to="/outreach" className="text-white/70 hover:text-white transition-colors text-xs">Mass Outreach</Link></li>
              <li><Link to="/ecommerce" className="text-white/70 hover:text-white transition-colors text-xs">E-Commerce</Link></li>
              <li><Link to="/social" className="text-white/70 hover:text-white transition-colors text-xs">Social Media</Link></li>
              <li><Link to="/website" className="text-white/70 hover:text-white transition-colors text-xs">Website AI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-1.5">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-xs">Home</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-xs">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors text-xs">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 text-sm">Get in Touch</h4>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400 flex-shrink-0" />
              <a href="mailto:business@wexel.ai" className="text-white/70 hover:text-white transition-colors text-xs break-all">business@wexel.ai</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            &copy; {currentYear} Wexel. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Built with AI, delivered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
