import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Education from './components/Education'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './styles/components.css'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <ThemeProvider>
            {!isLoading && <CustomCursor />}
            {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
            <div className={`app ${isLoading ? 'loading' : ''}`}>
                <Navbar />
                <main>
                    <Hero />
                    <Stats />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Education />
                    <BlogPreview />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </ThemeProvider>
    )
}

export default App
