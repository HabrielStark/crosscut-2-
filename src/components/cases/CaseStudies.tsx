import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, X, ExternalLink } from "lucide-react"
import { caseStudiesData, type CaseStudy } from './caseStudiesData'
import { motion, AnimatePresence } from 'framer-motion'
import { Tilt } from 'react-tilt'

const caseImages = {
    "Bybit": [
      "/bybit1.jpeg",
      "/bybit2.jpeg",
      "/bybit3.jpeg"
    ],
    "PWRTEAMS": [
      "/PWRTEAMS1.jpeg",
      "/PWRTEAMS2.jpeg",
      "/PWRTEAMS3.jpeg"
    ],
    "Mimo": [
      "/mimo1.jpeg",
      "/mimo2.jpeg",
      "/mimo3.jpeg"
    ],
    "FINCH Labs": [
      "/FINCHLABS1.jpeg",
      "/FINCHLABS2.jpeg",
      "/FINCHLABS3.jpeg"
    ],
    "Raiinmaker": [
      "/FINCHLABS1.jpeg",
      "/FINCHLABS2.jpeg",
      "/FINCHLABS3.jpeg"
    ],
    "Crypto Players Club": [
      "/CPC1.jpeg",
      "/CPC2.jpeg",
      "/CPC3.jpeg"
    ],
    "Script.TV": [
      "/SCRIPT.TV1.jpeg",
      "/SCRIPT.TV2.jpeg",
      "/SCRIPT.TV3.jpeg"
    ]
} as const;

type CompanyName = keyof typeof caseImages;

const CaseGallery = ({ company }: { company: CompanyName }) => {
  if (!caseImages[company] || company === "Crombie") return null;

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {caseImages[company].map((imagePath, index) => (
        <div key={index} className="relative aspect-video rounded-lg overflow-hidden group/image">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/10 to-[#FE5431]/10
                        dark:from-[#3444D5]/20 dark:to-[#FE5431]/20 group-hover/image:opacity-0 transition-opacity" />
          <img
            src={imagePath}
            alt={`${company} screenshot ${index + 1}`}
            className="w-full h-full object-cover rounded-lg transform group-hover/image:scale-105 transition-transform"
          />
        </div>
      ))}
    </div>
  );
};

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="py-24">
      {/* Hero Section with 3D Gradient Animation */}
      <div className="container mx-auto px-4 mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3444D5]/20 to-[#FE5431]/20 blur-3xl" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3444D5] to-[#FE5431] mb-8 relative"
        >
          Our Case Studies
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-center text-[#0A0320]/70 dark:text-white/70 max-w-3xl mx-auto relative"
        >
          Discover how we've helped businesses achieve their goals through innovative solutions and strategic thinking
        </motion.p>
      </div>

      {/* Cases Grid with Enhanced Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {caseStudiesData.map((caseItem, index) => (
            <Tilt
              key={caseItem.title}
              options={{
                max: 5,
                scale: 1.01,
                speed: 500,
                glare: false,
              }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCase(caseItem)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group cursor-pointer h-full"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/10 via-[#FE5431]/5 to-transparent rounded-2xl 
                              transition-all duration-200" />
                
                {/* Card Content */}
                <div className="glass-card relative overflow-hidden rounded-2xl p-8 border border-[#3444D5]/20
                              backdrop-blur-sm bg-white/30 dark:bg-[#000531]/30 h-full
                              group-hover:border-[#3444D5]/40 transition-all duration-200">
                  {/* Icon Badge */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br 
                                from-[#3444D5] to-[#FE5431] flex items-center justify-center
                                shadow-lg transition-all duration-200">
                    <caseItem.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="mt-12">
                    {/* Company Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#3444D5]/10 dark:bg-white/10
                                  text-[#3444D5] dark:text-white text-sm font-semibold mb-4 ml-6">
                      {caseItem.title}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#0A0320] dark:text-white mb-4 pl-6
                                 group-hover:text-[#3444D5] dark:group-hover:text-[#3444D5] transition-colors">
                      {caseItem.company}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#0A0320]/70 dark:text-white/70 mb-6 pl-6 line-clamp-3
                                group-hover:text-[#0A0320] dark:group-hover:text-white/90 transition-colors">
                      {caseItem.description}
                    </p>
                    
                    {/* Results Preview */}
                    <div className="pl-6 mb-8 space-y-3">
                      {caseItem.results.slice(0, 2).map((result, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#3444D5]" />
                          <span className="text-[#0A0320]/80 dark:text-white/80 text-sm">
                            {result}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <motion.div 
                      animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                      className="pl-6"
                    >
                      <Button 
                        variant="outline" 
                        className="bg-gradient-to-r from-[#3444D5] to-[#FE5431] text-white border-none
                                 hover:opacity-90 transition-all duration-300 group/btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCase(caseItem)
                        }}
                      >
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full 
                                bg-gradient-to-br from-[#3444D5]/20 to-[#FE5431]/20 blur-2xl
                                transition-transform duration-200" />
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Enhanced Modal with 3D and Gradient Effects */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white via-white to-[#3444D5]/5 
                        dark:from-[#000531] dark:via-[#000531] dark:to-[#3444D5]/20 
                        rounded-3xl max-w-5xl w-full overflow-hidden
                        border border-[#3444D5]/20 shadow-2xl relative"
            >
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full 
                              bg-gradient-to-br from-[#3444D5]/10 to-[#FE5431]/10
                              dark:from-[#3444D5]/20 dark:to-[#FE5431]/20 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full 
                              bg-gradient-to-br from-[#FE5431]/10 to-[#3444D5]/10
                              dark:from-[#FE5431]/20 dark:to-[#3444D5]/20 blur-3xl" />
              </div>

              <div className="relative">
                {/* Header Section */}
                <div className="p-10 pb-6 border-b border-[#3444D5]/10">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#3444D5] to-[#FE5431]
                                      shadow-lg shadow-[#3444D5]/20">
                          <selectedCase.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full 
                                    bg-[#3444D5]/10 backdrop-blur-sm
                                    text-[#3444D5] font-semibold">
                          {selectedCase.title}
                        </div>
                      </div>
                      <motion.h2 
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-4xl font-bold bg-clip-text text-transparent 
                                 bg-gradient-to-r from-[#0A0320] to-[#3444D5]
                                 dark:from-white dark:to-[#3444D5]"
                      >
                        {selectedCase.company}
                      </motion.h2>
                    </div>
                    <button 
                      onClick={() => setSelectedCase(null)}
                      className="text-[#0A0320] hover:text-[#3444D5] dark:text-white dark:hover:text-[#3444D5] 
                               transition-colors p-2 hover:bg-[#3444D5]/10 rounded-full"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Content Section with Custom Scrollbar */}
                <div className="p-10 max-h-[70vh] overflow-y-auto
                              scrollbar-thin scrollbar-thumb-[#3444D5]/20 scrollbar-track-transparent">
                  <div className="space-y-10">
                    {/* Description */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-[#000531] p-8 rounded-2xl relative group
                               border border-[#3444D5]/10 hover:border-[#3444D5]/20 transition-colors"
                    >
                      {/* Image Gallery */}
                      <CaseGallery company={selectedCase.company} />

                      <div className="relative">
                        <h3 className="text-[#3444D5] text-2xl font-semibold mb-6 flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#3444D5]/10">
                            <span className="text-lg">📋</span>
                          </div>
                          Description
                          <div className="h-px flex-1 bg-gradient-to-r from-[#3444D5]/20 to-transparent" />
                        </h3>
                        <p className="text-[#0A0320] dark:text-white/90 text-lg leading-relaxed">
                          {selectedCase.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Task */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white dark:bg-[#000531] p-8 rounded-2xl relative group
                               border border-[#3444D5]/10 hover:border-[#3444D5]/20 transition-colors"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/5 to-transparent 
                                    dark:from-[#3444D5]/10 dark:to-transparent
                                    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <h3 className="text-[#3444D5] text-2xl font-semibold mb-6 flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#3444D5]/10">
                            <span className="text-lg">🎯</span>
                          </div>
                          Task
                          <div className="h-px flex-1 bg-gradient-to-r from-[#3444D5]/20 to-transparent" />
                        </h3>
                        <p className="text-[#0A0320] dark:text-white/90 text-lg leading-relaxed">
                          {selectedCase.task}
                        </p>
                      </div>
                    </motion.div>

                    {/* Challenges */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white dark:bg-[#000531] p-8 rounded-2xl relative group
                               border border-[#3444D5]/10 hover:border-[#3444D5]/20 transition-colors"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/5 to-transparent 
                                    dark:from-[#3444D5]/10 dark:to-transparent
                                    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <h3 className="text-[#3444D5] text-2xl font-semibold mb-6 flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#3444D5]/10">
                            <span className="text-lg">⚡️</span>
                          </div>
                          Challenges
                          <div className="h-px flex-1 bg-gradient-to-r from-[#3444D5]/20 to-transparent" />
                        </h3>
                        <ul className="space-y-6">
                          {selectedCase.challenges.map((challenge, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="flex gap-6 items-start group/item"
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5] to-[#FE5431] blur-lg opacity-50
                                              group-hover/item:opacity-100 transition-opacity" />
                                <span className="relative flex items-center justify-center w-12 h-12 rounded-xl 
                                             bg-gradient-to-br from-[#3444D5] to-[#FE5431] text-white text-lg font-semibold
                                             group-hover/item:scale-110 transition-transform">
                                  {index + 1}
                                </span>
                              </div>
                              <span className="text-[#0A0320] dark:text-white/90 text-lg leading-relaxed pt-2 flex-1">
                                {challenge}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white dark:bg-[#000531] p-8 rounded-2xl relative group
                               border border-[#3444D5]/10 hover:border-[#3444D5]/20 transition-colors"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/5 to-transparent 
                                    dark:from-[#3444D5]/10 dark:to-transparent
                                    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <h3 className="text-[#3444D5] text-2xl font-semibold mb-6 flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#3444D5]/10">
                            <span className="text-lg">💡</span>
                          </div>
                          Solution
                          <div className="h-px flex-1 bg-gradient-to-r from-[#3444D5]/20 to-transparent" />
                        </h3>
                        <p className="text-[#0A0320] dark:text-white/90 text-lg leading-relaxed">
                          {selectedCase.solution}
                        </p>
                      </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white dark:bg-[#000531] p-8 rounded-2xl relative group
                               border border-[#3444D5]/10 hover:border-[#3444D5]/20 transition-colors"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/5 to-transparent 
                                    dark:from-[#3444D5]/10 dark:to-transparent
                                    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <h3 className="text-[#3444D5] text-2xl font-semibold mb-6 flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#3444D5]/10">
                            <span className="text-lg">🏆</span>
                          </div>
                          Results
                          <div className="h-px flex-1 bg-gradient-to-r from-[#3444D5]/20 to-transparent" />
                        </h3>
                        <ul className="space-y-6">
                          {selectedCase.results.map((result, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="flex gap-6 items-start group/item"
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5] to-[#FE5431] blur-lg opacity-50
                                              group-hover/item:opacity-100 transition-opacity" />
                                <span className="relative flex items-center justify-center w-12 h-12 rounded-xl 
                                             bg-gradient-to-br from-[#3444D5] to-[#FE5431] text-white text-lg font-semibold
                                             group-hover/item:scale-110 transition-transform">
                                  ✓
                                </span>
                              </div>
                              <span className="text-[#0A0320] dark:text-white/90 text-lg leading-relaxed pt-2 flex-1">
                                {result}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 