import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import blog1Img from '../assets/blog_1.png'
import blog2Img from '../assets/blog_2.png'
import blog3Img from '../assets/blog_3.png'

export default function Blog() {
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

  const posts = [
    {
      title: '5 Ways to Become an Authentic Leader',
      date: 'February 11, 2014',
      tag: 'Education',
      image: blog1Img,
    },
    {
      title: 'The Power of Positively Energizing Leadership',
      date: 'August 24, 2013',
      tag: 'Education',
      image: blog2Img,
    },
    {
      title: '7 Procreate Tips That Any Digital Artist Should Know',
      date: 'March 6, 2018',
      tag: 'Education',
      image: blog3Img,
    },
  ]

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
              Blog and News
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-ecoach-dark"
          >
            Stay updated with our news and blog.
          </motion.h2>
          
          <svg className="w-28 h-2.5 text-ecoach-blue mx-auto mt-4" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M3,9 Q50,2 97,9" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#F8FAFC] border border-slate-100 hover:border-slate-200 rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col text-left group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Meta Details */}
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 mb-4 items-center">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-ecoach-blue">
                      <Tag className="w-3.5 h-3.5" />
                      {post.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-[17px] text-ecoach-dark line-clamp-2 hover:text-ecoach-blue transition-colors duration-200 mb-6 min-h-[48px]">
                    <a href="#">{post.title}</a>
                  </h3>
                </div>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-ecoach-blue hover:text-ecoach-blue-hover font-bold text-[13px] uppercase transition-colors font-heading mt-auto"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex justify-center items-center gap-2 bg-ecoach-blue hover:bg-ecoach-blue-hover text-white text-base font-bold px-8 py-4 rounded transition-all duration-300 font-heading"
          >
            Explore All Blog Post
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
