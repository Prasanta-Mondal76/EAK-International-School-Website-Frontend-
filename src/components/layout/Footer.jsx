import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from '../../assets/Logo';
import { contactInfo, importantLinks, quickLinks } from '../../data/content';
const socialIcons = {
    Facebook,
    Instagram,
    YouTube: Youtube,
    LinkedIn: Linkedin,
};
export default function Footer() {
    return (<footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo withWordmark light/>
          <p className="mt-4 text-sm leading-relaxed text-navy-100/80">
            Rooted in values, rising in excellence — a premium K–12 CBSE school in New Delhi since 1998.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {contactInfo.socials.map((s) => {
            const Icon = socialIcons[s.label] ?? Facebook;
            return (<a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={`EAK International School on ${s.label}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-950">
                  <Icon className="h-4 w-4" aria-hidden="true"/>
                </a>);
        })}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className="font-display text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (<li key={link.label}>
                <Link to={link.to} className="transition hover:text-gold-400">
                  {link.label}
                </Link>
              </li>))}
          </ul>
        </nav>

        {/* Important links */}
        <nav aria-label="Important links">
          <h3 className="font-display text-lg font-semibold text-white">Important Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {importantLinks.map((link) => (<li key={link.label}>
                <Link to={link.to} className="transition hover:text-gold-400">
                  {link.label}
                </Link>
              </li>))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Contact</h3>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true"/>
              <span>
                {contactInfo.addressLines.map((line) => (<span key={line} className="block">
                    {line}
                  </span>))}
              </span>
            </p>
            <p>
              <a href={contactInfo.phoneHref} className="flex items-center gap-2.5 transition hover:text-gold-400">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true"/>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2.5 transition hover:text-gold-400">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true"/>
                {contactInfo.email}
              </a>
            </p>
            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true"/>
              <ul className="space-y-1">
                {contactInfo.officeHours.map((h) => (<li key={h.days}>
                    {h.days}: <span className="text-white">{h.time}</span>
                  </li>))}
              </ul>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-navy-100/70 sm:flex-row">
          <p>© 2026 EAK International School · A fictional demo website</p>
          <p>Crafted with care in New Delhi</p>
        </div>
      </div>
    </footer>);
}
