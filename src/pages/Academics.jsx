import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Bot, Check, ClipboardCheck, Drama, FlaskConical, HandHeart, Languages, Lightbulb, MessagesSquare, Monitor, Music, Palette, Tent, Trophy, Users, } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/shared/SectionHeading';
import Reveal from '../components/shared/Reveal';
import SmartImage from '../components/shared/SmartImage';
import { academicAchievements, academicStages, coCurricular, curriculumPillars, teachingMethods } from '../data/content';
const pillarIcons = {
    'book-open': BookOpen,
    flask: FlaskConical,
    languages: Languages,
    palette: Palette,
};
const methodIcons = {
    lightbulb: Lightbulb,
    users: Users,
    monitor: Monitor,
    'clipboard-check': ClipboardCheck,
};
const activityIcons = {
    bot: Bot,
    'messages-square': MessagesSquare,
    music: Music,
    drama: Drama,
    palette: Palette,
    trophy: Trophy,
    tent: Tent,
    'hand-heart': HandHeart,
};
export default function Academics() {
    const [activeKey, setActiveKey] = useState(academicStages[0].key);
    const active = academicStages.find((s) => s.key === activeKey) ?? academicStages[0];
    return (<>
      <PageHero title="Academics" subtitle="A CBSE-aligned, NEP-ready journey from first phonics to final board halls — and beyond." crumbs={['Academics']} image="/images/academics-secondary.jpg"/>

      {/* (a) Stage tabs */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24" aria-label="Academic stages">
        <SectionHeading eyebrow="Learning journey" title="Four stages, one seamless journey" description="Select a stage to see how we nurture curiosity at every age."/>

        <div className="mt-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Academic stages">
          {academicStages.map((stage) => (<button key={stage.key} type="button" role="tab" aria-selected={activeKey === stage.key} onClick={() => setActiveKey(stage.key)} className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${activeKey === stage.key
                ? 'bg-navy-900 text-gold-400 shadow'
                : 'bg-white text-navy-900 ring-1 ring-navy-100 hover:ring-gold-500'}`}>
              {stage.name}
            </button>))}
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div key={active.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} role="tabpanel" className="grid items-center gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-2 lg:p-10">
              <SmartImage src={active.image} alt={`${active.name} students learning at EAK International School`} className="h-72 w-full rounded-xl object-cover lg:h-96"/>
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-navy-900 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-400">
                    {active.classes}
                  </span>
                  <span className="rounded-full bg-gold-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-700">
                    {active.ageGroup}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy-900 lg:text-3xl">{active.name}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{active.description}</p>
                <ul className="mt-6 space-y-3">
                  {active.highlights.map((h) => (<li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20">
                        <Check className="h-3 w-3 text-gold-700" aria-hidden="true"/>
                      </span>
                      {h}
                    </li>))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* (b) Curriculum pillars */}
      <section className="bg-cream-100 py-16 lg:py-24" aria-label="Curriculum pillars">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Curriculum" title="Four pillars of learning" description="What every EAK student builds, year after year."/>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {curriculumPillars.map((p, i) => {
            const Icon = pillarIcons[p.icon] ?? BookOpen;
            return (<Reveal key={p.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900">
                      <Icon className="h-6 w-6 text-gold-400" aria-hidden="true"/>
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                  </div>
                </Reveal>);
        })}
          </div>
        </div>
      </section>

      {/* (c) Teaching methodology */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24" aria-label="Teaching methodology">
        <SectionHeading eyebrow="How we teach" title="Methodology that puts understanding first" description="Textbooks come second. Curiosity comes first."/>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachingMethods.map((m, i) => {
            const Icon = methodIcons[m.icon] ?? Lightbulb;
            return (<Reveal key={m.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border-t-4 border-gold-500 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="h-9 w-9 text-gold-600" aria-hidden="true"/>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </Reveal>);
        })}
        </div>
      </section>

      {/* (d) Co-curricular */}
      <section className="bg-navy-900 py-16 lg:py-24" aria-label="Co-curricular activities">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Beyond the classroom" title="Co-curricular life at EAK" description="120+ clubs, societies and teams — every child finds their stage." dark/>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {coCurricular.map((c, i) => {
            const Icon = activityIcons[c.icon] ?? Trophy;
            return (<Reveal key={c.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col items-center rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-gold-500/50">
                    <Icon className="h-8 w-8 text-gold-400" aria-hidden="true"/>
                    <p className="mt-3 text-sm font-semibold text-white">{c.title}</p>
                  </div>
                </Reveal>);
        })}
          </div>
        </div>
      </section>

      {/* (e) Academic achievements */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24" aria-label="Academic achievements">
        <SectionHeading eyebrow="Hall of fame" title="Recent academic achievements" description="A glimpse of what EAK students accomplish each year."/>
        <div className="mt-12 space-y-5">
          {academicAchievements.map((a, i) => (<Reveal key={a.year + a.title} delay={i * 0.05}>
              <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100/60 transition hover:shadow-md sm:flex-row sm:items-center sm:gap-6">
                <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-gold-500/15 px-4 py-1.5 font-display text-sm font-bold tracking-widest text-gold-700">
                  {a.year}
                </span>
                <div>
                  <h3 className="font-semibold text-navy-900">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{a.detail}</p>
                </div>
              </div>
            </Reveal>))}
        </div>
      </section>
    </>);
}
