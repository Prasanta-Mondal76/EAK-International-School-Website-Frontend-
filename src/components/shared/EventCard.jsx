import { Clock, MapPin } from 'lucide-react';
import SmartImage from './SmartImage';
const categoryStyles = {
    'School Event': 'bg-navy-900/85 text-white',
    Competition: 'bg-gold-500/90 text-navy-950',
    Sports: 'bg-emerald-600/90 text-white',
    Cultural: 'bg-fuchsia-700/90 text-white',
    Workshop: 'bg-sky-700/90 text-white',
};
/**
 * Event card: image with date badge + category chip, title, time/venue rows,
 * short description. Lifts on hover.
 */
export default function EventCard({ event }) {
    const d = new Date(`${event.date}T00:00:00`);
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('en-IN', { month: 'short' });
    return (<article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <SmartImage src={event.image} alt={event.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        <div className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-navy-950/90 text-white shadow-lg backdrop-blur">
          <span className="font-display text-lg font-bold leading-none">{day}</span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400">{month}</span>
        </div>
        <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow ${categoryStyles[event.category]}`}>
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-navy-700">
          {event.title}
        </h3>
        <div className="flex flex-col gap-1.5 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true"/>
            {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true"/>
            {event.venue}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">{event.description}</p>
      </div>
    </article>);
}
