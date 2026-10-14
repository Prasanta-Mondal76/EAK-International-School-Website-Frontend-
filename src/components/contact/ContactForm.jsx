import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import Reveal from '../shared/Reveal';

/* Frontend-only contact form: validates locally, shows a success state, sends nothing. */
const subjects = [
  'Admissions enquiry',
  'General enquiry',
  'Feedback & suggestions',
  'Careers at EAK',
  'Transport',
  'Other',
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' };
const inputClasses =
  'w-full rounded-lg border border-navy-100 bg-cream-50 px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30';

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email address.';
    else if (!emailRegex.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    const digits = form.phone.replace(/\D/g, '');
    if (form.phone.trim() && digits.length !== 10) next.phone = 'Phone number must be exactly 10 digits.';
    if (!form.subject) next.subject = 'Please choose a subject.';
    if (!form.message.trim()) next.message = 'Please write your message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(emptyForm);
      setErrors({});
    }
  };

  const fieldError = (field) =>
    errors[field] ? (
      <p className="mt-1 text-xs font-medium text-red-600" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <Reveal delay={0.1} className="lg:col-span-3">
      <div className="h-full rounded-2xl bg-white p-6 shadow-lg ring-1 ring-navy-100/60 lg:p-10">
        {submitted ? (
          <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="status">
            <CircleCheck className="h-16 w-16 text-gold-600" aria-hidden="true" />
            <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Message received!</h3>
            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Thank you for reaching out. Our team will get back to you within 2 working days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="font-display text-2xl font-bold text-navy-900">Send us a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ct-name" className="mb-1.5 block text-sm font-semibold text-navy-900">
                  Your name *
                </label>
                <input
                  id="ct-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => set('name')(e.target.value)}
                  placeholder="Full name"
                  className={inputClasses}
                />
                {fieldError('name')}
              </div>
              <div>
                <label htmlFor="ct-email" className="mb-1.5 block text-sm font-semibold text-navy-900">
                  Email address *
                </label>
                <input
                  id="ct-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email')(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
                {fieldError('email')}
              </div>
              <div>
                <label htmlFor="ct-phone" className="mb-1.5 block text-sm font-semibold text-navy-900">
                  Phone <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <input
                  id="ct-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set('phone')(e.target.value)}
                  placeholder="10-digit mobile number"
                  className={inputClasses}
                />
                {fieldError('phone')}
              </div>
              <div>
                <label htmlFor="ct-subject" className="mb-1.5 block text-sm font-semibold text-navy-900">
                  Subject *
                </label>
                <select
                  id="ct-subject"
                  value={form.subject}
                  onChange={(e) => set('subject')(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {fieldError('subject')}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ct-message" className="mb-1.5 block text-sm font-semibold text-navy-900">
                  Message *
                </label>
                <textarea
                  id="ct-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => set('message')(e.target.value)}
                  placeholder="How can we help you?"
                  className={inputClasses}
                />
                {fieldError('message')}
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-navy-900 py-3.5 text-sm font-bold uppercase tracking-wider text-gold-400 transition hover:bg-navy-800 sm:w-auto sm:px-12"
            >
              Send Message
            </button>
            <p className="mt-3 text-xs text-slate-500">
              This is a frontend prototype — your message is not sent anywhere.
            </p>
          </form>
        )}
      </div>
    </Reveal>
  );
}
