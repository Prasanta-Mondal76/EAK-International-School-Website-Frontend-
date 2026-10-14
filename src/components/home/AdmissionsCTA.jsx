import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from '../shared/Reveal';
import { contactInfo } from '../../data/content';
/**
 * Gradient admissions banner with floating gold accents and two CTAs.
 */
export default function AdmissionsCTA() {
    return (<section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8" aria-label="Admissions call to action">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 px-6 py-16 shadow-2xl sm:px-12 lg:px-20">
          {/* Decorative floating gold circles */}
          <div className="animate-eak-float absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/15 blur-2xl" aria-hidden="true"/>
          <div className="animate-eak-float absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-gold-400/10 blur-2xl" aria-hidden="true" style={{ animationDelay: '2s' }}/>
          <div className="absolute right-10 top-10 hidden h-24 w-24 rounded-full border-2 border-gold-500/30 lg:block" aria-hidden="true"/>

          <motion.div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" aria-hidden="true"/>
                Limited Seats Per Grade
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Admissions Open for <span className="text-gold-400">2027–28</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
                Give your child the EAK advantage — rigorous academics, joyful learning and character that lasts a lifetime.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
              <Link to="/admissions" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-950 shadow-lg shadow-gold-500/30 transition-all hover:-translate-y-0.5 hover:bg-gold-400">
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
              </Link>
              <a href={contactInfo.admissionsPhoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-400">
                <Phone className="h-4 w-4" aria-hidden="true"/>
                {contactInfo.admissionsPhone}
              </a>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>);
}
