import { motion } from 'framer-motion'
import expertCarolyn from '../assets/expert_carolyn.png'
import expertDarren from '../assets/expert_darren.png'
import expertRonald from '../assets/expert_ronald.png'
import expertTheresa from '../assets/expert_theresa.png'
import expertRalph from '../assets/expert_ralph.png'
import expertDarlene from '../assets/expert_darlene.png'

export default function Experts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  }

  const experts = [
    {
      name: 'Cameron Williamson',
      role: 'Wordpress Developer',
      image: expertCarolyn,
    },
    {
      name: 'Devon Lane',
      role: 'UI Designer',
      image: expertDarren,
    },
    {
      name: 'Ronald Richards',
      role: 'Frontend Developer',
      image: expertRonald,
    },
    {
      name: 'Theresa Webb',
      role: 'UI Designer',
      image: expertTheresa,
    },
    {
      name: 'Ralph Edwards',
      role: 'Python Developer',
      image: expertRalph,
    },
    {
      name: 'Darlene Robertson',
      role: 'UX Designer',
      image: expertDarlene,
    },
  ]

  return (
    <section id="experts" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="w-1.5 h-6 bg-ecoach-blue rounded-full rotate-[30deg] inline-block" />
            <span className="text-slate-400 font-bold uppercase tracking-wider text-xs font-heading">
              Instructors
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-ecoach-dark"
          >
            Meet our experts
          </motion.h2>
          <svg className="w-28 h-3 text-ecoach-blue mx-auto mt-4" viewBox="0 0 100 12" preserveAspectRatio="none">
            <path d="M2,9 Q50,2.5 98,8.5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M5,10 Q48,3.5 95,9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
          </svg>
        </div>

        {/* Profiles Grid - Plain photo -> name -> role */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12"
        >
          {experts.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="text-left flex flex-col group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded overflow-hidden mb-5 bg-slate-100 shadow-sm">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-heading font-extrabold text-2xl text-ecoach-dark mb-1 group-hover:text-ecoach-blue transition-colors">
                {exp.name}
              </h3>
              <p className="text-ecoach-blue font-bold text-sm tracking-wide font-heading">
                {exp.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
