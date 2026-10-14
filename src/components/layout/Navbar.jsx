import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, X, Youtube } from 'lucide-react';
import Logo from '../../assets/Logo';
import { contactInfo, navLinks } from '../../data/content';
const socialIcons = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClasses = ({ isActive }) => `whitespace-nowrap text-sm font-semibold tracking-wide transition-colors ${isActive
    ? 'text-gold-600 underline decoration-gold-500 decoration-2 underline-offset-8'
    : scrolled
      ? 'text-navy-900 hover:text-gold-600'
      : 'text-white hover:text-gold-400'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <a href={contactInfo.phoneHref} className="inline-flex items-center gap-1.5 hover:text-gold-400">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-1.5 hover:text-gold-400">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            {contactInfo.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Facebook;
              return (<a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={`EAK International School on ${s.label}`} className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-gold-400">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>);
            })}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <nav aria-label="Primary" className={`transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" aria-label="EAK International School — home" onClick={() => setOpen(false)}>
            <Logo withWordmark light={!scrolled} />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (<NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>))}
            <Link to="/admissions" className="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-bold text-navy-950 shadow transition hover:bg-gold-400">
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} className={`rounded-lg p-2 transition lg:hidden ${scrolled ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}>
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden border-t border-navy-100 bg-white/98 shadow-xl backdrop-blur lg:hidden">
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (<NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-lg px-4 py-2.5 text-sm font-semibold transition ${isActive ? 'bg-navy-50 text-gold-600' : 'text-navy-900 hover:bg-navy-50'}`}>
                {link.label}
              </NavLink>))}
              <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-gold-500 px-4 py-3 text-center text-sm font-bold text-navy-950 transition hover:bg-gold-400">
                Apply Now
              </Link>
            </div>
          </motion.div>)}
        </AnimatePresence>
      </nav>
    </header>
  );
}
