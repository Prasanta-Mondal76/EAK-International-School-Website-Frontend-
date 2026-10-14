import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SmartImage from './SmartImage';
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
/**
 * Navy banner used at the top of inner pages: background image with dark
 * navy overlay, breadcrumb, big Playfair title and optional subtitle.
 */
export default function PageHero({ title, subtitle, image = '/images/hero-campus.jpg', crumbs = [] }) {
    return (<section className="relative overflow-hidden bg-navy-950" aria-label={title}>
      <SmartImage src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40"/>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/80 to-navy-950" aria-hidden="true"/>

      <motion.div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8" variants={container} initial="hidden" animate="show">
        <motion.nav variants={item} aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-100">
            <li>
              <Link to="/" className="transition-colors hover:text-gold-400">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (<li key={crumb} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-gold-500" aria-hidden="true"/>
                <span className="text-gold-400">{crumb}</span>
              </li>))}
          </ol>
        </motion.nav>

        <motion.h1 variants={item} className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </motion.h1>

        {subtitle && (<motion.p variants={item} className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            {subtitle}
          </motion.p>)}

        <motion.div variants={item} className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-gold-400" aria-hidden="true"/>
      </motion.div>
    </section>);
}
