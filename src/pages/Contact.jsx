import PageHero from '../components/shared/PageHero';
import ContactInfoCard from '../components/contact/ContactInfoCard';
import ContactForm from '../components/contact/ContactForm';
import MapPlaceholder from '../components/contact/MapPlaceholder';

/* Contact page: info card + form, then the map placeholder */
export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out for admissions, visits or anything else."
        crumbs={['Contact']}
        image="/images/about-campus.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24" aria-label="Contact information and form">
        <div className="grid gap-8 lg:grid-cols-5">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </section>

      <MapPlaceholder />
    </>
  );
}
