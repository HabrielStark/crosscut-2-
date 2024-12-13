import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, X } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: {
    main: string;
    risk: string;
    regulation: string;
  };
  category: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="w-full min-h-screen dark:bg-[#000531] bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-[#0A0320] dark:text-white">
            Blog & Insights
          </h1>
          <p className="text-xl text-[#0A0320]/70 dark:text-white/70 mb-12">
            Stay updated with the latest trends and insights in technology and digital transformation
          </p>

          {/* Categories */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full relative group transition-all duration-300
                  ${selectedCategory === category 
                    ? 'text-white' 
                    : 'text-[#0A0320] dark:text-white hover:text-[#3444D5] dark:hover:text-[#4A5FFF]'}`}
                >
                <div className={`absolute inset-0 rounded-full transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-gradient-to-r from-[#3444D5] to-[#FE5431] opacity-100' 
                    : 'bg-white dark:bg-[#000531]/50 group-hover:bg-[#3444D5]/10 dark:group-hover:bg-[#4A5FFF]/20 opacity-90'}`} 
                />
                <span className="relative">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Featured Post Card */}
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5] to-[#FE5431] rounded-2xl 
                          blur-xl opacity-20 group-hover:opacity-30 dark:opacity-30 dark:group-hover:opacity-40 
                          transition-all duration-300" />
            <div className="relative glass-card overflow-hidden rounded-2xl p-8 
                          border border-[#3444D5]/20 dark:border-[#4A5FFF]/20
                          backdrop-blur-xl bg-white/30 dark:bg-[#000531]/30 
                          hover:border-[#3444D5]/40 dark:hover:border-[#4A5FFF]/40
                          cursor-pointer transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3444D5] to-[#FE5431]" />
              
              <span className="inline-block text-sm font-semibold px-4 py-1 rounded-full 
                             bg-[#3444D5]/10 dark:bg-[#4A5FFF]/20 
                             text-[#3444D5] dark:text-[#4A5FFF] mb-4">
                Featured Post
              </span>
              
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r 
                           from-[#3444D5] to-[#FE5431] cursor-pointer transform 
                           hover:scale-[1.01] transition-transform duration-300">
                {blogPosts[0].title}
              </h2>

              <p className="text-lg text-[#0A0320]/70 dark:text-white/70 mb-6 line-clamp-2">
                {blogPosts[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative group/avatar">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3444D5] to-[#FE5431] rounded-full blur opacity-50 
                                  group-hover/avatar:opacity-75 transition-opacity" />
                    <img 
                      src={blogPosts[0].author.avatar}
                      alt={blogPosts[0].author.name}
                      className="relative w-12 h-12 rounded-full ring-2 ring-[#3444D5]/20 dark:ring-[#4A5FFF]/20"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-[#0A0320] dark:text-white">
                      {blogPosts[0].author.name}
                    </div>
                    <div className="text-sm text-[#0A0320]/60 dark:text-white/60">
                      {blogPosts[0].date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-[#0A0320]/60 dark:text-white/60">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].readTime} read</span>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#3444D5] to-[#FE5431] text-white 
                             hover:opacity-90 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={e => e.stopPropagation()}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-[#000531] dark:to-[#0A0320] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#3444D5] opacity-20 dark:opacity-30 blur-[100px]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#FE5431] opacity-20 dark:opacity-30 blur-[100px]" />
                </div>

                {/* Content Container */}
                <div className="relative">
                  {/* Header */}
                  <div className="relative p-8 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#3444D5]/10 dark:bg-white/10 text-[#3444D5] dark:text-white">
                        {blogPosts[0].category}
                      </span>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-white/60 dark:hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <h2 className="text-4xl font-bold text-[#0A0320] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-white/60">
                      {blogPosts[0].title}
                    </h2>
                  </div>

                  {/* Main Content */}
                  <div className="p-8">
                    <div className="space-y-12">
                      {/* Introduction */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3444D5] to-transparent" />
                        <p className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                          {blogPosts[0].content.main}
                        </p>
                      </div>

                      {/* Risk Section */}
                      <div className="relative bg-[#3444D5]/5 dark:bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-[#3444D5]/10 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-[#3444D5] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#3444D5] dark:to-[#FE5431]">
                          Memecoin Risk and Volatility:
                        </h3>
                        <p className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                          {blogPosts[0].content.risk}
                        </p>
                      </div>

                      {/* Regulation Section */}
                      <div className="relative bg-[#3444D5]/5 dark:bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-[#3444D5]/10 dark:border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-[#3444D5] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#3444D5] dark:to-[#FE5431]">
                          Regulation of Memecoins:
                        </h3>
                        <p className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                          {blogPosts[0].content.regulation}
                        </p>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#3444D5] to-[#FE5431] rounded-full blur-sm opacity-50 dark:opacity-75" />
                          <img
                            src={blogPosts[0].author.avatar}
                            alt={blogPosts[0].author.name}
                            className="relative w-12 h-12 rounded-full ring-2 ring-[#3444D5]/20 dark:ring-white/20"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-[#0A0320] dark:text-white">
                            {blogPosts[0].author.name}
                          </div>
                          <div className="text-sm text-[#0A0320]/60 dark:text-white/60">
                            {blogPosts[0].date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const categories = ["All", "Web3", "Marketing", "Technology", "Blockchain", "Cryptocurrency", "Design", "Development"];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What is a Memecoin?",
    excerpt: "Memecoins are cryptocurrencies that originated from internet memes or have gained popularity through social media and online communities. Unlike traditional cryptocurrencies, memecoins often start as jokes but can gain significant value through community engagement and viral marketing.",
    content: {
      main: "Memecoins are cryptocurrencies often inspired by internet memes or trends. They are typically characterized by their volatile nature. Despite their inherent risk, memecoins have gained visibility due to the possibility of high returns and their role in digital culture.",
      risk: "Memecoins are considered risky and volatile trading assets. On other occasions, they might only be meant as a joke but somehow gain followers and individuals interested in the token. If you find distinguishing between memecoins, scams, and cryptocurrency confusing, you're not alone. It's critical to understand the risks to help you avoid unexpected volatility and losses.",
      regulation: "Some countries have taken steps to regulate memecoins. This highlights the importance of understanding the regulatory landscape of memecoins in your respective country before engaging in any trading activities."
    },
    category: "Cryptocurrency",
    date: "September 14, 2024",
    image: "/blog/memecoin.png",
    author: {
      name: "Crosscult Team",
      avatar: "/logocrosscult.png"
    },
    readTime: "4 min"
  }
];