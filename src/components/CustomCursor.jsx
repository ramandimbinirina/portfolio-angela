import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
    const cursorDotRef = useRef(null)
    const cursorOutlineRef = useRef(null)
    const requestRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const outlinePosRef = useRef({ x: 0, y: 0 })

    // State
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(true) // Default to true to prevent flash

    useEffect(() => {
        // Detect mobile
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera
            return /android|ipad|iphone|ipod/i.test(userAgent) || (window.innerWidth <= 768)
        }

        const mobile = checkMobile()
        setIsMobile(mobile)

        if (mobile) return

        const onMouseMove = (event) => {
            mouseRef.current = { x: event.clientX, y: event.clientY }
            if (!isVisible) setIsVisible(true)

            // Move dot instantly
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
            }
        }

        const animateOutline = () => {
            const targetX = mouseRef.current.x
            const targetY = mouseRef.current.y
            const currentX = outlinePosRef.current.x
            const currentY = outlinePosRef.current.y

            // Smooth lerp
            const speed = 0.15
            const newX = currentX + (targetX - currentX) * speed
            const newY = currentY + (targetY - currentY) * speed

            outlinePosRef.current = { x: newX, y: newY }

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`
            }

            requestRef.current = requestAnimationFrame(animateOutline)
        }

        const handleMouseOver = (e) => {
            const target = e.target
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('card') ||
                target.classList.contains('project-card-modern') ||
                window.getComputedStyle(target).cursor === 'pointer'

            setIsHovering(isInteractive)
        }

        window.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseover', handleMouseOver)
        requestRef.current = requestAnimationFrame(animateOutline)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [isVisible])

    if (isMobile) return null

    return (
        <>
            <div
                ref={cursorDotRef}
                className="cursor-dot"
                style={{ opacity: isVisible ? 1 : 0 }}
            />
            <div
                ref={cursorOutlineRef}
                className={`cursor-outline ${isHovering ? 'hover' : ''}`}
                style={{ opacity: isVisible ? 1 : 0 }}
            />
            <style>{`
                body {
                    cursor: none;
                }

                a, button, input, textarea, .card {
                    cursor: none !important;
                }

                .cursor-dot {
                    width: 8px;
                    height: 8px;
                    background-color: var(--accent-from, #6366f1);
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 9999;
                    margin-left: -4px;
                    margin-top: -4px;
                    will-change: transform;
                }

                .cursor-outline {
                    width: 40px;
                    height: 40px;
                    border: 2px solid var(--accent-from, #6366f1);
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 9998;
                    margin-left: -20px;
                    margin-top: -20px;
                    transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
                    will-change: transform;
                }

                .cursor-outline.hover {
                    width: 70px;
                    height: 70px;
                    background-color: rgba(99, 102, 241, 0.15);
                    border-color: transparent;
                    margin-left: -35px;
                    margin-top: -35px;
                }
                
                @media (max-width: 768px) {
                    body {
                        cursor: auto;
                    }
                    .cursor-dot, .cursor-outline {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    )
}

export default CustomCursor
