import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import { blogData } from '../data';
import { BlogCard, SectionHeader, FadeIn } from '../components/common/Cards';

export default function BlogPage() {
  const [featured, ...rest] = blogData;

  return (
    <>
      <Helmet>
        <title>Blog & Health Articles | Heal & Glow Clinic – Dr. Nadeem Ahmad</title>
        <meta name="description" content="Expert health articles on physiotherapy, pain management, sports rehab, slimming, and wellness by Dr. Nadeem Ahmad, Senior Physiotherapist, Delhi." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">Knowledge Centre</motion.p>
          <div className="flex justify-center mb-4"><div className="gold-divider" /></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-cream font-light"
          >
            Blog & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cream/50 mt-4 max-w-lg mx-auto"
          >
            Expert insights on physiotherapy, pain management, and holistic wellness from Dr. Nadeem Ahmad.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 card-dark overflow-hidden">
                <div className="relative h-64 lg:h-auto lg:min-h-[340px] rounded-sm overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-crimson/80 text-cream font-accent text-xs px-3 py-1 rounded-sm tracking-wider">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-2 lg:p-4">
                  <span className="section-label text-[10px] mb-2">{featured.category}</span>
                  <h2 className="font-display text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors mb-3 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-cream/50 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-cream/30 text-xs mb-5">
                    <span className="flex items-center gap-1"><User size={11} />{featured.author}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{featured.readTime}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mb-5">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-xs text-cream/40 border border-dark-border px-2 py-0.5 rounded-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1.5 text-gold/60 group-hover:text-gold text-xs tracking-wider uppercase transition-colors">
                    Read Full Article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-cream mb-8 font-light">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="section-label mb-3">Stay Informed</p>
            <h2 className="font-display text-3xl text-cream mb-3">Health Tips in Your Inbox</h2>
            <p className="text-cream/50 text-sm mb-6">
              Get monthly wellness insights, exercise tips, and clinic updates from Dr. Nadeem Ahmad.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 rounded-sm"
              />
              <button className="btn-primary whitespace-nowrap text-xs px-5">
                Subscribe
              </button>
            </div>
            <p className="text-cream/20 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
