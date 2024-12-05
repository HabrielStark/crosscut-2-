import { PageLayout } from "@/components/page-layout"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Heart, Share2, Bookmark, Search, ArrowRight, Tag, Eye, MessageCircle, X } from "lucide-react"
import { useState, useRef, Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, Environment, Text } from '@react-three/drei'
import { BlogParticles } from "@/components/three/BlogParticles"
import { FloatingText } from "@/components/three/FloatingText"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  image?: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  tags: string[];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <PageLayout
      title=""
      subtitle=""
    >
      <div className="w-full dark:bg-[#000531] bg-white">
        {/* Hero Section */}
        <div className="relative h-[80vh] flex items-center justify-center overflow-hidden dark:bg-[#000531]">
          <motion.div 
            className="absolute inset-0 -z-10"
            style={{ y, opacity }}
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Environment preset={theme === 'dark' ? 'night' : 'city'} />
              <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
              <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 1.5} />
              
              <Suspense fallback={null}>
                <BlogParticles 
                  count={1000}
                  size={0.015}
                  spread={25}
                  color={theme === 'dark' ? '#4A5FFF' : '#3444D5'}
                  opacity={theme === 'dark' ? 0.6 : 0.4}
                />
                <Float 
                  speed={2} 
                  rotationIntensity={0.5} 
                  floatIntensity={1}
                >
                  <FloatingText 
                    text={selectedCategory}
                    scale={0.5}
                    color={theme === 'dark' ? '#4A5FFF' : '#3444D5'}
                    emissiveIntensity={theme === 'dark' ? 0.8 : 0.6}
                  />
                </Float>
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Title and Subtitle */}
          <div className="text-center mb-12 relative z-10">
            <h1 className="text-6xl font-bold mb-4 text-[#0A0320] dark:text-white">
              Blog & Insights
            </h1>
            <p className="text-xl text-[#0A0320]/70 dark:text-white/70">
              Stay updated with the latest trends and insights in technology and digital transformation
            </p>
          </div>

          {/* Search and Featured Post */}
          <motion.div 
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3444D5] to-[#FE5431] rounded-lg blur opacity-25 
                              group-hover:opacity-50 dark:opacity-40 dark:group-hover:opacity-60 transition-all duration-300" />
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3444D5] dark:text-[#4A5FFF]" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-12 py-6 bg-white/90 dark:bg-[#000531]/90 backdrop-blur-lg 
                             border-[#3444D5]/20 dark:border-[#4A5FFF]/20 rounded-lg
                             focus:ring-2 focus:ring-[#3444D5] dark:focus:ring-[#4A5FFF] 
                             placeholder:text-[#0A0320]/50 dark:placeholder:text-white/50
                             text-[#0A0320] dark:text-white
                             transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Featured Post Card */}
            <div className="max-w-4xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3444D5] to-[#FE5431] rounded-2xl 
                            blur-xl opacity-20 group-hover:opacity-30 dark:opacity-30 dark:group-hover:opacity-40 
                            transition-all duration-300" />
              <div className="relative glass-card overflow-hidden rounded-2xl p-8 
                            border border-[#3444D5]/20 dark:border-[#4A5FFF]/20
                            backdrop-blur-xl bg-white/30 dark:bg-[#000531]/30 
                            hover:border-[#3444D5]/40 dark:hover:border-[#4A5FFF]/40
                            cursor-pointer transition-all duration-300"
                   onClick={() => setSelectedPost(blogPosts[0])}>
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
                    <Button 
                      variant="outline"
                      className="bg-gradient-to-r from-[#3444D5] to-[#FE5431] text-white border-none
                               hover:opacity-90 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPost(blogPosts[0]);
                      }}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories Section */}
        <div className="bg-gradient-to-r from-[#3444D5]/5 to-[#FE5431]/5 
                      dark:from-[#000531] dark:to-[#000531] dark:bg-[#000531] py-12 
                      transition-colors duration-300">
          <div className="container mx-auto px-4">
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
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-4 py-20 dark:bg-[#000531]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
            {blogPosts
              .filter(post => selectedCategory === "All" || post.category === selectedCategory)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative rounded-2xl overflow-hidden 
                                bg-white dark:bg-[#000531] 
                                border border-[#3444D5]/20 dark:border-[#4A5FFF]/20
                                hover:border-[#3444D5]/40 dark:hover:border-[#4A5FFF]/40 
                                transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                      <img 
                        src={post.image || '/blog-placeholder.jpg'} 
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1 rounded-full text-sm font-medium 
                                     bg-white/90 dark:bg-[#000531]/90 
                                     text-[#3444D5] dark:text-[#4A5FFF]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 
                                                 text-xs text-[#0A0320]/60 dark:text-white/60">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-[#0A0320] dark:text-white 
                                   group-hover:text-[#3444D5] dark:group-hover:text-[#4A5FFF] 
                                   transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#0A0320]/70 dark:text-white/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author and Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full ring-2 ring-[#3444D5]/20 dark:ring-[#4A5FFF]/20"
                          />
                          <div className="text-sm">
                            <div className="font-medium text-[#0A0320] dark:text-white">
                              {post.author.name}
                            </div>
                            <div className="text-[#0A0320]/60 dark:text-white/60">
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center justify-between mt-4 pt-4 
                                    border-t border-[#3444D5]/10 dark:border-[#4A5FFF]/10">
                        <div className="flex items-center gap-4 text-sm text-[#0A0320]/60 dark:text-white/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.readTime} read
                          </span>
                        </div>
                        <Button 
                          variant="ghost"
                          size="sm"
                          className="text-[#3444D5] dark:text-[#4A5FFF] 
                                   hover:text-[#FE5431] transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                       flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-white dark:bg-[#000531] rounded-2xl 
                         max-w-4xl w-full max-h-[90vh] overflow-y-auto
                         shadow-xl dark:shadow-[#4A5FFF]/10"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-[200px] flex items-center justify-center 
                             bg-[#3444D5] dark:bg-[#4A5FFF] p-8">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b 
                                 from-transparent to-[#3444D5] dark:to-[#4A5FFF] z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-4 opacity-20">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="w-16 h-16 rounded-full 
                                              bg-white/10 dark:bg-white/20" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="px-4 py-1 rounded-full text-sm font-medium bg-white text-[#3444D5]">
                        {selectedPost.category}
                      </span>
                      <span className="text-sm text-white/80">
                        {selectedPost.readTime} read
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedPost.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed mb-8">
                      {selectedPost.excerpt}
                    </p>

                    {selectedPost.content && (
                      <div className="space-y-8">
                        {selectedPost.content.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Author and Meta */}
                  <div className="mt-8 pt-8 border-t border-[#3444D5]/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={selectedPost.author.avatar}
                          alt={selectedPost.author.name}
                          className="w-12 h-12 rounded-full ring-2 ring-[#3444D5]/20"
                        />
                        <div>
                          <div className="font-medium text-[#0A0320] dark:text-white">
                            {selectedPost.author.name}
                          </div>
                          <div className="text-sm text-[#0A0320]/60 dark:text-white/60">
                            {selectedPost.date}
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
    </PageLayout>
  )
}

const categories = ["All", "Web3", "Marketing", "Technology", "Blockchain", "Cryptocurrency", "Design", "Development"];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What is a Memecoin?",
    excerpt: "Memecoins are cryptocurrencies that originated from internet memes or have gained popularity through social media and online communities. Unlike traditional cryptocurrencies, memecoins often start as jokes but can gain significant value through community engagement and viral marketing.",
    content: `Memecoins are cryptocurrencies often inspired by internet memes or trends. They are typically characterized by their volatile nature. Despite their inherent risk, memecoins have gained visibility due to the possibility of high returns and their role in digital culture.

Memecoins are considered risky and volatile trading assets. On other occasions, they might only be meant as a joke but somehow gain followers and individuals interested in the token. If you find distinguishing between memecoins, scams, and cryptocurrency confusing, you're not alone. It's critical to understand the risks to help you avoid unexpected volatility and losses.

Some countries have taken steps to regulate memecoins. This highlights the importance of understanding the regulatory landscape of memecoins in your respective country before engaging in any trading activities.`,
    category: "Cryptocurrency",
    date: "September 14, 2024",
    image: "/blog/memecoin.jpg",
    author: {
      name: "Crosscult Team",
      avatar: "/author-avatar-crosscult.jpg"
    },
    readTime: "4 min",
    tags: ["Cryptocurrency", "Blockchain", "Memecoins", "Web3"]
  },
  {
    id: 2,
    title: "The Future of Web3 Development: Trends and Innovations",
    excerpt: "Exploring the latest trends and technologies in Web3 development. Discover how blockchain is revolutionizing the digital landscape.",
    content: `Web3 development is revolutionizing the way we think about the internet and digital interactions. This new paradigm brings decentralization, transparency, and user empowerment to the forefront of technological innovation.

The integration of blockchain technology, smart contracts, and decentralized applications (dApps) is creating new possibilities for businesses and users alike. These innovations are not just technical improvements but represent a fundamental shift in how we approach digital ownership and interaction.

As we look to the future, the potential applications of Web3 technology continue to expand, from decentralized finance (DeFi) to gaming, social media, and beyond. Understanding these trends is crucial for staying ahead in the rapidly evolving digital landscape.`,
    category: "Web3",
    date: "March 15, 2024",
    image: "/blog/web3-future.jpg",
    author: {
      name: "John Doe",
      avatar: "/author-avatar.jpg"
    },
    readTime: "5 min",
    tags: ["Blockchain", "DeFi", "Smart Contracts"]
  },
  {
    id: 3,
    title: "Mastering Digital Marketing in 2024",
    excerpt: "Learn the essential strategies and tools for successful digital marketing campaigns in the modern era.",
    content: `Digital marketing continues to evolve at a rapid pace, with new technologies and platforms emerging regularly. Success in this field requires a deep understanding of both traditional marketing principles and cutting-edge digital tools.

Social media platforms remain at the forefront of digital marketing, but the strategies for engaging audiences have become more sophisticated. Content creation, influencer partnerships, and data-driven decision-making are now essential components of any successful marketing campaign.

The rise of AI and machine learning tools has also transformed how we approach digital marketing, enabling more personalized and efficient campaigns while providing deeper insights into consumer behavior.`,
    category: "Marketing",
    date: "March 14, 2024",
    image: "/blog/marketing-trends.jpg",
    author: {
      name: "Jane Smith",
      avatar: "/author-avatar-2.jpg"
    },
    readTime: "7 min",
    tags: ["SEO", "Social Media", "Analytics"]
  }
];