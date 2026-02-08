import { useState, useRef } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa'

// Note: Pour activer EmailJS, installez: npm install @emailjs/browser
// puis configurez vos clés et décommentez le code dans handleSubmit

const Contact = () => {
    const formRef = useRef()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    })

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'angelaramandimbinirina@gmail.com',
            link: 'mailto:angelaramandimbinirina@gmail.com'
        },
        {
            icon: <FaPhoneAlt />,
            title: 'Téléphone',
            value: '+261 34 57 384 58',
            link: 'tel:+261345738458'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Localisation',
            value: 'Antananarivo, Madagascar',
            link: null
        }
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear any previous status when user starts typing
        if (status.error || status.success) {
            setStatus({ loading: false, success: false, error: false, message: '' })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey || serviceId === 'votre_service_id') {
            console.warn('EmailJS Configuration Missing:', { serviceId, templateId, publicKey })
            // Fallback to mailto if EmailJS not configured
            const mailtoLink = `mailto:angelaramandimbinirina@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
            window.location.href = mailtoLink
            setStatus({
                loading: false,
                success: true,
                error: false,
                message: 'Redirection vers votre client email... (Configuration EmailJS incomplète, vérifiez la console)'
            })
            // Reset after delay
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false, message: '' })
            }, 5000)
            return
        }

        console.log('Sending EmailJS with:', { serviceId, templateId, publicKey: '***' }) // Debug log

        setStatus({ loading: true, success: false, error: false, message: '' })

        try {
            // Dynamic import of EmailJS
            const emailjs = await import('@emailjs/browser')

            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            )

            console.log('EmailJS Success')
            setStatus({
                loading: false,
                success: true,
                error: false,
                message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
            })

            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus({ loading: false, success: false, error: false, message: '' })
            }, 5000)

        } catch (error) {
            console.error('EmailJS Failed:', error)
            const errorMsg = error.text || error.message || 'Erreur inconnue'
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: `Erreur lors de l'envoi (${errorMsg}). Vérifiez vos clés API.`
            })
        }
    }

    const inputStyle = {
        width: '100%',
        padding: '0.75rem 1rem',
        borderRadius: '0.75rem',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none'
    }

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Me Contacter</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Un projet ou une opportunité ? Discutons-en.
                    </p>
                </div>

                <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                    <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {contactInfo.map((info, index) => (
                            <div key={index} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                <div style={{
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    width: '45px',
                                    height: '45px',
                                    background: 'var(--accent-gradient)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '700', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{info.title}</h4>
                                    {info.link ? (
                                        <a href={info.link} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{info.value}</a>
                                    ) : (
                                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form ref={formRef} className="card" onSubmit={handleSubmit} style={{ padding: '2.5rem' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                            Envoyer un message
                        </h3>

                        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                Sujet
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Sujet de votre message"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Votre message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                            />
                        </div>

                        {/* Status Messages */}
                        {status.success && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                border: '1px solid rgba(16, 185, 129, 0.3)',
                                color: '#10b981',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <FaCheck />
                                {status.message}
                            </div>
                        )}

                        {status.error && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                color: '#ef4444',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <FaExclamationTriangle />
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status.loading}
                            style={{
                                width: '100%',
                                opacity: status.loading ? 0.7 : 1,
                                cursor: status.loading ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {status.loading ? (
                                <>
                                    <span className="loading-spinner" style={{
                                        width: '20px',
                                        height: '20px',
                                        border: '2px solid rgba(255,255,255,0.3)',
                                        borderTop: '2px solid white',
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite',
                                        marginRight: '0.5rem'
                                    }} />
                                    Envoi en cours...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                                    Envoyer le message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Loading spinner animation */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                input:focus, textarea:focus {
                    border-color: var(--accent-from) !important;
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                }
            `}</style>
        </section>
    )
}

export default Contact
