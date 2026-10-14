import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Reveal from '../shared/Reveal';
import { contactInfo } from '../../data/content';

/* Dark info card: address, phones, emails, office hours, social links */
const socialIcons = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

export default function ContactInfoCard() {
  return (
    <Reveal className="lg:col-span-2">
      <div className="h-full rounded-2xl bg-navy-900 p-8 text-white shadow-lg">
        <h2 className="font-display text-2xl font-bold">Get in touch</h2>
        <p className="mt-2 text-sm text-navy-100">
          Our front office responds on all working days. Walk-ins are welcome during office hours.
        </p>

        <div className="mt-8 space-y-5 text-sm">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
            <span>
              {contactInfo.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </p>
          <p className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
            <span>
              <a href={contactInfo.phoneHref} className="block transition hover:text-gold-400">
                {contactInfo.phone} <span className="text-navy-100/70">(Office)</span>
              </a>
              <a href={contactInfo.admissionsPhoneHref} className="block transition hover:text-gold-400">
                {contactInfo.admissionsPhone} <span className="text-navy-100/70">(Admissions)</span>
              </a>
            </span>
          </p>
          <p className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
            <span>
              <a href={`mailto:${contactInfo.email}`} className="block transition hover:text-gold-400">
                {contactInfo.email}
              </a>
              <a href={`mailto:${contactInfo.admissionsEmail}`} className="block transition hover:text-gold-400">
                {contactInfo.admissionsEmail}
              </a>
            </span>
          </p>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
            <table className="w-full text-left">
              <tbody>
                {contactInfo.officeHours.map((h) => (
                  <tr key={h.days} className="border-b border-white/10 last:border-0">
                    <td className="py-1.5 pr-3 text-navy-100">{h.days}</td>
                    <td className="py-1.5 text-right font-semibold">{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {contactInfo.socials.map((s) => {
            const Icon = socialIcons[s.label] ?? Facebook;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`EAK International School on ${s.label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-950"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
