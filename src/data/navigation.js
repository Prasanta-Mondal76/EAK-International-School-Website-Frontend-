/* ------------------------------------------------------------------ */
/*  EAK International School — Site navigation, contact details and footer links  */
/* ------------------------------------------------------------------ */

export const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Academics', to: '/academics' },
    { label: 'Admissions', to: '/admissions' },
    { label: 'Facilities', to: '/facilities' },
    { label: 'Events & Notices', to: '/events' },
    { label: 'Contact', to: '/contact' },
];
/* ------------------------------ contact ------------------------------ */

export const contactInfo = {
    addressLines: ['EAK International School', 'Education Enclave, Sector 12, Dwarka', 'New Delhi — 110078, India'],
    phone: '+91 11 4567 8900',
    phoneHref: 'tel:+911145678900',
    admissionsPhone: '+91 98110 24680',
    admissionsPhoneHref: 'tel:+919811024680',
    email: 'hello@eakinternational.edu.in',
    admissionsEmail: 'admissions@eakinternational.edu.in',
    officeHours: [
        { days: 'Monday – Friday', time: '8:00 AM – 4:00 PM' },
        { days: 'Saturday', time: '9:00 AM – 12:00 PM' },
        { days: 'Sunday & Public Holidays', time: 'Closed' },
    ],
    socials: [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
};

export const quickLinks = [
    { label: 'About the School', to: '/about' },
    { label: 'Academics', to: '/academics' },
    { label: 'Admissions 2027–28', to: '/admissions' },
    { label: 'Campus Facilities', to: '/facilities' },
    { label: 'Events & Notices', to: '/events' },
    { label: 'Contact Us', to: '/contact' },
];

export const importantLinks = [
    { label: 'Admission Process', to: '/admissions' },
    { label: 'Fee Structure', to: '/admissions' },
    { label: 'FAQs', to: '/admissions' },
    { label: 'Latest Notices', to: '/events' },
    { label: 'Academic Calendar', to: '/events' },
    { label: 'Careers at EAK', to: '/contact' },
];
