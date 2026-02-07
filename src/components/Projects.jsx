import { useState, useEffect, useRef } from 'react'
import { FaArrowRight, FaChartLine, FaServer, FaCode, FaNetworkWired, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all')
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
    }, [activeTab]) // Re-run when tab changes to animate new items

    const projects = [
        {
            id: 1,
            category: 'data-engineer',
            title: 'Automatisation & Orchestration Pipelines Data',
            description: 'Conception et déploiement d\'une infrastructure ETL/ELT automatisée. Orchestration avec Dagster et dbt, MLOps avec MLflow, Gouvernance avec OpenMetadata.',
            tech: ['Dagster', 'dbt', 'ClickHouse', 'PostgreSQL', 'MinIO', 'Python'],
            icon: <FaNetworkWired />
        },
        {
            id: 2,
            category: 'data-analyst',
            title: 'Formation Power BI & Dashboards',
            description: 'Formation professionnelle en Analyse de données. Création de tableaux de bord interactifs et visualisations avancées pour la prise de décision stratégique.',
            tech: ['Power BI', 'DAX', 'Power Query', 'Excel'],
            icon: <FaChartLine />
        },
        {
            id: 3,
            category: 'data-analyst',
            title: 'Data Warehouse - Analyse des Ventes',
            description: 'Conception d\'un Data Warehouse complet avec simulation et analyse des données de ventes d\'un système décisionnel pour une grande distribution.',
            tech: ['SQL', 'ETL', 'Data Warehouse', 'BI', 'Talend'],
            icon: <FaServer />
        },
        {
            id: 4,
            category: 'sys-admin',
            title: 'Infrastructure Docker & Kubernetes',
            description: 'Mise en place d\'une infrastructure conteneurisée et orchestration via Kubernetes pour applications scalables et haute disponibilité.',
            tech: ['Docker', 'Kubernetes', 'Linux', 'DevOps', 'CI/CD'],
            icon: <FaServer />
        },
        {
            id: 5,
            category: 'sys-admin',
            title: 'Cloud Privé NextCloud',
            description: 'Configuration et déploiement d\'un serveur de stockage cloud privé NextCloud pour la DSI Université de Fianarantsoa.',
            tech: ['NextCloud', 'Admin Sys', 'Réseaux', 'Sécurité'],
            icon: <FaNetworkWired />
        },
        {
            id: 6,
            category: 'web-dev',
            title: 'Refonte Plateforme Orientation',
            description: 'Développement full-stack de la nouvelle plateforme de test d\'orientation scolaire chez OBJECT-IF Antananarivo. Interface intuitive et performante.',
            tech: ['Angular', 'TypeScript', 'Node.js', 'MySQL'],
            icon: <FaCode />
        }
    ]

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab)

    return (
        <section id="projects" ref={sectionRef} className="section bg-gray-50">
            <div className="container">
                <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Mes Projets</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
                        Une sélection de mes travaux récents en Data et Développement, démontrant mon expertise technique et ma capacité à livrer des solutions concrètes.
                    </p>
                </div>

                {/* Filters */}
                <div className="tabs-container animate-on-scroll" style={{ marginBottom: '3.5rem' }}>
                    {['all', 'data-analyst', 'data-engineer', 'web-dev', 'sys-admin'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'all' ? 'Tous' : tab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card-modern animate-on-scroll"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="project-card-header">
                                <div className="project-icon-wrapper">
                                    {project.icon}
                                </div>
                                <button className="project-link-btn" aria-label="Voir le projet">
                                    <FaExternalLinkAlt />
                                </button>
                            </div>

                            <div className="project-card-body">
                                <span className="project-category-badge">
                                    {project.category.replace('-', ' ')}
                                </span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tech.map((tag, idx) => (
                                        <span key={idx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
