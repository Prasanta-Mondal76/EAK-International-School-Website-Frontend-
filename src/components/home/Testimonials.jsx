import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { testimonials } from '../../data/content';
/**
 * Testimonial carousel: auto-advances every 6s, pauses on hover,
 * with prev/next buttons and dots.
 */
export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [direction, setDirection] = useState(1);
    useEffect(() => {
        if (paused)
            return;
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((i) => (i + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [paused]);
    const goTo = (i) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };
    const prev = () => {
        setDirection(-1);
        setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    };
    const next = () => {
        setDirection(1);
        setIndex((i) => (i + 1) % testimonials.length);
    };
    const current = testimonials[index];
    return (<section className="bg-navy-50 py-20 sm:py-24" aria-label="Parent and alumni testimonials">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Our Community Says" description="Parents and alumni on what makes EAK different."/>

        <div className="relative mt-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="relative min-h-[20rem] overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg sm:min-h-[17rem] sm:p-12">
            <span className="absolute left-8 top-8 text-gold-500/20 sm:left-10 sm:top-10" aria-hidden="true">
              <Quote className="h-16 w-16"/>
            </span>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure key={index} custom={direction} initial={{ opacity: 0, x: 60 * direction }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 * direction }} transition={{ duration: 0.45, ease: 'easeOut' }} className="relative flex h-full flex-col">
                <blockquote className="flex-1 font-display text-lg italic leading-relaxed text-navy-900 sm:text-2xl">
                  “{current.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 font-display text-lg font-bold text-navy-950" aria-hidden="true">
                    {current.initials}
                  </span>
                  <span>
                    <span className="block font-bold text-navy-900">{current.name}</span>
                    <span className="block text-sm text-slate-500">{current.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <button type="button" onClick={prev} aria-label="Previous testimonial" className="absolute -left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition-colors hover:bg-gold-500 hover:text-navy-950 sm:flex">
            <ChevronLeft className="h-5 w-5" aria-hidden="true"/>
          </button>
          <button type="button" onClick={next} aria-label="Next testimonial" className="absolute -right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg transition-colors hover:bg-gold-500 hover:text-navy-950 sm:flex">
            <ChevronRight className="h-5 w-5" aria-hidden="true"/>
          </button>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((t, i) => (<button key={t.initials} type="button" role="tab" aria-selected={i === index} aria-label={`Show testimonial from ${t.name}`} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-gold-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}/>))}
          </div>
        </div>
      </div>
    </section>);
}
