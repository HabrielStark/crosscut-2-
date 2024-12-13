import { motion, useScroll, useTransform } from 'framer-motion'
import { Partners } from '@/components/partners'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { scrollYProgress } = useScroll()
  const navigate = useNavigate();
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  
  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/services');
  };

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
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-[#3444D5] to-[#FE5431] rounded-lg text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#FE5431]/20"
              >
                Get Started
              </button>
              <button 
                onClick={handleLearnMore}
                className="px-8 py-4 border-2 border-[#3444D5] rounded-lg text-[#3444D5] font-bold text-lg hover:scale-105 transition-all duration-300 hover:bg-[#3444D5]/5"
              >
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

      {/* Values Section */}
      <section className="relative min-h-screen py-32 overflow-hidden perspective-1000">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white/50 dark:from-[#000531] dark:via-[#000531] dark:to-[#000531]/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,68,213,0.08),transparent_70%)]" />
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          {/* Modern Header */}
          <div className="text-center mb-20 relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="relative inline-block"
            >
              <div className="text-7xl md:text-8xl font-black relative z-10 
                            bg-gradient-to-r from-[#3444D5] via-[#8B5CF6] to-[#FE5431] 
                            bg-clip-text text-transparent 
                            animate-[gradient_3s_ease_infinite]
                            [background-size:200%]"
              >
                Our Values
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#3444D5]/20 to-[#FE5431]/20 
                            blur-xl rounded-lg animate-pulse" />
            </motion.div>
          </div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                title: "Honesty",
                description: "We value transparency and truthfulness in all our interactions",
                color: "#3444D5",
                rotation: 5
              },
              {
                title: "Openness",
                description: "We maintain an open mindset and welcome new ideas and perspectives",
                color: "#FE5431",
                rotation: -5
              },
              {
                title: "Multiculturalism",
                description: "We embrace and celebrate diversity in our global community",
                color: "#8B5CF6",
                rotation: 5
              },
              {
                title: "Clear Identification of the Business Problem",
                description: "We focus on understanding and defining challenges precisely",
                color: "#3444D5",
                rotation: -5
              },
              {
                title: "Professional Approach to Solving Challenges",
                description: "We tackle every project with expertise and dedication",
                color: "#FE5431",
                rotation: 5
              },
              {
                title: "A Lot of Creativity",
                description: "We bring innovative and creative solutions to every project",
                color: "#8B5CF6",
                rotation: -5
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="group perspective"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative preserve-3d cursor-pointer"
                  whileHover={{ 
                    rotateX: value.rotation,
                    rotateY: value.rotation,
                    scale: 1.05,
                    z: 20
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Card */}
                  <div className="relative h-[300px] rounded-2xl p-8 bg-white dark:bg-[#000531]/50
                                backdrop-blur-xl border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                group-hover:border-[#3444D5]/30 dark:group-hover:border-[#4A5FFF]/30
                                shadow-lg hover:shadow-xl transition-all duration-500
                                overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5]/5 to-[#FE5431]/5" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#3444D5] to-[#FE5431] 
                                     bg-clip-text text-transparent transform group-hover:translate-x-2 
                                     transition-transform duration-500"
                        >
                          {value.title}
                        </h3>
                        <p className="text-[#0A0320]/70 dark:text-white/70 text-lg leading-relaxed 
                                    transform group-hover:translate-x-2 transition-transform duration-500 delay-75"
                        >
                          {value.description}
                        </p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="flex justify-between items-end">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3444D5]/10 to-[#FE5431]/10
                                      transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="text-6xl font-black text-[#3444D5]/5 dark:text-white/5">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3444D5] to-[#FE5431] 
                                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#3444D5] to-[#FE5431] 
                                    transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,68,213,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(52,68,213,0.05)_1px,transparent_1px)] 
                       bg-[size:100px_100px] opacity-20 dark:opacity-10" />
      </section>

      {/* Team Vision Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white/50 dark:from-[#000531] dark:via-[#000531] dark:to-[#000531]/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,68,213,0.1),transparent_70%)]" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Main Content */}
              <div className="grid md:grid-cols-[2.5fr,3.5fr] gap-12 items-center">
                {/* Left Side - Highlight */}
                <div className="relative bg-white/20 dark:bg-[#000531]/20 backdrop-blur-xl rounded-2xl p-10
                            border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                            transform hover:scale-[1.02] transition-all duration-500
                            hover:shadow-xl hover:shadow-[#3444D5]/5 dark:hover:shadow-[#4A5FFF]/5">
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3444D5] via-[#8B5CF6] to-[#FE5431] 
                                bg-clip-text text-transparent animate-gradient [background-size:200%_auto]">
                      THE BASIS OF A GOOD TEAM IS PEOPLE.
                    </h2>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3444D5]/5 to-transparent opacity-50" />
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#3444D5] via-[#8B5CF6] to-[#FE5431]" />
                </div>

                {/* Right Side - Details */}
                <div className="relative space-y-8">
                  <div className="relative bg-white/10 dark:bg-[#000531]/10 backdrop-blur-xl rounded-2xl p-8
                              border-l-4 border-[#3444D5] dark:border-[#4A5FFF]
                              hover:shadow-lg transition-all duration-300">
                    <p className="text-xl md:text-2xl text-[#0A0320]/70 dark:text-white/70">
                      IN A CROSSCULT, EACH PERSON IS NOT JUST AN EMPLOYEE, IT IS PART OF ONE BIG TEAM.
                    </p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3444D5]/5 to-transparent rounded-full blur-xl" />
                  </div>

                  <div className="relative bg-white/10 dark:bg-[#000531]/10 backdrop-blur-xl rounded-2xl p-8
                              border-l-4 border-[#FE5431]
                              hover:shadow-lg transition-all duration-300">
                    <p className="text-xl md:text-2xl text-[#0A0320]/70 dark:text-white/70">
                      OUR GOAL IS TO MAKE EVERYONE FEEL COMFORTABLE AND SEE THAT THE COMPANY SUPPORTS THEIR INTERESTS AND VALUES.
                    </p>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FE5431]/5 to-transparent rounded-full blur-xl" />
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#3444D5]/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FE5431]/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
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
