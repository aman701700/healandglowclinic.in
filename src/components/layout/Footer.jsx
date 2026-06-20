import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const footerLinks = {
  'Services': [
    { label: 'Physiotherapy', to: '/services' },
    { label: 'Sports Rehab', to: '/services' },
    { label: 'Body Slimming', to: '/services' },
    { label: 'Beauty Treatments', to: '/services' },
    { label: 'Cupping Therapy', to: '/services' },
  ],
  'Quick Links': [
    { label: 'About Dr. Nadeem', to: '/about' },
    { label: 'Conditions Treated', to: '/conditions' },
    { label: 'Patient Stories', to: '/#testimonials' },
    { label: 'Blog & Articles', to: '/blog' },
    { label: 'Book Appointment', to: '/contact' },
    { label: 'Contact Us', to: '/contact' },
  ],
};

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: MessageCircle, href: 'https://wa.me/919837174406', label: 'WhatsApp', color: 'hover:text-green-400' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-crimson-900 via-crimson to-crimson-900 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-accent text-gold text-lg md:text-xl tracking-wide">
              Ready to Begin Your Healing Journey?
            </p>
            <p className="text-cream/70 text-sm mt-1">
              Book your consultation with Dr. Nadeem Ahmad today.
            </p>
          </div>
            <div className="flex gap-3 flex-shrink-0">
            <a href="https://wa.me/919837174406" className="btn-gold text-xs py-2.5 px-5">
              WhatsApp Now
            </a>
            <Link to="/contact" className="btn-ghost text-xs py-2.5 px-5 border-white/20 hover:border-gold/40">
              Book Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center bg-dark-surface">
                <span className="text-gold font-accent font-bold text-sm">H&G</span>
              </div>
              <div>
                <div className="font-accent text-gold text-lg leading-tight">Heal & Glow</div>
                <div className="text-[10px] text-cream/40 tracking-[0.2em] uppercase">Clinic</div>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-5">
              Delhi's premier destination for physiotherapy, slimming, and beauty. 
              Led by Dr. Nadeem Ahmad with 29+ years of expertise.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-sm border border-dark-border flex items-center justify-center text-cream/40 ${color} hover:border-gold/20 transition-all duration-200`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-accent text-gold/80 text-xs tracking-[0.2em] uppercase mb-5">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-cream/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-accent text-gold/80 text-xs tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <span className="text-cream/50 text-sm leading-relaxed">
                  Near Shah Residency, Near Firoz Hospital<br />Medical Road, Aligarh
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <a href="tel:+919837174406" className="text-cream/50 text-sm hover:text-gold transition-colors">
                  +91 98371 74406
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <a href="mailto:drnadeemahmad3116@gmail.com" className="text-cream/50 text-sm hover:text-gold transition-colors">
                  drnadeemahmad3116@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={15} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <div className="text-cream/50 text-sm leading-relaxed">
                  Mon–Fri: 9am–8pm<br />
                  Sat: 9am–6pm<br />
                  Sun: 10am–2pm
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">
            © 2026 Heal & Glow Clinic. All rights reserved. Dr. Nadeem Ahmad, Senior Physiotherapist.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
