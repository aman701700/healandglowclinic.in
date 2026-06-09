import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { conditionsData } from '../data';
import { SectionHeader, FadeIn } from '../components/common/Cards';

const extendedConditions = [
  ...conditionsData,
  { id: 13, title: 'Scoliosis', icon: '🔄', desc: 'Spinal curvature management and posture correction', image: '' },
  { id: 14, title: 'Frozen Shoulder', icon: '❄️', desc: 'Adhesive capsulitis mobilisation and pain relief', image: '' },
  { id: 15, title: 'Plantar Fasciitis', icon: '👣', desc: 'Heel pain, arch support, and fascial release', image: '' },
  { id: 16, title: 'Tennis/Golf Elbow', icon: '🎾', desc: 'Lateral and medial epicondylitis treatment', image: '' },
  { id: 17, title: 'Fibromyalgia', icon: '🌊', desc: 'Chronic widespread pain and fatigue management', image: '' },
  { id: 18, title: 'Vertigo & Dizziness', icon: '🌀', desc: 'Vestibular rehabilitation and BPPV treatment', image: '' },
  { id: 19, title: 'Post-Covid Rehab', icon: '🫁', desc: 'Long COVID fatigue, breathlessness, and joint pain', image: '' },
  { id: 20, title: 'Obesity & Weight', icon: '⚖️', desc: 'Medical weight management and body transformation', image: '' },
];

export default function ConditionsPage({ onBooking }) {
  return (
    <>
      <Helmet>
        <title>Conditions We Treat | Heal & Glow Clinic Delhi – Physiotherapy Specialists</title>
        <meta name="description" content="We treat back pain, knee pain, stroke rehab, sciatica, sports injuries, arthritis, and 20+ more conditions. Expert physiotherapy in Delhi." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">
            Conditions Treated
          </motion.p>
          <div className="flex justify-center mb-4"><div className="gold-divider" /></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-cream font-light"
          >
            What We Can Help With
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cream/50 mt-4 max-w-2xl mx-auto"
          >
            From acute sports injuries to complex neurological rehabilitation — no condition is beyond our expertise.
          </motion.p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extendedConditions.map((condition, i) => (
              <motion.div
                key={condition.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="card-dark group hover:border-gold/20 cursor-pointer"
                onClick={onBooking}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {condition.icon}
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium text-cream group-hover:text-gold transition-colors mb-1">
                      {condition.title}
                    </h3>
                    <p className="text-cream/40 text-xs leading-snug">{condition.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight conditions with images */}
      <section className="py-20 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Common Presentations" title="Most Frequently Treated" subtitle="These are the conditions our patients most often come to us for." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Spinal & Disc Conditions',
                icon: '🦴',
                items: ['Lower back pain', 'Disc herniation / bulge', 'Sciatica', 'Cervical spondylosis', 'Spinal stenosis', 'Post-spinal surgery rehab'],
                image: 'https://images.unsplash.com/photo-1544991875-5dc1b05f1571?w=500&q=80',
              },
              {
                title: 'Joint & Orthopaedic',
                icon: '🦵',
                items: ['Knee pain & ligament tears', 'Shoulder impingement', 'Hip osteoarthritis', 'Ankle sprains', 'Carpal tunnel syndrome', 'ACL/PCL rehabilitation'],
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=80',
              },
              {
                title: 'Neurological Conditions',
                icon: '🧠',
                items: ['Stroke rehabilitation', 'Parkinson\'s disease', 'Multiple sclerosis', 'Spinal cord injury', 'Cerebral palsy (pediatric)', 'Peripheral neuropathy'],
                image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80',
              },
            ].map((group, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-dark overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 mb-5 rounded-sm overflow-hidden">
                    <img src={group.image} alt={group.title} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-2xl">{group.icon}</span>
                      <h3 className="font-display text-lg text-cream">{group.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-cream/60 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-bg text-center">
        <FadeIn>
          <p className="section-label mb-4">Don't See Your Condition?</p>
          <h2 className="font-display text-3xl text-cream mb-3">We likely treat it.</h2>
          <p className="text-cream/50 mb-6 text-sm max-w-lg mx-auto">
            With 20+ years of clinical experience across dozens of specialities, Dr. Ahmad has 
            encountered and treated virtually every musculoskeletal and neurological condition.
          </p>
          <button onClick={onBooking} className="btn-primary">
            Book a Consultation <ArrowRight size={16} />
          </button>
        </FadeIn>
      </section>
    </>
  );
}
