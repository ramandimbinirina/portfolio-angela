import { useState, useEffect, useRef } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef(null)

    const testimonials = [
        {
            id: 1,
            name: "Jean Dupont",
            role: "Directeur Technique, TechCorp",
            content: "Angela a réalisé un travail exceptionnel sur l'automatisation de nos pipelines de données. Sa maîtrise de Python et SQL nous a permis de gagner un temps précieux et d'améliorer la fiabilité de nos reporting.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Martin",
            role: "Responsable Marketing, DataViz Inc",
            content: "J'ai été impressionnée par la qualité des tableaux de bord Power BI créés par Angela. Ils sont non seulement esthétiques mais surtout très pertinents pour notre prise de décision stratégique.",
            rating: 5
        },
        {
            id: 3,
            name: "Marc Rakoto",
            role: "Chef de Projet, SoftMad",
            content: "Une collaboration fluide et professionnelle. Angela comprend rapidement les enjeux business et propose des solutions techniques adaptées. Je recommande vivement pour tout projet Data.",
            rating: 5
        }
    ]

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [])

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
        <section id="testimonials" ref={sectionRef} className="section animate-on-scroll" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Ce qu'ils disent</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Retours d'expériences de mes collaborateurs
                    </p>
                </div>

                <div className="testimonials-slider" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="slider-btn prev"
                        aria-label="Précédent"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="slider-btn next"
                        aria-label="Suivant"
                    >
                        <FaChevronRight />
                    </button>

                    <div className="testimonial-card-wrapper" style={{ overflow: 'hidden' }}>
                        <div
                            className="testimonial-track"
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`,
                                transition: 'transform 0.5s ease-in-out',
                                display: 'flex'
                            }}
                        >
                            {testimonials.map((item) => (
                                <div key={item.id} className="testimonial-slide" style={{ minWidth: '100%', padding: '1rem' }}>
                                    <div className="testimonial-card">
                                        <div className="quote-icon">
                                            <FaQuoteLeft />
                                        </div>
                                        <p className="testimonial-content">"{item.content}"</p>
                                        <div className="testimonial-rating">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <FaStar key={i} className="star-icon" />
                                            ))}
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-avatar-placeholder">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div className="author-info">
                                                <h4>{item.name}</h4>
                                                <span>{item.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="slider-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Aller au témoignage ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: var(--bg-primary);
                    border: 1px solid var(--border-color);
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10;
                    transition: all 0.3s ease;
                    color: var(--text-primary);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                }

                .slider-btn:hover {
                    background: var(--accent-from);
                    color: white;
                    border-color: transparent;
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
                }

                .slider-btn.prev { left: -60px; }
                .slider-btn.next { right: -60px; }

                .testimonial-card-wrapper {
                    padding: 20px 0; /* Space for shadow */
                }

                .testimonial-card {
                    background: var(--card-bg);
                    padding: 4rem 3rem 3rem;
                    border-radius: 2rem;
                    text-align: center;
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
                    border: 1px solid var(--border-color);
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }

                /* Decorative Quote Mark */
                .quote-icon {
                    position: absolute;
                    top: 1rem;
                    left: 2rem;
                    font-size: 6rem;
                    color: var(--accent-from);
                    opacity: 0.1;
                    line-height: 1;
                    pointer-events: none;
                }

                .testimonial-content {
                    font-size: 1.25rem;
                    line-height: 1.6;
                    color: var(--text-primary);
                    margin-bottom: 2.5rem;
                    font-style: italic;
                    position: relative;
                    z-index: 1;
                    font-weight: 500;
                }

                .testimonial-rating {
                    display: flex;
                    justify-content: center;
                    gap: 0.3rem;
                    margin-bottom: 2rem;
                    background: var(--bg-secondary);
                    display: inline-flex;
                    padding: 0.5rem 1rem;
                    border-radius: 99px;
                }

                .star-icon {
                    color: #fbbf24; /* Amber-400 */
                    font-size: 1.1rem;
                }

                .testimonial-author {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    text-align: left;
                }

                .author-avatar-placeholder {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: var(--accent-gradient);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1.5rem;
                    border: 4px solid var(--bg-primary);
                    box-shadow: 0 0 0 2px var(--accent-from);
                }

                .author-info h4 {
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 0.2rem;
                }

                .author-info span {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                    display: block;
                }

                .slider-dots {
                    display: flex;
                    justify-content: center;
                    gap: 0.8rem;
                    margin-top: 3rem;
                }

                .slider-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--border-color);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .slider-dot.active {
                    background: var(--accent-from);
                    transform: scale(1.3);
                    box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
                }

                @media (max-width: 768px) {
                    .slider-btn { display: none; }
                    .testimonial-card { padding: 3rem 1.5rem 2rem; }
                    .testimonial-content { font-size: 1.1rem; }
                    .testimonial-author { flex-direction: column; text-align: center; gap: 1rem; }
                    .quote-icon { font-size: 4rem; left: 1rem; top: 0.5rem; }
                    .slider-btn.prev, .slider-btn.next { display: none; }
                }
            `}</style>
        </section>
    )
}

export default Testimonials
