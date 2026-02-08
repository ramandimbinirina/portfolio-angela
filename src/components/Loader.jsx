import { useState, useEffect } from 'react'

const Loader = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        // Minimum loading time for visual effect
        const minLoadTime = setTimeout(() => {
            setFadeOut(true)

            // Wait for fade animation to complete
            setTimeout(() => {
                setIsLoading(false)
                onLoadingComplete?.()
            }, 500)
        }, 1500)

        return () => clearTimeout(minLoadTime)
    }, [onLoadingComplete])

    if (!isLoading) return null

    return (
        <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <span className="logo-text">Angela</span>
                    <span className="logo-accent">.Data</span>
                </div>
                <div className="loader-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
                <p className="loader-text">Chargement...</p>
            </div>

            <style>{`
                .loader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    transition: opacity 0.5s ease, visibility 0.5s ease;
                }

                .loader-container.fade-out {
                    opacity: 0;
                    visibility: hidden;
                }

                .loader-content {
                    text-align: center;
                }

                .loader-logo {
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    animation: pulse 2s ease-in-out infinite;
                }

                .logo-text {
                    color: white;
                }

                .logo-accent {
                    background: linear-gradient(135deg, #6366f1, #06b6d4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .loader-spinner {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 1.5rem;
                }

                .spinner-ring {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 3px solid transparent;
                }

                .spinner-ring:nth-child(1) {
                    border-top-color: #6366f1;
                    animation: spin 1.2s linear infinite;
                }

                .spinner-ring:nth-child(2) {
                    border-right-color: #8b5cf6;
                    animation: spin 1.5s linear infinite reverse;
                }

                .spinner-ring:nth-child(3) {
                    border-bottom-color: #06b6d4;
                    animation: spin 2s linear infinite;
                }

                .loader-text {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
            `}</style>
        </div>
    )
}

export default Loader
