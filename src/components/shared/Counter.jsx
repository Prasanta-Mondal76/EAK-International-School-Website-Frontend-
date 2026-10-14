import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
/**
 * Counts up from 0 to `value` over ~1.6s (ease-out) when scrolled into view.
 * Formatted with Indian digit grouping (e.g. 2,400).
 */
export default function Counter({ value, suffix = '', className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        if (!inView)
            return;
        const duration = 1600;
        const start = performance.now();
        let raf = 0;
        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setDisplay(Math.round(eased * value));
            if (progress < 1)
                raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value]);
    return (<span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>);
}
