'use client'

import { useState, useEffect, useRef } from 'react'

export function AnimatedCounter({ end = 100, duration = 2000, label = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let animationFrame
    let startTime

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime

      if (elapsed < duration) {
        const progress = elapsed / duration
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, end, duration])

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}
        {suffix}
      </div>
      {label && <p className="text-gray-600">{label}</p>}
    </div>
  )
}
