import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { admissionSteps } from '../../data/content';

/* 5-step visual stepper: Enquiry -> Application -> Interaction/Assessment -> Selection -> Enrollment */
export default function AdmissionSteps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24" aria-label="Admission process">
      <SectionHeading
        eyebrow="How it works"
        title="Your admission journey in 5 steps"
        description="A transparent, parent-friendly process from first enquiry to first day of school."
      />
      <div className="relative mt-14">
        <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-0.5 bg-navy-100 lg:block" />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {admissionSteps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative text-center lg:text-left"
            >
              <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-bold text-gold-400 shadow ring-4 ring-cream-50 lg:mx-0">
                {s.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
