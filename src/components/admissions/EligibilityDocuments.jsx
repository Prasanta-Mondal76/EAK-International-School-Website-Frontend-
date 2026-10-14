import { FileCheck } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { eligibility, requiredDocuments } from '../../data/content';

/* Eligibility table + required documents checklist, side by side */
export default function EligibilityDocuments() {
  return (
    <section className="bg-cream-100 py-16 lg:py-24" aria-label="Eligibility and documents">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Who can apply" title="Eligibility criteria" />
          <Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy-900 text-left text-white">
                    <th scope="col" className="px-5 py-3.5 font-semibold">Stage</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Age / Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibility.map((row, i) => (
                    <tr key={row.stage} className={i % 2 ? 'bg-cream-50' : 'bg-white'}>
                      <td className="px-5 py-3.5 font-semibold text-navy-900">{row.stage}</td>
                      <td className="px-5 py-3.5 text-slate-600">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Be prepared" title="Required documents" />
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {requiredDocuments.map((doc) => (
                <li key={doc} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                  <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  {doc}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
