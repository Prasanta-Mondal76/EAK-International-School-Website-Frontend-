import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (<AnimatePresence>
      {visible && (<motion.button type="button" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.2 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 shadow-lg transition hover:bg-navy-700">
          <ArrowUp className="h-5 w-5" aria-hidden="true"/>
        </motion.button>)}
    </AnimatePresence>);
}
