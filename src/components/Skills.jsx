import { FaChartBar, FaCogs, FaCode, FaRobot, FaShieldAlt, FaServer, FaPencilRuler } from 'react-icons/fa'

const Skills = () => {
    const skillCategories = [
        {
            icon: <FaChartBar />,
            title: 'Data Analysis & BI',
            skills: ['Pandas', 'NumPy', 'PyArrow', 'Power BI', 'Excel', 'DAX', 'Power Query', 'Python', 'KPI Dashboards']
        },
        {
            icon: <FaCogs />,
            title: 'Data Engineering',
            skills: ['Dagster', 'dbt', 'Airflow', 'SQL', 'PostgreSQL', 'MySQL', 'ClickHouse', 'ETL/ELT']
        },
        {
            icon: <FaCode />,
            title: 'Full Stack Dev',
            skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'FastAPI', 'Flask', 'Node.js', 'Express.js']
        },
        {
            icon: <FaRobot />,
            title: 'MLOps & AI',
            skills: ['MLflow', 'n8n', 'CI/CD', 'Model Tracking', 'Monitoring', 'Automation']
        },
        {
            icon: <FaShieldAlt />,
            title: 'Gouvernance',
            skills: ['OpenMetadata', 'Directus', 'Data Warehousing', 'Metadata Management']
        },
        {
            icon: <FaServer />,
            title: 'Cloud & DevOps',
            skills: ['Docker', 'Kubernetes', 'MinIO', 'Git', 'GitHub', 'Linux', 'Ubuntu Server']
        },
        {
            icon: <FaPencilRuler />,
            title: 'Design',
            skills: ['Figma', 'Canva', 'UX/UI Design', 'Agile/Scrum', 'UML']
        }
    ]

    return (
        <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Mes Compétences</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Un éventail complet de technologies pour la data science et le développement
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category-card">
                            <div className="skill-header">
                                <div className="skill-icon-box">
                                    {category.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{category.title}</h3>
                            </div>
                            <div className="skill-pills">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
