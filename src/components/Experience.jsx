import { useRef, useEffect } from 'react'
import { FaChalkboardTeacher, FaUserFriends, FaClipboardCheck, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa'

const Experience = () => {
    const experiences = [
        {
            date: 'Déc 2025',
            title: 'Formatrice en Analyse de Données',
            company: 'Université d\'Antsiranana',
            description: 'Formation en Analyse de données avec Power BI organisée par YAS Madagascar. Pédagogie active, création de supports de cours et accompagnement des étudiants sur des cas pratiques.',
            icon: <FaChalkboardTeacher />
        },
        {
            date: 'Sept 2025 - Jan 2026',
            title: 'Mentorat de Stagiaire Data',
            company: 'Freelance',
            description: 'Accompagnement de stagiaires en analyse de données, transmission de bonnes pratiques, revue de code et suivi de l\'avancement des projets personnels.',
            icon: <FaUserFriends />
        },
        {
            date: 'Oct 2024',
            title: 'Consultant - Recensement',
            company: 'Consortium OSIPD / GENKEY',
            description: 'Recensement des agents de l\'État pour le Ministère de la Santé Publique et de l\'Éducation Nationale, Région Haute Matsiatra. Collecte de données sur le terrain et vérification de la qualité.',
            icon: <FaClipboardCheck />
        },
        {
            date: 'Sept 2024',
            title: 'Projet Gestion des Heures',
            company: 'École Nationale d\'Informatique',
            description: 'Conception et réalisation d\'une application de gestion de décompte des heures supplémentaires des enseignants. Analyse des besoins, modélisation de la base de données et développement.',
            icon: <FaProjectDiagram />
        },
        {
            date: 'Août - Nov 2023',
            title: 'Développeur Web - Stage',
            company: 'Stage Académique',
            description: 'Développement d\'applications web et maintenance évolutive. Participation à l\'élaboration des interfaces utilisateurs et à l\'intégration des fonctionnalités backend.',
            icon: <FaLaptopCode />
        }
    ]

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

    return (
        <section id="experience" ref={sectionRef} className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-header animate-on-scroll" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Expériences Professionnelles</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Un parcours riche en projets et collaborations
                    </p>
                </div>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <div className="timeline-subtitle">
                                    <span style={{ color: 'var(--accent-from)' }}>{exp.icon}</span>
                                    {exp.company}
                                </div>
                                <p className="timeline-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
