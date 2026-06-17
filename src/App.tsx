import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeachersPage from './components/Teacher';
import TeacherPage from './pages/TeacherPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"              element={<HomePage />} />
        <Route path="/courses"       element={<CoursesPage />} />
        <Route path="/about"         element={<AboutPage />} />
        <Route path="/contact"       element={<ContactPage />} />
        <Route path="/teachers"      element={<TeachersPage />} />
        <Route path="/teachers/:id"  element={<TeacherPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}