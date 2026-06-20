import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, X } from 'lucide-react';

// ─── WhatsApp Floating Button ─────────────────────────────────────────────────
export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-dark-card border border-dark-border rounded-sm px-4 py-3 shadow-card max-w-[200px] relative"
          >
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-cream/50 hover:text-cream"
            >
              <X size={10} />
            </button>
            <p className="text-xs text-cream/80 leading-snug font-body">
              💬 Chat with us on WhatsApp for quick appointment booking!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919837174406?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Heal%20%26%20Glow%20Clinic."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-colors"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <MessageCircle size={26} className="text-white" />
      </motion.a>
    </div>
  );
}

// ─── Scroll To Top ────────────────────────────────────────────────────────────
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-10 h-10 bg-dark-card border border-gold/30 rounded-sm flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold/60 hover:shadow-gold transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
