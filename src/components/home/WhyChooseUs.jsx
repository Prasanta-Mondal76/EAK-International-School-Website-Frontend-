import { Award, FlaskConical, Globe, Heart, Trophy, Users } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { whyChooseUs } from '../../data/content';
const iconMap = {
    award: Award,
    users: Users,
    flask: FlaskConical,
    trophy: Trophy,
    heart: Heart,
    globe: Globe,
};
/**
 * "Why Parents Choose Us" — 6 cards, icon circle turns navy on hover.
 */
export default function WhyChooseUs() {
    return (<section id="why-eak" className="bg-cream-50 py-20 sm:py-24" aria-label="Why choose EAK">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why EAK" title="Why Parents Choose Us" description="Six reasons families across Delhi NCR trust us with their children's future — from the classroom to the playing field."/>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((strength, index) => {
            const Icon = iconMap[strength.icon] ?? Award;
            return (<Reveal key={strength.title} delay={index * 0.08} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900 hover:bg-navy-900 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon className="h-7 w-7" aria-hidden="true"/>
                  </span>
                  <h3 className="font-display text-xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-white">
                    {strength.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-navy-100">
                    {strength.text}
                  </p>
                </article>
              </Reveal>);
        })}
        </div>
      </div>
    </section>);
}
