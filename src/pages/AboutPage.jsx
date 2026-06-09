import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn, SectionHeader, StatCard } from '../components/common/Cards';
import { statsData } from '../data';
import drNadeem from "../../public/dr_nadeem.png"

const qualifications = [
  { year: '2004', title: 'BPT – Bachelor of Physiotherapy', institute: 'All India Institute of Medical Sciences (AIIMS), New Delhi' },
  { year: '2006', title: 'MPT – Master of Physiotherapy (Orthopedics)', institute: 'Delhi University, Faculty of Allied Health Sciences' },
  { year: '2009', title: 'Fellowship in Sports Medicine & Rehabilitation', institute: 'International Federation of Sports Medicine' },
  { year: '2012', title: 'Certification in Neurological Rehabilitation', institute: 'Bobath Centre London (UK)' },
  { year: '2015', title: 'Advanced Dry Needling Certification', institute: 'INMT Institute, USA' },
  { year: '2019', title: 'Diploma in Aesthetic Medicine & Slimming', institute: 'AESMD India' },
];

const philosophy = [
  { icon: '🎯', title: 'Precision Diagnosis', desc: 'Every treatment begins with a thorough clinical assessment to identify root causes, not just symptoms.' },
  { icon: '🔬', title: 'Evidence-Based Practice', desc: 'All interventions are grounded in current peer-reviewed research and clinical guidelines.' },
  { icon: '🤝', title: 'Patient Partnership', desc: 'We believe healing is a collaborative journey — patients are active partners, not passive recipients.' },
  { icon: '🌿', title: 'Holistic Approach', desc: 'We treat the whole person — body, mind, and lifestyle — for lasting transformation.' },
];

const achievements = [
  '20+ years of clinical physiotherapy practice in Delhi NCR',
  'Treated 8,000+ patients across 40+ conditions',
  'Sports physio for national-level athletes and IPL cricket teams',
  'Guest faculty at multiple physiotherapy institutions in Delhi',
  'Published research on dry needling efficacy in chronic pain',
  'Awarded "Best Physiotherapist 2023" by Delhi Medical Association',
  'Pioneer of the 3-in-1 Physiotherapy + Slimming + Beauty model in India',
];

export default function AboutPage({ onBooking }) {
  return (
    <>
      <Helmet>
        <title>About Dr. Nadeem Ahmad – Senior Physiotherapist | Heal & Glow Clinic Delhi</title>
        <meta name="description" content="Learn about Dr. Nadeem Ahmad, Senior Physiotherapist with 20+ years experience. Founder of Heal & Glow Clinic, Delhi's leading wellness destination." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={drNadeem} alt="Dr Nadeem Ahmad" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 to-dark-bg" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">About the Doctor</motion.p>
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-cream font-light mb-4"
          >
            Dr. Nadeem Ahmad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gold/70 font-accent text-lg tracking-wider"
          >
            Senior Consultant Physiotherapist
          </motion.p>
        </div>
      </section>

      {/* Doctor Intro */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <div className="relative">
                <img
                  src={drNadeem}
                  alt="Dr. Nadeem Ahmad"
                  className="w-65 rounded-sm w-[300px] h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-dark-card border border-gold/30 p-5 rounded-sm shadow-card max-w-[200px]">
                  <div className="font-display text-3xl text-gold">8,000+</div>
                  <div className="text-cream/50 text-xs mt-1 uppercase tracking-wider">Patients Treated</div>
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold/30" />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <p className="section-label">The Journey</p>
              <div className="gold-divider mb-5" />
              <h2 className="font-display text-3xl md:text-4xl text-cream font-light mb-5">
                A Lifetime Dedicated to Healing
              </h2>
              <p className="text-cream/60 leading-relaxed mb-4">
                Dr. Nadeem Ahmad's journey in physiotherapy began over two decades ago with a simple 
                conviction: that the human body, given the right support, has an extraordinary capacity to heal.
              </p>
              <p className="text-cream/60 leading-relaxed mb-4">
                Graduating from AIIMS New Delhi with distinction, Dr. Ahmad went on to pursue advanced 
                training in orthopedic, neurological, and sports physiotherapy at institutions in India, 
                the UK, and the USA. His breadth of knowledge is matched only by his depth of compassion.
              </p>
              <p className="text-cream/60 leading-relaxed mb-8">
                In 2020, he founded Heal & Glow Clinic — a first-of-its-kind facility that integrates 
                physiotherapy with slimming science and aesthetic beauty, reflecting his belief in 
                treating the whole person, inside and out.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {statsData.slice(0, 4).map((stat, i) => (
                  <div key={i} className="card-dark text-center">
                    <div className="font-display text-3xl text-gold">{stat.value}{stat.suffix}</div>
                    <div className="text-cream/50 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button onClick={onBooking} className="btn-primary">
                Book with Dr. Ahmad <ArrowRight size={16} />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-20 bg-dark-card border-y border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Education & Training" title="Qualifications & Certifications" />
          <div className="space-y-6">
            {qualifications.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-accent text-gold/80 text-sm">{q.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-gold mt-1.5" />
                  {i < qualifications.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent mt-1 h-8" />
                  )}
                </div>
                <div className="card-dark flex-1 pb-4">
                  <h3 className="font-body text-sm font-medium text-cream mb-1">{q.title}</h3>
                  <p className="text-cream/40 text-xs">{q.institute}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Clinical Philosophy" title="How Dr. Ahmad Heals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {philosophy.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-dark text-center h-full group hover:border-gold/20">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h3 className="font-display text-lg text-cream mb-2 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-cream/50 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-dark-card border-y border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Recognition" title="Notable Achievements" />
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 card-dark"
              >
                <CheckCircle size={16} className="text-gold/60 flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">{a}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-bg text-center">
        <FadeIn>
          <p className="section-label mb-4">Start Your Recovery</p>
          <h2 className="font-display text-4xl text-cream mb-4">Ready to work with Dr. Ahmad?</h2>
          <p className="text-cream/50 mb-8 max-w-xl mx-auto">Join thousands of patients who have found relief, strength, and confidence at Heal & Glow Clinic.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={onBooking} className="btn-primary">Book Consultation <ArrowRight size={16} /></button>
            <Link to="/services" className="btn-gold">View Services</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
