import { useEffect, useMemo, useState } from 'react';
import { CalendarX, Search } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import Reveal from '../components/shared/Reveal';
import EventCard from '../components/shared/EventCard';
import { eventCategories, events, newsNotices } from '../data/content';
/** Reference "today" for past-event filtering (assignment date context). */
const TODAY = '2026-10-12';
const PAGE_SIZE = 6;
const formatMonthLabel = (yyyymm) => new Date(`${yyyymm}-01T00:00:00`).toLocaleString('en-IN', { month: 'long', year: 'numeric' });
const categoryChip = {
    Admissions: 'bg-gold-500/15 text-gold-700',
    Examinations: 'bg-navy-900/10 text-navy-900',
    Holiday: 'bg-emerald-100 text-emerald-700',
    Competitions: 'bg-purple-100 text-purple-700',
    Circular: 'bg-sky-100 text-sky-700',
};
export default function EventsNotices() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [month, setMonth] = useState('all');
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const monthOptions = useMemo(() => {
        const keys = [...new Set(events.map((e) => e.date.slice(0, 7)))].sort();
        return keys.map((key) => ({ value: key, label: formatMonthLabel(key) }));
    }, []);
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return events
            .filter((e) => {
            if (q && !`${e.title} ${e.description}`.toLowerCase().includes(q))
                return false;
            if (category !== 'All' && e.category !== category)
                return false;
            if (month === 'past')
                return e.date < TODAY;
            if (month !== 'all')
                return e.date.startsWith(month);
            return true;
        })
            .sort((a, b) => {
            const aPast = a.date < TODAY;
            const bPast = b.date < TODAY;
            if (aPast !== bPast)
                return aPast ? 1 : -1;
            return aPast ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
        });
    }, [query, category, month]);
    // Reset pagination whenever filters change.
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
    }, [query, category, month]);
    const resetFilters = () => {
        setQuery('');
        setCategory('All');
        setMonth('all');
    };
    const visible = filtered.slice(0, visibleCount);
    return (<>
      <PageHero title="Events & Notices" subtitle="Everything happening on campus — announcements, celebrations and competitions." crumbs={['Events & Notices']} image="/images/event-cultural.jpg"/>

      {/* (a) Notices */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24" aria-label="Notices">
        <SectionHeading eyebrow="Stay updated" title="Latest notices" description="Official announcements and circulars for parents and students."/>
        <div className="mt-12 space-y-4">
          {newsNotices.map((n, i) => {
            const [day, mon, year] = n.date.split(' ');
            return (<Reveal key={n.id} delay={i * 0.05}>
                <article className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100/60 transition hover:shadow-md sm:flex-row sm:items-center">
                  <div aria-label={n.date} className="flex w-fit shrink-0 flex-col items-center rounded-xl bg-navy-900 px-5 py-3 text-white">
                    <span className="font-display text-2xl font-bold text-gold-400">{day}</span>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-navy-100">
                      {mon} {year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide ${categoryChip[n.category] ?? 'bg-navy-900/10 text-navy-900'}`}>
                        {n.category}
                      </span>
                      {n.isNew && (<span className="rounded-full bg-gold-500 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-navy-950">
                          New
                        </span>)}
                    </div>
                    <h3 className="mt-2 font-semibold text-navy-900">{n.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{n.excerpt}</p>
                  </div>
                </article>
              </Reveal>);
        })}
        </div>
      </section>

      {/* (b) Events explorer */}
      <section className="bg-cream-100 py-16 lg:py-24" aria-label="Events explorer">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Mark your calendar" title="Explore school events" description="Search, filter and find the events that matter to your family."/>

          {/* Filters */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Search events</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true"/>
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events by title or description…" className="w-full rounded-full border border-navy-100 bg-white py-3 pl-12 pr-5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"/>
            </label>
            <label className="flex items-center gap-2">
              <span className="sr-only">Filter by month</span>
              <select value={month} onChange={(e) => setMonth(e.target.value)} className="w-full rounded-full border border-navy-100 bg-white px-5 py-3 text-sm font-semibold text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 lg:w-auto">
                <option value="all">All dates</option>
                {monthOptions.map((m) => (<option key={m.value} value={m.value}>
                    {m.label}
                  </option>))}
                <option value="past">Past events</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Event categories">
            {eventCategories.map((c) => (<button key={c} type="button" role="tab" aria-selected={category === c} onClick={() => setCategory(c)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${category === c
                ? 'bg-navy-900 text-gold-400 shadow'
                : 'bg-white text-navy-900 ring-1 ring-navy-100 hover:ring-gold-500'}`}>
                {c}
              </button>))}
          </div>

          {/* Results */}
          {filtered.length === 0 ? (<div className="mt-12 rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
              <CalendarX className="mx-auto h-14 w-14 text-navy-100" aria-hidden="true"/>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">No events match your filters</h3>
              <p className="mt-2 text-sm text-slate-500">Try a different search term or clear the filters.</p>
              <button type="button" onClick={resetFilters} className="mt-6 rounded-full bg-navy-900 px-8 py-3 text-sm font-bold text-gold-400 transition hover:bg-navy-800">
                Reset filters
              </button>
            </div>) : (<>
              <p className="mt-8 text-sm text-slate-500" aria-live="polite">
                Showing {visible.length} of {filtered.length} event{filtered.length === 1 ? '' : 's'}
              </p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((event) => (<EventCard key={event.id} event={event}/>))}
              </div>
              {visibleCount < filtered.length && (<div className="mt-10 text-center">
                  <button type="button" onClick={() => setVisibleCount(filtered.length)} className="rounded-full bg-navy-900 px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-gold-400 shadow transition hover:bg-navy-800">
                    Load more
                  </button>
                </div>)}
            </>)}
        </div>
      </section>
    </>);
}
