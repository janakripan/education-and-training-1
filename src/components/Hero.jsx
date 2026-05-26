import { motion } from 'framer-motion'
import { ArrowRight, User, Star } from 'lucide-react'
import heroStudentImg from '../assets/hero_student.png'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 80, 
        damping: 15,
        delay: 0.3 + custom * 0.1 
      }
    }),
  }

  const cardsData = [
    {
      title: '24/7 help',
      desc: 'Our large network of mentors can help motivate and guide you anytime - no matter where you are on your journey.',
      linkText: 'More about this ↗',
    },
    {
      title: '1-hour avg. response time',
      desc: 'Get all your queries answered quickly and unhindered in a span of one hour or lesser.',
      linkText: 'More about this',
    },
    {
      title: 'Highly vetted',
      desc: 'Our mentors complete a 5-step hiring process and usually a Nanodegree program themselves.',
      linkText: 'More about this',
    },
  ]

  return (
    <section id="home" className="relative bg-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Columns (Content) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 text-left flex flex-col items-start"
          >
            <motion.h1
              variants={itemVariants}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight text-ecoach-dark mb-6"
            >
              Education that <br />
              prepare you for <br />
              what's next.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-xl"
            >
              Start, switch, or advance your career with more than 5,400 courses, Professional Certificates, and degrees from world-class universities and companies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#courses"
                className="inline-flex justify-center items-center gap-2 bg-[#1A6DFF] hover:bg-ecoach-blue-hover text-white text-base font-bold px-8 py-4 rounded transition-all duration-300 font-heading"
              >
                Explore Course
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              {/* Success rates badge */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 bg-white border border-slate-100 shadow-lg px-6 py-3.5 rounded-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-ecoach-yellow flex items-center justify-center text-white">
                  <User className="w-6 h-6 fill-current" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-2xl text-ecoach-dark leading-none">93%</div>
                  <div className="text-xs text-slate-500 font-extrabold font-heading mt-1">Success Rates</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Columns (Image) */}
          <div className="lg:col-span-6 relative flex justify-center items-center lg:pl-10">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[480px]"
            >
              {/* Backglow ornament */}
              <div className="absolute inset-0 bg-slate-50 rounded-2xl filter blur-xl transform rotate-3" />

              {/* Main Student Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img
                  src={heroStudentImg}
                  alt="eCoach Student with books"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Overlaid blue star badge on left center of image */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
                className="absolute left-[-24px] top-[45%] z-20 w-16 h-16 rounded bg-ecoach-blue flex items-center justify-center shadow-lg text-white"
              >
                <Star className="w-7 h-7 fill-white text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
          {cardsData.map((card, idx) => (
            <motion.div
              key={card.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded p-8 text-left shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              style={{ borderTop: '4px solid #FFA700' }} // Yellow thick top border
            >
              <div>
                <h3 className="font-heading font-black text-xl text-ecoach-dark mb-4">
                  {card.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-ecoach-blue hover:text-ecoach-blue-hover font-bold text-xs uppercase tracking-wide transition-colors font-heading"
              >
                {card.linkText}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
