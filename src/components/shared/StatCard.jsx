import Counter from './Counter';
/**
 * Big animated counter number with a label beneath it.
 */
export default function StatCard({ value, suffix = '', label, dark = false }) {
    return (<div className="flex flex-col items-center gap-1.5 text-center">
      <Counter value={value} suffix={suffix} className={`font-display text-4xl font-bold sm:text-5xl ${dark ? 'text-gold-400' : 'text-navy-900'}`}/>
      <span className={`text-sm font-medium uppercase tracking-wider ${dark ? 'text-navy-100' : 'text-slate-500'}`}>
        {label}
      </span>
    </div>);
}
