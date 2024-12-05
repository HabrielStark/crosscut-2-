import { motion, AnimatePresence } from 'framer-motion'

interface CaseStudy {
  title: string
  description: string
  task: string
  challenges: string[]
  solution: string
  results: string[]
}

interface CaseModalProps {
  caseData: CaseStudy
  onClose: () => void
  isDark: boolean
}

export function CaseModal({ caseData, onClose, isDark }: CaseModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`${
            isDark 
              ? 'bg-[#1E1E1E]' 
              : 'bg-white'
          } rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{caseData.title}</h2>
              <button 
                onClick={onClose}
                className={`${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                } transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1A1A3A] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4D7EF9] mb-3">Description</h3>
                <p className="text-[#8888B3] leading-relaxed">{caseData.description}</p>
              </div>

              <div className="bg-[#1A1A3A] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4D7EF9] mb-3">Task</h3>
                <p className="text-[#8888B3] leading-relaxed">{caseData.task}</p>
              </div>

              <div className="bg-[#1A1A3A] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4D7EF9] mb-3">Challenges</h3>
                <ul className="space-y-3">
                  {caseData.challenges.map((challenge: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-[#2D2D6A] flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#4D7EF9] text-sm font-medium">{index + 1}</span>
                      </span>
                      <span className="text-[#8888B3] leading-relaxed">
                        {challenge}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1A1A3A] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4D7EF9] mb-3">Solution</h3>
                <p className="text-[#8888B3] leading-relaxed">{caseData.solution}</p>
              </div>

              <div className="bg-[#1A1A3A] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#4D7EF9] mb-4">Results</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {caseData.results.map((result: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-[#2D2D6A]/20 rounded-lg p-4"
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-lg bg-[#2D2D6A] flex items-center justify-center mr-2">
                          <span className="text-[#4D7EF9] text-sm font-medium">{index + 1}</span>
                        </div>
                      </div>
                      <p className="text-[#8888B3] leading-relaxed">
                        {result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 