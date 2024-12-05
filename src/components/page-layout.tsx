import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Industries', 
    href: '#',
    dropdown: [
      'Product',
      'Blockchain',
      'WEB3',
      'WEB2',
      'FinTech',
      'EdTech',
      'Gaming',
      'B2B',
      'B2C'
    ]
  },
  { name: 'Services', href: '/services' },
  { name: 'Cases', href: '/cases' },
  { name: 'Blog', href: '/blog' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' }
]

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border dark:border-[#4A5FFF]/20 bg-background/95 dark:bg-[#000531]/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#000531]/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary dark:text-[#4A5FFF] font-bold text-2xl hover:opacity-90 transition-opacity">
              <img src="/logocrosscult.png" alt="CrossCult Logo" className="h-8 w-auto" />
              CrossCult
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="text-foreground/80 dark:text-white/70 hover:text-foreground dark:hover:text-white transition-colors">
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-foreground/80 dark:text-white/70 hover:text-foreground dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-56 py-2 bg-background dark:bg-[#000531] border border-border dark:border-[#4A5FFF]/20 rounded-lg shadow-lg dark:shadow-[#4A5FFF]/5">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-2 text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white hover:bg-primary/5 dark:hover:bg-[#4A5FFF]/10 transition-colors"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-primary/10 dark:bg-[#4A5FFF]/10 hover:bg-primary/20 dark:hover:bg-[#4A5FFF]/20 transition-colors"
              >
                {isDarkTheme ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary dark:text-[#4A5FFF]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" 
                    />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary dark:text-[#4A5FFF]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                    />
                  </svg>
                )}
              </button>

              <button 
                className="md:hidden p-2 text-foreground dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border dark:border-[#4A5FFF]/20">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <button
                      className="block w-full text-left py-2 text-foreground/80 dark:text-white/70 hover:text-foreground dark:hover:text-white"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <span className="float-right">
                        {activeDropdown === item.name ? '−' : '+'}
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 text-foreground/80 dark:text-white/70 hover:text-foreground dark:hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4 py-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block py-2 text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="pt-32 pb-16 dark:bg-[#000531]">
        {title && (
          <div className="text-center mb-20 px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-foreground/70 dark:text-white/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </main>
    </div>
  )
} 