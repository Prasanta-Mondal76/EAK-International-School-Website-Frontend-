import { Check, Eye, Heart, Lightbulb, ShieldCheck, Target, Trophy } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import Reveal from '../components/shared/Reveal';
import StatCard from '../components/shared/StatCard';
import SmartImage from '../components/shared/SmartImage';
import { aboutTeaser, campusOverview, history, principal, stats, visionMission } from '../data/content';
const valueIcons = {
    'shield-check': ShieldCheck,
    lightbulb: Lightbulb,
    heart: Heart,
    trophy: Trophy,
};
export default function About() {
    const principalParagraphs = principal.fullMessage.split('\n\n');
    return (<>
      <PageHero title="About EAK" crumbs={['About']} image="/images/about-campus.jpg"/>

      {/* (a) Intro */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SmartImage src="/images/about-campus.jpg" alt="Students walking through the EAK International School campus" className="h-80 w-full rounded-2xl object-cover shadow-xl lg:h-[26rem]"/>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-600">Who we are</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 lg:text-4xl">{aboutTeaser.title}</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              For 28 years, EAK International School has stood for a simple idea: academic rigour and human warmth are
              not opposites. Our NEP 2020-aligned curriculum challenges young minds while our teachers, counsellors and
              mentors make sure no child ever feels alone in the journey.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              With a 1:20 teacher–student ratio, a 12-acre green campus in Dwarka and a community of 2,400+ students,
              we give every child the space — and the support — to flourish, whether their stage is a board examination
              hall, a robotics arena or a theatre stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* (b) History timeline */}
      <section className="bg-cream-100 py-16 lg:py-24" aria-label="Our history">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Our journey" title="A legacy of learning since 1998" description="From 120 students in a single block to one of West Delhi's most loved schools."/>
          <div className="relative mt-14">
            <div aria-hidden="true" className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-gold-500/40 md:left-1/2 md:-translate-x-1/2"/>
            <div>
              {history.map((item, i) => (<Reveal key={item.year + item.title} delay={i * 0.05} className="mb-10 last:mb-0">
                  <div className="relative md:grid md:grid-cols-2 md:gap-16">
                    <span aria-hidden="true" className="absolute left-[13px] top-2 h-3.5 w-3.5 rounded-full bg-gold-500 ring-4 ring-gold-100 md:left-1/2 md:-translate-x-1/2"/>
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:col-start-1 md:pr-2 md:text-right' : 'md:col-start-2 md:pl-2'}`}>
                      <span className="inline-block rounded-full bg-navy-900 px-4 py-1 font-display text-sm font-bold tracking-widest text-gold-400">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </Reveal>))}
            </div>
          </div>
        </div>
      </section>

      {/* (c) Vision / Mission / Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <SectionHeading eyebrow="What guides us" title="Vision, mission & values" description="The compass behind every classroom decision at EAK."/>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-navy-900 p-8 text-white shadow-lg">
              <Eye className="h-10 w-10 text-gold-400" aria-hidden="true"/>
              <h3 className="mt-4 font-display text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-navy-100">{visionMission.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-gold-500 p-8 text-navy-950 shadow-lg">
              <Target className="h-10 w-10 text-navy-900" aria-hidden="true"/>
              <h3 className="mt-4 font-display text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-navy-950/90">{visionMission.mission}</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visionMission.values.map((v, i) => {
            const Icon = valueIcons[v.icon] ?? ShieldCheck;
            return (<Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-50">
                    <Icon className="h-7 w-7 text-gold-600" aria-hidden="true"/>
                  </span>
                  <h4 className="mt-4 font-display text-lg font-bold text-navy-900">{v.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                </div>
              </Reveal>);
        })}
        </div>
      </section>

      {/* (d) Principal's message */}
      <section className="bg-white py-16 lg:py-24" aria-label="Principal's message">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div>
              <SmartImage src={principal.image} alt={`Portrait of ${principal.name}, Principal of EAK International School`} className="h-96 w-full rounded-2xl object-cover object-top shadow-xl"/>
              <p className="mt-4 font-display text-xl font-bold text-navy-900">{principal.name}</p>
              <p className="text-sm text-slate-500">{principal.title}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-600">From the principal's desk</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 lg:text-4xl">
              Every child carries a spark
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              {principalParagraphs.map((para, i) => (<p key={i}>{para}</p>))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* (e) Stats band */}
      <section className="bg-navy-900 py-14" aria-label="School statistics">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s, i) => (<Reveal key={s.label} delay={i * 0.08}>
              <StatCard value={s.value} suffix={s.suffix} label={s.label} dark/>
            </Reveal>))}
        </div>
      </section>

      {/* (f) Campus overview */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={0.1} className="lg:order-2">
            <SmartImage src={campusOverview.image} alt={campusOverview.imageAlt} className="h-80 w-full rounded-2xl object-cover shadow-xl lg:h-[26rem]"/>
          </Reveal>
          <Reveal className="lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold-600">Campus</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 lg:text-4xl">{campusOverview.title}</h2>
            <p className="mt-5 leading-relaxed text-slate-600">{campusOverview.text}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {campusOverview.points.map((point) => (<li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20">
                    <Check className="h-3 w-3 text-gold-700" aria-hidden="true"/>
                  </span>
                  {point}
                </li>))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>);
}
