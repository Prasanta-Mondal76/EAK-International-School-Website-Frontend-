/* ------------------------------------------------------------------ */
/*  EAK International School — Home page content — hero, strengths, stats, principal, news, events, testimonials  */
/* ------------------------------------------------------------------ */

export const whyChooseUs = [
    {
        icon: 'award',
        title: 'CBSE-Aligned, NEP-Ready Curriculum',
        text: 'A thoughtfully designed curriculum aligned with CBSE and NEP 2020, blending strong fundamentals with critical thinking and creativity.',
    },
    {
        icon: 'users',
        title: '1:20 Teacher–Student Ratio',
        text: 'Small class sizes mean every child is known, mentored and challenged — no one is ever just a roll number here.',
    },
    {
        icon: 'flask',
        title: 'STEM & Innovation Labs',
        text: 'Atal-style tinkering labs, robotics and AI clubs where students learn by building, coding and experimenting from Grade 3 upwards.',
    },
    {
        icon: 'trophy',
        title: 'Sports Excellence',
        text: 'Professional coaching across 12 sports, a 400 m athletics track and inter-school champions in cricket, football and badminton.',
    },
    {
        icon: 'heart',
        title: 'Pastoral Care & Wellbeing',
        text: 'Dedicated counsellors, a buddy system for new students and mindfulness woven into the weekly timetable.',
    },
    {
        icon: 'globe',
        title: 'Global Exposure',
        text: 'Student exchange programmes, Model United Nations and international collaborations that build confident global citizens.',
    },
];

export const stats = [
    { value: 2400, suffix: '+', label: 'Students' },
    { value: 135, suffix: '+', label: 'Expert Faculty' },
    { value: 28, suffix: '', label: 'Years of Excellence' },
    { value: 100, suffix: '%', label: 'Board Pass Rate' },
];
/* ------------------------------ principal ---------------------------- */

export const principal = {
    name: 'Dr. Meera Krishnan',
    title: 'Principal, M.Ed., Ph.D. (Education)',
    image: '/images/principal.jpg',
    shortMessage: 'Every child who walks through our gates carries a spark. Our work — and our privilege — is to turn that spark into a steady flame: of curiosity, of character, and of courage to shape a better world.',
    fullMessage: 'When EAK International School opened its doors in 1998 with 120 students, we made a simple promise: to treat every child as an individual, not a statistic. Twenty-eight years later, that promise still guides every decision we make — from the way we design our classrooms to the way we train our teachers.\n\nWe believe academic rigour and human warmth are not opposites. Our students top board examinations and win national robotics championships, and they also lead community service drives, comfort a homesick classmate, and ask the difficult questions that move society forward.\n\nTo every parent considering EAK: come visit us. Walk our corridors, meet our teachers, and watch our children at work and play. You will feel what makes this school different.',
};

export const newsNotices = [
    {
        id: 1,
        date: '08 Oct 2026',
        category: 'Admissions',
        title: 'Admissions open for Academic Year 2027–28',
        excerpt: 'Registrations for Nursery to Grade XI are now open. Early applicants receive priority interaction slots.',
        isNew: true,
    },
    {
        id: 2,
        date: '05 Oct 2026',
        category: 'Examinations',
        title: 'Class X pre-board examination schedule released',
        excerpt: 'Pre-boards begin 24 November. Date sheet and seating plan are available on the student portal.',
        isNew: true,
    },
    {
        id: 3,
        date: '01 Oct 2026',
        category: 'Holiday',
        title: 'Diwali vacation: 18 – 22 October 2026',
        excerpt: 'The school remains closed for Diwali. Classes resume on 23 October. Wishing every family a joyful Diwali.',
    },
    {
        id: 4,
        date: '28 Sep 2026',
        category: 'Competitions',
        title: 'Inter-school robotics championship — trials on 17 October',
        excerpt: 'Students of Grades VI–X can register for team selection trials for the Delhi NCR robotics championship.',
    },
    {
        id: 5,
        date: '25 Sep 2026',
        category: 'Circular',
        title: 'Parent–Teacher Meeting for Grades VI–VIII on 24 October',
        excerpt: 'PTM slots can be booked through the parent portal from 12 October onwards.',
    },
];

export const events = [
    {
        id: 1,
        title: 'Annual Sports Day',
        date: '2026-12-12',
        displayDate: '12 Dec 2026',
        time: '9:00 AM onwards',
        venue: 'Main Sports Field',
        category: 'Sports',
        description: 'March past, athletics finals, drill displays and the much-awaited inter-house tug of war. Parents are warmly invited.',
        image: '/images/event-sports.jpg',
    },
    {
        id: 2,
        title: 'Prayog 2026 — Inter-School Science Exhibition',
        date: '2026-11-21',
        displayDate: '21 Nov 2026',
        time: '10:00 AM – 3:00 PM',
        venue: 'Innovation Centre',
        category: 'Competition',
        description: 'Young innovators from 18 schools present working models on sustainability, robotics and space science.',
        image: '/images/event-science.jpg',
    },
    {
        id: 3,
        title: 'Udaan — Winter Cultural Fest',
        date: '2026-12-19',
        displayDate: '19 Dec 2026',
        time: '5:00 PM onwards',
        venue: 'Open-Air Amphitheatre',
        category: 'Cultural',
        description: 'An evening of music, dance and theatre by our students, ending with the senior choir under the winter stars.',
        image: '/images/event-cultural.jpg',
    },
    {
        id: 4,
        title: 'Founders’ Day & Annual Day Celebrations',
        date: '2027-01-23',
        displayDate: '23 Jan 2027',
        time: '6:00 PM onwards',
        venue: 'School Auditorium',
        category: 'School Event',
        description: 'Celebrating 28 years of EAK — prize distribution, the annual school play and the founders’ address.',
        image: '/images/event-annual.jpg',
    },
    {
        id: 5,
        title: 'Delhi NCR Robotics Olympiad — Regionals',
        date: '2026-11-07',
        displayDate: '07 Nov 2026',
        time: '9:00 AM – 4:00 PM',
        venue: 'STEM Block',
        category: 'Competition',
        description: 'Our senior robotics team defends its regional title against 40 schools. Live arena open to spectators.',
        image: '/images/event-science.jpg',
    },
    {
        id: 6,
        title: 'Republic Day Parade & March Past',
        date: '2027-01-26',
        displayDate: '26 Jan 2027',
        time: '8:30 AM',
        venue: 'Main Ground',
        category: 'School Event',
        description: 'NCC cadets, scouts and the school band lead the Republic Day celebrations followed by cultural performances.',
        image: '/images/event-annual.jpg',
    },
    {
        id: 7,
        title: 'Young Authors Workshop with Ms. Anita Rao',
        date: '2026-11-28',
        displayDate: '28 Nov 2026',
        time: '11:00 AM – 1:00 PM',
        venue: 'Library Hall',
        category: 'Workshop',
        description: 'Award-winning children’s author Anita Rao conducts a creative writing masterclass for Grades IV–VIII.',
        image: '/images/event-cultural.jpg',
    },
    {
        id: 8,
        title: 'Inter-House Cricket Tournament — Finals',
        date: '2026-09-15',
        displayDate: '15 Sep 2026',
        time: '2:00 PM',
        venue: 'Cricket Oval',
        category: 'Sports',
        description: 'Tagore House lifted the trophy after a thrilling last-over finish against Raman House. Well played, everyone!',
        image: '/images/event-sports.jpg',
    },
    {
        id: 9,
        title: 'Art & Craft Exhibition — “Rang”',
        date: '2026-08-29',
        displayDate: '29 Aug 2026',
        time: '10:00 AM – 2:00 PM',
        venue: 'Art Gallery, B Block',
        category: 'Cultural',
        description: 'Over 400 student artworks — from Warli-inspired murals to recycled-material sculptures — went on display.',
        image: '/images/event-cultural.jpg',
    },
];

export const eventCategories = ['All', 'School Event', 'Competition', 'Sports', 'Cultural', 'Workshop'];

export const testimonials = [
    {
        name: 'Rohit & Ananya Sharma',
        role: 'Parents, Grade IV & VII',
        quote: 'The teachers know our children better than we sometimes do. The individual attention, the constant communication — EAK feels like an extended family that genuinely cares about learning.',
        initials: 'RS',
    },
    {
        name: 'Fatima Khan',
        role: 'Parent, Grade X',
        quote: 'We moved our daughter here in Grade VIII and the transition was seamless. The buddy system, the counsellors, the focus on both marks and mental health — it is exactly what a parent hopes for.',
        initials: 'FK',
    },
    {
        name: 'Arjun Mehta',
        role: 'Alumnus, Batch of 2022 · Now at IIT Delhi',
        quote: 'EAK taught me how to think, not just what to think. The robotics lab is where I fell in love with engineering, and my mentors pushed me far beyond the syllabus.',
        initials: 'AM',
    },
    {
        name: 'Grace D’Souza',
        role: 'Parent, Grade II',
        quote: 'My son runs to school every morning — that says everything. Play-based learning in the early years, wonderful class teachers, and a campus that feels safe and joyful.',
        initials: 'GD',
    },
];

export const heroContent = {
    tagline: 'Rooted in Values. Rising in Excellence.',
    intro: 'A premium K–12 CBSE school in New Delhi where 2,400+ students learn with curiosity, play with passion and grow into compassionate leaders — since 1998.',
};

export const aboutTeaser = {
    title: 'A legacy of learning since 1998',
    text: 'For 28 years, EAK International School has blended academic rigour with warmth and character education. Our NEP 2020-aligned curriculum, 1:20 teacher–student ratio and 12-acre green campus give every child the space — and the support — to flourish.',
    image: '/images/about-campus.jpg',
};
