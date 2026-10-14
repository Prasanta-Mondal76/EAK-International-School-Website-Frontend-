import { motion } from 'framer-motion';
/**
 * Fade-up reveal wrapper for scroll-triggered entrances.
 */
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
    return (<motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: 'easeOut', delay }}>
      {children}
    </motion.div>);
}
