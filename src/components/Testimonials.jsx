import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

export default function Testimonials() {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  }

  const reviews = [
    {
      quote: 'Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus.',
      name: 'Darrell Steward',
      role: 'Student',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    },
    {
      quote: 'Eget aliquet sit at lacinia. Magna consequat consectetur maecenas amet sagittis mi. Mattis cursus dolor amet quam commodo amet in sed dui. Risus risus sed sed lectus.',
      name: 'Courtney Henry',
      role: 'Student',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    },
  ]
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with split title and controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-6 bg-ecoach-blue rounded-full rotate-[30deg] inline-block" />
              <span className="text-slate-400 font-bold uppercase tracking-wider text-xs font-heading">
                Review
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-ecoach-dark"
            >
              What our students says
            </motion.h2>
            
            <svg className="w-28 h-2.5 text-ecoach-blue mt-4" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M3,9 Q50,2 97,9" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Slider controls matching mockup */}
          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-ecoach-blue hover:border-ecoach-blue transition-colors shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span className="w-4 h-1.5 rounded bg-ecoach-blue" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-ecoach-blue hover:border-ecoach-blue transition-colors shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative text-left flex flex-col justify-between"
            >
              <div>
                {/* Large Quote Icon at top-left */}
                <Quote className="w-10 h-10 text-slate-100 mb-4 stroke-[3px]" />
                
                {/* Testimonial Quote */}
                <p className="text-slate-600 font-medium text-[15px] sm:text-base leading-relaxed mb-6 font-sans">
                  {rev.quote}
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-5 mt-auto">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover shadow-inner"
                />
                <div className="text-left">
                  <h4 className="font-heading font-extrabold text-slate-800 text-base leading-snug">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
