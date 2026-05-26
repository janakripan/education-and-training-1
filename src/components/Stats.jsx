import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const hasAnimated = useRef(false)

  // Parse the number and suffix
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '')
  const isDecimal = value.includes('.')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTimestamp = null

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            
            // Easing out quadratic
            const easeProgress = progress * (2 - progress)
            const currentCount = easeProgress * numericValue

            setCount(currentCount)

            if (progress < 1) {
              window.requestAnimationFrame(step)
            }
          }

          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [numericValue, duration])

  return (
    <span ref={elementRef}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const statVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    },
  }

  const statsData = [
    {
      value: '1.5M',
      label: 'Learners available in this platform and more are counting daily.',
    },
    {
      value: '87%',
      label: 'Our students have the highest success rate in getting hired.',
    },
    {
      value: '364+',
      label: 'High-quality teachers offering courses and videos.',
    },
  ]

  return (
    <section className="bg-ecoach-blue py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[46px] text-white tracking-tight leading-snug">
            Building a lifelong learning community
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statVariants}
              className={`flex flex-col items-center justify-center px-8 pb-8 md:pb-0 ${
                idx < 2 ? 'border-b border-white/10 md:border-b-0 md:border-r md:border-white/20' : ''
              }`}
            >
              {/* Stat Value (Animated) */}
              <div className="font-heading font-black text-5xl sm:text-[54px] text-white mb-3 tracking-tight drop-shadow-sm leading-none min-h-[54px]">
                <AnimatedCounter value={stat.value} />
              </div>
              
              {/* Label */}
              <p className="text-slate-100 text-sm font-semibold max-w-xs leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
