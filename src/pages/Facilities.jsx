import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import Reveal from '../components/shared/Reveal';
import SmartImage from '../components/shared/SmartImage';
import { facilities } from '../data/content';
export default function Facilities() {
    return (<>
      <PageHero title="Campus Facilities" subtitle="A 12-acre learning landscape designed for curiosity, sport, art and everyday joy." crumbs={['Facilities']} image="/images/facility-sports.jpg"/>

      {/* (a) Alternating feature rows */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-16 lg:space-y-28 lg:py-24" aria-label="Facilities">
        {facilities.map((f, i) => (<div key={f.key} className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <SmartImage src={f.image} alt={f.imageAlt} className="h-72 w-full rounded-2xl object-cover shadow-xl lg:h-96"/>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-600">{f.tagline}</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">{f.title}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{f.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {f.features.map((feat) => (<li key={feat} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20">
                      <Check className="h-3 w-3 text-gold-700" aria-hidden="true"/>
                    </span>
                    {feat}
                  </li>))}
              </ul>
            </Reveal>
          </div>))}
      </section>

      {/* (b) Gallery strip */}
      <section className="bg-cream-100 py-16 lg:py-24" aria-label="Campus gallery">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Take a look" title="Glimpses of campus life" description="Hover any photo to explore our learning spaces."/>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (<Reveal key={f.key} delay={i * 0.06}>
                <figure className="group relative h-60 overflow-hidden rounded-2xl shadow-md">
                  <SmartImage src={f.image} alt={f.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-5 pt-12">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">{f.tagline}</p>
                    <p className="mt-1 font-display text-lg font-bold text-white">{f.title}</p>
                  </figcaption>
                </figure>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* (c) CTA band */}
      <section className="bg-navy-900 py-16" aria-label="Schedule a campus tour">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">See it in person</h2>
            <p className="mt-2 text-navy-100">
              Photos only go so far — walk our corridors, meet our teachers and feel the EAK difference.
            </p>
          </div>
          <Link to="/contact" className="shrink-0 rounded-full bg-gold-500 px-10 py-4 text-sm font-bold uppercase tracking-wider text-navy-950 shadow-lg transition hover:bg-gold-400">
            Schedule a campus tour
          </Link>
        </div>
      </section>
    </>);
}
