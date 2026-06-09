import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Award, Users, Heart, ChevronRight } from 'lucide-react';
import { servicesData, conditionsData, testimonialsData, blogData, statsData, whyUsData } from '../data';
import { ServiceCard, TestimonialCard, BlogCard, SectionHeader, FadeIn, StatCard } from '../components/common/Cards';
import physio from "../../public/physio.jpg"
import drNadeem from "../../public/dr_nadeem.png"

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ onBooking }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <img
          src={physio}
          alt="Physiotherapy treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 via-dark-bg/80 to-dark-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/50" />
      </motion.div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ornament-line mb-6"
          >
            <span className="section-label">Heal & Glow Clinic · New Delhi</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light leading-tight text-cream mb-4"
          >
            Heal your body,
            <br />
            <span className="gold-shimmer font-semibold">glow with confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-cream/70 text-lg md:text-xl leading-relaxed mb-3 max-w-xl"
          >
            Under Dr. Nadeem Ahmad's expert care — 20 years of transforming lives through
            physiotherapy, slimming, and beauty.
          </motion.p>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['Physiotherapy', 'Slimming', 'Beauty'].map((p) => (
              <span key={p} className="text-xs font-accent text-gold/70 border border-gold/20 bg-gold/5 px-3 py-1 rounded-sm tracking-wider">
                {p}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <button onClick={onBooking} className="btn-primary animate-pulse-gold">
              Book Consultation
              <ArrowRight size={16} />
            </button>
            <Link to="/services" className="btn-gold">
              View Services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
          >
            {[
              { icon: Award, text: '20+ Years Expert' },
              { icon: Users, text: '8000+ Patients' },
              { icon: Heart, text: '98% Satisfaction' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={14} className="text-gold/60" />
                <span className="text-cream/50 text-xs tracking-wider">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection({ onBooking }) {
  const featured = servicesData.slice(0, 6);
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Offer"
          title="Our Specialities"
          subtitle="From physiotherapy to slimming and beauty — a complete wellness ecosystem under one roof."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} onClick={() => setSelected(service)} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-gold">
            View All 12 Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-card border border-dark-border rounded-sm w-full max-w-lg p-6 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-3xl">{selected.icon}</span>
                <h3 className="font-display text-2xl text-cream mt-2">{selected.title}</h3>
                <p className="text-gold/60 text-xs tracking-wider uppercase">{selected.category}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-cream/40 hover:text-cream">✕</button>
            </div>
            <img src={selected.image} alt={selected.title} className="w-full h-40 object-cover rounded-sm mb-4 opacity-80" />
            <p className="text-cream/70 text-sm leading-relaxed mb-4">{selected.fullDesc}</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {selected.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-cream/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <button onClick={() => { setSelected(null); onBooking(); }} className="btn-primary w-full justify-center">
              Book This Service
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// ─── About Snippet ────────────────────────────────────────────────────────────
function AboutSnippet() {
  return (
    <section className="py-20 md:py-28 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <FadeIn direction="right">
            <div className="relative pl-4 md:pl-8 lg:pl-10">
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src={drNadeem}
                  alt="Dr. Nadeem Ahmad, Physiotherapist"
                  className="h-96 lg:h-[480px] lg:w-[320px] lg:relative "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-dark-card border border-gold/30 rounded-sm p-4 shadow-card max-w-[180px]">
                <div className="font-display text-3xl text-gold font-light">20+</div>
                <div className="text-cream/60 text-xs tracking-wider mt-1 uppercase font-body">Years of Excellence</div>
              </div>
              {/* Gold frame accent */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-sm pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-sm pointer-events-none" />
            </div>
          </FadeIn>

          {/* Text side */}
          <FadeIn direction="left" delay={0.1}>
            <p className="section-label">Meet Your Doctor</p>
            <div className="gold-divider mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight mb-5">
              Dr. Nadeem Ahmad
              <br />
              <span className="text-gold/80 text-3xl md:text-4xl italic font-light">Senior Physiotherapist</span>
            </h2>
            <p className="text-cream/60 leading-relaxed mb-5">
              With over two decades of clinical experience, Dr. Nadeem Ahmad has established himself as
              one of Delhi's most trusted physiotherapists. His patient-first philosophy and evidence-based
              approach have transformed thousands of lives.
            </p>
            <p className="text-cream/60 leading-relaxed mb-8">
              Beyond physiotherapy, Dr. Ahmad's vision led to the creation of Heal & Glow — a holistic
              wellness clinic combining rehabilitation, slimming science, and aesthetic beauty into one
              seamless healing experience.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-dark-border">
              {statsData.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </div>

            <Link to="/about" className="btn-gold">
              Dr. Ahmad's Full Story
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="The Heal & Glow Difference"
          subtitle="We've built a clinic where excellence is standard, not exceptional."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyUsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-dark text-center group hover:border-gold/20"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-lg text-cream mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-cream/50 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-dark-card border-y border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Patient Stories"
          title="Lives Transformed"
          subtitle="Real stories from real patients who found their path to healing at Heal & Glow."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Conditions ───────────────────────────────────────────────────────────────
function ConditionsSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Conditions We Treat"
          title="Expert Care Across Specialities"
          subtitle="From acute injuries to chronic conditions — no challenge is too complex."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {conditionsData.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-dark flex items-center gap-3 group hover:border-gold/20"
            >
              <span className="text-xl flex-shrink-0">{c.icon}</span>
              <div>
                <div className="font-body text-sm text-cream group-hover:text-gold transition-colors">{c.title}</div>
                <div className="text-cream/40 text-xs leading-snug hidden sm:block">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/conditions" className="btn-ghost">
            View All Conditions
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="text-left">
            <p className="section-label">Knowledge Centre</p>
            <div className="gold-divider mb-3" />
            <h2 className="section-title">Latest from Our Blog</h2>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-gold/60 hover:text-gold text-xs tracking-wider uppercase transition-colors">
            All Articles <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogData.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner({ onBooking }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80"
          alt="Clinic"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-900/90 via-dark-bg/80 to-olive-700/80" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <FadeIn>
          <p className="section-label mb-4">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4">
            Your healing starts with one call.
          </h2>
          <p className="text-cream/60 mb-8 text-lg">
            Book a consultation with Dr. Nadeem Ahmad and take the first step toward a pain-free, confident you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={onBooking} className="btn-primary">
              Book Free Consultation
              <ArrowRight size={16} />
            </button>
            <a href="https://wa.me/919876543210" className="btn-gold">
              WhatsApp Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
export default function HomePage({ onBooking }) {
  return (
    <>
      <Helmet>
        <title>Heal & Glow Clinic Delhi | Physiotherapy · Slimming · Beauty | Dr. Nadeem Ahmad</title>
        <meta name="description" content="Delhi's premier clinic for physiotherapy, slimming, and beauty. Dr. Nadeem Ahmad – 20+ years expert. Book your appointment today." />
        <meta property="og:title" content="Heal & Glow Clinic Delhi | Dr. Nadeem Ahmad" />
        <meta property="og:description" content="Expert physiotherapy, body slimming, and beauty treatments. 8000+ patients transformed." />
      </Helmet>

      <HeroSection onBooking={onBooking} />
      <AboutSnippet />
      <ServicesSection onBooking={onBooking} />
      <WhyUsSection />
      <TestimonialsSection />
      <ConditionsSection />
      <BlogSection />
      <CTABanner onBooking={onBooking} />
    </>
  );
}
