import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Lock, FileText, Calendar, Send, Building, Phone, User2 } from 'lucide-react'
import { PageLayout } from "@/components/page-layout"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Particles } from "@/components/three/Particles"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <PageLayout 
      title="Start Your Journey with Us"
      subtitle="Our account manager will get in touch with you within 1 day."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.form 
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-xl p-8
                     bg-white/50 dark:bg-[#000531]/50 backdrop-blur-sm
                     border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                     hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20
                     transition-all duration-300 space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 rounded-full" />

            <div className="relative space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0A0320] dark:text-white">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="Please enter your full name" 
                    required 
                    className="pl-10 bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                             text-[#0A0320] dark:text-white placeholder:text-[#0A0320]/50 dark:placeholder:text-white/50"
                  />
                  <User2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3444D5] dark:text-[#4A5FFF]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0A0320] dark:text-white">Email Address</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Please enter your email address" 
                    required 
                    className="pl-10 bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                             text-[#0A0320] dark:text-white placeholder:text-[#0A0320]/50 dark:placeholder:text-white/50"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3444D5] dark:text-[#4A5FFF]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0A0320] dark:text-white">Phone Number</label>
                <div className="relative">
                  <Input 
                    placeholder="Please enter your phone number"
                    className="pl-10 bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                             text-[#0A0320] dark:text-white placeholder:text-[#0A0320]/50 dark:placeholder:text-white/50"
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3444D5] dark:text-[#4A5FFF]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0A0320] dark:text-white">Message</label>
                <div className="relative">
                  <Textarea 
                    placeholder="Please provide a brief description of your request" 
                    className="min-h-[120px] pl-10 bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                             text-[#0A0320] dark:text-white placeholder:text-[#0A0320]/50 dark:placeholder:text-white/50"
                    required
                  />
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-[#3444D5] dark:text-[#4A5FFF]" />
                </div>
              </div>

              <Button 
                className="w-full bg-[#3444D5] hover:bg-[#3444D5]/90 dark:bg-[#4A5FFF] dark:hover:bg-[#4A5FFF]/90 
                         text-white font-medium py-2.5
                         transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.form>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl p-6
                         bg-white/50 dark:bg-[#000531]/50 backdrop-blur-sm
                         border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                         hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20
                         group transition-all duration-300"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5 rounded-full 
                              group-hover:scale-150 transition-all duration-500" />
                
                <div className="relative flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 
                               flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#3444D5] dark:text-[#4A5FFF] mb-1">{info.title}</h3>
                    <p className="text-[#0A0320] dark:text-white">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Locations */}
            {contactLocations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + contactInfo.length) * 0.1 }}
                className="relative overflow-hidden rounded-xl p-6
                         bg-white/50 dark:bg-[#000531]/50 backdrop-blur-sm
                         border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                         hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20
                         group transition-all duration-300"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5 rounded-full 
                              group-hover:scale-150 transition-all duration-500" />
                
                <div className="relative flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10 
                               flex items-center justify-center">
                    <Building className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#3444D5] dark:text-[#4A5FFF] mb-1">{location.city}</h3>
                    <p className="text-[#0A0320] dark:text-white">{location.address}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl p-6 text-center
                       bg-white/50 dark:bg-[#000531]/50 backdrop-blur-sm
                       border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                       hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20
                       group transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5 rounded-full 
                            group-hover:scale-150 transition-all duration-500" />
              
              <div className="relative">
                <div className="inline-flex p-4 mb-4 rounded-xl
                             bg-[#3444D5]/10 dark:bg-[#4A5FFF]/10
                             text-[#3444D5] dark:text-[#4A5FFF]
                             group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="font-medium text-[#3444D5] dark:text-[#4A5FFF] mb-2">{step.title}</h3>
                <p className="text-sm text-[#0A0320] dark:text-white">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
    </PageLayout>
  )
}

const contactInfo = [
  {
    title: "Email",
    content: "crosscult@crosscult.agency",
    icon: <Mail className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />
  }
];

const processSteps = [
  {
    title: "Initial Contact",
    description: "Our account manager will get in touch with you within 1 day.",
    icon: <Mail className="w-6 h-6" />
  },
  {
    title: "NDA Signing",
    description: "We sign an NDA with all clients before diving into any project details. Your privacy is our high priority.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Requirements",
    description: "After we get all the information we need, we make a proposal according to your requirements.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Proposal",
    description: "Within 7 days, you will receive a comprehensive proposal with clear timelines and a team setup.",
    icon: <Calendar className="w-6 h-6" />
  }
];

const contactLocations = [
  {
    city: "Kyiv",
    address: "Yaroslavska St, 58, Kyiv, 04071, 7th Floor",
  },
  {
    city: "Tel Aviv",
    address: "Dizengoff Square 1, Tel Aviv-Yafo, Israel",
  }
];