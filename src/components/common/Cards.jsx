import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Tag } from 'lucide-react';

// ─── Fade-in wrapper ─────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const directions = {
    up: { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  };
  const { initial, animate } = directions[direction] || directions.up;

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({ label, title, subtitle, center = true, light = false }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12 md:mb-16`}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        {label}
      </motion.p>
      <div className={`${center ? 'flex justify-center mb-3' : 'mb-3'}`}>
        <div className="gold-divider" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-cream/50 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
export function ServiceCard({ service, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="card-dark group cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-44 mb-5 overflow-hidden rounded-sm bg-dark-surface">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-accent bg-dark-bg/60 border border-gold/20 text-gold/80 px-2 py-0.5 rounded-sm tracking-wider">
            {service.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-2xl">{service.icon}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-display text-xl text-cream font-medium mb-1 group-hover:text-gold transition-colors">
          {service.title}
        </h3>
        <p className="text-gold/60 text-xs font-body tracking-wider uppercase mb-3">{service.subtitle}</p>
        <p className="text-cream/50 text-sm leading-relaxed flex-1">{service.shortDesc}</p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1.5 my-4">
          {service.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs text-cream/40 bg-dark-surface border border-dark-border px-2 py-0.5 rounded-sm">
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-dark-border">
          <div className="flex items-center gap-1.5 text-cream/30 text-xs">
            <Clock size={11} />
            <span>{service.duration}</span>
          </div>
          <span className="text-gold/60 group-hover:text-gold flex items-center gap-1 text-xs font-body tracking-wider uppercase transition-colors">
            Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
export function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark h-full flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-gold fill-gold" />
        ))}
      </div>

      {/* Quote */}
      <div className="relative flex-1 mb-5">
        <span className="text-gold/20 font-display text-6xl leading-none absolute -top-2 -left-1">"</span>
        <p className="text-cream/70 text-sm leading-relaxed pl-5 italic">
          {testimonial.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border border-gold/20"
          loading="lazy"
        />
        <div>
          <p className="text-cream text-sm font-medium">{testimonial.name}</p>
          <p className="text-cream/40 text-xs">{testimonial.role}</p>
        </div>
        <span className="ml-auto text-xs text-gold/40 bg-gold/5 border border-gold/10 px-2 py-0.5 rounded-sm">
          {testimonial.condition}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Blog Card ────────────────────────────────────────────────────────────────
export function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark group h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 mb-5 overflow-hidden rounded-sm bg-dark-surface">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-accent bg-crimson/70 border border-crimson/30 text-cream px-2 py-0.5 rounded-sm tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3 text-cream/30 text-xs">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-cream/30" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-display text-lg text-cream font-medium leading-snug mb-2 group-hover:text-gold transition-colors flex-1">
          {post.title}
        </h3>

        <p className="text-cream/50 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="flex items-center gap-1.5 text-gold/60 hover:text-gold text-xs font-body tracking-wider uppercase transition-colors group/link mt-auto"
        >
          Read Article
          <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

// ─── Stat Counter ─────────────────────────────────────────────────────────────
export function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-light text-gold mb-1">
        {stat.value}{stat.suffix}
      </div>
      <div className="text-cream/50 text-xs tracking-[0.2em] uppercase font-body">
        {stat.label}
      </div>
    </motion.div>
  );
}
