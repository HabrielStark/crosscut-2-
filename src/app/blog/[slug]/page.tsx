import { Calendar, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Link, useParams } from "react-router-dom"

// Helper function to create URL-friendly slugs
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
  content?: {
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

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What is a Memecoin?",
    excerpt: "Memecoins are cryptocurrencies that originated from internet memes or have gained popularity through social media and online communities. Unlike traditional cryptocurrencies, memecoins often start as jokes but can gain significant value through community engagement and viral marketing. Let's explore what makes them unique and what risks they carry.",
    content: {
      introduction: "Memecoins are cryptocurrencies that have gained significant attention in the digital asset space. These tokens, often created as jokes or inspired by internet memes, have become a notable phenomenon in the cryptocurrency market. While some view them skeptically, others see them as a reflection of the evolving nature of digital value and community-driven assets.",
      sections: [
        {
          title: "Origin and Evolution",
          content: "The concept of memecoins emerged with Dogecoin in 2013, created as a lighthearted alternative to traditional cryptocurrencies. What started as a joke based on the popular 'Doge' meme has since inspired numerous similar projects. The success of Dogecoin demonstrated that community engagement and social media presence could drive significant value in the cryptocurrency market."
        },
        {
          title: "How Do Memecoins Work?",
          content: "Technically, memecoins operate similarly to other cryptocurrencies, using blockchain technology to record transactions and maintain security. However, their value proposition differs significantly. Unlike Bitcoin or Ethereum, which emphasize technological innovation and practical utility, memecoins derive their value primarily from community sentiment, social media trends, and speculative interest."
        },
        {
          title: "The Role of Community",
          content: "The success of a memecoin heavily depends on its community. Strong communities can drive adoption, create utility, and maintain interest in the token. Social media platforms, particularly Twitter and Reddit, play crucial roles in building and maintaining these communities. The viral nature of memes combined with active community engagement can rapidly increase a memecoin's visibility and perceived value."
        },
        {
          title: "Risks and Considerations",
          content: "While memecoins can offer significant returns, they come with substantial risks. Their value is highly volatile and often based more on social sentiment than fundamental utility. Many memecoins lack strong development teams, clear use cases, or long-term sustainability plans. Additionally, the market is vulnerable to manipulation through pump-and-dump schemes and celebrity endorsements."
        },
        {
          title: "Market Impact",
          content: "Despite their controversial nature, memecoins have significantly impacted the cryptocurrency ecosystem. They have attracted new investors to the space, demonstrated the power of community-driven value creation, and challenged traditional notions of asset valuation. Some memecoins have achieved remarkable market capitalizations, though their sustainability remains debated."
        },
        {
          title: "Future Outlook",
          content: "The future of memecoins remains uncertain. While some may establish lasting presence and utility, others will likely fade away. The phenomenon has highlighted important questions about value creation in the digital age and the role of community in financial markets. Regulatory scrutiny and market maturation may also influence their evolution."
        },
        {
          title: "Investment Considerations",
          content: "For those considering memecoin investments, thorough research and caution are essential. Understanding the project's community, development team, and potential utility is crucial. Never invest more than you can afford to lose, and be prepared for extreme price volatility. Consider memecoins as high-risk speculative investments rather than stable long-term holdings."
        }
      ]
    },
    category: "Cryptocurrency",
    date: "March 14, 2024",
    image: "/blog/memecoin.jpg",
    author: {
      name: "Crosscult Team",
      avatar: "/author-avatar-crosscult.jpg"
    },
    readTime: "4 min"
  }
];

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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium 
                         bg-[#3444D5]/10 dark:bg-[#4A5FFF]/20 
                         text-[#3444D5] dark:text-[#4A5FFF] mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl font-bold mb-6 text-[#0A0320] dark:text-white">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[#0A0320]/60 dark:text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime} read</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mb-12">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full ring-2 ring-[#3444D5]/20 dark:ring-[#4A5FFF]/20"
            />
            <div>
              <div className="font-medium text-[#0A0320] dark:text-white">
                {post.author.name}
              </div>
              <div className="text-sm text-[#0A0320]/60 dark:text-white/60">
                Author
              </div>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-xl text-[#0A0320]/80 dark:text-white/80 leading-relaxed mb-12">
              {post.content?.introduction}
            </p>

            {/* Sections */}
            {post.content?.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-[#0A0320] dark:text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-[#0A0320]/80 dark:text-white/80 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </article>

          {/* Back to Blog */}
          <div className="mt-16 text-center">
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