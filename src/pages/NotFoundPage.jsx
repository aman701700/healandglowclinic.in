import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-dark-bg">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display text-[120px] md:text-[180px] font-light leading-none text-dark-surface select-none">
            404
          </div>
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="font-display text-3xl text-cream mb-3">Page Not Found</h1>
          <p className="text-cream/50 text-sm mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/" className="btn-primary">
              <Home size={16} /> Back to Home
            </Link>
            <Link to="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
