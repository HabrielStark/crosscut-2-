'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const partners = [
  'Google Marketing Platform',
  'Meta Business',
  'Google Partner',
  'Ethereum',
  'Solana',
  'Near',
  'Polygon'
]

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-brand-white dark:bg-[#000531] transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 text-[#0A0320] dark:text-white">
            Our Partners
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-12"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-32 bg-brand-white dark:bg-[#0A0320] rounded-lg flex items-center justify-center p-6 hover:bg-[#3444D5]/5 dark:hover:bg-[#3444D5]/10 transition-colors group border border-[#0A0320]/10 dark:border-white/10"
              >
                <span className="text-[#0A0320] dark:text-white group-hover:text-[#3444D5] dark:group-hover:text-[#3444D5] transition-colors text-center text-xl font-bold">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 