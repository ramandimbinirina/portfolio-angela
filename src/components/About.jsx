import { useRef, useEffect } from 'react'
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaEnvelope, FaGlobe, FaUserTie, FaUsers, FaLightbulb } from 'react-icons/fa'

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const hiddenElements = sectionRef.current.querySelectorAll('.animate-on-scroll')
        hiddenElements.forEach((el) => observer.observe(el))

        return () => hiddenElements.forEach((el) => observer.unobserve(el))
    }, [])

    const infoItems = [
        { icon: <FaMapMarkerAlt />, label: 'Localisation', value: 'Antananarivo, Madagascar' },
        { icon: <FaGraduationCap />, label: 'Formation', value: 'Master Recherche en IA' },
        { icon: <FaBriefcase />, label: 'Statut', value: 'Active sur le marché' },
        { icon: <FaEnvelope />, label: 'Email', value: 'angelaramandimbinirina@gmail.com' },
    ]

    const languages = [
        { code: 'MG', name: 'Malagasy', level: 'Natif' },
        { code: 'FR', name: 'Français', level: 'Courant' },
        { code: 'EN', name: 'Anglais', level: 'Intermédiaire' },
    ]

    const softSkills = [
        { name: 'Communication', icon: <FaUsers /> },
        { name: 'Travail en équipe', icon: <FaUsers /> },
        { name: 'Organisation', icon: <FaLightbulb /> },
        { name: 'Réactivité', icon: <FaLightbulb /> },
    ]

    return (
        <section id="about" ref={sectionRef} className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">À Propos de Moi</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Mon parcours et ma vision
                    </p>
                </div>

                <div className="about-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
                    <div className="about-image-wrapper animate-on-scroll">
                        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                background: 'var(--accent-gradient)',
                                margin: '0 auto 1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <FaUserTie size={60} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Angela Ramandimbinirina</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Chercheur en Intelligence Artificielle</p>

                            <div className="about-experience-badge" style={{
                                marginTop: '1.5rem',
                                background: 'var(--bg-tertiary)',
                                padding: '1rem',
                                borderRadius: '1rem'
                            }}>
                                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-from)' }}>1+</span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Années d'expérience</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
                            Concevoir l'Avenir avec <span className="text-gradient">l'Intelligence Artificielle et la DATA</span>
                        </h3>

                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Je suis <strong>Marie Angela Ramandimbinirina</strong>, Chercheur en Intelligence Artificielle.
                            Au-delà de l'ingénierie des données, je me consacre à la recherche avancée en IA, explorant les modèles génératifs, les agents autonomes et l'optimisation des flux de données pour résoudre des problèmes complexes.
                        </p>

                        <div className="about-info" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            {infoItems.map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ color: 'var(--accent-from)', fontSize: '1.2rem' }}>{item.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.value}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{item.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Soft Skills</h4>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {softSkills.map((skill, index) => (
                                    <span key={index} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: '9999px',
                                        border: '1px solid var(--border-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontWeight: '500'
                                    }}>
                                        <span style={{ color: 'var(--accent-from)' }}>{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Langues</h4>
                            <div className="languages-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {languages.map((lang, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <FaGlobe style={{ color: 'var(--text-light)' }} />
                                        <span style={{ fontWeight: '600' }}>{lang.name}</span>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
