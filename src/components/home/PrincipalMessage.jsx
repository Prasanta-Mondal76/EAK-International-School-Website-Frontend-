import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import SmartImage from '../shared/SmartImage';
import Reveal from '../shared/Reveal';
import { principal } from '../../data/content';
/**
 * Cream section: principal portrait with gold frame + short message,
 * link to leadership on the About page.
 */
export default function PrincipalMessage() {
    return (<section className="bg-cream-100 py-20 sm:py-24" aria-label="Message from the principal">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-gold-500" aria-hidden="true"/>
          <SmartImage src={principal.image} alt={`Portrait of ${principal.name}`} className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-xl"/>
        </Reveal>

        <Reveal delay={0.12}>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-400">
            <Quote className="h-7 w-7" aria-hidden="true"/>
          </span>
          <blockquote className="mt-6 font-display text-xl italic leading-relaxed text-navy-900 sm:text-2xl">
            “{principal.shortMessage}”
          </blockquote>
          <p className="mt-6 font-display text-lg font-bold text-navy-900">{principal.name}</p>
          <p className="text-sm font-medium text-slate-500">{principal.title}</p>
          <Link to="/about" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-700">
            More about our leadership
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
          </Link>
        </Reveal>
      </div>
    </section>);
}
