'use client'

import { useState, useEffect } from 'react'

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-linear-accent z-50 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  )
}
