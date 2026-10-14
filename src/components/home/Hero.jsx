import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import SmartImage from '../shared/SmartImage';
import { contactInfo, heroContent } from '../../data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/**
 * Full-screen home hero: campus photo with navy gradient overlay,
 * admissions pill, school name, tagline, CTAs and a scroll indicator.
 */
export default function Hero() {
  return (
  <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950" aria-label="Welcome to EAK International School">
    <SmartImage src="/images/hero-campus.jpg" alt="Aerial view of the EAK International School campus" eager className="absolute inset-0 h-full w-full object-cover" />
    
    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/20" aria-hidden="true" />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" aria-hidden="true" />

    <motion.div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8" variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" aria-hidden="true" />
          Admissions Open · 2027–28
        </span>
      </motion.div>

      <motion.h1 variants={item} className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
        EAK International <span className="text-gold-400">School</span>
      </motion.h1>

      <motion.p variants={item} className="mt-4 font-display text-xl italic text-gold-100 sm:text-2xl">
        {heroContent.tagline}
      </motion.p>

      <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
        {heroContent.intro}
      </motion.p>

      <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
        <Link to="/admissions" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-950 shadow-lg shadow-gold-500/30 transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl">
          Apply Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Admission Inquiry
        </Link>
      </motion.div>

      <motion.p variants={item} className="mt-6 text-sm text-navy-100">
        Prefer to talk? Call our admissions office:{' '}
        <a href={contactInfo.admissionsPhoneHref} className="font-semibold text-gold-400 hover:underline">
          {contactInfo.admissionsPhone}
        </a>
      </motion.p>
    </motion.div>

    {/* Scroll indicator */}
    <motion.a href="#why-eak" aria-label="Scroll to content" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-100/80 transition-colors hover:text-gold-400 sm:flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
      <span className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-current p-1.5">
        <motion.span className="h-2 w-2 rounded-full bg-current" animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
    </motion.a>
  </section>);
}
