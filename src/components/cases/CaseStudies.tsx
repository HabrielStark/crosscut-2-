import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { caseStudiesData } from './caseStudiesData'
import { Tilt } from 'react-tilt'
import { X, ExternalLink, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const glowVariants = {
  initial: { backgroundPosition: "0% 50%" },
  animate: { 
    backgroundPosition: "100% 50%",
    transition: { 
      duration: 5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<keyof typeof caseStudiesData | null>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const IconComponent = selectedCase ? caseStudiesData[selectedCase].icon : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#000531] dark:to-[#000531] overflow-hidden relative">
      <motion.div
        className="absolute inset-0 opacity-30"
        variants={glowVariants}
        initial="initial"
        animate={controls}
        style={{
          background: "linear-gradient(45deg, transparent 0%, rgba(99, 102, 241, 0.03) 25%, transparent 50%, rgba(139, 92, 246, 0.03) 75%, transparent 100%)",
          backgroundSize: "200% 200%"
        }}
      />
      
      <div className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent dark:via-purple-400 mb-8"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <h2 className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wider uppercase mb-3">
                Our Portfolio
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white relative">
                Success{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                    Stories
                  </span>
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-400/20 dark:to-blue-400/20 blur-lg"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results
              </p>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent dark:via-purple-400"
            />
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(caseStudiesData).map(([key, caseItem]) => {
            const ItemIcon = caseItem.icon;
            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className="h-full"
                onHoverStart={() => setIsHovered(key)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Tilt options={{ max: 15, scale: 1.02, speed: 1000 }}>
                  <motion.div 
                    onClick={() => setSelectedCase(key as keyof typeof caseStudiesData)}
                    className="relative group cursor-pointer h-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-[#0a0f3b] shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-blue-900/20 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5 dark:from-blue-500/5 dark:to-blue-500/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered === key ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0a0f3b] dark:via-transparent dark:to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered === key ? 0.2 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {ItemIcon && (
                        <motion.div 
                          className="relative z-10 mb-6"
                          animate={isHovered === key ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
                            <ItemIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                        </motion.div>
                      )}
                      
                      <motion.h3 
                        className="text-2xl font-bold mb-2 text-gray-900 dark:text-white relative z-10"
                        animate={isHovered === key ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {caseItem.title}
                      </motion.h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 relative z-10">
                        {caseItem.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10 mb-6 line-clamp-3">
                        {caseItem.description}
                      </p>
                      <motion.div 
                        className="relative z-10 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium mt-auto group"
                        animate={isHovered === key ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="mr-2">View Case Study</span>
                        <motion.div
                          animate={isHovered === key ? { 
                            rotate: 45,
                            scale: 1.1
                          } : { 
                            rotate: 0,
                            scale: 1
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
          >
            <div className="min-h-screen py-8 px-4 flex items-center justify-center">
              <motion.div 
                className="bg-white dark:bg-[#0a0f3b] rounded-2xl w-full max-w-5xl relative"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative p-8">
                  <motion.button
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors z-50"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.button>

                  <motion.div 
                    className="flex items-center gap-4 mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {IconComponent && (
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {caseStudiesData[selectedCase].title}
                      </h2>
                      <p className="text-lg text-blue-600 dark:text-blue-400">
                        {caseStudiesData[selectedCase].subtitle}
                      </p>
                    </div>
                  </motion.div>

                  {caseStudiesData[selectedCase].images.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 mt-12">
                      {caseStudiesData[selectedCase].images.map((image, index) => (
                        <motion.div
                          key={index}
                          className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={image}
                            alt={`${caseStudiesData[selectedCase].title} case study ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="grid gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 hover:border-blue-200 dark:border-blue-900/30 dark:hover:border-blue-900/50 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                        <span className="mr-2">Task</span>
                        <ArrowRight className="w-4 h-4" />
                      </h3>
                      {Array.isArray(caseStudiesData[selectedCase].task) ? (
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                          {caseStudiesData[selectedCase].task.map((task, index) => (
                            <li key={index}>{task}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                          {caseStudiesData[selectedCase].task}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 hover:border-blue-200 dark:border-blue-900/30 dark:hover:border-blue-900/50 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                        <span className="mr-2">Challenges</span>
                        <ArrowRight className="w-4 h-4" />
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                        {caseStudiesData[selectedCase].challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 hover:border-blue-200 dark:border-blue-900/30 dark:hover:border-blue-900/50 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                        <span className="mr-2">Solution</span>
                        <ArrowRight className="w-4 h-4" />
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{caseStudiesData[selectedCase].solution}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 hover:border-blue-200 dark:border-blue-900/30 dark:hover:border-blue-900/50 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                        <span className="mr-2">Results</span>
                        <ArrowRight className="w-4 h-4" />
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                        {caseStudiesData[selectedCase].results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 