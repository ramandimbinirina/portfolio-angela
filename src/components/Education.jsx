import { useState, useRef, useEffect } from 'react'
import { FaGraduationCap, FaBook, FaAward, FaUniversity } from 'react-icons/fa'

const Education = () => {
    const educations = [
        {
            year: '2026',
            title: 'Master Recherche en IA',
            institution: 'Ecole Nationale d\'Informatique  Université de Fianarantsoa',
            mention: 'En cours',
            icon: <FaGraduationCap />,
            color: '#6366f1' // Indigo
        },
        {
            year: '2024 - 2025',
            title: 'Master II Professionnelle en Informatique',
            institution: 'Ecole Nationale d\'Informatique  Université de Fianarantsoa',
            mention: 'Parcours : Informatique Générale',
            icon: <FaUniversity />,
            color: '#06b6d4' // Cyan
        },
        {
            year: '2023 - 2024',
            title: 'Master I Professionnelle en Informatique',
            institution: 'Ecole Nationale d\'Informatique  Université de Fianarantsoa',
            mention: 'Parcours : Informatique Générale',
            icon: <FaUniversity />,
            color: '#06b6d4' // Cyan
        },
        {
            year: '2022 - 2023',
            title: 'Licence Professionnelle en Informatique',
            institution: 'Ecole Nationale d\'Informatique Université de Fianarantsoa',
            mention: 'Parcours : Informatique Générale - Mention BIEN',
            icon: <FaAward />,
            color: '#8b5cf6' // Violet
        },
        {
            year: '2018 - 2019',
            title: 'Baccalauréat Série D',
            institution: 'Lycée Saint Joseph de Cluny Tambohobe Fianarantsoa',
            mention: 'Mention ASSEZ-BIEN',
            icon: <FaBook />,
            color: '#10b981' // Emerald
        }
    ]

    const [activeCertTab, setActiveCertTab] = useState('all')

    const certifications = [
        {
            title: 'SQL Analytics & BI on Databricks',
            issuer: 'Databricks',
            date: 'Février 2026',
            image: '/certificates/cert-databricks-sql.png',
            link: 'https://simpli-web.app.link/e/A887dd5pz0b'
        },
        {
            title: 'Databricks for Data Engineering',
            issuer: 'Databricks',
            date: 'Février 2026',
            image: '/certificates/cert-databricks-de.png',
            link: 'https://simpli-web.app.link/e/mJXJ2AZqz0b'
        },
        {
            title: 'Exploring Data Transformation',
            issuer: 'Google Cloud',
            date: 'Février 2026',
            image: '/certificates/cert-google-data-transform.png',
            link: 'https://simpli-web.app.link/e/XfsIG0axz0b'
        },
        {
            title: 'AI Agents for Beginners',
            issuer: 'Simplilearn',
            date: 'Janvier 2026',
            image: '/certificates/cert-ai-agents.png',
            link: 'https://simpli-web.app.link/e/uFiYLl4qf0b'
        },
        {
            title: 'LLMs & LangChain Design',
            issuer: 'Simplilearn',
            date: 'Janvier 2026',
            image: '/certificates/cert-llms.png',
            link: 'https://simpli-web.app.link/e/bPV0kreAf0b'
        },
        {
            title: 'Multi-Modal LLMs',
            issuer: 'Simplilearn',
            date: 'Janvier 2026',
            image: '/certificates/cert-multimodal.png',
            link: 'https://simpli-web.app.link/e/UWXknlryy0b'
        }
    ]

    const filteredCertifications = activeCertTab === 'all'
        ? certifications
        : certifications.filter(c => c.issuer === activeCertTab)

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
    }, [activeCertTab])

    return (
        <section id="education" ref={sectionRef} className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header animate-on-scroll" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Formation Académique</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Mes diplômes et certifications
                    </p>
                </div>

                <div className="education-grid">
                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className="edu-card animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="edu-year-badge">{edu.year}</span>

                            <div className="edu-icon-bg" style={{ color: edu.color, background: `${edu.color}15`, marginBottom: '1.5rem' }}>
                                {edu.icon}
                            </div>

                            <h3 className="edu-title">{edu.title}</h3>
                            <div className="edu-institution">
                                {edu.institution}
                            </div>

                            {edu.mention && (
                                <span className="edu-grade" style={{ color: edu.color, background: `${edu.color}15` }}>
                                    {edu.mention}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '3rem' }}>
                    <h3 className="section-title" style={{ fontSize: '2rem' }}>Certifications & Badges</h3>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Validation de mes compétences en I.A. Avancée
                    </p>
                </div>

                <div className="tabs-container animate-on-scroll" style={{ marginBottom: '3rem', justifyContent: 'center', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {['all', 'Simplilearn', 'Databricks', 'Google Cloud'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeCertTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveCertTab(tab)}
                        >
                            {tab === 'all' ? 'Tous' : tab}
                        </button>
                    ))}
                </div>

                <div className="certifications-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    paddingBottom: '2rem'
                }}>
                    {filteredCertifications.map((cert, index) => (
                        <div key={index} className="cert-card animate-on-scroll" style={{
                            background: 'var(--card-bg)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            transition: 'transform 0.3s ease',
                            border: '1px solid var(--border-color)'
                        }}>
                            <div className="cert-image-wrapper" style={{ height: '180px', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
                                <img
                                    src={cert.image}
                                    alt={`Certificat ${cert.title}`}
                                    loading="lazy"
                                    width="300"
                                    height="180"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div className="cert-content" style={{ padding: '1.5rem' }}>
                                <div style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '700', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    {cert.issuer}
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cert.title}</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.date}</span>
                                    {cert.link !== '#' && (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}>
                                            Voir Certificat
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
