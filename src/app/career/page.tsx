import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Briefcase, Rocket, Globe, Heart } from "lucide-react"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import { OrbitControls } from '@react-three/drei'
import { Particles } from "@/components/three/Particles"

export default function Career() {
  return (
    <PageLayout
      title="Join Our Team"
      subtitle="Be part of a dynamic team shaping the future of Web3 and digital marketing."
    >
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Particles count={500} />
          </Suspense>
        </Canvas>
      </div>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:bg-white/5 transition-all duration-500"
              >
                <div className="text-4xl text-gradient mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#3444D5] dark:text-[#4A5FFF]">{benefit.title}</h3>
                <p className="text-[#0A0320] dark:text-white group-hover:text-[#3444D5] dark:group-hover:text-[#4A5FFF] transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#3444D5] dark:text-[#4A5FFF]"
          >
            Our Hiring Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#3444D5]/20 dark:bg-[#4A5FFF]/20 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-[#3444D5] dark:text-[#4A5FFF]">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#3444D5] dark:text-[#4A5FFF]">{step.title}</h3>
                  <p className="text-[#0A0320] dark:text-white">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#3444D5]/20 dark:bg-[#4A5FFF]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#3444D5] dark:text-[#4A5FFF]"
          >
            Open Positions
          </motion.h2>
          <div className="grid gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl p-8 hover-lift press-effect
                          bg-white/50 dark:bg-[#000531]/50 backdrop-blur-sm
                          border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                          hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20
                          group transition-all duration-300"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5 rounded-full 
                              group-hover:scale-150 group-hover:rotate-45 transition-all duration-500" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 rounded-full 
                              group-hover:scale-150 group-hover:-rotate-45 transition-all duration-500 delay-100" />

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg 
                                     bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10">
                        <Briefcase className="w-5 h-5 text-[#3444D5] dark:text-[#4A5FFF]" />
                      </span>
                      <h3 className="text-2xl font-bold text-[#3444D5] dark:text-[#4A5FFF] group-hover:text-[#FE5431] transition-colors">
                        {position.title}
                      </h3>
                    </div>

                    <p className="text-[#0A0320] dark:text-white/90 mb-6 max-w-3xl">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                     bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 
                                     text-[#3444D5] dark:text-[#4A5FFF]">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                     bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 
                                     text-[#3444D5] dark:text-[#4A5FFF]">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                     bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 
                                     text-[#3444D5] dark:text-[#4A5FFF]">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-4 md:min-w-[140px]">
                    <Button 
                      className="flex-1 bg-[#3444D5] hover:bg-[#3444D5]/90 dark:bg-[#4A5FFF] dark:hover:bg-[#4A5FFF]/90 text-white"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-[#3444D5]/20 dark:border-[#4A5FFF]/20 
                               hover:bg-[#3444D5]/10 dark:hover:bg-[#4A5FFF]/10 
                               text-[#3444D5] dark:text-[#4A5FFF]"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const benefits = [
  {
    icon: <Rocket className="w-12 h-12 text-[#3444D5] dark:text-[#4A5FFF]" />,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths for all team members."
  },
  {
    icon: <Globe className="w-12 h-12 text-[#3444D5] dark:text-[#4A5FFF]" />,
    title: "Remote First",
    description: "Work from anywhere with our distributed team across the globe."
  },
  {
    icon: <Heart className="w-12 h-12 text-[#3444D5] dark:text-[#4A5FFF]" />,
    title: "Work-Life Balance",
    description: "Flexible hours and unlimited PTO to maintain a healthy lifestyle."
  }
];

const positions = [
  {
    title: "Senior Marketing Manager",
    department: "Marketing",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Lead strategic marketing initiatives and drive growth for our clients in the Web3 and crypto space.",
  },
  {
    title: "Web3 Developer",
    department: "Technology",
    location: "Tel Aviv / Remote",
    type: "Full-time",
    description: "Build innovative blockchain solutions and contribute to cutting-edge Web3 projects.",
  },
  {
    title: "Content Strategist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content strategies and manage content production for global brands.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Design beautiful and intuitive interfaces for Web3 and blockchain applications.",
  },
];

const process = [
  {
    title: "Apply",
    description: "Submit your application with your CV and portfolio",
  },
  {
    title: "Review",
    description: "Our team will review your application within 3 days",
  },
  {
    title: "Interview",
    description: "Meet with our team to discuss your experience and goals",
  },
  {
    title: "Welcome",
    description: "Join our team and start your journey with us",
  },
];