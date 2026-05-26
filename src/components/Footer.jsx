import { MapPin, Mail, Phone } from 'lucide-react'
import { Facebook, Youtube, Twitter, Instagram, Linkedin } from './BrandIcons'
import { motion } from 'framer-motion'

export default function Footer() {
  const exploreLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Categories', href: '#courses' },
    { name: 'Popular Courses', href: '#courses' },
    { name: 'FAQs', href: '#' },
    { name: 'Reviews', href: '#testimonials' }, // will anchor to reviews
  ]

  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, href: '#' },
    { icon: <Youtube className="w-4 h-4" />, href: '#' },
    { icon: <Twitter className="w-4 h-4" />, href: '#' },
    { icon: <Instagram className="w-4 h-4" />, href: '#' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#' },
  ]

  return (
    <footer id="footer" className="bg-[#16181C] text-slate-400 py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-6">
              {/* White wireframe cube */}
              <svg className="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 L80 32 L50 49 L20 32 Z M20 32 L50 49 L50 85 L20 68 Z M50 49 L80 32 L80 68 L50 85 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                e<span className="text-white">Coach</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-[15px] font-medium leading-relaxed mb-6 max-w-sm">
              Start, switch, or advance your career with more than 5,400 courses, Professional Certificates, and degrees from world-class universities and companies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((soc, idx) => (
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: '#1A6DFF', color: '#FFFFFF' }}
                  key={idx}
                  href={soc.href}
                  className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center transition-colors border border-slate-700/60"
                >
                  {soc.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links Column */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-heading font-extrabold text-white text-lg tracking-wide uppercase mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[15px] font-semibold hover:text-ecoach-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-4 text-left">
            <h3 className="font-heading font-extrabold text-white text-lg tracking-wide uppercase mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[15px] font-semibold mt-2.5">
                  4823 Losh Lane, Pittsburgh Pennsylvania, 9100
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:info@ecoach.com.au"
                  className="text-[15px] font-semibold hover:text-ecoach-blue transition-colors mt-0.5"
                >
                  info@ecoach.com.au
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+14127743054"
                  className="text-[15px] font-semibold hover:text-ecoach-blue transition-colors mt-0.5"
                >
                  412-774-3054
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold text-slate-500 text-center md:text-left">
            © 2023 eCoach @ Devignedge
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-semibold text-slate-500 hover:text-ecoach-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs font-semibold text-slate-500 hover:text-ecoach-blue transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
