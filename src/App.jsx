import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import AboutUs from './components/AboutUs'
import Stats from './components/Stats'
import Experts from './components/Experts'
import Testimonials from './components/Testimonials'
import BecomeInstructor from './components/BecomeInstructor'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Course Catalog (Tabs & Cards Grid) */}
        <Programs />

        {/* Ways We Can Help Checklist */}
        <AboutUs />

        {/* Lifelong Learning Community Numbers */}
        <Stats />

        {/* Instructor Profiles Grid */}
        <Experts />

        {/* Student Testimonials Carousel/Grid */}
        <Testimonials />

        {/* Join as Instructor Promo */}
        <BecomeInstructor />

        {/* Stay Updated Blog Section */}
        <Blog />

        {/* Finding Your Right Courses CTA Bar */}
        <CTA />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  )
}

export default App
