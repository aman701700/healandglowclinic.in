import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, CheckCircle, User, Phone, Calendar, MessageSquare, ChevronDown } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid phone number').max(13),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a preferred date'),
  message: z.string().optional(),
});

const services = [
  'Physiotherapy',
  'Sports Injury Rehab',
  'Post-Surgical Rehab',
  'Neurological Rehabilitation',
  'Dry Needling',
  'Cupping Therapy',
  'Manual Therapy',
  'Body Slimming',
  'Beauty Treatments',
  'Pediatric Physiotherapy',
  'Geriatric Physiotherapy',
  'Electrotherapy',
  'General Consultation',
];

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Booking data:', data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="bg-dark-card border border-dark-border w-full max-w-md rounded-sm shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-crimson-900 to-dark-bg px-6 py-5 border-b border-dark-border">
                <div className="ornament-line mb-1">
                  <span className="section-label text-[10px]">Heal & Glow Clinic</span>
                </div>
                <h2 className="font-display text-2xl text-cream font-light">
                  Book Your Appointment
                </h2>
                <p className="text-cream/50 text-xs mt-1">With Dr. Nadeem Ahmad</p>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-cream/40 hover:text-cream border border-dark-border rounded-sm transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="font-display text-xl text-cream mb-2">Booking Confirmed!</h3>
                    <p className="text-cream/60 text-sm">
                      We'll contact you shortly to confirm your appointment. 
                      You'll receive a WhatsApp confirmation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    {/* Name */}
                    <div>
                      <label className="block text-xs text-cream/50 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/30" />
                        <input
                          {...register('name')}
                          placeholder="Your full name"
                          className="w-full pl-9 pr-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors rounded-sm"
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs text-cream/50 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/30" />
                        <input
                          {...register('phone')}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full pl-9 pr-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors rounded-sm"
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs text-cream/50 uppercase tracking-wider mb-1.5">
                        Service Required *
                      </label>
                      <div className="relative">
                        <select
                          {...register('service')}
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-dark-surface border border-dark-border text-cream text-sm focus:outline-none focus:border-gold/40 transition-colors rounded-sm"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/30 pointer-events-none" />
                      </div>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs text-cream/50 uppercase tracking-wider mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/30" />
                        <input
                          type="date"
                          {...register('date')}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-9 pr-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm focus:outline-none focus:border-gold/40 transition-colors rounded-sm [color-scheme:dark]"
                        />
                      </div>
                      {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-cream/50 uppercase tracking-wider mb-1.5">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        {...register('message')}
                        rows={3}
                        placeholder="Describe your condition or any specific requirements..."
                        className="w-full px-4 py-3 bg-dark-surface border border-dark-border text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors rounded-sm resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center mt-2">
                      Confirm Booking
                    </button>

                    <p className="text-cream/30 text-xs text-center">
                      We'll confirm your appointment via WhatsApp within 30 minutes.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
