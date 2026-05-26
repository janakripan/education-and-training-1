import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, DollarSign, Users } from 'lucide-react'
import becomeTeacherImg from '../assets/become_teacher.png'

export default function BecomeInstructor() {
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
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  }

  return (
    <section id="instructor" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 text-left"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-6 bg-ecoach-blue rounded-full rotate-[30deg] inline-block" />
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs font-heading">
                Become an Instructor
              </span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-ecoach-dark"
            >
              Join us as an instructor.
            </motion.h2>

            <svg className="w-28 h-2.5 text-ecoach-blue mt-4 mb-8" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M3,9 Q50,2 97,9" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </svg>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 font-medium text-base leading-relaxed mb-8"
            >
              If you're passionate about teaching and want to share your expertise with others, join us as an instructor! We're looking for enthusiastic.
            </motion.p>

            {/* Benefit Items */}
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-ecoach-light-blue flex items-center justify-center flex-shrink-0 text-ecoach-blue">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-slate-800 text-lg mb-1 leading-snug">
                    Expand your reach
                  </h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-md">
                    Many of these business ideas are home-based. While they may not make you a billionaire
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-amber-50 flex items-center justify-center flex-shrink-0 text-ecoach-yellow">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-slate-800 text-lg mb-1 leading-snug">
                    Earn money from your courses
                  </h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-md">
                    We provide instructors with tools and resources to create high-quality courses that meet the needs of our learners.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex justify-center items-center gap-2 bg-ecoach-blue hover:bg-ecoach-blue-hover text-white text-base font-bold px-8 py-4 rounded transition-all duration-300 font-heading"
              >
                Start Teaching Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image with overlays */}
          <div className="lg:col-span-6 relative flex justify-center items-center lg:pl-10">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[480px]"
            >
              {/* Main Image */}
              <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
                <img
                  src={becomeTeacherImg}
                  alt="eCoach expert instructor"
                  className="w-full h-auto rounded object-cover"
                />
              </div>

              {/* Overlaid Badge */}
              <motion.div
                initial={{ scale: 0, y: -30 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 left-4 sm:-left-4 z-20 flex items-center gap-4 bg-white border border-slate-100 shadow-xl p-5 rounded-lg"
              >
                <div className="w-14 h-14 rounded bg-[#FFA700] flex items-center justify-center text-white shadow-md">
                  <Users className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-2xl text-ecoach-dark leading-none">Grow</div>
                  <div className="text-xs text-slate-500 font-extrabold font-heading mt-1 uppercase">Community</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
