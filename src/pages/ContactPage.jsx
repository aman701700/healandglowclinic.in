import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { timingsData } from '../data';
import { FadeIn, SectionHeader } from '../components/common/Cards';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(15, 'Message must be at least 15 characters'),
});

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log('Contact form:', data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Book Appointment | Heal & Glow Clinic Delhi – Dr. Nadeem Ahmad</title>
        <meta name="description" content="Book an appointment at Heal & Glow Clinic, Aligarh. Call +91 98371 74406 or WhatsApp for quick booking." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">Get In Touch</motion.p>
          <div className="flex justify-center mb-4"><div className="gold-divider" /></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-cream font-light"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cream/50 mt-4"
          >
            Book your appointment or send us a message — we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-8 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Phone, label: 'Call Us', value: '+91 98371 74406', href: 'tel:+919837174406', color: 'text-blue-400' },
              { icon: MessageCircle, label: 'WhatsApp', value: '+91 98371 74406', href: 'https://wa.me/919837174406', color: 'text-green-400' },
              { icon: Mail, label: 'Email', value: 'drnadeemahmad3116@gmail.com', href: 'mailto:drnadeemahmad3116@gmail.com', color: 'text-gold' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href} className="card-dark flex items-center gap-4 hover:border-gold/20 group">
                <Icon size={20} className={`${color} flex-shrink-0`} />
                <div>
                  <div className="text-cream/40 text-xs uppercase tracking-wider">{label}</div>
                  <div className="text-cream text-sm group-hover:text-gold transition-colors">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="card-dark">
                <h2 className="font-display text-2xl text-cream mb-1">Send a Message</h2>
                <p className="text-cream/40 text-sm mb-6">We'll respond within 2 hours during clinic hours.</p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-green-400" />
                    </div>
                    <h3 className="font-display text-xl text-cream mb-2">Message Sent!</h3>
                    <p className="text-cream/50 text-sm">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-cream/40 uppercase tracking-wider mb-1.5">Name *</label>
                        <input
                          {...register('name')}
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 rounded-sm"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs text-cream/40 uppercase tracking-wider mb-1.5">Phone *</label>
                        <input
                          {...register('phone')}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 rounded-sm"
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-cream/40 uppercase tracking-wider mb-1.5">Email (Optional)</label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cream/40 uppercase tracking-wider mb-1.5">Subject *</label>
                      <input
                        {...register('subject')}
                        placeholder="What can we help you with?"
                        className="w-full px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 rounded-sm"
                      />
                      {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-cream/40 uppercase tracking-wider mb-1.5">Message *</label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Describe your condition, questions, or requirements..."
                        className="w-full px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 rounded-sm resize-none"
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center gap-2">
                      <Send size={15} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn direction="left" delay={0.1}>
              <div className="space-y-6">
                {/* Location */}
                <div className="card-dark">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-crimson/10 border border-crimson/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-crimson-400" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-medium text-cream mb-1">Clinic Address</h3>
                      <p className="text-cream/50 text-sm leading-relaxed">
                        Near Shah Residency, Near Firoz Hospital<br />
                        Medical Road, Aligarh
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold/60 hover:text-gold text-xs mt-2 inline-flex items-center gap-1 transition-colors"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="card-dark">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Clock size={18} className="text-gold/70" />
                    </div>
                    <h3 className="font-body text-sm font-medium text-cream">Clinic Timings</h3>
                  </div>
                  <div className="space-y-3">
                    {timingsData.map((t) => (
                      <div key={t.day} className="flex items-center justify-between py-2 border-b border-dark-border last:border-0">
                        <span className="text-cream/60 text-sm">{t.day}</span>
                        <span className="text-gold/70 text-sm font-mono">{t.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="card-dark overflow-hidden p-0">
                  <div className="bg-dark-surface h-52 flex items-center justify-center relative rounded-sm overflow-hidden border border-dark-border">
                    <img
                      src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=600&q=80"
                      alt="Map location"
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <MapPin size={32} className="text-crimson mb-2" />
                      <p className="text-cream/60 text-sm">Medical Road, Aligarh</p>
                      <a
                        href="https://maps.google.com/?q=Near+Shah+Residency+Near+Firoz+Hospital+Aligarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-gold text-xs border border-gold/30 px-3 py-1.5 rounded-sm hover:bg-gold/10 transition-colors"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919837174406?text=Hi%2C%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 card-dark border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={22} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-cream font-medium text-sm">Quick Book on WhatsApp</p>
                    <p className="text-cream/40 text-xs">Get a confirmation within 30 minutes</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
