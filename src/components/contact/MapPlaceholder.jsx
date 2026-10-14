import { MapPin } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';

/* Styled map placeholder with a link to open the live location */
export default function MapPlaceholder() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:pb-24" aria-label="School location map">
      <SectionHeading
        eyebrow="Find us"
        title="Visit our campus"
        description="Education Enclave, Sector 12, Dwarka, New Delhi."
      />
      <Reveal className="mt-10">
        <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-center shadow-lg">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(rgba(201,162,39,0.22)_1px,transparent_1.5px)] [background-size:26px_26px]"
          />
          <div className="relative px-6">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/40">
              <MapPin className="h-8 w-8 text-gold-400" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-white">
              EAK International School, Dwarka, New Delhi
            </h3>
            <p className="mt-2 text-sm text-navy-100">
              Interactive map placeholder — open the live location in Google Maps.
            </p>
            <a
              href="https://maps.google.com/?q=Dwarka+Sector+12+New+Delhi"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-gold-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-navy-950 transition hover:bg-gold-400"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
