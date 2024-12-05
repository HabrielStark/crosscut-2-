import { 
  Blocks,
  Wallet,
  Building2,
  GraduationCap,
  Users,
  Gamepad,
  Radio,
  Building
} from "lucide-react";

export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  task: string | string[];
  challenges: string[];
  solution: string;
  results: string[];
  icon: any;
  images: string[];
}

export const caseStudiesData = {
  "bybit": {
    icon: Wallet,
    title: "Bybit",
    subtitle: "Cryptocurrency Exchange",
    description: "Bybit is a reliable cryptocurrency exchange, ranked among the top three CEX platforms by CoinMarketCap. Since 2018, it has served over 10 million users, offering more than 100 assets.",
    task: "Increase the number of users for Bybit's cryptocurrency exchange app.",
    challenges: [
      "Most users preferred using the browser version of the exchange",
      "Attracting users despite fierce competition",
      "Standing out in the overcrowded cryptocurrency market"
    ],
    solution: "After analyzing competitors, we realized the best way to promote the app was through the App Store. We focused on this approach.",
    results: [
      "17,500 new app users",
      "1.5 million total reach through SMM, PR, and KOLs",
      "Ranked in the TOP-3 free apps in the App Store"
    ],
    images: ["/bybit1.jpeg", "/bybit2.jpeg", "/bybit3.jpeg"]
  },
  "pwrteams": {
    icon: Building2,
    title: "PWRTEAMS",
    subtitle: "IT Service Company",
    description: "PWRTEAMS is a leader in building cross-border IT and engineering teams. Having created over 300 teams, they have achieved significant expertise.",
    task: "Create effective marketing funnels to attract potential clients and improve existing methods.",
    challenges: [
      "Most leads were generated through networking and events",
      "The website lacked marketing funnels for lead generation"
    ],
    solution: "We optimized the website, updated all CTAs, and improved the customer journey map (CJM).",
    results: [
      "55,400 total website visits",
      "Average session duration tripled to 1:40",
      "Lead conversion doubled to 34%"
    ],
    images: ["/PWRTEAMS1.jpeg", "/PWRTEAMS2.jpeg", "/PWRTEAMS3.jpeg"]
  },
  "mimo": {
    icon: GraduationCap,
    title: "Mimo",
    subtitle: "Educational IT Platform",
    description: "Mimo offers programming courses in Python, JavaScript, HTML, SQL, and other languages. Over 25 million students have started new careers using this platform.",
    task: "Increase the number of active users.",
    challenges: [
      "Many users became inactive after downloading the app",
      "This led to a high app uninstallation rate"
    ],
    solution: "We tailored marketing strategies for our target audience—teens aged 16 and above. Additionally, we redesigned the interface, which positively impacted conversion rates.",
    results: [
      "8% increase in conversion rates",
      "A threefold increase in paying users"
    ],
    images: ["/mimo1.jpeg", "/mimo2.jpeg", "/mimo3.jpeg"]
  },
  "crombie": {
    icon: Building,
    title: "Crombie",
    subtitle: "IT Service Company",
    description: "Crombie provides high-performance teams for IT companies specializing in developing user systems, software, and applications.",
    task: "Boost client interest in Crombie's services.",
    challenges: [
      "Growth in client numbers had stagnated",
      "The community was inactive and unresponsive"
    ],
    solution: "We started with a website redesign, project rebranding, and marketing strategy improvement. Our success lay in building a strong community, engaging them in initiatives, and achieving conversions.",
    results: [
      "An increase in the number of quality leads"
    ],
    images: []
  },
  "finch": {
    icon: Blocks,
    title: "FINCH Labs",
    subtitle: "Global Cryptocurrency and NFT Agency",
    description: "FINCH Labs is a global cryptocurrency and NFT agency focused on delivering innovative blockchain solutions.",
    task: "Improve FINCH's website to effectively convey value, reduce bounce rates, and increase engagement to improve lead generation.",
    challenges: [
      "An outdated website with a bounce rate of 90% and an average session duration of 20 seconds",
      "Lack of valuable content and clear case descriptions",
      "Poorly organized targeting campaigns and Google Ads"
    ],
    solution: "We developed expert content to attract clients via email, installed accelerators to improve site speed, and rewrote all site content. We integrated a magnetic system to boost user engagement. We also designed a funnel for ad campaigns targeting all engagement stages, tailored to users interested in FINCH services, and implemented it across Facebook, Instagram, and Google.",
    results: [
      "50% reduction in lead acquisition costs due to a structured funnel",
      "Average time on site increased to 3 minutes",
      "Increased inquiries",
      "Bounce rate decreased to 40%"
    ],
    images: ["/FINCHLABS1.jpeg", "/FINCHLABS2.jpeg", "/FINCHLABS3.jpeg"]
  },
  "raiinmaker": {
    icon: Users,
    title: "Raiinmaker",
    subtitle: "Web3 Platform",
    description: "Raiinmaker is a Web3 platform for the creator economy built on blockchain, combining smart contracts with marketing budgets and influencers. It fosters a symbiotic relationship between influencers and audiences, enabling direct audience interaction through fans and rewarding their efforts using the \"Proof of Influence™\" protocol.",
    task: [
      "Grow the community",
      "Increase user engagement and education",
      "Boost overall participation levels"
    ],
    challenges: [
      "Transforming a large group of disinterested users into active participants",
      "Educating users on blockchain and decentralized platform value"
    ],
    solution: "We developed a strategy focusing on creating educational content explaining platform benefits. Engagement increased through social media campaigns and active community management.",
    results: [
      "Significant growth in community activity",
      "Increased user base on the platform"
    ],
    images: ["/RAIINMAKER1.jpeg", "/RAIINMAKER2.jpeg", "/RAIINMAKER3.jpeg"]
  },
  "cpc": {
    icon: Gamepad,
    title: "Crypto Players Club",
    subtitle: "NFT-Oriented Sports Metaverse Project",
    description: "CPC aims to revolutionize football by creating a decentralized ecosystem for players, clubs, and fans worldwide. The project combines football games with a Play-to-Earn (P2E) platform, offering users a unique experience.",
    task: [
      "Develop an authentic and engaged community",
      "Increase user base and brand recognition",
      "Enhance user engagement"
    ],
    challenges: [
      "Difficulty standing out in the crowded sports NFT market",
      "Challenges in conveying the value of NFTs to football fans"
    ],
    solution: "We implemented PR campaigns focusing on targeted social media interaction. Events with opinion leaders drew attention from the crypto-football community.",
    results: [
      "Gained 8,700 Twitter followers in the first two months",
      "Achieved 371,000 profile visits across social media"
    ],
    images: ["/CPC1.jpeg", "/CPC2.jpeg", "/CPC3.jpeg"]
  },
  "script": {
    icon: Radio,
    title: "Script.TV",
    subtitle: "Media Platform",
    description: "Script.TV is a blockchain-based media platform aiming to revolutionize live TV consumption. With integrated GameFi and SocialFi elements, viewers can earn rewards for watching and engaging with content.",
    task: [
      "Increase user base",
      "Build an active community",
      "Sustain growth through social media"
    ],
    challenges: [
      "Difficulty attracting users organically",
      "Limited resources for marketing campaigns"
    ],
    solution: "We focused on creating quality content that explains platform value and attracts attention through educational and entertaining materials. The strategy included PR, community management, and interaction via Discord and Telegram.",
    results: [
      "Gained 24,000 platform subscribers",
      "Boosted Discord activity to 4,444 active members",
      "Attracted 400 platform users in the first months of the campaign"
    ],
    images: ["/SCRIPT.TV1.jpeg", "/SCRIPT.TV2.jpeg", "/SCRIPT.TV3.jpeg"]
  }
} as Record<string, CaseStudy>; 