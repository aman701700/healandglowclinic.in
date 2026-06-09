import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from "../../../public/heal_glow_logo.jpeg"


const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Conditions', to: '/conditions' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* <div className="w-10 h-10 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-dark-card overflow-hidden">
                  <img src={logo} alt="" />
                </div> */}
                
                <div className="absolute inset-0 rounded-full border border-gold/20 scale-110 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-accent text-gold text-base md:text-lg leading-tight tracking-wide">
                  Heal & Glow
                </div>
                <div className="text-[9px] md:text-[10px] text-cream/50 tracking-[0.2em] uppercase leading-none">
                  Clinic
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2 font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
                      isActive ? 'text-gold' : 'text-cream/70 hover:text-cream'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-px bg-gold"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-1.5 text-cream/60 hover:text-gold text-sm transition-colors"
              >
                <Phone size={14} />
                <span className="font-mono text-xs tracking-wider">+91 98765 43210</span>
              </a>
              <button
                onClick={onBooking}
                className="btn-primary text-xs py-2.5 px-5 animate-pulse-gold"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-cream/70 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-bg/80 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-dark-card border-l border-dark-border z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-dark-border">
                <div className="font-accent text-gold text-lg">Heal & Glow</div>
                <button onClick={() => setMobileOpen(false)} className="text-cream/60 hover:text-cream">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 px-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className={`block px-4 py-3 rounded-sm font-body text-sm tracking-wider uppercase transition-all duration-200 ${
                        location.pathname === link.to
                          ? 'text-gold bg-gold/10 border-l-2 border-gold'
                          : 'text-cream/70 hover:text-cream hover:bg-dark-surface'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 border-t border-dark-border space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors"
                >
                  <Phone size={14} />
                  <span>+91 98765 43210</span>
                </a>
                <button
                  onClick={() => { setMobileOpen(false); onBooking?.(); }}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
