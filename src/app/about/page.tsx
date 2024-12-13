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

          {/* Top Row - Leadership */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <TeamMember
              name="Luiza Shapiro"
              role="CEO"
              image="/Luiza.webp"
            />
            <TeamMember
              name="Maryna Balatska"
              role="CTO"
              image="/CTO.jpg"
            />
            <TeamMember
              name="Iryna Shaitan"
              role="COO"
              image="/COO.webp"
            />
            <TeamMember
              name="Helena Anokhina"
              role="CCO"
              image="/CCO.jpg"
            />
          </div>

          {/* Bottom Row - Team */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMember
              name="Vadim Vladimirov"
              role="Head of SEO"
              image="/HeadofCEO.webp"
            />
            <TeamMember
              name="Polina Khlebnikova"
              role="HR Manager"
              image="/HR Manager.webp"
            />
            <TeamMember
              name="Anna Koretska"
              role="Account Manager"
              image="/Accountmanager.webp"
            />
          </div>
        </div>
      </section>

      {/* Team Photos Section 1 */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {/* First row */}
            <motion.div
              className="col-span-12 md:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto1.webp"
                alt="Team photo 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto2.webp"
                alt="Team photo 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Second row */}
            <motion.div
              className="col-span-12 md:col-span-4 relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto3.webp"
                alt="Team photo 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-4 relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto4.webp"
                alt="Team photo 4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-4 relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto5.webp"
                alt="Team photo 5"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
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

      {/* Team Photos Section 2 */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {/* First row */}
            <motion.div
              className="col-span-12 md:col-span-8 relative aspect-video rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto6.webp"
                alt="Team photo 6"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-4 relative aspect-[3/4] rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto7.webp"
                alt="Team photo 7"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Second row */}
            <motion.div
              className="col-span-6 md:col-span-4 relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto8.webp"
                alt="Team photo 8"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-6 md:col-span-4 relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto9.webp"
                alt="Team photo 9"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-4 relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto10.webp"
                alt="Team photo 10"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Last row */}
            <motion.div
              className="col-span-12 md:col-span-6 relative aspect-video rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto11.webp"
                alt="Team photo 11"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 relative aspect-video rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/teamphotos/teamphoto12.webp"
                alt="Team photo 12"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-[#0A0320] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3444D5] dark:text-[#3444D5]">Our Partners</span>
          </motion.h2>

          {/* Top Row - 4 partners */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Google Marketing Platform
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Meta Business
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Google Partner
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Ethereum
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - 3 partners */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Solana
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Near
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white/80 dark:bg-[#0A0320]/80 backdrop-blur-sm p-6 rounded-xl border border-[#3444D5]/10 dark:border-[#3444D5]/20 hover:border-[#3444D5]/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-xl font-bold text-[#3444D5] dark:text-white group-hover:scale-105 transition-transform duration-300">
                    Polygon
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}