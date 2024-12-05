import { Calendar, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"
import { blogPosts } from "../page"

// Helper function to create URL-friendly slugs (same as in blog/page.tsx)
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
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

export default function BlogPost() {
  const { slug } = useParams();
  
  // Find the blog post that matches the slug
  const post = blogPosts.find(post => createSlug(post.title) === slug)

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0A0320] dark:text-white mb-4">
              Post Not Found
            </h1>
            <Link to="/blog">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-[#3444D5]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3444D5] z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-24 h-24 rounded-full bg-white/10" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-white text-[#3444D5]">
                {post.category}
              </span>
              <div className="text-sm text-white/80">
                {post.readTime} read
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#3444D5] mb-6">TABLE OF CONTENT</h2>
            <nav className="space-y-2">
              {post.content.sections.map((section, index) => (
                <a 
                  key={index}
                  href={`#${createSlug(section.title)}`} 
                  className="block text-[#0A0320]/80 dark:text-white/80 hover:text-[#3444D5]"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-xl text-[#0A0320]/80 dark:text-white/80 leading-relaxed mb-12">
              {post.content.introduction}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <section key={index} id={createSlug(section.title)}>
                <h2 className="text-3xl font-bold text-[#0A0320] dark:text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed mb-12">
                  {section.content}
                </p>
              </section>
            ))}
          </article>

          {/* Newsletter Subscription */}
          <div className="mt-16 p-8 bg-white/50 dark:bg-[#0A0320]/50 rounded-xl border border-[#3444D5]/20">
            <h3 className="text-xl font-bold text-[#0A0320] dark:text-white mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-[#3444D5]/20 focus:outline-none focus:ring-2 focus:ring-[#3444D5]"
              />
              <Button className="bg-[#3444D5] text-white hover:bg-[#3444D5]/90">
                SUBMIT FORM
              </Button>
            </div>
            <p className="mt-2 text-sm text-[#0A0320]/60 dark:text-white/60">
              Read about our <Link to="/privacy" className="text-[#3444D5]">privacy policy</Link>.
            </p>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" className="bg-gradient-to-r from-[#3444D5] to-[#FE5431] text-white border-none">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 