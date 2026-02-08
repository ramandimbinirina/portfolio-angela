import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Accueil', href: '#hero' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Expériences', href: '#experience' },
        { name: 'Projets', href: '#projects' },
        { name: 'Parcours', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    Angela<span style={{ color: 'var(--accent-from)' }}>.Data</span>
                </a>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <div className="nav-links" style={{ gap: '1rem' }}>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-btn"
                        aria-label="Toggle Dark Mode"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            transition: 'background 0.3s',
                            marginRight: '0.5rem'
                        }}
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun style={{ color: '#fbbf24' }} />}
                    </button>

                    <a href="#contact" className="btn btn-primary" style={{ marginLeft: '1rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                        Me recruter
                    </a>
                </div>

                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Styles Injection for toggle */}
            <style>{`
        @media (max-width: 768px) {
          .menu-toggle { display: block !important; }
          .nav-menu {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            background: var(--card-bg);
            padding: 2rem;
            flex-direction: column;
            border-bottom: 1px solid var(--border-color);
            transform: translateY(-150%);
            transition: transform 0.3s ease, background 0.3s ease;
            box-shadow: var(--shadow-md);
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }
          .nav-menu.active { transform: translateY(0); }
          .nav-links { flex-direction: column; align-items: center; gap: 1.5rem; }
          .nav-menu .btn { margin-left: 0 !important; width: 100%; max-width: 200px; }
          .theme-toggle-btn { order: -1; }
        }
      `}</style>
        </nav>
    )
}

export default Navbar
