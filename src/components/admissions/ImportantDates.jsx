import { CalendarDays } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { importantDates } from '../../data/content';

/* Key milestones of the admission cycle */
export default function ImportantDates() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24" aria-label="Important dates">
      <SectionHeading
        eyebrow="Mark your calendar"
        title="Important dates 2027–28"
        description="Key milestones in this year's admission cycle."
      />
      <div className="mt-12">
        {importantDates.map((d, i) => (
          <Reveal key={d.event} delay={i * 0.05}>
            <div className="flex items-center gap-5 border-b border-navy-100 py-5 last:border-0">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900">
                <CalendarDays className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-navy-900">{d.event}</p>
                <p className="font-display text-lg font-bold text-gold-600">{d.date}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
