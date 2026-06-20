import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { servicesData } from '../data';
import { SectionHeader, ServiceCard, FadeIn } from '../components/common/Cards';

const categories = ['All', 'Musculoskeletal', 'Sports', 'Neurological', 'Post-Surgical', 'Pain Management', 'Slimming', 'Beauty', 'Pediatric', 'Geriatric'];

export default function ServicesPage({ onBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Services – Physiotherapy, Slimming & Beauty | Heal & Glow Clinic Delhi</title>
        <meta name="description" content="Explore 12+ expert services at Heal & Glow Clinic: physiotherapy, sports rehab, cupping, body slimming, beauty treatments and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80" alt="Services" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 to-dark-bg" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">What We Offer</motion.p>
          <div className="flex justify-center mb-4"><div className="gold-divider" /></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-cream font-light"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cream/50 mt-4 max-w-xl mx-auto"
          >
            Physiotherapy · Slimming · Beauty — complete wellness under one roof
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-dark-card border-y border-dark-border sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-1 py-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-body tracking-wider uppercase whitespace-nowrap transition-all duration-200 rounded-sm ${
                  activeCategory === cat
                    ? 'bg-crimson text-cream border border-crimson/50'
                    : 'text-cream/50 hover:text-cream hover:bg-dark-surface border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-dark-bg min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cream/30 text-xs mb-6 tracking-wider uppercase"
          >
            Showing {filtered.length} service{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} onClick={() => setSelected(service)} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-card border border-dark-border rounded-sm w-full max-w-lg overflow-hidden shadow-card"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-52">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/30 to-transparent" />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-dark-bg/70 rounded-sm flex items-center justify-center text-cream/70 hover:text-cream border border-dark-border"
                  >
                    <X size={15} />
                  </button>
                  <div className="absolute bottom-4 left-5">
                    <span className="text-3xl">{selected.icon}</span>
                    <span className="ml-2 font-accent text-gold/80 text-xs tracking-wider border border-gold/20 bg-dark-bg/60 px-2 py-0.5 rounded-sm">
                      {selected.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl text-cream mb-1">{selected.title}</h2>
                  <p className="text-gold/60 text-xs uppercase tracking-wider mb-4">{selected.subtitle}</p>
                  <p className="text-cream/60 text-sm leading-relaxed mb-5">{selected.fullDesc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {selected.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-cream/60">
                        <ChevronRight size={12} className="text-gold/60" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                    <div className="flex items-center gap-1.5 text-cream/40 text-xs">
                      <Clock size={12} />
                      <span>Session duration: {selected.duration}</span>
                    </div>
                    <button
                      onClick={() => { setSelected(null); onBooking(); }}
                      className="btn-primary text-xs py-2.5 px-5"
                    >
                      Book Now <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-card border-t border-dark-border text-center">
        <FadeIn>
          <h2 className="font-display text-3xl text-cream mb-3">Not sure which service you need?</h2>
          <p className="text-cream/50 mb-6 text-sm">Book a free 15-minute consultation and let Dr. Ahmad guide you.</p>
          <button onClick={onBooking} className="btn-primary">
            Book Free Consultation <ArrowRight size={16} />
          </button>
        </FadeIn>
      </section>
    </>
  );
}
