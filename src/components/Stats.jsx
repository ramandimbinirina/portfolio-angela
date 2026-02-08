import { useState, useEffect, useRef } from 'react'
import { FaProjectDiagram, FaCode, FaBriefcase, FaCoffee } from 'react-icons/fa'

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    const stats = [
        { icon: <FaProjectDiagram />, value: 15, label: 'Projets Réalisés', suffix: '+' },
        { icon: <FaCode />, value: 25, label: 'Technologies', suffix: '+' },
        { icon: <FaBriefcase />, value: 1, label: 'Années d\'Expérience', suffix: '+' },
        { icon: <FaCoffee />, value: 500, label: 'Cafés Bus', suffix: '+' }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">
                                <CountUp
                                    end={stat.value}
                                    isVisible={isVisible}
                                    duration={2000}
                                />
                                <span>{stat.suffix}</span>
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Counter animation component
const CountUp = ({ end, isVisible, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isVisible) return

        let startTime
        let animationFrame

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isVisible, end, duration])

    return <span>{count}</span>
}

export default Stats
