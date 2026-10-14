import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import FaqAccordion from '../shared/FaqAccordion';
import { faqs } from '../../data/content';

/* Admission FAQs accordion */
export default function FaqSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24" aria-label="Admission FAQs">
      <SectionHeading
        eyebrow="Questions?"
        title="Frequently asked questions"
        description="Everything parents usually ask us about admissions."
      />
      <Reveal className="mt-10">
        <FaqAccordion items={faqs} />
      </Reveal>
    </section>
  );
}
