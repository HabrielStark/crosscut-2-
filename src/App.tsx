import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer'
import Home from './app/page'
import About from './app/about/page'
import Services from './app/services/page'
import Cases from './app/cases/page'
import Blog from './app/blog/page'
import BlogPost from './app/blog/[slug]/page'
import Career from './app/career/page'
import Contact from './app/contact/page'
import { ErrorBoundary } from './components/ErrorBoundary'
import { PageLayout } from './components/page-layout'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </PageLayout>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App