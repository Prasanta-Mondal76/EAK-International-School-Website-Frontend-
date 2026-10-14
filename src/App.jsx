import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import EventsNotices from './pages/EventsNotices';
import Contact from './pages/Contact';
export default function App() {
    return (<div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/academics" element={<Academics />}/>
          <Route path="/admissions" element={<Admissions />}/>
          <Route path="/facilities" element={<Facilities />}/>
          <Route path="/events" element={<EventsNotices />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>);
}
