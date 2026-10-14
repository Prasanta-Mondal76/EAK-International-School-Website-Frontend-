import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
/**
 * Accessible accordion: button + aria-expanded, AnimatePresence height
 * animation, rotating Plus icon.
 */
export default function FaqAccordion({ items }) {
    const [openIndex, setOpenIndex] = useState(0);
    return (<div className="flex flex-col gap-3">
      {items.map((item, i) => {
            const open = openIndex === i;
            return (<div key={item.q} className={`overflow-hidden rounded-xl border bg-white transition-colors ${open ? 'border-gold-500/50 shadow-md' : 'border-slate-200'}`}>
            <button type="button" aria-expanded={open} aria-controls={`faq-panel-${i}`} id={`faq-button-${i}`} onClick={() => setOpenIndex(open ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">{item.q}</span>
              <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${open ? 'bg-gold-500 text-navy-950' : 'bg-navy-50 text-navy-900'}`}>
                <Plus className="h-4 w-4" aria-hidden="true"/>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (<motion.div key="panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{item.a}</p>
                </motion.div>)}
            </AnimatePresence>
          </div>);
        })}
    </div>);
}
