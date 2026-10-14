import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SmartImage from '../shared/SmartImage';
import Reveal from '../shared/Reveal';
import { aboutTeaser } from '../../data/content';
const ticks = [
    'CBSE-aligned, NEP 2020-ready',
    '1:20 teacher–student ratio',
    '12-acre green campus',
];
/**
 * Two-column about teaser: framed campus photo left, copy + ticks + CTA right.
 */
export default function AboutTeaser() {
    return (<section className="bg-white py-20 sm:py-24" aria-label="About the school">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gold-500/25" aria-hidden="true"/>
          <SmartImage src={aboutTeaser.image} alt="Students on the EAK International School campus" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"/>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-navy-900 px-6 py-4 text-white shadow-xl sm:-right-6">
            <p className="font-display text-3xl font-bold text-gold-400">28+</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-100">Years of Excellence</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">About the School</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {aboutTeaser.title}
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">{aboutTeaser.text}</p>

          <ul className="mt-6 flex flex-col gap-3">
            {ticks.map((tick) => (<li key={tick} className="flex items-center gap-3 text-sm font-medium text-navy-900 sm:text-base">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Check className="h-4 w-4" aria-hidden="true"/>
                </span>
                {tick}
              </li>))}
          </ul>

          <Link to="/about" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lg">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
          </Link>
        </Reveal>
      </div>
    </section>);
}
