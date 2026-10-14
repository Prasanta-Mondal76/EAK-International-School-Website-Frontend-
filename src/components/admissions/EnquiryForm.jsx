import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';

/* Frontend-only enquiry form prototype: validates locally, shows a success state, sends nothing. */
const grades = [
  'Nursery',
  'Kindergarten',
  'Grade I',
  'Grade II',
  'Grade III',
  'Grade IV',
  'Grade V',
  'Grade VI',
  'Grade VII',
  'Grade VIII',
  'Grade IX',
  'Grade X',
  'Grade XI',
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emptyForm = { parentName: '', email: '', phone: '', grade: '', message: '' };
const inputClasses =
  'w-full rounded-lg border border-navy-100 bg-cream-50 px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30';

export default function EnquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.parentName.trim()) next.parentName = 'Please enter the parent\u2019s name.';
    if (!form.email.trim()) next.email = 'Please enter your email address.';
    else if (!emailRegex.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    const digits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (digits.length !== 10) next.phone = 'Phone number must be exactly 10 digits.';
    if (!form.grade) next.grade = 'Please select a grade.';
    if (!form.message.trim()) next.message = 'Please tell us a little about your enquiry.';
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
    <section id="enquiry" className="scroll-mt-28 bg-cream-100 py-16 lg:py-24" aria-label="Admission enquiry form">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Get started"
          title="Admission enquiry"
          description="Fill in the form and our admissions counsellor will contact you within 2 working days."
        />
        <Reveal className="mt-10">
          <div className="rounded-2xl bg-white p-6 shadow-lg lg:p-10">
            {submitted ? (
              <div className="py-10 text-center" role="status">
                <CircleCheck className="mx-auto h-16 w-16 text-gold-600" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Thank you!</h3>
                <p className="mx-auto mt-3 max-w-md text-slate-600">
                  Our admissions counsellor will contact you within 2 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="enq-parent" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Parent's name *
                    </label>
                    <input
                      id="enq-parent"
                      type="text"
                      value={form.parentName}
                      onChange={(e) => set('parentName')(e.target.value)}
                      placeholder="e.g. Rohit Sharma"
                      className={inputClasses}
                    />
                    {fieldError('parentName')}
                  </div>
                  <div>
                    <label htmlFor="enq-email" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Email address *
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email')(e.target.value)}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                    {fieldError('email')}
                  </div>
                  <div>
                    <label htmlFor="enq-phone" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Phone number *
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone')(e.target.value)}
                      placeholder="10-digit mobile number"
                      className={inputClasses}
                    />
                    {fieldError('phone')}
                  </div>
                  <div>
                    <label htmlFor="enq-grade" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Grade applying for *
                    </label>
                    <select
                      id="enq-grade"
                      value={form.grade}
                      onChange={(e) => set('grade')(e.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select a grade</option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    {fieldError('grade')}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="enq-message" className="mb-1.5 block text-sm font-semibold text-navy-900">
                      Message *
                    </label>
                    <textarea
                      id="enq-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => set('message')(e.target.value)}
                      placeholder="Tell us about your child and anything you'd like to know…"
                      className={inputClasses}
                    />
                    {fieldError('message')}
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-navy-900 py-3.5 text-sm font-bold uppercase tracking-wider text-gold-400 transition hover:bg-navy-800 sm:w-auto sm:px-12"
                >
                  Submit Enquiry
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  This is a frontend prototype — your enquiry is not sent anywhere.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
