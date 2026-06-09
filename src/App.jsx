import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import { WhatsAppButton, ScrollToTop } from './components/common/FloatingButtons';

// Lazy load pages
const HomePage      = lazy(() => import('./pages/HomePage'));
const AboutPage     = lazy(() => import('./pages/AboutPage'));
const ServicesPage  = lazy(() => import('./pages/ServicesPage'));
const ConditionsPage = lazy(() => import('./pages/ConditionsPage'));
const BlogPage      = lazy(() => import('./pages/BlogPage'));
const ContactPage   = lazy(() => import('./pages/ContactPage'));
const NotFoundPage  = lazy(() => import('./pages/NotFoundPage'));

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-dark-border border-t-gold rounded-full animate-spin" />
        <p className="text-cream/30 text-xs tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}

// Inner app needs access to location for AnimatePresence
function AppInner() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar onBooking={() => setBookingOpen(true)} />

      <main>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition><HomePage onBooking={() => setBookingOpen(true)} /></PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition><AboutPage onBooking={() => setBookingOpen(true)} /></PageTransition>
              } />
              <Route path="/services" element={
                <PageTransition><ServicesPage onBooking={() => setBookingOpen(true)} /></PageTransition>
              } />
              <Route path="/conditions" element={
                <PageTransition><ConditionsPage onBooking={() => setBookingOpen(true)} /></PageTransition>
              } />
              <Route path="/blog" element={
                <PageTransition><BlogPage /></PageTransition>
              } />
              <Route path="/blog/:slug" element={
                <PageTransition><BlogPage /></PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition><ContactPage /></PageTransition>
              } />
              <Route path="*" element={
                <PageTransition><NotFoundPage /></PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
