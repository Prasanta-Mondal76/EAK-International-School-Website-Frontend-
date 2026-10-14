import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import SmartImage from '../shared/SmartImage';
import { facilities } from '../../data/content';
/**
 * Dark navy preview of campus facilities: image cards with gradient
 * overlay titles + "Explore All Facilities" CTA.
 */
export default function FacilitiesPreview() {
    return (<section className="bg-navy-900 py-20 sm:py-24" aria-label="Campus facilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow="Campus" title="World-Class Facilities" description="A 12-acre green campus built for learning, sport, creativity and care — take a glimpse at where your child will grow."/>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (<Reveal key={facility.key} delay={index * 0.07} className="h-full">
              <article className="group relative h-full min-h-[16rem] overflow-hidden rounded-2xl shadow-lg">
                <SmartImage src={facility.image} alt={facility.imageAlt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" aria-hidden="true"/>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-white">{facility.title}</h3>
                  <p className="mt-1 font-display text-sm italic text-gold-400">{facility.tagline}</p>
                </div>
              </article>
            </Reveal>))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/facilities" className="group inline-flex items-center gap-2 rounded-full border-2 border-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-gold-400 transition-all hover:-translate-y-0.5 hover:bg-gold-500 hover:text-navy-950 hover:shadow-lg">
            Explore All Facilities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
          </Link>
        </div>
      </div>
    </section>);
}
