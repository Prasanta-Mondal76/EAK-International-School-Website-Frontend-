import { motion } from 'framer-motion';
/**
 * Standard section header: gold uppercase eyebrow, Playfair title,
 * muted description. Fades up on scroll into view.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false, }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <motion.div className={`flex flex-col ${alignCls} gap-4`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
      {eyebrow && (<span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
        <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
        {eyebrow}
        {align === 'center' && <span className="h-px w-8 bg-gold-500" aria-hidden="true" />}
      </span>)}
      <h2 className={`max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {description && (<p className={`max-w-2xl text-base leading-relaxed ${dark ? 'text-navy-100' : 'text-slate-600'}`}>
        {description}
      </p>)}
    </motion.div>
  );
}
