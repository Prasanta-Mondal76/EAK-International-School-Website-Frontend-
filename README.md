# EAK International School — Modern Website Redesign

A modern, responsive school website built for the **EAK Pustak Pvt. Ltd. second-round
hiring assignment** (Frontend — Modern School Website Redesign). It is a complete
redesign concept for the fictional "EAK International School", answering every
question a visiting parent would ask: what the school is, why to choose it, what it
offers, the academic environment, facilities, admission details, school updates, and
contact options.

> **Note:** This is an original design built for the assignment. "EAK International
> School" is fictional — all content, names, addresses, dates and fees are
> hard-coded dummy content. No backend, database or real form submission is used.

## Live demo

🌐 **https://eak-international-school-website-fr.vercel.app/**

## What it does

- **Home (`/`)** — full-screen animated hero (school name, tagline, Apply Now /
  Admission Inquiry CTAs, scroll indicator), Why Choose Us (6 strengths),
  About teaser + Read More, Academic Excellence (4 stage cards), facilities
  preview, achievements marquee, Principal's message, Latest News/Notices +
  View All, Upcoming Events cards, testimonial carousel, admissions CTA banner,
  full footer.
- **About (`/about`)** — visual history timeline (1998–2024), Vision / Mission /
  Core Values cards, full Principal's message, animated statistics counters,
  campus overview checklist.
- **Academics (`/academics`)** — stage tabs (Primary / Middle / Secondary /
  Senior Secondary) with animated panels, curriculum pillars, teaching
  methodology, co-curricular activities, academic achievements.
- **Admissions (`/admissions`)** — 5-step visual stepper
  (Enquiry → Application → Interaction/Assessment → Selection → Enrollment),
  eligibility table, required documents checklist, important dates, fee table,
  admission info notes, FAQ accordion, and a validated enquiry form
  (frontend prototype — validates locally and shows a success state, no data
  is sent anywhere).
- **Facilities (`/facilities`)** — alternating feature rows for smart classrooms
  & science labs, computer labs & library, auditorium & sports complex,
  cafeteria & medical facilities, transportation, and hostel; hover-zoom
  gallery and campus-tour CTA.
- **Events & Notices (`/events`)** — notices list with "New" badges, and an
  events explorer with **working frontend-only interactions**: category filter
  tabs, search box, date filter, Load-More pagination, and an empty state with
  reset. All content is hard-coded.
- **Contact (`/contact`)** — address, phone, email, office hours, social media
  links, validated contact form UI (success message, no real submission), and a
  styled map placeholder.

## Tech stack

| Layer      | Technology                                                        |
|------------|-------------------------------------------------------------------|
| Framework  | React 18 + Vite                                                   |
| Language   | JavaScript (JSX, no TypeScript)                                   |
| Styling    | Tailwind CSS v4                                                   |
| Routing    | react-router-dom                                                  |
| Animations | framer-motion (scroll reveals, counters, carousel, marquee)       |
| Icons      | lucide-react                                                      |
| Images     | 21 royalty-free images, stored locally in `public/images/`        |

## Project structure

```
eak-school-website/
├── index.html                  # entry HTML (fonts, title)
├── vite.config.js              # Vite + React + Tailwind v4 plugins
├── package.json
├── public/
│   ├── favicon.svg
│   └── images/                 # 21 local royalty-free images
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # routes + ScrollToTop
    ├── CSS/                    # one stylesheet per component/page (uppercase CSS/)
    │   └── index.css           # Tailwind v4 theme, fonts, keyframes
    ├── assets/
    │   └── Logo.jsx            # original EAK school crest (SVG)
    ├── data/                   # all hard-coded content, one file per section
    │   ├── navigation.js       # nav links
    │   ├── home.js             # hero, strengths, stats, news, events, testimonials
    │   ├── about.js            # history, vision/mission, campus overview
    │   ├── academics.js        # stages, curriculum, methodology, co-curricular
    │   ├── admissions.js       # steps, eligibility, documents, dates, fees, FAQs
    │   ├── facilities.js       # facility features
    │   └── content.js          # barrel re-export of everything above
    ├── components/
    │   ├── layout/             # Navbar, Footer, BackToTop, ScrollToTop
    │   ├── shared/             # SectionHeading, Reveal, Counter, PageHero,
    │   │                       # FaqAccordion, EventCard, StatCard, SmartImage
    │   ├── home/               # one file per home-page section
    │   │                       # (Hero, WhyChooseUs, AboutTeaser, AcademicStages,
    │   │                       #  FacilitiesPreview, Achievements, PrincipalMessage,
    │   │                       #  NewsNotices, UpcomingEvents, Testimonials,
    │   │                       #  AdmissionsCTA)
    │   ├── admissions/         # AdmissionSteps, EligibilityDocuments,
    │   │                       # ImportantDates, FeeStructure, FaqSection,
    │   │                       # EnquiryForm, ApplyNowBanner
    │   └── contact/            # ContactInfoCard, ContactForm, MapPlaceholder
    └── pages/                  # one file per route:
                                # Home, About, Academics, Admissions,
                                # Facilities, EventsNotices, Contact
```

Every page/section lives in its own file with a clear name, and all content is
centralised in `src/data/` — so nothing is duplicated and everything is easy to
find and edit.

## Quick start

```bash
npm install
npm run dev
# App runs on http://localhost:5173
```

## Production build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deployment (free — Vercel)

1. Push this repo to GitHub, then import it on vercel.com as a new project
   (the Vite preset is auto-detected).
2. This site uses client-side routing (react-router), so direct visits to
   routes like `/about` need a rewrite. Add a `vercel.json` at the project
   root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

3. Deploy — no environment variables or build settings are needed.

Notes:

- All images are local files, so the site works fully offline after build.
- **Case-sensitive paths:** the stylesheet folder is `src/CSS/` (capital C)
  and every component imports from `../CSS/...`. Keep the case exactly as-is —
  Linux build servers (Vercel) fail with "module not found" if the folder is
  renamed to lowercase `css/`.

## Design decisions

- **Brand:** original SVG school crest, deep navy `#0a1a33` + gold `#c9a227`
  palette, Playfair Display (headings) + Inter (body).
- **Content:** realistic Indian K-12 context (CBSE-aligned, NEP 2020), written
  to answer the eight parent questions from the assignment brief — these are
  also covered in the Admissions FAQ section.
- **Engagement:** scroll-reveal sections, animated stat counters, testimonial
  carousel, achievements marquee (pauses on hover), animated mobile menu,
  smooth FAQ accordions, sticky navbar that solidifies on scroll.
- **Responsive:** mobile-first layout with a hamburger menu; verified at
  360 px, 768 px and 1280 px widths.
