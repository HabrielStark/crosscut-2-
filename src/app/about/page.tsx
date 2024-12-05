import { motion } from "framer-motion"
import { TeamMember } from "@/components/team-member"
import { PageLayout } from "@/components/page-layout"

export default function About() {
  return (
    <PageLayout 
      title="Innovation, Technologies, Creativity"
      subtitle="Crosscult is your reliable partner on the road to success. Our main goal is your success."
    >
      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#0A0320] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3444D5] dark:text-[#3444D5]">Our Team</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-8 rounded-lg border border-[#0A0320]/10 dark:border-white/10 hover:border-[#0A0320]/20 dark:hover:border-white/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-[#3444D5] dark:text-[#3444D5]">Our Philosophy</span>
            </h2>
            <div className="space-y-4">
              <p className="text-[#0A0320]/80 dark:text-white/80">
                We value honesty and openness the most. Working with us, you will receive high-quality service, 
                because our team is made up of real professionals who are focused on results. Through our multicultural 
                approach to work, you will always get the best result.
              </p>
              <p className="text-[#0A0320]/80 dark:text-white/80">
                We are always focused on long-term relationships with our clients, where we do not just fulfill tasks, 
                but also take care of our client. Even after the end of cooperation, we always stay in touch. It is 
                important for us to provide the services you really need, not just sell our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#0A0320] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3444D5] dark:text-[#3444D5]">Our Partners</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-lg border border-[#0A0320]/10 dark:border-white/10 hover:border-[#0A0320]/20 dark:hover:border-white/20 transition-colors group">
                <div className="relative aspect-video flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#3444D5]/10 to-transparent flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-xl font-bold text-[#3444D5] dark:text-[#3444D5] text-center group-hover:text-[#FE5431] transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3444D5]/5 via-transparent to-[#3444D5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const teamMembers = [
  {
    name: "Luiza Shapiro",
    role: "CEO",
    image: "/Luiza.webp"
  },
  {
    name: "Maryna Balatska",
    role: "CTO",
    image: "/CTO.jpg"
  },
  {
    name: "Iryna Shaitan",
    role: "COO",
    image: "/COO.webp"
  },
  {
    name: "Helena Anokhina",
    role: "CCO",
    image: "/CCO.jpg"
  },
  {
    name: "Vadim Vladimirov",
    role: "Head of SEO",
    image: "/HeadofCEO.webp"
  },
  {
    name: "Polina Khlebnikova",
    role: "HR Manager",
    image: "/HR Manager.webp"
  },
  {
    name: "Anna Koretska",
    role: "Account Manager", 
    image: "/Accountmanager.webp"
  },
];

const partners = [
  {
    name: "Google Marketing Platform",
    logo: "/partners/google-marketing.svg"
  },
  {
    name: "Meta Business",
    logo: "/partners/meta.svg"
  },
  {
    name: "Google Partner",
    logo: "/partners/google-partner.svg"
  },
  {
    name: "Ethereum",
    logo: "/partners/ethereum.svg"
  },
  {
    name: "Solana",
    logo: "/partners/solana.svg"
  },
  {
    name: "Near",
    logo: "/partners/near.svg"
  },
  {
    name: "Polygon",
    logo: "/partners/polygon.svg"
  }
];