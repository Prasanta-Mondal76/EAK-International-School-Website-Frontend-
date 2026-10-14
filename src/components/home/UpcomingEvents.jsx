import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import EventCard from '../shared/EventCard';
import { events } from '../../data/content';
/**
 * Upcoming events: first 3 events as EventCards + link to all events.
 */
export default function UpcomingEvents() {
    return (<section className="bg-navy-50 py-20 sm:py-24" aria-label="Upcoming events">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Mark Your Calendar" title="Upcoming Events" description="Sports days, exhibitions, fests and celebrations — life at EAK extends far beyond the classroom."/>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (<Reveal key={event.id} delay={index * 0.08} className="h-full">
              <EventCard event={event}/>
            </Reveal>))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/events" className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lg">
            View All Events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
          </Link>
        </div>
      </div>
    </section>);
}
