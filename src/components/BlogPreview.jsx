import { useRef, useEffect } from 'react'
import { FaArrowRight, FaCalendarAlt, FaTag } from 'react-icons/fa'

const BlogPreview = () => {
    const sectionRef = useRef(null)

    const articles = [
        {
            id: 1,
            title: "Introduction aux LLMs et RAG",
            excerpt: "Comprendre comment les modèles de langage et la génération augmentée par récupération transforment l'accès à l'information d'entreprise.",
            date: "15 Janvier 2026",
            tag: "Intelligence Artificielle",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
            readTime: "15 min de lecture",
            link: "https://arxiv.org/abs/2312.10997" // Retrieval-Augmented Generation for LLMs: A Survey
        },
        {
            id: 2,
            title: "Optimiser vos pipelines ETL avec Python",
            excerpt: "Les meilleures pratiques pour construire des pipelines de données robustes, scalables et maintenables avec l'écosystème Python moderne.",
            date: "10 Décembre 2025",
            tag: "Data Engineering",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            readTime: "10 min de lecture",
            link: "https://constellation.uqac.ca/id/eprint/9278/"
        },
        {
            id: 3,
            title: "Data Visualization Avancée sous Power BI",
            excerpt: "Aller au-delà des graphiques standards pour raconter une histoire impactante avec vos données. Techniques de storytelling.",
            date: "28 Novembre 2025",
            tag: "Business Intelligence",
            image: "https://cdn.prod.website-files.com/62233c592d2a1e009d42f46c/66350069e7fe7ca1a19a272a_62b9d26c00765123e0f741ad_toutsavoir-mlops.webp",
            readTime: "8 min de lecture",
            link: "https://powerbi.microsoft.com/en-us/data-storytelling/"
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="blog" ref={sectionRef} className="section animate-on-scroll">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Articles Récents</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Partage de connaissances et veille technologique
                    </p>
                </div>

                <div className="blog-grid">
                    {articles.map((article, index) => (
                        <article key={article.id} className="blog-card" style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="blog-image-wrapper">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    loading="lazy"
                                    className="blog-image"
                                />
                                <span className="blog-tag">{article.tag}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span><FaCalendarAlt /> {article.date}</span>
                                    <span>{article.readTime}</span>
                                </div>
                                <h3 className="blog-title">{article.title}</h3>
                                <p className="blog-excerpt">{article.excerpt}</p>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="blog-link"
                                >
                                    Lire l'article <FaArrowRight />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                }

                .blog-card {
                    background: var(--card-bg);
                    border-radius: 1.5rem;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid var(--border-color);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }

                .blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    border-color: var(--accent-from);
                }

                .blog-image-wrapper {
                    height: 220px;
                    overflow: hidden;
                    position: relative;
                }

                .blog-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .blog-card:hover .blog-image {
                    transform: scale(1.05);
                }

                .blog-tag {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(4px);
                    padding: 0.4rem 1rem;
                    border-radius: 2rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--accent-text);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }
                
                [data-theme='dark'] .blog-tag {
                    background: rgba(30, 41, 59, 0.9);
                    color: white;
                }

                .blog-content {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .blog-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin-bottom: 1rem;
                }

                .blog-meta span {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .blog-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                    line-height: 1.4;
                }

                .blog-excerpt {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }

                .blog-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--accent-from);
                    font-weight: 600;
                    text-decoration: none;
                    transition: gap 0.3s ease;
                }

                .blog-link:hover {
                    gap: 0.8rem;
                }
            `}</style>
        </section>
    )
}

export default BlogPreview
