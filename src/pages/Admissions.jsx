import PageHero from '../components/shared/PageHero';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import EligibilityDocuments from '../components/admissions/EligibilityDocuments';
import ImportantDates from '../components/admissions/ImportantDates';
import FeeStructure from '../components/admissions/FeeStructure';
import FaqSection from '../components/admissions/FaqSection';
import EnquiryForm from '../components/admissions/EnquiryForm';
import ApplyNowBanner from '../components/admissions/ApplyNowBanner';

/* Admissions page: assembles the admission-journey sections in order */
export default function Admissions() {
  return (
    <>
      <PageHero
        title="Admissions 2027–28"
        subtitle="Limited seats available for the Academic Year 2027–28 — early applicants receive priority interaction slots."
        crumbs={['Admissions']}
        image="/images/facility-classroom.jpg"
      />
      <AdmissionSteps />
      <EligibilityDocuments />
      <ImportantDates />
      <FeeStructure />
      <FaqSection />
      <EnquiryForm />
      <ApplyNowBanner />
    </>
  );
}
