import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"
import { 
  Target, 
  TrendingUp, 
  Globe2, 
  Palette,
  CheckCircle
} from 'lucide-react'

export default function Services() {
  return (
    <PageLayout
      title="Ready to Realize Your Wildest Ideas and Goals"
      subtitle="We use only Innovative Technologies and a Customized Approach for each client."
    >
      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 dark:bg-[#0A0320]/50 rounded-xl p-8 border border-[#3444D5]/10 dark:border-[#4A5FFF]/10 hover:border-[#3444D5]/20 dark:hover:border-[#4A5FFF]/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#3444D5] dark:text-[#4A5FFF]">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#3444D5] dark:text-[#4A5FFF] shrink-0 mt-0.5" />
                      <span className="text-[#0A0320]/80 dark:text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-[#3444D5]/5 via-[#3444D5]/10 to-[#3444D5]/5 dark:from-[#000531] dark:via-[#000531]/90 dark:to-[#000531]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3444D5] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#3444D5] dark:bg-[#4A5FFF] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-12 h-12 flex items-center justify-center bg-white dark:bg-[#000531] rounded-full border-2 border-[#3444D5] dark:border-[#4A5FFF]">
                    <span className="text-xl font-bold text-[#3444D5] dark:text-[#4A5FFF]">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <p className="text-xl text-[#0A0320] dark:text-white group-hover:text-[#3444D5] dark:group-hover:text-[#4A5FFF] transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const services = [
  {
    title: "Strategy",
    icon: <Target className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />,
    items: [
      "Go-to-market",
      "Token launch",
      "Scaling PMF",
      "Roadmap development",
      "Communication strategy"
    ]
  },
  {
    title: "Growth",
    icon: <TrendingUp className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />,
    items: [
      "Social media management",
      "Content writing",
      "AMA session providing",
      "Podcast content & promotion",
      "Campaigns",
      "Crypto ads network",
      "Email marketing",
      "Crowd marketing (shilling)"
    ]
  },
  {
    title: "Traffic Sources",
    icon: <Globe2 className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />,
    items: [
      "SEO & SAO",
      "PPC",
      "KOLs (worldwide)",
      "Influence marketing",
      "Ambassador program building",
      "Web3 influencers collaborations"
    ]
  },
  {
    title: "Design",
    icon: <Palette className="w-6 h-6 text-[#3444D5] dark:text-[#4A5FFF]" />,
    items: [
      "Branding",
      "Rebranding",
      "Animations & 3D motion",
      "Metaverse & Avatars",
      "X-reality",
      "CGI production"
    ]
  }
];

const whyChooseUs = [
  {
    text: "Custom approach to work"
  },
  {
    text: "Focus on the result"
  },
  {
    text: "Multifunctional and innovative approach"
  },
  {
    text: "Expertise from leading specialists"
  },
  {
    text: "Creative approach to problem-solving"
  },
  {
    text: "A wide number of services"
  },
  {
    text: "Confidence and peace of mind for all marketing activities in your business"
  }
];