import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Partners } from '@/components/partners'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  
  return (
    <main className="min-h-screen bg-brand-white dark:bg-[#000531] relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white via-brand-white to-brand-white/50 dark:from-[#000531] dark:via-[#000531] dark:to-[#000531]/90" />
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: Math.random() > 0.9 ? '#FE5431' : '#3444D5',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * -20}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xl md:text-2xl font-medium text-[#3444D5] dark:text-[#3444D5]">
                Elevate Your Digital Presence
              </span>
            </motion.div>

            <motion.h1 
              className="text-7xl md:text-8xl font-bold text-[#0A0320] dark:text-white mb-8 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative inline-block">
                Formula for your success
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3444D5] to-[#FE5431] opacity-20 blur-xl rounded-lg" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-[#0A0320]/80 dark:text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              CrossCult - Together we move forward. This is a group of people who are ready 
              to make your wildest dreams come true. We will find the tools that will grow your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-6"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#3444D5] to-[#FE5431] rounded-lg text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#FE5431]/20">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-[#3444D5] rounded-lg text-[#3444D5] font-bold text-lg hover:scale-105 transition-all duration-300 hover:bg-[#3444D5]/5">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#3444D5] to-transparent opacity-20"
              style={{
                top: `${33 * (i + 1)}%`,
                transform: 'translateX(-50%)',
              }}
              animate={{
                x: ['0%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#0A0320] dark:text-white mb-12 relative inline-block group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Main Mission is to Help Companies Reach the Next Level with the Help of Marketing
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3444D5] to-[#FE5431] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-[#0A0320]/10 dark:border-white/10 hover:border-[#0A0320]/20 dark:hover:border-white/20 transition-colors"
              >
                <p className="text-xl text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                  After analyzing the market, we realized that many companies have a problem with marketing. 
                  We noticed that in most businesses, the top management is involved in marketing itself.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-[#0A0320]/10 dark:border-white/10 hover:border-[#0A0320]/20 dark:hover:border-white/20 transition-colors"
              >
                <p className="text-xl text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                  This worsens the results, as the expertise and analysis are of insufficient quality. 
                  We wanted to take on this mission and help companies because we are real marketing fanatics.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <Partners />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </main>
  )
}
