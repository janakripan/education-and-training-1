import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react'
import aboutTeacherImg from '../assets/about_teacher.png'

export default function AboutUs() {
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

  const checklist = [
    'Personalised learning experiences',
    'Access to a wide range of resources',
    'Flexibility and convenience',
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Image with Overlays */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[480px] lg:max-w-none"
            >
              {/* Main Image Wrapper */}
              <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
                <img
                  src={aboutTeacherImg}
                  alt="eCoach expert teacher sitting at desk"
                  className="w-full h-auto rounded object-cover"
                />
              </div>

              {/* Overlaid Success Badge */}
              <motion.div
                initial={{ scale: 0, y: 30 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -left-4 z-20 flex items-center gap-4 bg-white border border-slate-100 shadow-xl p-5 rounded-lg"
              >
                <div className="w-14 h-14 rounded bg-[#FFA700] flex items-center justify-center text-white shadow-md">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-extrabold text-2xl text-ecoach-dark leading-none">85%</div>
                  <div className="text-xs text-slate-500 font-extrabold font-heading mt-1">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Text & Checklist */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 text-left lg:pl-10"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-6 bg-ecoach-blue rounded-full rotate-[30deg] inline-block" />
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs font-heading">
                About Us
              </span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-ecoach-dark mb-6"
            >
              Ways we can help
            </motion.h2>
            <svg className="w-28 h-3 text-ecoach-blue mb-8" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M2,9 Q50,2.5 98,8.5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
              <path d="M5,10 Q48,3.5 95,9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
            </svg>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 font-medium text-base leading-relaxed mb-8"
            >
              Our eLearning platform is a dynamic and innovative online education hub designed to meet the needs of students, educators, and lifelong learners. We believe that learning should be accessible to everyone.
            </motion.p>

            {/* Checklist */}
            <motion.ul variants={itemVariants} className="space-y-4 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ecoach-blue flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-[15px] font-heading">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Separator line */}
            <motion.div 
              variants={itemVariants}
              className="border-t border-dashed border-slate-200 w-full my-8" 
            />

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex justify-center items-center gap-2 bg-ecoach-blue hover:bg-ecoach-blue-hover text-white text-base font-bold px-8 py-4 rounded transition-all duration-300 font-heading"
              >
                Explore Course
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
