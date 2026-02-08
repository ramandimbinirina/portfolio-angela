import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaPaperPlane, FaUser } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:angelaramandimbinirina@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
    }

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

    return (
        <section id="contact" className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Me Contacter</h2>
                    <p className="section-subtitle">
                        Un projet ou une opportunité ? Discutons-en.
                    </p>
                </div>

                <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                    <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {contactInfo.map((info, index) => (
                            <div key={index} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                <div style={{ color: 'var(--accent-from)', fontSize: '1.5rem' }}>{info.icon}</div>
                                <div>
                                    <h4 style={{ fontWeight: '700', marginBottom: '0.2rem' }}>{info.title}</h4>
                                    {info.link ? (
                                        <a href={info.link} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{info.value}</a>
                                    ) : (
                                        <p style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="card" onSubmit={handleSubmit} style={{ padding: '3rem' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Envoyer un message</h3>
                        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nom complet</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', background: '#f9fafb' }}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', background: '#f9fafb' }}
                                />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Sujet</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Sujet de votre message"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', background: '#f9fafb' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                name="message"
                                placeholder="Votre message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', background: '#f9fafb', resize: 'vertical' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            <FaPaperPlane style={{ marginRight: '0.5rem' }} /> Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
