import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutTeaser from '../components/home/AboutTeaser';
import AcademicStages from '../components/home/AcademicStages';
import FacilitiesPreview from '../components/home/FacilitiesPreview';
import Achievements from '../components/home/Achievements';
import PrincipalMessage from '../components/home/PrincipalMessage';
import NewsNotices from '../components/home/NewsNotices';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Testimonials from '../components/home/Testimonials';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
/**
 * Home page — composed of the shared home sections.
 * Navbar and Footer are rendered by App.
 */
export default function Home() {
    return (<main>
      <Hero />
      <WhyChooseUs />
      <AboutTeaser />
      <AcademicStages />
      <FacilitiesPreview />
      <Achievements />
      <PrincipalMessage />
      <NewsNotices />
      <UpcomingEvents />
      <Testimonials />
      <AdmissionsCTA />
    </main>);
}
