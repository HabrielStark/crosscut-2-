"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Zap, ArrowRight, MapPin, Clock, Briefcase, CheckCircle2, Loader2, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { sendApplicationEmail } from '@/lib/email';
import { Particles } from '@/components/three/Particles';
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Career() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, position: string) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      
      const applicationData = {
        position,
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        age: formData.get('age') as string,
        experience: formData.get('experience') as string,
        portfolio: formData.get('portfolio') as string,
        message: formData.get('message') as string,
      }

      await sendApplicationEmail(applicationData)
      
      // Show success animation
      setShowSuccess(true)
      
      // Show success toast
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "We'll review your application and get back to you within 7 days.",
        className: "bg-gradient-to-r from-[#3444D5] to-[#FE5431] text-white",
        duration: 5000,
      })

      // Reset form and close dialog after delay
      setTimeout(() => {
        e.currentTarget.reset()
        setShowSuccess(false)
        const closeButton = document.querySelector('[data-dialog-close]') as HTMLButtonElement
        if (closeButton) closeButton.click()
      }, 2000)

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Здесь будет API запрос к вашему бэкенду
      const response = await fetch('/api/career-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Subscription failed')

      setStatus('success')
      setMessage('Thank you for subscribing! We will notify you about new opportunities.')
      setTimeout(() => {
        setIsModalOpen(false)
        setStatus('idle')
        setEmail('')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900 relative overflow-hidden perspective-1000">
      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-conic from-[#4E67E5]/30 via-[#9F85FF]/30 to-[#4E67E5]/30 rounded-full blur-[80px] animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-conic from-[#9F85FF]/30 via-[#4E67E5]/30 to-[#9F85FF]/30 rounded-full blur-[80px] animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-[0.02] animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#4E67E5]/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24 lg:px-8">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-24 relative">
            {/* Decorative lines */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#4E67E5] to-transparent opacity-30" />
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[140px] h-[1px] bg-gradient-to-r from-transparent via-[#4E67E5] to-transparent opacity-30" />
            
            <h1 className="relative inline-block text-6xl sm:text-7xl font-bold tracking-tight mb-16">
              <span className="absolute -inset-2 bg-gradient-to-r from-[#4E67E5]/20 to-[#9F85FF]/20 blur-2xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative inline-block transform hover:scale-105 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-[#4E67E5] to-[#9F85FF] hover:from-[#9F85FF] hover:to-[#4E67E5]">
                Careers at CrossCult
              </span>
            </h1>
            
            <div className="relative max-w-3xl mx-auto perspective-1000">
              {/* Premium glass card with 3D effect */}
              <div className="relative group transform hover:rotate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4E67E5] to-[#9F85FF] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative backdrop-blur-2xl bg-white/90 dark:bg-gray-800/90 rounded-2xl p-10 shadow-[0_8px_32px_rgba(78,103,229,0.15)] border border-white/20 dark:border-gray-700/20 overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-8 leading-relaxed font-light">
                      We're thrilled that you're interested in joining our team! Currently, we don't have any open positions, but we're always on the lookout for talented individuals{' '}
                      <span className="relative inline-block">
                        <span className="absolute -inset-1 bg-gradient-to-r from-[#4E67E5]/20 to-[#9F85FF]/20 blur-sm" />
                        <span className="relative font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#4E67E5] to-[#9F85FF]">
                          LIKE YOU
                        </span>
                      </span>{' '}
                      who share our vision and values.
                    </p>
                    
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                      To stay in the loop, sign up for our Careers Newsletter. Be the first to know about any new opportunities that open up here at CrossCult. When a position becomes available, you'll receive a notification right in your inbox!
                    </p>

                    {/* Updated button to open modal */}
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="group relative inline-flex items-center justify-center perspective"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4E67E5] to-[#9F85FF] transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute inset-0 w-full h-full bg-[#4E67E5] transform -translate-x-1.5 -translate-y-1.5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                      <span className="absolute inset-0 w-full h-full border-2 border-[#4E67E5]" />
                      <span className="relative px-10 py-4 text-base font-medium text-[#4E67E5] transition-all duration-300 group-hover:text-white">
                        Subscribe to Careers Newsletter
                        <svg className="inline-block ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>

                    <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm font-light italic">
                      Thank you for considering a future with us – we're excited to possibly work together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced What we offer section */}
          <div className="mt-32 relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#4E67E5] to-transparent opacity-30" />
            
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              <span className="absolute -inset-4 bg-gradient-to-r from-[#4E67E5]/10 to-[#9F85FF]/10 blur-2xl transform scale-110" />
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#4E67E5] to-[#9F85FF]">
                What we offer
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Personal Growth",
                  description: "Personal development and professional growth opportunities",
                  icon: (
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                {
                  title: "Flexible Work",
                  description: "Flexible working hours and an opportunity to work remotely",
                  icon: (
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  title: "Diverse Projects",
                  description: "Challenging projects in diverse business domains and a variety of tech stacks",
                  icon: (
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} 
                  className="group relative perspective-1000"
                >
                  <div className="relative transform transition-all duration-500 hover:rotate-y-12 preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4E67E5] to-[#9F85FF] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transform group-hover:scale-105 transition-all duration-500" />
                    <div className="relative backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 rounded-xl p-8 
                      shadow-[0_8px_32px_rgba(78,103,229,0.15)] border border-white/20 dark:border-gray-700/20
                      transform transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="relative z-10">
                        <div className="mb-6 text-[#4E67E5] transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#3444D5] dark:text-[#4A5FFF]"
          >
            Why Join CrossCult?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl p-8 bg-white/50 dark:bg-[#000531]/50 backdrop-blur-sm
                          border border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                          hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20
                          group transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="text-4xl text-[#3444D5] dark:text-[#4A5FFF] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#3444D5] dark:text-[#4A5FFF] group-hover:translate-x-2 transition-transform duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0A0320] dark:text-white/90 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3444D5]/5 to-transparent rounded-full 
                              group-hover:scale-150 group-hover:rotate-45 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FE5431]/5 to-transparent rounded-full 
                              group-hover:scale-150 group-hover:-rotate-45 transition-all duration-500 delay-100" />
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
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3444D5]/20 to-[#FE5431]/20 dark:from-[#4A5FFF]/20 dark:to-[#FE5431]/20 
                                flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#3444D5] to-[#FE5431] bg-clip-text text-transparent">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#3444D5] dark:text-[#4A5FFF] group-hover:translate-y-[-5px] transition-transform duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#0A0320] dark:text-white/90 group-hover:translate-y-[-5px] transition-transform duration-300 delay-75">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#3444D5]/20 to-[#FE5431]/20 dark:from-[#4A5FFF]/20 dark:to-[#FE5431]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions with Modal */}
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
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3444D5]/10 to-[#FE5431]/10 
                                    dark:from-[#4A5FFF]/10 dark:to-[#FE5431]/10 flex items-center justify-center 
                                    group-hover:scale-110 transition-transform duration-500">
                        <Briefcase className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3444D5] dark:text-[#4A5FFF] group-hover:translate-x-2 transition-transform duration-500">
                        {position.title}
                      </h3>
                    </div>

                    <p className="text-[#0A0320] dark:text-white/90 mb-6 max-w-3xl group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                                   bg-gradient-to-r from-[#3444D5]/10 to-[#FE5431]/10 
                                   dark:from-[#4A5FFF]/10 dark:to-[#FE5431]/10
                                   text-[#3444D5] dark:text-[#4A5FFF]
                                   group-hover:scale-105 transition-transform duration-300">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                                   bg-gradient-to-r from-[#3444D5]/10 to-[#FE5431]/10 
                                   dark:from-[#4A5FFF]/10 dark:to-[#FE5431]/10
                                   text-[#3444D5] dark:text-[#4A5FFF]
                                   group-hover:scale-105 transition-transform duration-300 delay-75">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                                   bg-gradient-to-r from-[#3444D5]/10 to-[#FE5431]/10 
                                   dark:from-[#4A5FFF]/10 dark:to-[#FE5431]/10
                                   text-[#3444D5] dark:text-[#4A5FFF]
                                   group-hover:scale-105 transition-transform duration-300 delay-150">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-4 md:min-w-[140px]">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="flex-1 bg-gradient-to-r from-[#3444D5] to-[#FE5431] hover:opacity-90 text-white"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-[#000531] border border-[#3444D5]/10 dark:border-[#4A5FFF]/10">
                        {showSuccess ? (
                          <div className="flex flex-col items-center justify-center py-12">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", duration: 0.5 }}
                            >
                              <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
                            </motion.div>
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-2xl font-bold text-[#3444D5] dark:text-[#4A5FFF] mb-2"
                            >
                              Application Submitted!
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="text-[#0A0320]/70 dark:text-white/70 text-center"
                            >
                              We'll review your application and get back to you within 7 days.
                            </motion.p>
                          </div>
                        ) : (
                          <>
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-[#3444D5] dark:text-[#4A5FFF]">
                                Apply for {position.title}
                              </DialogTitle>
                              <DialogDescription className="text-[#0A0320]/70 dark:text-white/70">
                                Please fill out the form below. We'll review your application and get back to you within 7 days.
                              </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={(e) => handleSubmit(e, position.title)} className="space-y-6 mt-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name" className="text-[#0A0320] dark:text-white">Full Name</Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    required
                                    disabled={isSubmitting}
                                    className="bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                             text-[#0A0320] dark:text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email" className="text-[#0A0320] dark:text-white">Email</Label>
                                  <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    disabled={isSubmitting}
                                    className="bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                             text-[#0A0320] dark:text-white"
                                  />
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="phone" className="text-[#0A0320] dark:text-white">Phone Number</Label>
                                  <Input
                                    id="phone"
                                    name="phone"
                                    required
                                    disabled={isSubmitting}
                                    className="bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                             text-[#0A0320] dark:text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="age" className="text-[#0A0320] dark:text-white">Age</Label>
                                  <Input
                                    id="age"
                                    name="age"
                                    type="number"
                                    required
                                    disabled={isSubmitting}
                                    className="bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                             focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                             text-[#0A0320] dark:text-white"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="experience" className="text-[#0A0320] dark:text-white">Years of Experience</Label>
                                <Input
                                  id="experience"
                                  name="experience"
                                  required
                                  disabled={isSubmitting}
                                  className="bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                           focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                           text-[#0A0320] dark:text-white"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="portfolio" className="text-[#0A0320] dark:text-white">Portfolio/LinkedIn URL</Label>
                                <Input
                                  id="portfolio"
                                  name="portfolio"
                                  type="url"
                                  disabled={isSubmitting}
                                  className="bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                           focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                           text-[#0A0320] dark:text-white"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="message" className="text-[#0A0320] dark:text-white">Why do you want to join our team?</Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  required
                                  disabled={isSubmitting}
                                  className="min-h-[100px] bg-white/50 dark:bg-[#000531]/50 border-[#3444D5]/10 dark:border-[#4A5FFF]/10
                                           focus:border-[#3444D5] dark:focus:border-[#4A5FFF]
                                           text-[#0A0320] dark:text-white"
                                />
                              </div>

                              <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#3444D5] to-[#FE5431] hover:opacity-90 text-white"
                              >
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting...
                                  </>
                                ) : (
                                  'Submit Application'
                                )}
                              </Button>
                            </form>
                          </>
                        )}
                        <DialogClose data-dialog-close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline"
                          className="flex-1 border-[#3444D5]/20 dark:border-[#4A5FFF]/20 
                                   hover:bg-[#3444D5]/10 dark:hover:bg-[#4A5FFF]/10 
                                   text-[#3444D5] dark:text-[#4A5FFF]"
                        >
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-[#000531] border border-[#3444D5]/10 dark:border-[#4A5FFF]/10">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#3444D5] dark:text-[#4A5FFF]">
                            {position.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-[#0A0320] dark:text-white mb-2">About the Role</h4>
                            <p className="text-[#0A0320]/70 dark:text-white/70">{position.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A0320] dark:text-white mb-2">Requirements</h4>
                            <ul className="list-disc list-inside space-y-1 text-[#0A0320]/70 dark:text-white/70">
                              {position.requirements?.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A0320] dark:text-white mb-2">What We Offer</h4>
                            <ul className="list-disc list-inside space-y-1 text-[#0A0320]/70 dark:text-white/70">
                              <li>Competitive salary and benefits package</li>
                              <li>Remote-first work environment</li>
                              <li>Professional development opportunities</li>
                              <li>Health and wellness programs</li>
                              <li>Team building events and activities</li>
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#3444D5]/5 to-[#FE5431]/5 rounded-full blur-3xl
                              group-hover:scale-150 group-hover:rotate-45 transition-all duration-500" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#3444D5]/5 to-[#FE5431]/5 rounded-full blur-2xl
                              group-hover:scale-150 group-hover:-rotate-45 transition-all duration-500 delay-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              Subscribe to Career Updates
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Get notified about new career opportunities at CrossCult.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-[#4E67E5] dark:focus:border-[#4E67E5]"
              />
            </div>

            {message && (
              <p className={`text-sm ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {message}
              </p>
            )}

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-[#4E67E5] to-[#9F85FF] text-white hover:opacity-90 transition-opacity"
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </div>
                ) : 'Subscribe'}
              </Button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              By subscribing, you agree to receive career-related updates from CrossCult. 
              You can unsubscribe at any time.
            </p>
          </form>

          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-800 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </main>
  )
}

const benefits = [
  {
    icon: <Star className="w-12 h-12" />,
    title: "Growth Opportunities",
    description: "Accelerate your career with continuous learning, mentorship, and advancement opportunities in a dynamic environment."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Collaborative Culture",
    description: "Join a diverse, inclusive team where your voice matters and innovation is encouraged every day."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Work-Life Balance",
    description: "Enjoy flexible hours, remote work options, and comprehensive benefits that support your wellbeing."
  }
];

const positions = [
  {
    title: "Senior Marketing Manager",
    department: "Marketing",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Lead strategic marketing initiatives and drive growth for our clients in the Web3 and crypto space.",
    requirements: [
      "5+ years of marketing experience",
      "Strong understanding of Web3 and crypto",
      "Excellent communication skills",
      "Team management experience"
    ]
  },
  {
    title: "Web3 Developer",
    department: "Technology",
    location: "Tel Aviv / Remote",
    type: "Full-time",
    description: "Build innovative blockchain solutions and contribute to cutting-edge Web3 projects.",
    requirements: [
      "3+ years of Web3 development",
      "Smart contract experience",
      "DeFi protocol knowledge",
      "Strong TypeScript skills"
    ]
  },
  {
    title: "Content Strategist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content strategies and manage content production for global brands.",
    requirements: [
      "3+ years content strategy",
      "Web3 content experience",
      "SEO knowledge",
      "Editorial skills"
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Design beautiful and intuitive interfaces for Web3 and blockchain applications.",
    requirements: [
      "4+ years UI/UX design",
      "Web3 design experience",
      "Design system knowledge",
      "Figma expertise"
    ]
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