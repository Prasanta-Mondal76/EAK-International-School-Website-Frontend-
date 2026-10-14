import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import SmartImage from '../shared/SmartImage';
import { academicStages } from '../../data/content';
/**
 * Four academic stages: image, name, class/age chips, description, link.
 */
export default function AcademicStages() {
    return (<section className="bg-navy-50 py-20 sm:py-24" aria-label="Academic stages">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Academics" title="Academic Excellence, Stage by Stage" description="From a child's first phonics lesson to board-exam mastery, every stage of the EAK journey is designed with purpose."/>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {academicStages.map((stage, index) => (<Reveal key={stage.key} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="overflow-hidden">
                  <SmartImage src={stage.image} alt={stage.name} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-2xl font-bold text-navy-900">{stage.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-gold-700">
                      {stage.classes}
                    </span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-800">
                      {stage.ageGroup}
                    </span>
                  </div>
                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{stage.description}</p>
                  <Link to="/academics" className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 transition-colors hover:text-gold-700">
                    Explore Academics
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true"/>
                  </Link>
                </div>
              </article>
            </Reveal>))}
        </div>
      </div>
    </section>);
}
