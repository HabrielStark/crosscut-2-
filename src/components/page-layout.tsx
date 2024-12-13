import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const navItems = [
  { name: 'Home', href: '/' },
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
  { name: 'About', href: '/about' },
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
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-5xl mx-auto flex items-center bg-white/90 dark:bg-[#000531]/90 backdrop-blur-xl rounded-2xl border border-[#3444D5]/10 dark:border-[#4A5FFF]/10 h-16 shadow-lg shadow-[#3444D5]/5 dark:shadow-[#4A5FFF]/5">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 h-full border-r border-[#3444D5]/10 dark:border-[#4A5FFF]/10 hover:bg-[#3444D5]/5 dark:hover:bg-[#4A5FFF]/5 transition-colors rounded-l-2xl group"
            >
              <img 
                src="/logocrosscult.png" 
                alt="CrossCult Logo" 
                className="h-7 w-auto group-hover:scale-110 transition-transform" 
              />
              <span className="font-medium text-lg bg-gradient-to-r from-[#3444D5] to-[#FE5431] bg-clip-text text-transparent">
                CrossCult
              </span>
            </Link>

            <nav className="hidden md:flex items-center flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="px-3 py-2 text-foreground/80 dark:text-white/70 hover:text-[#3444D5] dark:hover:text-[#4A5FFF] transition-colors group">
                      <span className="flex items-center gap-1">
                        {item.name}
                        <svg 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-foreground/80 dark:text-white/70 hover:text-[#3444D5] dark:hover:text-[#4A5FFF] transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute inset-x-2 -bottom-px h-px bg-[#3444D5] dark:bg-[#4A5FFF] scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                  )}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 py-2 bg-white dark:bg-[#000531] rounded-xl border border-[#3444D5]/10 dark:border-[#4A5FFF]/10 shadow-lg backdrop-blur-xl">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-2 text-foreground/70 dark:text-white/70 hover:text-[#3444D5] dark:hover:text-[#4A5FFF] hover:bg-[#3444D5]/5 dark:hover:bg-[#4A5FFF]/10 transition-all duration-200"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-0.5 px-3 h-full border-l border-[#3444D5]/10 dark:border-[#4A5FFF]/10">
              <button 
                onClick={toggleTheme}
                className="p-2 text-[#3444D5] dark:text-[#4A5FFF] hover:bg-[#3444D5]/5 dark:hover:bg-[#4A5FFF]/5 rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkTheme ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button 
                className="md:hidden p-2 text-[#3444D5] dark:text-[#4A5FFF] hover:bg-[#3444D5]/5 dark:hover:bg-[#4A5FFF]/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white/90 dark:bg-[#000531]/90 backdrop-blur-xl rounded-xl border border-[#3444D5]/10 dark:border-[#4A5FFF]/10 overflow-hidden shadow-lg shadow-[#3444D5]/5 dark:shadow-[#4A5FFF]/5">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <button
                      className="w-full text-left px-6 py-3 text-foreground/80 dark:text-white/70 hover:text-[#3444D5] dark:hover:text-[#4A5FFF] hover:bg-[#3444D5]/5 dark:hover:bg-[#4A5FFF]/5 transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <svg 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-6 py-3 text-foreground/80 dark:text-white/70 hover:text-[#3444D5] dark:hover:text-[#4A5FFF] hover:bg-[#3444D5]/5 dark:hover:bg-[#4A5FFF]/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="bg-[#3444D5]/5 dark:bg-[#4A5FFF]/5">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-8 py-3 text-foreground/70 dark:text-white/70 hover:text-[#3444D5] dark:hover:text-[#4A5FFF] transition-colors"
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