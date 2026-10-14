import { Info } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { admissionInfoBullets, feeStructure } from '../../data/content';

/* Fee table + admission notes, on the dark band */
export default function FeeStructure() {
  return (
    <section className="bg-navy-900 py-16 lg:py-24" aria-label="Fee structure">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Transparent pricing" title="Fee structure" dark />
          <Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gold-500 text-left text-navy-950">
                    <th scope="col" className="px-5 py-3.5 font-semibold">Particular</th>
                    <th scope="col" className="px-5 py-3.5 text-right font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((row, i) => (
                    <tr key={row.particular} className={i % 2 ? 'bg-cream-50' : 'bg-white'}>
                      <td className="px-5 py-3.5 text-slate-700">{row.particular}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-navy-900">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Good to know" title="Admission notes" dark />
          <ul className="mt-8 space-y-4">
            {admissionInfoBullets.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-navy-100">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                  {b}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
