import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="bg-ecoach-blue py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Text Content */}
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-black text-3xl sm:text-[46px] text-white tracking-tight mb-4 leading-tight"
            >
              Finding Your Right Courses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-slate-100 text-sm sm:text-base font-semibold leading-relaxed"
            >
              It is important to consider various factors such as your interests, skills, academic background, and future aspirations. Researching the different options available and seeking advice.
            </motion.p>
          </div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="inline-flex justify-center items-center gap-2 bg-[#0F1012] hover:bg-[#000000] text-white text-base font-bold px-8 py-4 rounded transition-all duration-300 font-heading"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
