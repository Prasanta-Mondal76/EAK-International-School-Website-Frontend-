/* Bold gold CTA band closing the Admissions page */
export default function ApplyNowBanner() {
  return (
    <section className="bg-gold-500 py-14" aria-label="Apply now">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy-950">Ready to join the EAK family?</h2>
          <p className="mt-2 text-navy-950/80">Seats for 2027–28 are limited — start your application journey today.</p>
        </div>
        <a
          href="#enquiry"
          className="rounded-full bg-navy-900 px-10 py-4 text-sm font-bold uppercase tracking-wider text-gold-400 shadow-lg transition hover:bg-navy-800"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
