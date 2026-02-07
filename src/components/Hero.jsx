import { useState, useEffect } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Hero = () => {
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const fullText1 = "Je suis Angela,"
    const fullText2 = "Data Engineer & Analyst"

    useEffect(() => {
        let i = 0
        let j = 0
        const speed = 50

        const typeText1 = () => {
            if (i < fullText1.length) {
                setText1(fullText1.substring(0, i + 1))
                i++
                setTimeout(typeText1, speed)
            } else {
                setTimeout(typeText2, 300) // Pause before second line
            }
        }

        const typeText2 = () => {
            if (j < fullText2.length) {
                setText2(fullText2.substring(0, j + 1))
                j++
                setTimeout(typeText2, speed)
            }
        }

        typeText1()
    }, [])

    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-greeting-badge">
                        <span>👋</span> Bienvenue sur mon portfolio
                    </div>

                    <h1 className="hero-title">
                        {text1}<span className="cursor-blink">|</span><br />
                        <span className="text-gradient">{text2}</span>
                    </h1>

                    <p className="hero-description">
                        Je transforme des données complexes en solutions stratégiques.
                        Spécialisée en <strong>Business Intelligence</strong>, <strong>Data Engineering</strong>
                        et développement d'applications conteneurisées.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary">
                            <BiEnvelope style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} /> Me Contacter
                        </a>
                        <a href="https://drive.google.com/drive/folders/1fXufsg4mcf9cQKFmJvzQZ8XPwec4EVUH" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <HiDownload style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} /> Télécharger CV
                        </a>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Me suivre sur :</span>
                        <a href="https://www.facebook.com/angelah.ramandimbisoa.1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                            <FaFacebook />
                        </a>
                        <a href="https://x.com/AngelaR9925" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/marie-angela-ramandimbinirina-4959b4230/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/ramandimbinirina" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper-new">
                    <div className="hero-image-glow"></div>
                    <div className="hero-image-circle">
                        <img
                            src="/profile.jpg"
                            alt="Angela Ramandimbinirina"
                            className="hero-image-img"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://ui-avatars.com/api/?name=Angela+Ramandimbinirina&background=random&size=400"
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
