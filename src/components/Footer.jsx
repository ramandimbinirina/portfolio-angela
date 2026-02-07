import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: '3rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                            Angela<span style={{ color: 'var(--accent-from)' }}>.Data</span>
                        </h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Data Analyst & Engineer — Antananarivo, MG
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://www.facebook.com/angelah.ramandimbisoa.1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }}><FaFacebook /></a>
                        <a href="https://x.com/AngelaR9925" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }}><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/marie-angela-ramandimbinirina-4959b4230/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }}><FaLinkedin /></a>
                        <a href="https://github.com/ramandimbinirina" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }}><FaGithub /></a>
                        <a href="mailto:angelaramandimbinirina@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }}><FaEnvelope /></a>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                    <p>
                        © {currentYear} Angela Ramandimbinirina
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
