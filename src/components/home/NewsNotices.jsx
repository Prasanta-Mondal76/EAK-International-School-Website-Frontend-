import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { newsNotices } from '../../data/content';
const categoryStyles = {
    Admissions: 'bg-gold-100 text-gold-700',
    Examinations: 'bg-sky-100 text-sky-800',
    Holiday: 'bg-emerald-100 text-emerald-800',
    Competitions: 'bg-fuchsia-100 text-fuchsia-800',
    Circular: 'bg-slate-200 text-slate-700',
};
function splitDate(date) {
    const [day, mon, year] = date.split(' ');
    return { day: day ?? '', mon: mon ?? '', year: year ?? '' };
}
/**
 * Latest news & notices: date blocks, category chips, pulsing "New" badges.
 */
export default function NewsNotices() {
    return (<section className="bg-white py-20 sm:py-24" aria-label="Latest news and notices">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Stay Updated" title="Latest News & Notices" description="Announcements, schedules and circulars — everything parents need to know, in one place."/>

        <div className="mt-12 flex flex-col gap-4">
          {newsNotices.map((notice, index) => {
            const { day, mon, year } = splitDate(notice.date);
            return (<Reveal key={notice.id} delay={index * 0.06}>
                <article className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-cream-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-lg sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-0 sm:rounded-xl sm:bg-navy-900 sm:px-5 sm:py-3 sm:text-white">
                    <span className="font-display text-2xl font-bold text-navy-900 sm:text-white">{day}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-gold-400">
                      {mon} {year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${categoryStyles[notice.category] ?? 'bg-slate-200 text-slate-700'}`}>
                        {notice.category}
                      </span>
                      {notice.isNew && (<span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-red-700">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600" aria-hidden="true"/>
                          New
                        </span>)}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-navy-700">
                      {notice.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{notice.excerpt}</p>
                  </div>
                </article>
              </Reveal>);
        })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/events" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-950 shadow-lg shadow-gold-500/30 transition-all hover:-translate-y-0.5 hover:bg-gold-400">
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
          </Link>
        </div>
      </div>
    </section>);
}
