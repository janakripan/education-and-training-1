import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, User, BookOpen } from 'lucide-react'

const categories = [
  'Data Science',
  'Programming',
  'Artificial Intelligent',
  'Cloud Computing',
  'Cybersecurity',
  'View All Courses',
]

const coursesData = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    category: ['Programming', 'Data Science', 'View All Courses'],
    rating: 4.9,
    reviews: '2023',
    students: '4,912',
    lessons: '37 Lessons',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60',
    price: '$79.00',
    discountBadge: null,
  },
  {
    id: 2,
    title: 'Machine Learning Foundations',
    category: ['Artificial Intelligent', 'Data Science', 'View All Courses'],
    rating: 4.9,
    reviews: '1425',
    students: '3,866',
    lessons: '22 Lessons',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60',
    price: '$59.00',
    discountBadge: null,
  },
  {
    id: 3,
    title: 'Google Professional Certificate Data Analytics',
    category: ['Cloud Computing', 'Data Science', 'View All Courses'],
    rating: 4.9,
    reviews: '3652',
    students: '3,982',
    lessons: '19 Lessons',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60',
    price: '$29.00',
    oldPrice: '$39.00',
    discountBadge: '20% OFF',
  },
  {
    id: 4,
    title: 'Supervised Machine Learning: Regression',
    category: ['Artificial Intelligent', 'Programming', 'Data Science', 'View All Courses'],
    rating: 4.9,
    reviews: '1452',
    students: '10,253',
    lessons: '78 Lessons',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=60',
    price: '$79.00',
    discountBadge: null,
  },
  {
    id: 5,
    title: 'Fundamentos: dados, dados, em todos os lugares',
    category: ['Data Science', 'View All Courses'],
    rating: 4.9,
    reviews: '2556',
    students: '9,875',
    lessons: '43 Lessons',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60',
    price: '$79.00',
    discountBadge: null,
  },
  {
    id: 6,
    title: 'Data Analytics Basics: Data, Data Everywhere',
    category: ['Data Science', 'Programming', 'View All Courses'],
    rating: 4.9,
    reviews: '1234',
    students: '10,552',
    lessons: '56 Lessons',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=60',
    price: '$59.00',
    oldPrice: '$79.00',
    discountBadge: '25% OFF',
  },
  {
    id: 7,
    title: 'Processing Data from Dirty to Clean',
    category: ['Data Science', 'Cloud Computing', 'View All Courses'],
    rating: 4.9,
    reviews: '4502',
    students: '14,350',
    lessons: '62 Lessons',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60',
    price: '$79.00',
    discountBadge: null,
  },
  {
    id: 8,
    title: 'Advanced Learning Algorithms',
    category: ['Artificial Intelligent', 'Programming', 'Data Science', 'View All Courses'],
    rating: 4.9,
    reviews: '2556',
    students: '6,781',
    lessons: '19 Lessons',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60',
    price: '$55.00',
    oldPrice: '$79.00',
    discountBadge: '30% OFF',
  },
]

export default function Programs() {
  const [activeTab, setActiveTab] = useState('Data Science')

  const filteredCourses = coursesData.filter((course) =>
    course.category.includes(activeTab)
  )

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
              Popular Courses
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-ecoach-dark"
          >
            Find your perfect program.
          </motion.h2>
          <svg className="w-28 h-2.5 text-ecoach-blue mx-auto mt-4" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M3,9 Q50,2 97,9" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Tab switchers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3.5 border font-heading font-bold text-sm tracking-wide transition-all duration-300 rounded ${
                activeTab === cat
                  ? 'bg-ecoach-blue border-ecoach-blue text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:text-ecoach-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 100, damping: 15 }}
                key={course.id}
                whileHover={{ y: -6 }}
                className="bg-[#F8FAFC] border border-slate-100 rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full text-left"
              >
                {/* Image & Badge overlay */}
                <div className="relative overflow-hidden aspect-video bg-slate-100 group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  {course.discountBadge && (
                    <span className="absolute top-4 left-4 bg-ecoach-yellow text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm font-heading tracking-wide uppercase">
                      {course.discountBadge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Stars and Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 fill-current`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 font-extrabold font-heading mt-0.5">
                        {course.rating} ({course.reviews})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-extrabold text-base text-ecoach-dark line-clamp-2 hover:text-ecoach-blue transition-colors mb-4 min-h-[48px]">
                      {course.title}
                    </h3>
                  </div>

                  <div>
                    {/* Details row */}
                    <div className="flex items-center justify-between text-slate-500 border-t border-slate-200/60 pt-4 mb-5">
                      <span className="flex items-center gap-1.5 text-xs font-bold">
                        <User className="w-4 h-4 text-slate-400" />
                        {course.students}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        {course.lessons}
                      </span>
                    </div>

                    {/* Price and Enroll Button */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-ecoach-blue hover:bg-ecoach-blue-hover text-white py-3 px-6 rounded font-bold font-heading text-sm transition-all shadow-sm flex items-center justify-center min-w-[90px]"
                      >
                        {course.price}
                      </motion.button>
                      
                      {course.oldPrice && (
                        <span className="text-sm font-bold text-slate-400 line-through">
                          {course.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
