import { Trophy } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { academicAchievements } from '../../data/content';
/**
 * Dark strip with a pausable marquee of academic achievements.
 * The list is duplicated for a seamless loop; the duplicate is aria-hidden.
 */
export default function Achievements() {
    return (<section className="border-y border-navy-800 bg-navy-950 py-14" aria-label="Academic achievements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow="Hall of Fame" title="A Legacy of Achievement" align="left"/>
      </div>

      <div className="mt-10 overflow-hidden" aria-label="Achievement highlights">
        <div className="animate-eak-marquee flex w-max gap-6 pr-6">
          {[false, true].map((hidden, copy) => (<div key={copy} className="flex gap-6" aria-hidden={hidden || undefined}>
              {academicAchievements.map((achievement) => (<article key={`${copy}-${achievement.title}`} tabIndex={hidden ? -1 : undefined} className="flex w-80 shrink-0 items-start gap-4 rounded-2xl border border-navy-800 bg-navy-900/60 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <Trophy className="h-5 w-5" aria-hidden="true"/>
                  </span>
                  <div>
                    <span className="inline-block rounded-full bg-gold-500 px-2.5 py-0.5 text-[11px] font-bold text-navy-950">
                      {achievement.year}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold leading-snug text-white">
                      {achievement.title}
                    </h3>
                  </div>
                </article>))}
            </div>))}
        </div>
      </div>
    </section>);
}
