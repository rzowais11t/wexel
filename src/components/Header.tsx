import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

const solutionLinks = [
  { label: 'AI Voice Agents', path: '/voice' },
  { label: 'AI CRM', path: '/aicrm' },
  { label: 'Mass Outreach', path: '/outreach' },
  { label: 'E-Commerce AI', path: '/ecommerce' },
  { label: 'Social Media AI', path: '/social' },
  { label: 'Web Development', path: '/website' },
];

export default function Header({ onContactClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Industries', id: 'industries' },
    { label: 'FAQ', id: 'faq' },
  ];

  const privacyLink = { label: 'Privacy', path: '/privacy' };

  useEffect(() => {
    if (location.pathname === '/') {
      const pendingId = sessionStorage.getItem('pendingScroll');
      if (pendingId) {
        const timer = setTimeout(() => {
          let attempts = 0;
          const maxAttempts = 15;
          
          const tryScroll = () => {
            const element = document.getElementById(pendingId);
            if (element) {
              const headerHeight = 120; // Height of fixed header
              const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
              window.scrollTo({ top: elementPosition, behavior: 'smooth' });
              sessionStorage.removeItem('pendingScroll');
            } else if (attempts < maxAttempts) {
              attempts++;
              setTimeout(tryScroll, 40);
            } else {
              sessionStorage.removeItem('pendingScroll');
            }
          };
          
          tryScroll();
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      sessionStorage.setItem('pendingScroll', id);
      navigate('/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 120; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-6" role="banner">
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-4 hover:bg-white/15 transition-all duration-300"
      >
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Wexel - Back to home"
          className="uppercase leading-[0.85] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          style={{ fontFamily: 'Blanka, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '1rem', color: '#ffffff' }}
        >
          Wexel
        </Link>

        <div className="hidden md:flex items-center gap-8 flex-1 mx-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer bg-transparent border-none flex items-center gap-1"
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <svg className={`w-3 h-3 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl backdrop-blur-xl bg-black/80 border border-white/20 py-2 shadow-lg">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to={privacyLink.path}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            {privacyLink.label}
          </Link>
        </div>

        <button
          onClick={onContactClick}
          data-contact-btn
          className="hidden md:inline-flex px-6 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 whitespace-nowrap"
        >
          Contact
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 px-4 py-2 cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
          <div className="px-4 py-2">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Solutions</p>
            {solutionLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 py-1.5 pl-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to={privacyLink.path}
            onClick={() => setIsOpen(false)}
            className="block w-full text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 px-4 py-2"
          >
            {privacyLink.label}
          </Link>
          <button
            onClick={() => {
              onContactClick();
              setIsOpen(false);
            }}
            data-contact-btn
            className="w-full px-4 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
